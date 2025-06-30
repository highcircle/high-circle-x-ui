// src/components/ModernizeInvesting.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { SectionContainer } from "../theme/theme";
import ModernImg from "../assets/Interested in Raising funds.svg";

const ModernizeInvesting: React.FC = () => {
  return (
    <SectionContainer
      maxWidth="lg"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          position: "relative",
          width: 1200,
          height: 432,
          p: "60px 40px 60px 60px",
          gap: "10px",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "hidden",
          backgroundImage: `url(${ModernImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Text Overlay - constrained to left side */}
        <Box
          sx={{
            position: "absolute",
            top: "60px",
            left: "60px",
            right: "50%",
            bottom: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            background: "transparent",
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#fff" }}>
            Modernize Private Investing
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)" }}>
            Curious how tokenization can transform your private equity projects?
            Through our HCX platform, we enable qualified investors and asset
            holders to fractionalize and trade traditionally illiquid assets.
            Whether you’re looking to exit early or rebalance your portfolio, we
            help turn assets into strategic opportunities.
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
            Submit a Project
          </Button>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
            ** All Investments Are Subject To Project Approval And HCX Platform
            Terms.
          </Typography>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default ModernizeInvesting;
