import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ArchivePage() {
  const projects = [
    {
      year: "2023",
      project: "Evidence Management System (EMS)",
      builtWith: ["Next.js", "TypeScript", "MongoDB", "AWS", "Blockchain"],
      link: "",
    },
    {
      year: "2023",
      project: "Chat-Room Application",
      builtWith: ["REACTJS", "MongoDB", "AWS", "Node.js"],
      link: "https://chats-y8s2.vercel.app/",
    },
    {
      year: "2022",
      project: "Payment-Ledger",
      builtWith: ["REACTJs", "Firebase", "Blockchain"],
      link: "https://paypal1.vercel.app/",
    },
    {
      year: "2022",
      project: "Twitter-blockchain-integration",
      builtWith: ["REACTJs", "Blockchain", "Firebase"],
      link: "https://twitter1-beryl.vercel.app/",
    },
    {
      year: "2022",
      project: "Crowd Funding",
      builtWith: ["NextJs", "Firebase", "Blockchain"],
      link: "https://crowd1.vercel.app/",
    },
    {
      year: "2021",
      project: "Disney Clone Trailers Integration",
      builtWith: ["REACTJs", "Firebase", "Googleapis"],
      link: "https://disney-ochre.vercel.app/",
    },
    {
      year: "2021",
      project: "Hotels Travel Advisory",
      builtWith: ["REACTJs", "Firebase"],
      link: "https://ayan-blufy.github.io/Travel_app/",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24">
        <div className="lg:py-24">
          <Link
            href="/"
            className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
          >
            <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
            Ayan Modak
          </Link>

          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            All Projects
          </h1>

          <div className="mt-12">
            <table className="w-full border-collapse text-left">
              <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                <tr>
                  <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                    Year
                  </th>
                  <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                    Project
                  </th>
                  <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                    Built with
                  </th>
                  <th className="py-4 text-sm font-semibold text-slate-200">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-300/10 last:border-none"
                  >
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px text-slate-500">
                        {project.year}
                      </div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>
                        {/* <div className="block sm:hidden">
                          <div className="text-xs font-medium text-slate-500">
                            {project.madeAt}
                          </div>
                        </div> */}
                        {project.project}
                      </div>
                    </td>
                    {/* <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                      <div className="translate-y-px whitespace-nowrap text-slate-500">
                        {project.madeAt}
                      </div>
                    </td> */}
                    <td className="hidden py-4 pr-4 align-top lg:table-cell">
                      <ul className="flex -translate-y-1.5 flex-wrap">
                        {project.builtWith.map((tech, techIndex) => (
                          <li key={techIndex} className="my-1 mr-1.5">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="sm:hidden">
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          {project.builtWith
                            .slice(0, 3)
                            .map((tech, techIndex) => (
                              <li key={techIndex} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          {project.builtWith.length > 3 && (
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                +{project.builtWith.length - 3} more
                              </div>
                            </li>
                          )}
                        </ul>
                      </div>
                    </td>
                    <td className="py-4 align-top">
                      {project.link && (
                        <ul className="translate-y-1">
                          <li className="mb-1 flex items-center">
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 text-sm group/link"
                              href={`https://${project.link}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span>
                                {project.link}
                                <ExternalLink className="inline-block h-3 w-3 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
