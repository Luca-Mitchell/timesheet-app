'use client';

import React from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';
import {
  Layers,
  CalendarClock,
  HandCoins,
  UserRoundPen,
  LogOut,
} from 'lucide-react';

const groups = [
  {
    title: 'Workspace',
    items: [
      {
        title: 'Projects',
        url: '/projects',
        icon: Layers,
      },
      {
        title: 'Timesheet',
        url: '/timesheet',
        icon: CalendarClock,
      },
      {
        title: 'Invoices',
        url: '/invoices',
        icon: HandCoins,
      },
    ],
  },
  {
    title: 'User',
    items: [
      {
        title: 'Account',
        url: '#',
        icon: UserRoundPen,
      },
      {
        title: 'Log out',
        url: '#',
        icon: LogOut,
      },
    ],
  },
];

function MainLayout<TData, TValue>({
  title,
  action,
  children,
  columns,
  data,
}: {
  title: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarContent>
          {groups.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
      <div className="w-full">
        <div className="p-4 flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-center">
            <SidebarTrigger />
            <Separator orientation="vertical" />
            <div className="pl-1">{title}</div>
          </div>
          {action}
        </div>
        <Separator />
        {children && (
          <div>
            <div className="p-4">{children}</div>
            <Separator />
          </div>
        )}
        <div className="p-4">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </SidebarProvider>
  );
}

export { MainLayout };
