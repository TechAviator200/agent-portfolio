import Link from "next/link";
import { getAgentsByCategory, agents } from "@/lib/agents";

export default function Home() {
  const categories = ["media-entertainment", "enterprise", "healthcare"] as const;
  
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="mb-12 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Agents
        </h1>

        {categories.map((category) => {
          const categoryAgents = getAgentsByCategory(category);
          if (categoryAgents.length === 0) return null;

          return (
            <div key={category} className="mb-12">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold capitalize text-zinc-900 dark:text-zinc-50">
                  {category.replace("-", " ")}
                </h2>
                <Link
                  href={`/${category}`}
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  View all →
                </Link>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                {categoryAgents.map((agent) => (
                  <Link
                    key={agent.slug}
                    href={`/agents/${agent.slug}`}
                    className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        {agent.title}
                      </h3>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {agent.description}
                    </p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {agent.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <span
                        className="inline-block rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors group-hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:group-hover:bg-zinc-300"
                      >
                        Open Demo
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        {/* Coming Soon section */}
        <div className="mb-12">
          <h2 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Coming Soon
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex cursor-default flex-col rounded-xl border border-dashed border-zinc-300 bg-white p-6 opacity-60 dark:border-zinc-700 dark:bg-zinc-900">
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Studio Ogboso
                </h3>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Creative studio agent for generative visual design and brand asset production.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  design
                </span>
                <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  generative
                </span>
                <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  branding
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
