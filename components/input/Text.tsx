import { DetailedHTMLProps, forwardRef, Ref } from "react";

interface InputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  helperText?: string;
}

const InputComponent = (
  { label, helperText, ...props }: InputProps,
  ref: Ref<HTMLInputElement>,
) => {
  return (
    <div className="flex flex-col">
      <label className="bg-gray-200 rounded-xl ring-2 ring-transparent focus-within:ring-blue-500 px-3">
        <span className="block uppercase tracking-wide font-bold text-gray-500 text-xs mt-2">
          {label}
        </span>
        <input
          className="my-2 p-0 appearance-none text-black block w-full bg-transparent border-none outline-none focus:ring-transparent"
          ref={ref}
          {...props}
        />
      </label>
      {helperText ? (
        <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">
          {helperText}
        </div>
      ) : null}
    </div>
  );
};

export default forwardRef(InputComponent);
