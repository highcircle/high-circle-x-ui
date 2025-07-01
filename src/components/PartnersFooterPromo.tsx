import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { SectionContainer } from "../theme/theme";

const partnerNames = [
  "AWS",
  "Azure",
  "Auth0",
  "Carta",
  "MongoDB",
  "Webflow",
  "Figma",
  "Amplitude",
  "Twilio",
  "GitHub",
];

const PartnersFooterPromo: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SectionContainer maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 1, color: "text.primary" }}
      >
        Our Partners
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
        With our partners, we simplify complexity and build smarter systems for
        a changing world.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          alignItems: "center",
        }}
      >
        {partnerNames.map((name) => (
          <Box
            key={name}
            sx={{
              width: isMobile ? 80 : 100,
              height: isMobile ? 40 : 60,
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="caption" sx={{ color: "text.primary" }}>
              {name}
            </Typography>
          </Box>
        ))}
      </Box>
    </SectionContainer>
  );
};

export default PartnersFooterPromo;
