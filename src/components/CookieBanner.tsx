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
      className="fixed bottom-0 inset-x-0 z-40 border-t border-[#22262D] bg-[#101216]/95 p-4 shadow-2xl backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p id="cookie-title" className="text-xs font-bold uppercase tracking-wider text-[#C7CBD1]">
            Informare Cookies
          </p>
          <p className="mt-0.5 max-w-2xl text-xs leading-relaxed text-[#9299A3]">
            Folosim exclusiv stocare tehnică strict necesară funcționării sigure a platformei. Nu instalăm cookie-uri de urmărire publicitară. Detalii în{" "}
            <Link className="text-[#C7CBD1] underline hover:text-white" href="/cookies">
              politica de cookies
            </Link>
            .
          </p>
        </div>
        <button
          type="button"
          className="rounded-full bg-[#F5F6F7] px-4 py-2 text-xs font-semibold text-[#08090B] shadow-md transition-all hover:bg-white hover:shadow-lg sm:shrink-0"
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
