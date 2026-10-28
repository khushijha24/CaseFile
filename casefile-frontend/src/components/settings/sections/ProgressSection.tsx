import Link from "next/link";
import { Button } from "@/components/ui/button";
import ConfirmDialog from "../ConfirmDialog";
import SettingsPanel from "../SettingsPanel";
import SettingsRow from "../SettingsRow";

export default function ProgressSection() {
  return (
    <SettingsPanel
      title="Progress & Data"
      description="Review your detective history."
    >
      <SettingsRow title="Completed cases" description="See every case you've finished.">
        <Button asChild variant="outline" className="border-navy-edge bg-transparent">
          <Link href="/profile">View</Link>
        </Button>
      </SettingsRow>

      <SettingsRow title="Investigation statistics" description="Accuracy, rank and scores.">
        <Button asChild variant="outline" className="border-navy-edge bg-transparent">
          <Link href="/profile">View</Link>
        </Button>
      </SettingsRow>

      <SettingsRow title="Export reports" description="Download your investigation reports.">
        <Button disabled variant="outline" className="border-navy-edge bg-transparent">
          Coming soon
        </Button>
      </SettingsRow>

      <SettingsRow
        title="Reset progress"
        description="Clear all case progress and scores. Your account stays."
      >
        <ConfirmDialog
          trigger={
            <Button
              variant="outline"
              className="border-red-500/40 bg-transparent text-red-300 hover:bg-red-500/10"
            >
              Reset progress
            </Button>
          }
          title="Reset all progress?"
          description="Your solved cases, scores and statistics will be cleared. This can't be undone."
          confirmLabel="Reset progress"
          onConfirm={() => console.log("reset progress")}
        />
      </SettingsRow>
    </SettingsPanel>
  );
}