import { SxProps } from '@mui/material';
import { Control } from 'react-hook-form';
import { CreateEmployeeDto, FieldsNames } from '../../common/types';

export type InputProps = {
  name: FieldsNames;
  control: Control<CreateEmployeeDto, any>;
  label: string;
  sx: SxProps;
  errors: Record<string, any>;
  type?: 'date' | undefined;
  required?: boolean;
};
