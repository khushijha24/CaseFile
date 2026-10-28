import { Switch } from "@/components/ui/switch";
import type { SectionProps } from "@/types/settings";
import SegmentedControl from "../SegmentedControl";
import SettingsPanel from "../SettingsPanel";
import SettingsRow from "../SettingsRow";

export default function InvestigationSection({ settings, update }: SectionProps) {
  return (
    <SettingsPanel
      title="Investigation"
      description="How cases behave while you work them."
    >
      <SettingsRow
        title="Default difficulty"
        description="The filter selected when you open the case list."
      >
        <SegmentedControl
          value={settings.defaultDifficulty}
          onChange={(v) => update("defaultDifficulty", v)}
          options={[
            { value: "Easy", label: "Easy" },
            { value: "Medium", label: "Medium" },
            { value: "Hard", label: "Hard" },
          ]}
        />
      </SettingsRow>

      <SettingsRow title="Show hints" description="Display investigation hints during a case.">
        <Switch
          checked={settings.showHints}
          onCheckedChange={(v) => update("showHints", v)}
          className="data-[state=checked]:bg-gold"
        />
      </SettingsRow>

      <SettingsRow
        title="Confirm before accusing"
        description="Ask for confirmation before you submit your final accusation."
      >
        <Switch
          checked={settings.confirmAccusation}
          onCheckedChange={(v) => update("confirmAccusation", v)}
          className="data-[state=checked]:bg-gold"
        />
      </SettingsRow>

      <SettingsRow title="Sound effects">
        <Switch
          checked={settings.soundEffects}
          onCheckedChange={(v) => update("soundEffects", v)}
          className="data-[state=checked]:bg-gold"
        />
      </SettingsRow>
    </SettingsPanel>
  );
}