import { FunctionComponent, ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
  className?: string;
}

const Section: FunctionComponent<Props> = ({ name, children, className }) => {
  return (
    <div className={className}>
      <h3 className="dark:text-shadow-md pb-4 text-orange-500 text-3xl font-semibold">
        {name}
      </h3>
      {children}
    </div>
  );
};

export default Section;
