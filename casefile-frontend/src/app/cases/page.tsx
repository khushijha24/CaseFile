import AppShell from "@/components/layout/AppShell";
import CaseList from "@/components/cases/CaseList";
import CasesHero from "@/components/cases/CasesHero";
import JoinCta from "@/components/cases/JoinCta";
import { cases } from "@/data/cases";
import { getIsLoggedIn } from "@/lib/auth";

const PUBLIC_CASE_LIMIT = 3;

export default async function CasesPage() {
  const loggedIn = await getIsLoggedIn();

  if (loggedIn) {
    return (
      <AppShell>
        <CaseList
          cases={cases}
          showProfile
          loggedIn
          footer={
            <p className="mt-10 rounded-xl border border-dashed border-navy-edge py-8 text-center text-white/40">
              More cases coming soon.
            </p>
          }
        />
      </AppShell>
    );
  }

  return (
    <div className="min-h-screen bg-ink">
      <CasesHero />
      <div className="mx-auto max-w-6xl space-y-14 px-6 pb-16 lg:px-12">
        <CaseList cases={cases} limit={PUBLIC_CASE_LIMIT} />
        <JoinCta />
      </div>
    </div>
  );
}