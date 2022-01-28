import { DetailedHTMLProps, forwardRef, Ref } from "react";

interface BooleanInputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  choices: {
    trueLabel: string;
    falseLabel: string;
  };
}

const BooleanInput = (
  { choices, ...props }: BooleanInputProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <div className="grid grid-cols-2 bg-gray-200 rounded-xl overflow-hidden h-16 uppercase font-bold text-gray-500 text-xs">
      <BooleanChoice
        id="trueRadio"
        label={choices.trueLabel}
        ref={ref}
        {...props}
        checked
      />
      <BooleanChoice
        id="falseRadio"
        label={choices.falseLabel}
        ref={ref}
        {...props}
      />
    </div>
  );
};

export default forwardRef(BooleanInput);

interface BooleanChoiceProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  id: string;
  checked?: boolean;
}

const BooleanChoice = ({
  label,
  id,
  checked,
  ...props
}: BooleanChoiceProps) => {
  return (
    <>
      <input
        id={id}
        className="form-radio hidden"
        type="radio"
        {...props}
        checked={checked}
      />
      <label htmlFor={id} className="h-full w-full py-2 px-6">
        <span className="block text-center my-2 mx-auto">{label}</span>
      </label>
    </>
  );
};
