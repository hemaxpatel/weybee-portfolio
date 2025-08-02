import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 hover:scale-[1.02]">
        <img
          src={project.thumbnail}
          alt={project.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg md:text-xl text-white font-semibold mb-1">
            {project.name}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">
            {project.tagline}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
