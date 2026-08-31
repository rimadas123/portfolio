"use client";

const projects = [
  {
    id: "01",
    title: "Smarter-Patient-Search-for-Appointment-Booking",
    category: "Healthcare",
    year: "2025",
    image: "/Cover-1.png",
  },
  {
    id: "02",
    title: "Project Two",
    category: "Product Design",
    year: "2025",
    image: "/projects/project-2.jpg",
  },
  {
    id: "03",
    title: "Project Three",
    category: "Visual Design",
    year: "2025",
    image: "/projects/project-3.jpg",
  },
];

export default function Work() {
  return (
    <div className="px-6 py-10 md:px-10">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.18em] text-foreground">
          Selected Work
        </p>

        <h2 className="mt-2 text-2xl text-brand font-medium tracking-tighter">
          Projects
        </h2>
      </div>

      <div className="space-y-16">
        {projects.map((project) => (
          <article key={project.id} className="group">
            {/* Image */}
            <div className="aspect-4/3 overflow-hidden rounded-2xl bg-foreground border-8 border-brand/10">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            {/* Project information */}
            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium tracking-[-0.03em]">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-black/40">{project.category}</p>
              </div>

              <div className="text-sm text-black/30">{project.id}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
