import { Field } from "../Layouts/Field";
import { TextInput } from "../Primitives";
import { FieldError } from "../Primitives/FieldError";
import { Label } from "../Primitives/Label";

interface TextInputFieldProps {
  label: string;
  labelProps?: React.ComponentProps<typeof Label>;
  inputProps?: React.ComponentProps<typeof TextInput>;
  error?: string;
}

export const TextInputField = ({
  label,
  error,
  labelProps = {},
  inputProps = {},
}: TextInputFieldProps) => {
  return (
    <Field>
      <Label {...labelProps} error={Boolean(error)}>
        {label}
      </Label>
      <TextInput {...inputProps} error={Boolean(error)} />
      {error ? <FieldError>{error}</FieldError> : null}
    </Field>
  );
};
