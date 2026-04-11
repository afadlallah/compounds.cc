import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin, tryDb } from "@/lib/admin/guard";
import { AdminHeader, DbError } from "../../_components/admin-page";
import { CompoundForm } from "../compound-form";
import { updateCompound, deleteCompound } from "../actions";

type Props = { params: Promise<{ id: string }> };

export const metadata: Metadata = { title: "Edit compound · Admin" };

export default async function EditCompoundPage({ params }: Props) {
  const { id } = await params;
  const { supabase } = await requireAdmin();

  const result = await tryDb(async () => {
    const { data, error } = await supabase
      .from("compounds")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw new Error(error.message);
    return data;
  });

  if (!result.ok) {
    return (
      <div>
        <AdminHeader title="Edit compound" subtitle="Library" />
        <DbError error={result.error} />
      </div>
    );
  }

  if (!result.data) notFound();

  const updateAction = async (formData: FormData) => {
    "use server";
    return updateCompound(id, formData);
  };

  const deleteActionBound = async () => {
    "use server";
    return deleteCompound(id);
  };

  return (
    <div>
      <AdminHeader title={result.data.name} subtitle="Editing" />
      <CompoundForm
        initial={result.data}
        action={updateAction}
        deleteAction={deleteActionBound}
        submitLabel="Save changes"
      />
    </div>
  );
}
