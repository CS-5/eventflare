import { FunctionComponent, ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

export const Section: FunctionComponent<Props> = ({ name, children }) => {
  return (
    <div className="pb-6 text-center">
      <h3 className="font-theme-secondary font-bold pb-4 text-theme-accent text-5xl md:text-6xl">
        {name}
      </h3>
      {children}
    </div>
  );
};
