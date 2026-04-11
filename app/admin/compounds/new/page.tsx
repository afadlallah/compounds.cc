import type { Metadata } from "next";
import { requireAdmin } from "@/lib/admin/guard";
import { AdminHeader } from "../../_components/admin-page";
import { CompoundForm } from "../compound-form";
import { createCompound } from "../actions";

export const metadata: Metadata = { title: "New compound · Admin" };

export default async function NewCompoundPage() {
  await requireAdmin();

  return (
    <div>
      <AdminHeader title="New compound" subtitle="Library" />
      <CompoundForm action={createCompound} submitLabel="Create compound" />
    </div>
  );
}
