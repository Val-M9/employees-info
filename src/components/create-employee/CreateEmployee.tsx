import { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Modal, Box, Button, FormLabel, Paper } from '@mui/material';
import { createEmployeeRules } from '../../validation/createEmployeeRules';
import { Input } from '../input/Input';
import { formLabel, box, modal, input, closeBtn, paper, submitBtn, datePicker } from './styles';

type CreateEmployeeProps = {
  isOpen: boolean;
  onToggleModal: () => void;
};

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

  const onSubmit = useCallback((data: any) => {
    console.log('Data:', data);
    reset();
  }, []);

  return (
    <Modal open={isOpen} sx={modal} onClose={onToggleModal}>
      <Box sx={box}>
        <FormLabel sx={formLabel}>Fill Information About New Employee</FormLabel>
        <Button onClick={onToggleModal} color="error" variant="outlined" sx={closeBtn}>
          CLOSE
        </Button>
        <Paper sx={{ ...paper }}>
          <Input
            name="firstName"
            control={control}
            label="First Name"
            sx={{ ...input }}
            errors={errors}
          />
          <Input
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
          <Input name="email" control={control} label="Email" sx={{ ...input }} errors={errors} />
          <Input
            name="phone"
            control={control}
            label="Phone number"
            sx={{ ...input }}
            errors={errors}
          />
          <Input
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
            // disabled={Boolean(errors)}
          >
            SUBMIT
          </Button>
        </Paper>
      </Box>
    </Modal>
  );
};

export { CreateEmployee };
