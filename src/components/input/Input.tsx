import { FC } from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';
import { InputProps } from './prop-types';

const Input: FC<InputProps> = ({ name, control, label, sx, errors, type, required }) => {
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
                  disableFuture={true}
                  renderInput={(params) => (
                    <TextField
                      label={label}
                      value={JSON.stringify(value)}
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
                InputLabelProps={required ? { required: true } : { required: false }}
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
