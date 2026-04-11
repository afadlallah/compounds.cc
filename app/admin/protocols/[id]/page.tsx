import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin, tryDb } from "@/lib/admin/guard";
import { AdminHeader, DbError } from "../../_components/admin-page";
import { ProtocolForm } from "../protocol-form";
import { updateProtocol, deleteProtocol } from "../actions";

type Props = { params: Promise<{ id: string }> };

export const metadata: Metadata = { title: "Edit protocol · Admin" };

export default async function EditProtocolPage({ params }: Props) {
  const { id } = await params;
  const { supabase } = await requireAdmin();

  const result = await tryDb(async () => {
    const { data, error } = await supabase
      .from("protocols")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw new Error(error.message);
    return data;
  });

  if (!result.ok) {
    return (
      <div>
        <AdminHeader title="Edit protocol" subtitle="Stacks" />
        <DbError error={result.error} />
      </div>
    );
  }

  if (!result.data) notFound();

  const compoundsResult = await tryDb(async () => {
    const { data, error } = await supabase
      .from("protocol_compounds")
      .select("compound_id, role, dosage_notes, order_index, compounds(slug)")
      .eq("protocol_id", id)
      .order("order_index");
    if (error) throw new Error(error.message);
    return (data ?? []).map((row) => ({
      slug: (row.compounds as unknown as { slug: string })?.slug ?? "",
      role: row.role,
      dosage_notes: row.dosage_notes,
      order_index: row.order_index,
    }));
  });

  const protocol = {
    ...result.data,
    compounds: compoundsResult.ok ? compoundsResult.data : [],
  };

  const updateAction = async (formData: FormData) => {
    "use server";
    return updateProtocol(id, formData);
  };

  const deleteActionBound = async () => {
    "use server";
    return deleteProtocol(id);
  };

  return (
    <div>
      <AdminHeader title={protocol.name} subtitle="Editing" />
      <ProtocolForm
        initial={protocol}
        action={updateAction}
        deleteAction={deleteActionBound}
        submitLabel="Save changes"
      />
    </div>
  );
}
