
import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'text' | 'outlined' | 'contained' | 'gradient';
}

const GradientButton = styled(MuiButton)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  border: 0,
  borderRadius: 8,
  color: 'white',
  fontWeight: 600,
  textTransform: 'none',
  padding: '12px 24px',
  '&:hover': {
    background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
  },
  transition: 'all 0.3s ease',
}));

const CustomButton: React.FC<CustomButtonProps> = ({ variant = 'contained', children, ...props }) => {
  if (variant === 'gradient') {
    return (
      <GradientButton {...props}>
        {children}
      </GradientButton>
    );
  }

  return (
    <MuiButton
      variant={variant}
      sx={{
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
        },
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default CustomButton;
