import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStackPanel from "./YourStackPanel";
import Loader from "./Loader";

export default function TechnologiesSection() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) setTechnologies(data);
      })
      .catch((err) => console.error("Failed to load technologies:", err))
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
        Explore the <span className="text-gradient-brand">Technologies</span>
      </h2>
      <p className="mt-2 text-sm text-slate-500">
        Browse tools by category and add the ones you want to your stack.
      </p>

      {loading ? (
        <Loader />
      ) : (
        <div className="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_300px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyCard key={tech.id} technology={tech} />
            ))}
          </div>
          <YourStackPanel />
        </div>
      )}
    </section>
  );
}
