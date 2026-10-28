import { Switch } from "@/components/ui/switch";
import type { SectionProps } from "@/types/settings";
import SettingsPanel from "../SettingsPanel";
import SettingsRow from "../SettingsRow";

export default function NotificationsSection({ settings, update }: SectionProps) {
  return (
    <SettingsPanel title="Notifications" description="Choose what we tell you about.">
      <SettingsRow title="New case announcements">
        <Switch
          checked={settings.notifyNewCases}
          onCheckedChange={(v) => update("notifyNewCases", v)}
          className="data-[state=checked]:bg-gold"
        />
      </SettingsRow>

      <SettingsRow title="Unfinished investigation reminders">
        <Switch
          checked={settings.notifyReminders}
          onCheckedChange={(v) => update("notifyReminders", v)}
          className="data-[state=checked]:bg-gold"
        />
      </SettingsRow>

      <SettingsRow title="Product updates">
        <Switch
          checked={settings.notifyUpdates}
          onCheckedChange={(v) => update("notifyUpdates", v)}
          className="data-[state=checked]:bg-gold"
        />
      </SettingsRow>
    </SettingsPanel>
  );
}