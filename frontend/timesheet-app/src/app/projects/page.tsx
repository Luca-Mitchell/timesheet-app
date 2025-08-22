import { MainLayout } from '@/components/ui/main-layout';
import { columns, Project } from './columns';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

async function getProjectsData(): Promise<Project[]> {
  return [
    {
      id: 'abc123',
      name: 'Project name',
      client: 'Harry Potter',
      billingMethod: 'retainer',
      billingAmount: 123,
    },
    {
      id: 'abc123',
      name: 'Project name',
      client: 'Ron Weasley',
      billingMethod: 'hourly',
      billingAmount: 123,
    },
    {
      id: 'abc123',
      name: 'Project name',
      client: 'Hermione Granger',
      billingMethod: 'retainer',
      billingAmount: 123,
    },
    {
      id: 'abc123',
      name: 'Project name',
      client: 'Neville Longbottom',
      billingMethod: 'hourly',
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
        <Button size="sm">
          <Plus /> New project
        </Button>
      }
      columns={columns}
      data={data}
    ></MainLayout>
  );
}
