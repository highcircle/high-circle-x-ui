
import React from 'react';
import { TextField as MuiTextField, TextFieldProps } from '@mui/material';

interface CustomTextFieldProps extends Omit<TextFieldProps, 'label'> {
  label: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ label, ...props }) => {
  return (
    <MuiTextField
      label={label}
      fullWidth
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#667eea',
          },
        },
        '& .MuiInputLabel-root': {
          color: 'rgba(255, 255, 255, 0.7)',
          '&.Mui-focused': {
            color: '#667eea',
          },
        },
        '& .MuiOutlinedInput-input': {
          color: 'white',
        },
      }}
      {...props}
    />
  );
};

export default CustomTextField;
