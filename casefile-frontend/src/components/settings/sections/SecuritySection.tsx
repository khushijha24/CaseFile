"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ConfirmDialog from "../ConfirmDialog";
import SettingsPanel from "../SettingsPanel";
import SettingsRow from "../SettingsRow";
import { fieldClass } from "../styles";

export default function SecuritySection() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  function handlePassword(e: React.FormEvent) {
    e.preventDefault();
    if (next.length < 8) {
      setMessage("New password must be at least 8 characters.");
    } else if (next !== confirm) {
      setMessage("The new passwords don't match.");
    } else {
      // The backend call comes later
      setMessage("Password updated.");
      setCurrent("");
      setNext("");
      setConfirm("");
    }
  }

  return (
    <div className="space-y-6">
      <SettingsPanel title="Change password">
        <form onSubmit={handlePassword} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="current">Current password</Label>
            <Input
              id="current"
              type="password"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className={fieldClass}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="next">New password</Label>
            <Input
              id="next"
              type="password"
              value={next}
              onChange={(e) => setNext(e.target.value)}
              className={fieldClass}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm">Confirm new password</Label>
            <Input
              id="confirm"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className={fieldClass}
              required
            />
          </div>

          {message && <p className="text-sm text-gold">{message}</p>}

          <Button type="submit" className="bg-gold text-ink hover:bg-gold-dim">
            Update password
          </Button>
        </form>
      </SettingsPanel>

      <SettingsPanel title="Account access">
        <SettingsRow
          title="Reset password"
          description="We'll email you a link to set a new password."
        >
          <Button variant="outline" className="border-navy-edge bg-transparent">
            Send reset link
          </Button>
        </SettingsRow>

        <SettingsRow title="Sign out" description="End your session on this device.">
          <Button asChild variant="outline" className="border-navy-edge bg-transparent">
            <Link href="/sign-in">Sign out</Link>
          </Button>
        </SettingsRow>

        <SettingsRow
          title="Delete account"
          description="Permanently remove your account and all investigation data."
        >
          <ConfirmDialog
            trigger={
              <Button
                variant="outline"
                className="border-red-500/40 bg-transparent text-red-300 hover:bg-red-500/10"
              >
                Delete account
              </Button>
            }
            title="Delete your account?"
            description="This permanently deletes your profile, progress and reports. This can't be undone."
            confirmLabel="Delete account"
            onConfirm={() => console.log("delete account")}
          />
        </SettingsRow>
      </SettingsPanel>
    </div>
  );
}