import CaseList from "@/components/cases/CaseList";
import { cases } from "@/data/cases";

export default function CasesPage() {
  return <CaseList cases={cases} />;
}