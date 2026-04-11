"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { approveReview, rejectReview } from "./actions";

export function ReviewActions({ id }: { id: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function run(action: "approve" | "reject") {
    startTransition(async () => {
      const fn = action === "approve" ? approveReview : rejectReview;
      const result = await fn(id);
      if (result.ok) {
        toast.success(action === "approve" ? "Approved" : "Rejected");
        router.refresh();
      } else {
        toast.error(result.error ?? "Action failed");
      }
    });
  }

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => run("approve")}
        disabled={pending}
        className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
      >
        Approve
      </button>
      <button
        type="button"
        onClick={() => run("reject")}
        disabled={pending}
        className="rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted disabled:opacity-50"
      >
        Reject
      </button>
    </div>
  );
}
