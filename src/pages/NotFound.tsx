import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Typography, Link, Container } from "@mui/material";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="#f5f5f5"
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Oops! Page not found
        </Typography>
        <Link href="/" underline="hover" color="primary">
          Return to Home
        </Link>
      </Container>
    </Box>
  );
};

export default NotFound;
