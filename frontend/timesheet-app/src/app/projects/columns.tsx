'use client';

import { ColumnDef } from '@tanstack/react-table';
import {
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetContent,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ProjectForm } from './project-form';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { PencilLine, Trash2 } from 'lucide-react';

function deleteProject(id: string) {
  console.log(`DELETE PROJECT id=${id}`);
}

export type Project = {
  id: string;
  name: string;
  client: string;
  billingMethod: 'Retainer' | 'Hourly';
  billingAmount: number;
};

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: 'name',
    header: 'Project name',
  },
  {
    accessorKey: 'client',
    header: 'Client',
  },
  {
    accessorKey: 'billingMethod',
    header: 'Billing method',
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <PencilLine />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit {row.original.name}</SheetTitle>
                <SheetDescription>
                  Changes will be applied to new timesheet entries. Existing
                  entries will not be affected.
                </SheetDescription>
              </SheetHeader>
              <ProjectForm id={row.original.id} />
            </SheetContent>
          </Sheet>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Trash2 />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete project "{row.original.name}".
                  Existing timesheet entries and invoices will not be deleted
                  but you will not be able to create new ones.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    deleteProject(row.original.id);
                  }}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
