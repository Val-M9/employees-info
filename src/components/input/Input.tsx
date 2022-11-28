import { FC } from 'react';
import { Popover, SxProps, TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { CreateEmployeeDto } from '../../common/types';

type InputProps = {
  name: any;
  control: Control<CreateEmployeeDto, any>;
  label: string;
  sx: SxProps;
  errors: Record<string, any>;
};

const Input: FC<InputProps> = ({ name, control, label, sx, errors }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <TextField onChange={onChange} value={value} label={label} sx={sx} />
            {errors && (
              <Popover open={errors[name] ? true : false}>{errors[name]?.message}</Popover>
            )}
          </>
        )}
      />
    </>
  );
};

export { Input };
