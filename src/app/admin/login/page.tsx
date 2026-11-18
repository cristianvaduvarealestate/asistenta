import { LoginForm } from "@/components/admin/LoginForm";

export const metadata = {
  title: "Autentificare | Administrare",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return <div className="mx-auto max-w-md px-4 py-16 sm:px-6"><h1 className="text-3xl font-semibold text-ink">Administrare</h1><p className="mt-3 text-muted">Acces rezervat consultantului.</p><LoginForm /></div>;
}
