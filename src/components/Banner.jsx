import bannerImg from "../assets/banner-stack.png";

export default function Banner() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div className="grid min-w-0 items-center gap-12 md:grid-cols-2">
        <div className="min-w-0">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-gradient-brand">Development Stack</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="focus-ring rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03]"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="focus-ring rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={bannerImg}
            alt="Isometric illustration of a layered development technology stack"
            className="w-full max-w-md drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
