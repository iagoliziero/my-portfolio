import Paragraph from "./Paragraph";

interface ButtonNavigationProjectsProps {
  children: React.ReactNode;
}

const ButttonNavigationProjects = ({
  children,
}: ButtonNavigationProjectsProps): JSX.Element => {
  return (
    <div>
      <a
        href="https://github.com/iagoliziero"
        target="_blank"
        className="flex px-5 py-4 gap-2 whitespace-nowrap bg-white/5 rounded-full border-slate-300/30 border items-center justify-center mb-10 hover:bg-white/10 transition-all ease-in-out duration-300"
      >
        <span>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-github-icon lucide-github text-white/70"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>{" "}
        </span>
        <Paragraph> {children} </Paragraph>
      </a>
    </div>
  );
};

export default ButttonNavigationProjects;
