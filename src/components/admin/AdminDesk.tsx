"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Shield,
  Home as HomeIcon,
  Phone,
  Mail,
  Building2,
  Calendar,
  Clock,
  CheckCircle,
  FileText,
  User,
  Filter,
} from "lucide-react";

type RequestItem = {
  id: string;
  created_at: string;
  customer_type: "pf" | "pj" | string;
  full_name: string;
  phone: string;
  email: string;
  company_name?: string | null;
  activity?: string | null;
  employee_count?: string | null;
  flow: string;
  category?: string | null;
  message?: string | null;
  payload?: string | null;
  status: string;
};

type Job = {
  id: string;
  request_id: string;
  status: string;
  purpose: string;
  scheduled_at: string;
  attempts: number;
  last_error?: string | null;
};

const STATUS_LABELS: Record<string, string> = {
  noua: "Nouă",
  in_analiza: "În analiză",
  contactat: "Contactat",
  rezolvat: "Rezolvat",
  inchis: "Închis",
};

export function AdminDesk() {
  const [items, setItems] = useState<RequestItem[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selected, setSelected] = useState<RequestItem | null>(null);
  const [error, setError] = useState("");
  const [typeFilter, setTypeFilter] = useState<"toate" | "asigurari" | "imobiliare" | "pf" | "pj">("toate");
  const [statusFilter, setStatusFilter] = useState<string>("toate");

  async function load() {
    try {
      const res = await fetch("/api/admin/requests", { cache: "no-store" });
      if (res.status === 401) {
        location.assign("/admin/login");
        return;
      }
      const data = await res.json();
      if (data.ok) {
        setItems(data.requests || []);
        setJobs(data.jobs || []);
      } else {
        setError("Nu s-au putut încărca solicitările.");
      }
    } catch {
      setError("Eroare de comunicare cu serverul.");
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function action(id: string, body: Record<string, unknown>) {
    try {
      const res = await fetch(`/api/admin/requests/${id}/action`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!data.ok) {
        alert(data.error || "Acțiunea a eșuat");
      } else {
        await load();
        if (selected && selected.id === id) {
          if (body.action === "status" && typeof body.status === "string") {
            setSelected({ ...selected, status: body.status });
          }
        }
      }
    } catch {
      alert("Eroare de rețea.");
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    location.assign("/admin/login");
  }

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Type Filter
      if (typeFilter === "asigurari" && item.flow === "imobiliare") return false;
      if (typeFilter === "imobiliare" && item.flow !== "imobiliare") return false;
      if (typeFilter === "pf" && item.customer_type !== "pf") return false;
      if (typeFilter === "pj" && item.customer_type !== "pj") return false;

      // Status Filter
      if (statusFilter !== "toate" && item.status !== statusFilter) return false;

      return true;
    });
  }, [items, typeFilter, statusFilter]);

  const countsByStatus = useMemo(() => {
    const counts: Record<string, number> = {
      noua: 0,
      in_analiza: 0,
      contactat: 0,
      rezolvat: 0,
      inchis: 0,
    };
    items.forEach((it) => {
      if (counts[it.status] !== undefined) {
        counts[it.status]++;
      }
    });
    return Object.entries(counts);
  }, [items]);

  const relatedJobs = useMemo(() => {
    if (!selected) return [];
    return jobs.filter((j) => j.request_id === selected.id);
  }, [jobs, selected]);

  const parsedPayload = useMemo(() => {
    if (!selected || !selected.payload) return null;
    try {
      return JSON.parse(selected.payload);
    } catch {
      return null;
    }
  }, [selected]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 text-[#F5F6F7]">
      {/* Top Header Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#22262D] pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#4779B8]">
            Panou Administrativ
          </span>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#F5F6F7] sm:text-3xl">
            Consolă Asistență & Solicitări
          </h1>
          <p className="mt-1 text-xs text-[#9299A3]">
            Gestionarea integrată a solicitărilor de asigurări și tranzacții imobiliare.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => load()}
            className="rounded-xl border border-[#22262D] bg-[#101216] px-3.5 py-2 text-xs font-medium text-[#C7CBD1] shadow-card transition hover:bg-[#171A20] hover:text-[#F5F6F7]"
          >
            Actualizează datele
          </button>
          <button
            onClick={logout}
            className="rounded-xl border border-[#C92B35]/30 bg-[#101216] px-3.5 py-2 text-xs font-medium text-[#C92B35] shadow-card transition hover:bg-[#C92B35]/15"
          >
            Deconectare
          </button>
        </div>
      </div>

      {/* KPI Counters */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {countsByStatus.map(([status, count]) => (
          <button
            key={status}
            onClick={() => setStatusFilter(statusFilter === status ? "toate" : (status as string))}
            className={`rounded-2xl border p-4 text-left transition ${
              statusFilter === status
                ? "border-[#4779B8] bg-[#171A20] shadow-card"
                : "border-[#22262D] bg-[#101216] hover:border-[#4779B8]/50 hover:bg-[#171A20]"
            }`}
          >
            <p className="text-xs font-medium text-[#9299A3]">{STATUS_LABELS[status as string]}</p>
            <p className="mt-1 text-2xl font-bold text-[#F5F6F7]">{count as number}</p>
          </button>
        ))}
      </div>

      {/* Category / Type Tabs */}
      <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-[#22262D] pb-4">
        <span className="mr-2 flex items-center gap-1 text-xs font-medium text-[#9299A3]">
          <Filter className="h-3.5 w-3.5" /> Filtrare:
        </span>
        <button
          onClick={() => setTypeFilter("toate")}
          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
            typeFilter === "toate"
              ? "bg-[#F5F6F7] text-[#08090B] font-semibold"
              : "border border-[#22262D] bg-[#101216] text-[#C7CBD1] hover:bg-[#171A20]"
          }`}
        >
          Toate ({items.length})
        </button>
        <button
          onClick={() => setTypeFilter("asigurari")}
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition ${
            typeFilter === "asigurari"
              ? "bg-[#4779B8] text-white font-semibold"
              : "border border-[#22262D] bg-[#101216] text-[#C7CBD1] hover:bg-[#171A20]"
          }`}
        >
          <Shield className="h-3 w-3" />
          <span>Asigurări ({items.filter((x) => x.flow !== "imobiliare").length})</span>
        </button>
        <button
          onClick={() => setTypeFilter("imobiliare")}
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition ${
            typeFilter === "imobiliare"
              ? "bg-emerald-600 text-white font-semibold"
              : "border border-[#22262D] bg-[#101216] text-[#C7CBD1] hover:bg-[#171A20]"
          }`}
        >
          <HomeIcon className="h-3 w-3" />
          <span>Imobiliare ({items.filter((x) => x.flow === "imobiliare").length})</span>
        </button>
        <button
          onClick={() => setTypeFilter("pf")}
          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
            typeFilter === "pf"
              ? "bg-[#F5F6F7] text-[#08090B] font-semibold"
              : "border border-[#22262D] bg-[#101216] text-[#C7CBD1] hover:bg-[#171A20]"
          }`}
        >
          Persoane Fizice ({items.filter((x) => x.customer_type === "pf").length})
        </button>
        <button
          onClick={() => setTypeFilter("pj")}
          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
            typeFilter === "pj"
              ? "bg-[#F5F6F7] text-[#08090B] font-semibold"
              : "border border-[#22262D] bg-[#101216] text-[#C7CBD1] hover:bg-[#171A20]"
          }`}
        >
          Companii / PJ ({items.filter((x) => x.customer_type === "pj").length})
        </button>
      </div>

      {error && (
        <div className="mt-4 rounded-xl border border-[#C92B35]/40 bg-[#C92B35]/10 p-3 text-xs text-[#C92B35]">
          {error}
        </div>
      )}

      {/* Main Grid: Table & Sidebar Details */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* Table of Requests */}
        <div className="overflow-hidden rounded-2xl border border-[#22262D] bg-[#101216] shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[#22262D] bg-[#171A20] text-[#9299A3]">
                <tr>
                  <th className="p-3 font-semibold">Tip</th>
                  <th className="p-3 font-semibold">Client</th>
                  <th className="p-3 font-semibold">Serviciu / Categorie</th>
                  <th className="p-3 font-semibold">Data</th>
                  <th className="p-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#22262D]">
                {filteredItems.map((item) => {
                  const isSelected = selected?.id === item.id;
                  const isRealEstate = item.flow === "imobiliare";
                  return (
                    <tr
                      key={item.id}
                      onClick={() => setSelected(item)}
                      className={`cursor-pointer transition hover:bg-[#171A20]/60 ${
                        isSelected ? "bg-[#171A20] font-medium border-l-2 border-l-[#4779B8]" : ""
                      }`}
                    >
                      <td className="p-3 whitespace-nowrap">
                        {isRealEstate ? (
                          <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
                            <HomeIcon className="h-3 w-3" />
                            <span>IMO</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-md bg-[#4779B8]/15 border border-[#4779B8]/30 px-2 py-0.5 text-[11px] font-semibold text-[#4779B8]">
                            <Shield className="h-3 w-3" />
                            <span>ASIG</span>
                          </span>
                        )}
                      </td>
                      <td className="p-3">
                        <span className="font-semibold text-[#F5F6F7]">{item.full_name}</span>
                        <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[#9299A3]">
                          <span className="uppercase">{item.customer_type}</span>
                          {item.company_name && <span>• {item.company_name}</span>}
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="font-medium text-[#C7CBD1]">
                          {item.category || item.flow}
                        </span>
                      </td>
                      <td className="p-3 whitespace-nowrap text-[#9299A3]">
                        {new Date(item.created_at).toLocaleDateString("ro-RO", {
                          day: "2-digit",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                            item.status === "noua"
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                              : item.status === "in_analiza"
                              ? "bg-[#4779B8]/20 text-blue-300 border border-[#4779B8]/30"
                              : item.status === "rezolvat"
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : "bg-[#171A20] text-[#9299A3] border border-[#22262D]"
                          }`}
                        >
                          {STATUS_LABELS[item.status] || item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
                {filteredItems.length === 0 && (
                  <tr>
                    <td className="p-8 text-center text-[#9299A3]" colSpan={5}>
                      Nu există solicitări care să corespundă filtrului selectat.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Inspection Sidebar */}
        <aside className="rounded-2xl border border-[#22262D] bg-[#101216] p-5 shadow-card">
          {selected ? (
            <div className="space-y-5">
              {/* Card Header */}
              <div className="border-b border-[#22262D] pb-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      selected.flow === "imobiliare"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-[#4779B8]/20 text-blue-300 border border-[#4779B8]/30"
                    }`}
                  >
                    {selected.flow === "imobiliare" ? "Solicitare Imobiliară" : "Solicitare Asigurare"}
                  </span>
                  <span className="text-[11px] text-[#9299A3]">
                    ID: {selected.id.slice(0, 8)}...
                  </span>
                </div>
                <h2 className="mt-2 text-xl font-bold text-[#F5F6F7]">{selected.full_name}</h2>
                <p className="text-xs text-[#9299A3]">
                  Înregistrată la {new Date(selected.created_at).toLocaleString("ro-RO")}
                </p>
              </div>

              {/* Contact Information */}
              <div className="rounded-xl bg-[#171A20] border border-[#22262D] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9299A3]">
                  Date de Contact
                </p>
                <div className="mt-2.5 space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-[#9299A3]" />
                    <a href={`tel:${selected.phone}`} className="font-medium text-[#F5F6F7] underline">
                      {selected.phone}
                    </a>
                    <a
                      href={`https://wa.me/${selected.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto rounded bg-emerald-600 px-2 py-0.5 text-[10px] font-semibold text-white hover:bg-emerald-500"
                    >
                      WhatsApp
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-[#9299A3]" />
                    <a href={`mailto:${selected.email}`} className="font-medium text-[#F5F6F7] underline">
                      {selected.email}
                    </a>
                  </div>
                  {selected.company_name && (
                    <div className="flex items-center gap-2">
                      <Building2 className="h-3.5 w-3.5 text-[#9299A3]" />
                      <span className="font-medium text-[#F5F6F7]">{selected.company_name}</span>
                      {selected.activity && (
                        <span className="text-[#9299A3]">({selected.activity})</span>
                      )}
                    </div>
                  )}
                  {selected.employee_count && (
                    <div className="flex items-center gap-2 text-[#C7CBD1]">
                      <User className="h-3.5 w-3.5 text-[#9299A3]" />
                      <span>Număr angajați: {selected.employee_count}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Message / Free text */}
              {selected.message && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9299A3]">
                    Mesaj / Descriere
                  </p>
                  <p className="mt-1.5 whitespace-pre-wrap rounded-xl border border-[#22262D] bg-[#171A20] p-3 text-xs leading-relaxed text-[#C7CBD1]">
                    {selected.message}
                  </p>
                </div>
              )}

              {/* Payload Breakdown */}
              {parsedPayload && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9299A3]">
                    Detalii Tehnice Solicitare
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-2 rounded-xl border border-[#22262D] bg-[#171A20] p-3 text-xs">
                    {Object.entries(parsedPayload).map(([key, val]) => {
                      if (val === null || val === undefined || val === "") return null;
                      if (typeof val === "object") return null;
                      return (
                        <div key={key} className="break-words">
                          <span className="text-[11px] font-medium text-[#9299A3]">{key}: </span>
                          <span className="font-semibold text-[#F5F6F7]">{String(val)}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Status Update */}
              <div className="border-t border-[#22262D] pt-4">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#9299A3]">
                  Schimbă Statusul
                  <select
                    value={selected.status}
                    onChange={(e) => action(selected.id, { action: "status", status: e.target.value })}
                    className="mt-1.5 min-h-10 w-full rounded-xl border border-[#22262D] bg-[#171A20] px-3 text-xs font-medium text-[#F5F6F7] focus:border-[#4779B8] focus:outline-hidden"
                  >
                    {Object.entries(STATUS_LABELS).map(([value, label]) => (
                      <option key={value} value={value} className="bg-[#101216] text-[#F5F6F7]">
                        {label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {/* Internal Notes */}
              <div className="border-t border-[#22262D] pt-4">
                <NoteForm onSubmit={(note) => action(selected.id, { action: "note", note })} />
              </div>

              {/* Notification Jobs */}
              <div className="border-t border-[#22262D] pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9299A3]">
                  Joburi de Notificare
                </p>
                {relatedJobs.length > 0 ? (
                  <div className="mt-2 space-y-1.5">
                    {relatedJobs.map((job) => (
                      <div
                        key={job.id}
                        className="flex items-center justify-between rounded-lg border border-[#22262D] bg-[#171A20] p-2 text-[11px]"
                      >
                        <div>
                          <span className="font-medium text-[#F5F6F7]">{job.purpose}</span>
                          <span className="ml-1 text-[#9299A3]">({job.status})</span>
                        </div>
                        {job.status === "failed" && (
                          <button
                            className="text-xs font-semibold text-[#4779B8] underline"
                            onClick={() => action(selected.id, { action: "retry", jobId: job.id })}
                          >
                            Reîncearcă
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-1 text-xs text-[#9299A3]">Nu există joburi programate.</p>
                )}
                <button
                  className="mt-3 text-xs text-[#C92B35] underline hover:text-red-400"
                  onClick={() => action(selected.id, { action: "disable-reminder" })}
                >
                  Dezactivează notificările automate
                </button>
              </div>
            </div>
          ) : (
            <div className="flex min-h-[300px] flex-col items-center justify-center text-center text-[#9299A3]">
              <FileText className="h-10 w-10 stroke-1" />
              <p className="mt-2 text-xs font-medium">
                Selectează o solicitare din listă pentru detalii complete și gestionare.
              </p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

function NoteForm({ onSubmit }: { onSubmit: (note: string) => void }) {
  const [note, setNote] = useState("");
  return (
    <form
      className="space-y-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (note.trim()) {
          onSubmit(note);
          setNote("");
        }
      }}
    >
      <label className="block text-xs font-semibold uppercase tracking-wider text-[#9299A3]">
        Adaugă Notă Internă
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={2}
          placeholder="Notează o acțiune sau detaliu despre discuție..."
          className="mt-1.5 w-full rounded-xl border border-[#22262D] bg-[#171A20] p-2.5 text-xs text-[#F5F6F7] placeholder-[#9299A3] focus:border-[#4779B8] focus:outline-hidden"
        />
      </label>
      <button
        type="submit"
        className="rounded-lg bg-[#F5F6F7] px-3 py-1.5 text-xs font-semibold text-[#08090B] transition hover:bg-white"
      >
        Salvează nota
      </button>
    </form>
  );
}
