import { Switch } from "@/components/ui/switch";
import type { SectionProps } from "@/types/settings";
import SegmentedControl from "../SegmentedControl";
import SettingsPanel from "../SettingsPanel";
import SettingsRow from "../SettingsRow";

export default function AppearanceSection({ settings, update }: SectionProps) {
  return (
    <SettingsPanel title="Appearance" description="Casefile is dark by default.">
      <SettingsRow title="Theme">
        <SegmentedControl
          value={settings.theme}
          onChange={(v) => update("theme", v)}
          options={[
            { value: "dark", label: "Dark" },
            { value: "light", label: "Light (soon)", disabled: true },
          ]}
        />
      </SettingsRow>

      <SettingsRow title="Interface density">
        <SegmentedControl
          value={settings.density}
          onChange={(v) => update("density", v)}
          options={[
            { value: "comfortable", label: "Comfortable" },
            { value: "compact", label: "Compact" },
          ]}
        />
      </SettingsRow>

      <SettingsRow title="Reduce animations" description="Turn off motion effects.">
        <Switch
          checked={settings.reduceMotion}
          onCheckedChange={(v) => update("reduceMotion", v)}
          className="data-[state=checked]:bg-gold"
        />
      </SettingsRow>
    </SettingsPanel>
  );
}