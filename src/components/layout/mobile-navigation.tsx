"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/company";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => triggerRef.current?.focus());
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };
  return (
    <>
      <button
        ref={triggerRef}
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        Menu
      </button>
      {open && (
        <div
          className="mobile-panel"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="mobile-panel-inner">
            <div className="mobile-panel-header">
              <span className="wordmark">Fieldhouse Forge</span>
              <button
                ref={closeRef}
                className="button button-light"
                type="button"
                onClick={close}
              >
                Close
              </button>
            </div>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {[
                { href: "/", label: "Home" },
                ...navigation,
                { href: "/request-quote", label: "Request a Quote" },
              ].map((item) => (
                <Link key={item.href} href={item.href} onClick={close}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
