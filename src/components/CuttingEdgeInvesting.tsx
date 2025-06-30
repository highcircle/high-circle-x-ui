// src/components/CuttingEdgeInvesting.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { SectionContainer } from "../theme/theme";
import { useModalStore } from "../store/modalStore";
import InvestingImg from "../assets/CTA/Web.svg"; // replace with correct path if needed

const CuttingEdgeInvesting: React.FC = () => {
  const { openJoinWaitlist } = useModalStore();

  return (
    <SectionContainer
      maxWidth="lg"
      sx={{ display: "flex", justifyContent: "center", py: 8 }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: 1200 },
          height: { xs: 300, md: 432 },
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "hidden",
          backgroundImage: `url(${InvestingImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlayed Text Panel */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: 16, md: 60 },
            left: { xs: 16, md: 60 },
            right: { xs: 16, md: "50%" },
            bottom: { xs: 16, md: 60 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#fff" }}>
            Cutting Edge Investing.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(255,255,255,0.85)", mb: 3 }}
          >
            Become a part of our investor network and gain access to exclusive
            investments and insights.
          </Typography>
          <Button
            variant="contained"
            onClick={openJoinWaitlist}
            sx={{
              textTransform: "none",
              fontSize: "1rem",
              px: 4,
              py: 1.5,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Join Waitlist
          </Button>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default CuttingEdgeInvesting;
