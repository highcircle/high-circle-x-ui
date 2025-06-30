import React from "react";
import {
  TextField as MuiTextField,
  TextFieldProps,
  styled,
} from "@mui/material";

const StyledTextField = styled(MuiTextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    color: "white",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.2)",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#667eea",
      borderWidth: "2px",
    },
    "&.Mui-error fieldset": {
      borderColor: "#f44336",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-focused": {
      color: "#667eea",
    },
    "&.Mui-error": {
      color: "#f44336",
    },
  },
  "& .MuiFormHelperText-root": {
    color: "rgba(255, 255, 255, 0.6)",
    "&.Mui-error": {
      color: "#f44336",
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.5)",
      opacity: 1,
    },
  },
});

const textField: React.FC<TextFieldProps> = (props) => {
  return <StyledTextField variant="outlined" fullWidth {...props} />;
};

export default textField;
