// src/components/RecentOfferings.tsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { SectionContainer } from "../theme/theme";
import SpacexImg from "../assets/Spacex R1.svg";
import CarillonImg from "../assets/Carillon Parc/Southlake.svg";
import KlarnaImg from "../assets/Klarna.svg";

const offerings = [
  {
    title: "SpaceX Round 1",
    description:
      "SpaceX develops and launches high-performance rockets and spacecraft, pioneering advancements in space exploration.",
    image: SpacexImg,
  },
  {
    title: "Southlake, TX",
    description:
      "Carillon Parc is an experiential 42-acre mixed-use development project in Southlake, TX.",
    image: CarillonImg,
  },
  {
    title: "Klarna",
    description:
      "Klarna is a leading Swedish fintech firm that specializes in “buy now, pay later” digital payments for online retail outlets.",
    image: KlarnaImg,
  },
];

const RecentOfferings: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SectionContainer maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 1, color: "text.primary" }}
      >
        Recent Offerings
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
        From SpaceX to Subdivisions, we have something for every investor
      </Typography>
      <Button
        variant="contained"
        sx={{
          mb: 6,
          textTransform: "none",
          fontSize: "1rem",
          px: 4,
          py: 1.5,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        See All
      </Button>

      {/* Flex layout: all three side by side */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "nowrap",
          overflowX: isMobile ? "auto" : "visible",
          p: { xs: 2, md: 0 },
        }}
      >
        {offerings.map((off) => (
          <Box
            key={off.title}
            sx={{
              width: 393,
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.1)",
              backgroundColor: "background.paper",
              overflow: "hidden",
              flex: "0 0 auto",
            }}
          >
            {/* Image */}
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={off.image}
                alt={off.title}
                sx={{ width: "100%", height: 240, objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "40%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                }}
              />
            </Box>

            {/* Text */}
            <Box sx={{ p: 3, textAlign: "left" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 1, color: "text.primary" }}
              >
                {off.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {off.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </SectionContainer>
  );
};

export default RecentOfferings;
