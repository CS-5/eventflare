import { FunctionComponent, ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

export const Section: FunctionComponent<Props> = ({ name, children }) => {
  return (
    <div className="pb-6 text-center">
      <h3 className="font-theme-primary font-bold pb-4 text-theme-secondary text-4xl md:text-5xl">
        {name}
      </h3>
      {children}
    </div>
  );
};
