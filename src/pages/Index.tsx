import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../theme/theme";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TokenizationOverview from "../components/TokenizationOverview";
import TokenizationCategories from "../components/TokenizationCategories";
import RecentOfferings from "../components/RecentOfferings";
import ModernizeInvesting from "../components/ModernizeInvesting";
import { RecentArticles } from "../components/RecentArticles";
import PartnersFooterPromo from "../components/PartnersFooterPromo";
import CuttingEdgeInvesting from "../components/CuttingEdgeInvesting";
//import Footer from "../components/Footer";
import JoinWaitlistModal from "../components/JoinWaitlistModal";

const Index: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    <HeroSection />
    <TokenizationOverview />
    <TokenizationCategories />
    <RecentOfferings />
    <ModernizeInvesting />
    <RecentArticles />
    <PartnersFooterPromo />
    <CuttingEdgeInvesting />
    <JoinWaitlistModal />
  </ThemeProvider>
);

export default Index;
