import { Field } from "../Layouts/Field";
import { FieldError } from "../Primitives/FieldError";
import { Label } from "../Primitives/Label";
import { SelectInput } from "../Primitives/SelectInput";

interface SelectFieldProps extends React.PropsWithChildren {
  label: string;
  labelProps?: React.ComponentProps<typeof Label>;
  selectProps?: React.ComponentProps<typeof SelectInput>;
  error?: string;
}

export const SelectField = ({
  label,
  labelProps,
  selectProps,
  error,
  children,
}: SelectFieldProps) => {
  return (
    <Field>
      <Label {...labelProps} error={Boolean(error)}>
        {label}
      </Label>
      <SelectInput {...selectProps} error={Boolean(error)}>
        {children}
      </SelectInput>
      {error ? <FieldError>{error}</FieldError> : null}
    </Field>
  );
};
