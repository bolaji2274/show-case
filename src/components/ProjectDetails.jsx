import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  target,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-2xl my-8 border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="relative">
          <button
            onClick={closeModal}
            className="sticky top-2 right-2 z-10 p-2 ml-auto rounded-sm bg-midnight hover:bg-gray-500 float-right"
          >
            <img src="assets/close.svg" className="w-6 h-6" alt="Close" />
          </button>
          {/* <img src={image} alt={title} className="w-full rounded-t-2xl" /> */}
          <img
            src={image}
            alt={title}
            className={`w-full rounded-t-2xl ${
              title.includes("Honeypot") ||
              title.includes("specific-project-name")
                ? "bg-white p-4"
                : ""
            }`}
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            {href ? (
              <a
                href={href}
                target={target}
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(href, "_blank", "noopener,noreferrer");
                }}
                className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-white hover:text-blue-400 transition-colors"
              >
                View Project{" "}
                <img src="assets/arrow-up.svg" className="size-4" alt="Arrow" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 font-medium text-gray-500">
                Coming Soon{" "}
                <img
                  src="assets/arrow-up.svg"
                  className="size-4 opacity-50"
                  alt="Arrow"
                />
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
