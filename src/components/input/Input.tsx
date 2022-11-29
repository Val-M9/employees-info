import { FC } from 'react';
import { SxProps, TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { CreateEmployeeDto } from '../../common/types';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type InputProps = {
  name: 'position' | 'firstName' | 'lastName' | 'phone' | 'email' | 'birthday' | 'dateOfHiring';
  control: Control<CreateEmployeeDto, any>;
  label: string;
  sx: SxProps;
  errors: Record<string, any>;
  type?: 'date' | undefined;
};

const Input: FC<InputProps> = ({ name, control, label, sx, errors, type }) => {
  const error = errors[name]?.message;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, onBlur, ...restField } }) => (
          <>
            {type ? (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label={label}
                  value={value}
                  onChange={onChange}
                  renderInput={(params) => (
                    <TextField
                      label={label}
                      value={value}
                      onChange={onChange}
                      sx={sx}
                      {...params}
                      helperText={Boolean(error) ? error : ''}
                    />
                  )}
                  {...restField}
                />
              </LocalizationProvider>
            ) : (
              <TextField
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                label={label}
                sx={sx}
                helperText={Boolean(error) ? error : ''}
              />
            )}
          </>
        )}
      />
    </>
  );
};

export { Input };
