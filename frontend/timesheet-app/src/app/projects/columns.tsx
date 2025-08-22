'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Ellipsis, PencilLine, Trash2 } from 'lucide-react';

export type Project = {
  id: string;
  name: string;
  client: string;
  billingMethod: 'retainer' | 'hourly';
  billingAmount: number;
};

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'client',
    header: 'Client',
  },
  {
    accessorKey: 'billingMethod',
    header: 'Billing method',
    cell: ({ row }) => {
      if (row.original.billingMethod === 'retainer') {
        return <Badge variant="neutral1">Retainer</Badge>;
      } else if (row.original.billingMethod === 'hourly') {
        return <Badge variant="neutral2">Hourly</Badge>;
      } else {
        return null;
      }
    },
  },
  {
    accessorKey: 'billingAmount',
    header: 'Billing amount',
    cell: ({ row }) => {
      return row.original.billingAmount.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
      });
    },
  },
  {
    accessorKey: 'actions',
    header: '',
    cell: ({ row }) => {
      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Ellipsis />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <PencilLine />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <Trash2 />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
