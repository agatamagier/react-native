import { Controller } from "react-hook-form";
import { Input } from "./Input";

export const ControlledInput = ({ name, control, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onBlur, onChange, ref, value, disabled },
        fieldState: { error },
      }) => (
        <Input
          value={value}
          onBlur={onBlur}
          inputRef={ref}
          editable={!disabled}
          onChangeText={onChange}
          errorMessage={error?.message}
          {...rest}
        />
      )}
    />
  );
};
