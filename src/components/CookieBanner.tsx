"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "ihd_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (!stored) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 rounded-2xl border border-[#D2D2D7] bg-white/95 p-5 shadow-apple backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200"
    >
      <div className="flex flex-col gap-3">
        <div>
          <p id="cookie-title" className="text-xs font-semibold text-[#1D1D1F]">
            Confidențialitate & Cookies
          </p>
          <p className="mt-1 text-xs leading-relaxed text-[#6E6E73]">
            Acest website utilizează exclusiv stocare tehnică strict necesară bunei funcționări. Nu instalăm cookie-uri publicitare sau de urmărire a activității. Detalii în{" "}
            <Link className="text-[#1D1D1F] underline hover:opacity-70" href="/cookies">
              politica de cookies
            </Link>
            .
          </p>
        </div>
        <button
          type="button"
          className="self-end apple-btn-primary !py-1.5 !px-4 !text-xs"
          onClick={() => {
            localStorage.setItem(KEY, "necessary-only");
            setVisible(false);
          }}
        >
          Am înțeles
        </button>
      </div>
    </div>
  );
}
