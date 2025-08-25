'use client';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

function ProjectForm({ id }: { id?: string }) {
  const [billingMethod, setBillingMethod] = useState('');

  function handleProjectFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const name = data.name;
    const client = data.client;
    const billingAmount = data.billingAmount;

    if (id) {
      console.log(
        `EDIT PROJECT id=${id} name=${name} client=${client} method=${billingMethod} amount=${billingAmount}`
      );
    } else {
      console.log(
        `NEW PROJECT name=${name} client=${client} method=${billingMethod} amount=${billingAmount}`
      );
    }
  }

  return (
    <form onSubmit={handleProjectFormSubmit}>
      <div className="px-4 flex flex-col gap-6">
        <div className="grid gap-3">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" name="name" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="client">Client</Label>
          <Input id="client" type="text" name="client" required />
        </div>
        <div className="grid gap-3">
          <Label>Billing method</Label>
          <Select value={billingMethod} onValueChange={setBillingMethod}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Retainer">Retainer</SelectItem>
              <SelectItem value="Hourly">Hourly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="billing-amount">Billing amount</Label>
          <Input
            id="billing-amount"
            type="text"
            name="billingAmount"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <Button className="w-full" type="submit">
            Create
          </Button>
        </div>
      </div>
    </form>
  );
}

export { ProjectForm };
