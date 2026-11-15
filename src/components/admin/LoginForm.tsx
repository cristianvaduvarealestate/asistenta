"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.get("username"),
        password: form.get("password"),
      }),
    });
    const data = await res.json();
    setLoading(false);
    if (!data.ok) {
      setError(data.error || "Nu te poți autentifica.");
      return;
    }
    router.replace("/admin");
    router.refresh();
  }

  return (
    <form
      className="mt-8 grid gap-5 rounded-2xl border border-[#22262D] bg-[#101216] p-6 shadow-card text-[#F5F6F7]"
      onSubmit={submit}
    >
      <label className="text-xs font-semibold uppercase tracking-wider text-[#9299A3]">
        Utilizator
        <input
          name="username"
          autoComplete="username"
          required
          className="mt-2 min-h-11 w-full rounded-xl border border-[#22262D] bg-[#171A20] px-3.5 text-sm text-[#F5F6F7] focus:border-[#4779B8] focus:outline-hidden"
        />
      </label>
      <label className="text-xs font-semibold uppercase tracking-wider text-[#9299A3]">
        Parolă
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="mt-2 min-h-11 w-full rounded-xl border border-[#22262D] bg-[#171A20] px-3.5 text-sm text-[#F5F6F7] focus:border-[#4779B8] focus:outline-hidden"
        />
      </label>
      {error && (
        <p role="alert" className="rounded-xl border border-[#C92B35]/30 bg-[#C92B35]/10 p-3 text-xs text-[#C92B35]">
          {error}
        </p>
      )}
      <button
        disabled={loading}
        className="min-h-11 rounded-full bg-[#C92B35] px-4 text-xs font-semibold text-white shadow-sm transition hover:bg-[#b0222b] disabled:opacity-60"
      >
        {loading ? "Se verifică..." : "Autentificare"}
      </button>
    </form>
  );
}
