import { MainLayout } from '@/components/ui/main-layout';
import { columns, Project } from './columns';
import {
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetContent,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ProjectForm } from './project-form'
import { Plus } from 'lucide-react';

async function getProjectsData(): Promise<Project[]> {
  return [
    {
      id: 'abc123',
      name: 'Project name',
      client: 'Harry Potter',
      billingMethod: 'Retainer',
      billingAmount: 123,
    },
    {
      id: 'abc123',
      name: 'Project name',
      client: 'Ron Weasley',
      billingMethod: 'Hourly',
      billingAmount: 123,
    },
    {
      id: 'abc123',
      name: 'Project name',
      client: 'Hermione Granger',
      billingMethod: 'Retainer',
      billingAmount: 123,
    },
    {
      id: 'abc123',
      name: 'Project name',
      client: 'Neville Longbottom',
      billingMethod: 'Hourly',
      billingAmount: 123,
    },
  ];
}

export default async function ProjectsPage() {
  const data = await getProjectsData();

  return (
    <MainLayout
      title="Projects"
      action={
        <Sheet>
          <SheetTrigger asChild>
            <Button size="sm">
              <Plus /> New project
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Create a new project</SheetTitle>
              <SheetDescription>
                Once you have created a project you can start recording your
                time spent on it with the timesheet.
              </SheetDescription>
            </SheetHeader>
            <ProjectForm/>
          </SheetContent>
        </Sheet>
      }
      columns={columns}
      data={data}
    ></MainLayout>
  );
}
