import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/session";
import { AdminDesk } from "@/components/admin/AdminDesk";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Solicitări | Administrare",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  if (!getAdminSession()) redirect("/admin/login");
  return <AdminDesk />;
}
