import { Field } from "../Field";
import { FieldError } from "../FieldError";
import { Input } from "../Input";
import { Label } from "../Label";

interface InputFieldProps {
  label: string;
  labelProps?: React.ComponentProps<typeof Label>;
  inputProps?: React.ComponentProps<typeof Input>;
  error?: string;
}

export const InputField = ({
  label,
  error,
  labelProps = {},
  inputProps = {},
}: InputFieldProps) => {
  return (
    <Field>
      <Label {...labelProps} error={Boolean(error)}>
        {label}
      </Label>
      <Input {...inputProps} error={Boolean(error)} />
      {error ? <FieldError>{error}</FieldError> : null}
    </Field>
  );
};
