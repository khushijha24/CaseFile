"use client";

import { cn } from "@/lib/utils";

interface Option<T extends string> {
  value: T;
  label: string;
  disabled?: boolean;
}

export default function SegmentedControl<T extends string>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void;
}) {
  return (
    <div className="inline-flex rounded-lg border border-navy-edge bg-ink/50 p-1">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          disabled={o.disabled}
          onClick={() => onChange(o.value)}
          className={cn(
            "rounded-md px-3 py-1.5 text-sm transition disabled:cursor-not-allowed disabled:opacity-40",
            value === o.value
              ? "bg-gold text-ink"
              : "text-white/70 hover:text-white"
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}