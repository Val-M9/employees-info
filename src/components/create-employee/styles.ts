import { keyframes, SxProps } from '@mui/material';
import { ColorPalette } from '../../global-styles/colors';

const modalSlideIn = keyframes`
0% {
  -webkit-transform: translateX(1000px);
          transform: translateX(1000px);
  opacity: 0;
}
100% {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
}
`;

const modalSlideOut = keyframes`
0% {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
}
100% {
  -webkit-transform: translateX(1000px);
          transform: translateX(1000px);
  opacity: 0;
}
`;

const flipIn = keyframes`
0% {
  -webkit-transform: rotateX(80deg);
          transform: rotateX(80deg);
  opacity: 0;
}
100% {
  -webkit-transform: rotateX(0);
          transform: rotateX(0);
  opacity: 1;
}
`;

export const modal: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ml: 2,
  mr: 2,
};

export const box: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  width: 800,
  height: 620,
  backgroundColor: 'background.paper',
  border: `2px solid ${ColorPalette.TEAL_800}`,
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
  animation: `${modalSlideIn} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
};

export const boxHide: SxProps = {
  '& .MuiModal-root': {
    animation: `${modalSlideOut} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
};

export const paper: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  backgroundColor: `${ColorPalette.GRAY_10}`,
  mt: 4,
  p: 4,
  animation: `${flipIn} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  animationDelay: '0.5s',
};

export const input: SxProps = {
  width: '100%',
  mt: 2,
  borderRadius: 'inherit',
  backgroundColor: `${ColorPalette.WHITE}`,
  '& .MuiInputBase-root, & .MuiFormLabel-root.Mui-focused': {
    height: 45,
    color: `${ColorPalette.TEAL_800}`,
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: `${ColorPalette.TEAL_600}`,
  },
};

export const closeBtn: SxProps = {
  position: 'absolute',
  top: 25,
  right: 30,
};

export const submitBtn: SxProps = {
  mt: 3,
};
