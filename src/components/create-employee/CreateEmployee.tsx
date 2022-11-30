import { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Modal, Box, Button, FormLabel, Paper } from '@mui/material';
import { createEmployeeRules } from '../../validation/createEmployeeRules';
import { CreateEmployeeDto } from '../../common/types';
import { DataStatus } from '../../common/enums';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { newEmployeeParser } from '../../helpers';
import { addEmployee } from '../../store/actions';
import { selectEmployeesDataStatus } from '../../store/selectors';
import { Input } from '../input/Input';
import { CreateEmployeeProps } from './prop-types';
import { formLabel, box, modal, input, closeBtn, paper, submitBtn, datePicker } from './styles';

const CreateEmployee: FC<CreateEmployeeProps> = ({ isOpen, onToggleModal }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      birthday: '',
      email: '',
      phone: '',
      position: '',
      dateOfHiring: '',
    },
    resolver: joiResolver(createEmployeeRules),
  });
  const dispatch = useAppDispatch();
  const dataStatus = useAppSelector(selectEmployeesDataStatus);
  const isLoading = dataStatus === DataStatus.PENDING;

  const onSubmit = useCallback(
    (formData: CreateEmployeeDto) => {
      dispatch(addEmployee(newEmployeeParser(formData)))
        .unwrap()
        .then(() => {
          onToggleModal();
        });
      reset();
    },
    [dispatch, reset, onToggleModal],
  );

  return (
    <Modal open={isOpen} sx={modal} onClose={onToggleModal}>
      <Box sx={box}>
        <FormLabel sx={formLabel}>Fill Information About New Employee</FormLabel>
        <Button onClick={onToggleModal} color="error" variant="outlined" sx={closeBtn}>
          CLOSE
        </Button>
        <Paper sx={{ ...paper }}>
          <Input
            required={true}
            name="firstName"
            control={control}
            label="First Name"
            sx={{ ...input }}
            errors={errors}
          />
          <Input
            required={true}
            name="lastName"
            control={control}
            label="Last Name"
            sx={{ ...input }}
            errors={errors}
          />
          <Input
            name="birthday"
            control={control}
            label="Birthday"
            sx={{ ...datePicker }}
            errors={errors}
            type="date"
          />
          <Input
            required={true}
            name="email"
            control={control}
            label="Email"
            sx={{ ...input }}
            errors={errors}
          />
          <Input
            required={true}
            name="phone"
            control={control}
            label="Phone number"
            sx={{ ...input }}
            errors={errors}
          />
          <Input
            required={true}
            name="position"
            control={control}
            label="Position"
            sx={{ ...input }}
            errors={errors}
          />
          <Input
            name="dateOfHiring"
            control={control}
            label="Start date"
            sx={{ ...datePicker }}
            errors={errors}
            type="date"
          />
          <Button
            color="success"
            variant="outlined"
            sx={submitBtn}
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            SUBMIT
          </Button>
        </Paper>
      </Box>
    </Modal>
  );
};

export { CreateEmployee };
