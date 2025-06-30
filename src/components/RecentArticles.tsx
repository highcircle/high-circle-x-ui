import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { SectionContainer } from "../theme/theme";

const dummyArticles = [
  {
    date: "Nov 16, 2020",
    title: "High Circle Was Recently Featured By Carta",
    author: "Karta",
    readTime: "5 min read",
  },
  {
    date: "Nov 05, 2020",
    title: "Blockchain Moves Into Commercial Real Estate",
    author: "Robert O'Brien",
    readTime: "5 min read",
  },
  {
    date: "Nov 27, 2020",
    title: "Tokens Are The Securities Of Tomorrow",
    author: "Laurent Collet",
    readTime: "5 min read",
  },
];

const RecentArticles: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SectionContainer maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 1, color: "text.primary" }}
      >
        More Recent Articles
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
        Explore the Future of Private Equity & Venture Capital
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: isMobile ? "wrap" : "nowrap",
        }}
      >
        {dummyArticles.map((art) => (
          <Box
            key={art.title}
            sx={{
              width: isMobile ? "100%" : 300,
              borderRadius: 2,
              border: "1px solid rgba(255,255,255,0.1)",
              overflow: "hidden",
              backgroundColor: "background.paper",
            }}
          >
            {/* Placeholder image area */}
            <Box
              sx={{ height: 150, backgroundColor: "rgba(255,255,255,0.05)" }}
            />
            {/* Article text */}
            <Box sx={{ p: 2, textAlign: "left" }}>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {art.date}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5, mb: 1 }}>
                {art.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {art.author} • {art.readTime}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{
          mt: 6,
          textTransform: "none",
          fontSize: "1rem",
          px: 4,
          py: 1.5,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        Keep Reading
      </Button>
    </SectionContainer>
  );
};

export { RecentArticles };
