// src/components/TokenizationCategories.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { SectionContainer } from "../theme/theme";
import CategoriesImg from "../assets/Real Estate, Pre-IPO Shares, and So Much More.svg";

const TokenizationCategories: React.FC = () => {
  return (
    <SectionContainer
      maxWidth="lg"
      sx={{ display: "flex", justifyContent: "center", py: 8 }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: 1200 },
          height: { xs: 400, md: 500 },
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "hidden",
          backgroundImage: `url(${CategoriesImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlayed Text */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: 24, md: 60 },
            left: { xs: 24, md: 60 },
            right: { xs: 24, md: "50%" },
            bottom: { xs: 24, md: 60 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            // NO background: transparent panel so the image shows through
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#fff" }}>
            Blockchain-Powered Fractional Ownership
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.85)" }}>
            Our platform leverages blockchain-based tokenization, enabling
            fractional ownership of private assets.
          </Typography>
          <Button
            variant="contained"
            sx={{
              alignSelf: "flex-start",
              textTransform: "none",
              fontSize: "1rem",
              px: 4,
              py: 1.5,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default TokenizationCategories;
