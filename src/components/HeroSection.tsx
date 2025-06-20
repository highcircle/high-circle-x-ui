import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { useModalStore } from "../store/modalStore";
import CustomButton from "./ui/Button";
import HCXBG from "../assets/hcx_background_drop.svg";

const HeroSection: React.FC = () => {
  const { openJoinWaitlist } = useModalStore();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        background:
          "radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f0f0f 100%)",
        overflow: "hidden",
      }}
    >
      {/* Rotating Cube Image */}
      <Box
        component="img"
        src={HCXBG} // Replace with your cube image path
        alt="Rotating Cube"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.7,
          animation: "rotateCube 10s linear infinite",
          "@keyframes rotateCube": {
            from: {
              transform: "translate(-50%, -50%) rotate(0deg)",
            },
            to: {
              transform: "translate(-50%, -50%) rotate(360deg)",
            },
          },
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            color: "white",
            zIndex: 1,
            position: "relative",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
              fontWeight: "bold",
              mb: 2,
              background: "linear-gradient(135deg, #ffffff 0%, #667eea 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "fadeInUp 1s ease-out",
              "@keyframes fadeInUp": {
                from: {
                  opacity: 0,
                  transform: "translateY(30px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            Unlocking New Horizons
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              fontWeight: 600,
              mb: 3,
              color: "#667eea",
              animation: "fadeInUp 1s ease-out 0.2s both",
              "@keyframes fadeInUp": {
                from: {
                  opacity: 0,
                  transform: "translateY(30px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            The Future of Equity Investments
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              mb: 4,
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
              animation: "fadeInUp 1s ease-out 0.4s both",
              "@keyframes fadeInUp": {
                from: {
                  opacity: 0,
                  transform: "translateY(30px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            Embracing Technological Advancements in Investment Strategies
          </Typography>

          <Box
            sx={{
              animation: "fadeInUp 1s ease-out 0.6s both",
              "@keyframes fadeInUp": {
                from: {
                  opacity: 0,
                  transform: "translateY(30px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <CustomButton
              variant="gradient"
              size="large"
              onClick={openJoinWaitlist}
              sx={{
                fontSize: "1.1rem",
                px: 4,
                py: 2,
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 30px rgba(102, 126, 234, 0.5)",
                },
              }}
            >
              Join Waitlist
            </CustomButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
