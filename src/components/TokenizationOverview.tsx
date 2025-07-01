// src/components/TokenizationOverview.tsx
import React from "react";
import {
  Grid,
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { SectionContainer, SectionSubtitle, SectionBody } from "../theme/theme";
import EnterpriseImg from "../assets/Bringing Liquidity to Illiquid Assets..svg";
import EnterpriseImgMobile from "../assets/Bringing Liquidity to Illiquid Assets.-1.svg";
import TokenImg from "../assets/What is Tokenization.svg";
import TokenImgMobile from "../assets/What is Tokenization_.svg";

const TokenizationOverview: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SectionContainer maxWidth="lg" sx={{ py: 8 }}>
      {/* Title */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 400, mb: 1 }}>
          Enterprise-Grade Tokenization Made Simple
        </Typography>
        <SectionSubtitle>
          Unlocking liquidity in private markets
        </SectionSubtitle>
      </Box>

      {/* Two side-by-side cards */}
      <Grid container spacing={4} justifyContent="center">
        {/* Left Card */}
        <Grid item xs={12} sm={6} {...({} as any)} component="div">
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 576,
              height: 675,
              mx: "auto",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.1)",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={isMobile ? EnterpriseImgMobile : EnterpriseImg}
              alt="Bringing Liquidity"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box sx={{ position: "absolute", top: 8, left: 24, right: 24 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "1.5rem",
                  whiteSpace: "nowrap",
                  mb: 0.25,
                }}
              >
                Bringing Liquidity to Illiquid Assets.
              </Typography>
              <SectionBody sx={{ color: "#fff", mt: 0.25 }}>
                HighCircleX is a blockchain-based asset marketplace developed by
                High Circle Ventures.
              </SectionBody>
            </Box>
          </Box>
        </Grid>

        {/* Right Card */}
        <Grid item xs={12} sm={6} {...({} as any)} component="div">
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 576,
              height: 675,
              mx: "auto",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.1)",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={isMobile ? TokenImgMobile : TokenImg}
              alt="What is Tokenization"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box sx={{ position: "absolute", top: 8, left: 24, right: 24 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "1.5rem",
                  whiteSpace: "nowrap",
                  mb: 0.25,
                }}
              >
                What is Tokenization?
              </Typography>
              <SectionBody sx={{ color: "#fff", mt: 0.25 }}>
                Asset tokenization converts ownership rights of an asset into
                digital tokens on a blockchain.
              </SectionBody>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default TokenizationOverview;
