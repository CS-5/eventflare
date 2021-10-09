import { DetailedHTMLProps, VoidFunctionComponent } from "react";

interface InputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export const Input: VoidFunctionComponent<InputProps> = ({
  label,
  ...props
}) => {
  return (
    <label className="bg-gray-200 rounded-xl ring-2 ring-transparent focus-within:ring-blue-500 px-3">
      <span className="block uppercase tracking-wide font-bold text-gray-500 text-xs mt-2">
        {label}
      </span>
      <input
        className="my-2 p-0 appearance-none text-black block w-full bg-transparent border-none outline-none focus:ring-transparent"
        {...props}
      />
    </label>
  );
};
