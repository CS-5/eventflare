import { FunctionComponent, ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
  className?: string;
}

const Section: FunctionComponent<Props> = ({ name, children, className }) => {
  return (
    <div className={className}>
      <h3 className="font-theme-secondary text-shadow-sm dark:text-shadow-md font-light pb-4 text-theme-primary text-5xl md:text-6xl">
        {name}
      </h3>
      {children}
    </div>
  );
};

export default Section;
