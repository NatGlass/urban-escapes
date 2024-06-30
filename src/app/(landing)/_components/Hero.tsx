import { Box, Button, Container, Typography } from "@mui/material";
function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/assets/hero.avif)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      width="100%"
      height="75vh"
      maxHeight="700px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Box
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
      />
      <Typography
        variant="h6"
        component="a"
        fontSize="small"
        href="https://www.pexels.com/photo/cozy-tent-with-bed-and-terrace-on-beach-4825701/"
        sx={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          color: "white",
          textDecoration: "none",
        }}
      >
        Image attribution: Photo by Rachel Claire
      </Typography>
      <Container maxWidth="xl" sx={{ zIndex: 1 }}>
        <Typography variant="h2" component="h1" color="white" fontWeight="bold">
          Find your urban escape
        </Typography>
        <Typography variant="h6" component="h2" color="white" maxWidth="sm">
          Explore our collection of unique accommodations in different locations
          around the world.
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 2 }}>
          View stays
        </Button>
      </Container>
    </Box>
  );
}

export default Hero;
