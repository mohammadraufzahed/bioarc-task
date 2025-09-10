import { Field } from "../Field";
import { FieldError } from "../FieldError";
import { Label } from "../Label";
import { SelectInput } from "../SelectInput";

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
