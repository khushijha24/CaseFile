import { User } from "lucide-react";

export default function ProfileButton() {
  // Placeholder avatar; swap for the real user photo after auth exists
  return (
    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-navy-edge bg-navy-soft text-white/70">
      <User className="size-5" />
    </div>
  );
}