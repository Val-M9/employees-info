import { FC } from 'react';
import { Modal, Box, TextField, Button, FormLabel, Paper } from '@mui/material';
import { box, modal, input, closeBtn, paper, submitBtn } from './styles';

type CreateEmployeeProps = {
  isOpen: boolean;
  onToggleModal: () => void;
};

const CreateEmployee: FC<CreateEmployeeProps> = ({ isOpen, onToggleModal }) => {
  return (
    <Modal open={isOpen} sx={modal} onClose={onToggleModal}>
      <Box sx={box}>
        <FormLabel>Fill Information About New Employee</FormLabel>
        <Button onClick={onToggleModal} color="error" variant="outlined" sx={closeBtn}>
          CLOSE
        </Button>
        <Paper sx={{ ...paper }}>
          <TextField label="Name" sx={{ ...input }} />
          <TextField label="Birthday" sx={{ ...input }} />
          <TextField label="Email" sx={{ ...input }} />
          <TextField label="Phone number" sx={{ ...input }} />
          <TextField label="Position" sx={{ ...input }} />
          <TextField label="Start date" sx={{ ...input }} />
          <Button color="success" variant="outlined" sx={submitBtn}>
            SUBMIT
          </Button>
        </Paper>
      </Box>
    </Modal>
  );
};

export { CreateEmployee };
