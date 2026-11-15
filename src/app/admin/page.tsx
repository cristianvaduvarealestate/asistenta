import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/session";
import { AdminDesk } from "@/components/admin/AdminDesk";

export const dynamic = "force-dynamic";
export const metadata = { title: "Solicitări" };

export default function AdminPage() {
  if (!getAdminSession()) redirect("/admin/login");
  return <AdminDesk />;
}
