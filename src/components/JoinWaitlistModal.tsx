import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { X as CloseIcon } from "lucide-react";
import { useModalStore } from "../store/modalStore";
import Button from "./ui/button";
import TextField from "./ui/textField";

const JoinWaitlistModal: React.FC = () => {
  const { isJoinWaitlistOpen, closeJoinWaitlist } = useModalStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;

    // Here you would integrate with Salesforce form URL
    console.log("Form submitted:", formData);

    // Reset form and close modal
    setFormData({ name: "", email: "", phone: "", note: "" });
    closeJoinWaitlist();
  };

  return (
    <Dialog
      open={isJoinWaitlistOpen}
      onClose={closeJoinWaitlist}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          color: "white",
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Join Waitlist
        </Typography>
        <IconButton onClick={closeJoinWaitlist} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Typography
            variant="body2"
            sx={{ mb: 3, color: "rgba(255, 255, 255, 0.7)" }}
          >
            Be among the first to experience the future of equity investments
            with High Circle X.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Name"
              required
              value={formData.name}
              onChange={handleChange("name")}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              label="Email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange("email")}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              label="Phone"
              required
              value={formData.phone}
              onChange={handleChange("phone")}
              error={!!errors.phone}
              helperText={errors.phone}
            />

            <TextField
              label="Note (Optional)"
              multiline
              rows={3}
              value={formData.note}
              onChange={handleChange("note")}
              placeholder="Tell us about your investment interests..."
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 3 }}>
          {/* // Primary gradient button (default) */}
          <Button buttonType="primary">Join Waitlist</Button>
          {/* // Outlined button */}
          <Button buttonType="outline">Join Waitlist</Button>
          {/* // Regular text button (uses MUI's default styling) */}
          <Button variant="text">Join Waitlist</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default JoinWaitlistModal;
