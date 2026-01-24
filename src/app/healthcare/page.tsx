import Link from "next/link";
import { getAgentsByCategory } from "@/lib/agents";

export default function Page() {
  const agents = getAgentsByCategory("healthcare");

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Healthcare / HealthTech</h1>
      <p className="mt-2 opacity-80">
        Agents for clinical triage, interoperability, and structured healthcare workflows.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {agents.map((agent) => (
          <div key={agent.slug} className="rounded-2xl border p-6 shadow-sm">
            <div className="text-xl font-semibold">{agent.title}</div>
            <p className="mt-2 opacity-80">{agent.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {agent.tags.map((tag) => (
                <span key={tag} className="rounded-full border px-3 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href={`/agents/${agent.slug}`}
                className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm"
              >
                View {agent.title}
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
