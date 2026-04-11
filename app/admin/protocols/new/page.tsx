import type { Metadata } from "next";
import { requireAdmin } from "@/lib/admin/guard";
import { AdminHeader } from "../../_components/admin-page";
import { ProtocolForm } from "../protocol-form";
import { createProtocol } from "../actions";

export const metadata: Metadata = { title: "New protocol · Admin" };

export default async function NewProtocolPage() {
  await requireAdmin();

  return (
    <div>
      <AdminHeader title="New protocol" subtitle="Stacks" />
      <ProtocolForm action={createProtocol} submitLabel="Create protocol" />
    </div>
  );
}
