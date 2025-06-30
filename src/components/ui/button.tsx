import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";

interface buttonProps extends MuiButtonProps {
  buttonType?: "primary" | "secondary" | "outline";
}

const StyledButton = styled(MuiButton)<buttonProps>(({ buttonType }) => ({
  borderRadius: "12px",
  textTransform: "none",
  fontWeight: 600,
  fontSize: "16px",
  padding: "12px 24px",
  transition: "all 0.3s ease",

  ...(buttonType === "primary" && {
    backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    border: "none",
    "&:hover": {
      backgroundImage: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
    },
    "&:active": {
      transform: "translateY(0)",
    },
  }),

  ...(buttonType === "outline" && {
    backgroundColor: "transparent",
    color: "#667eea",
    border: "2px solid #667eea",
    "&:hover": {
      backgroundColor: "rgba(102, 126, 234, 0.1)",
      borderColor: "#5a6fd8",
      transform: "translateY(-2px)",
    },
    "&:active": {
      transform: "translateY(0)",
    },
  }),
}));

const button: React.FC<buttonProps> = ({
  buttonType = "primary",
  children,
  ...props
}) => {
  const muiVariant =
    buttonType === "primary"
      ? "contained"
      : buttonType === "outline"
      ? "outlined"
      : "text";

  return (
    <StyledButton variant={muiVariant} buttonType={buttonType} {...props}>
      {children}
    </StyledButton>
  );
};

export default button;
