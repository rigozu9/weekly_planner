import { Button, Typography, Container, Box } from '@mui/material'

const Home = () => {
  return (
    <Container maxWidth="sm">
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            textAlign="center"
        >
            <Typography variant="h3" component="h1" gutterBottom>
                Welcome to study plan app
            </Typography>
            <Button variant="contained" color="primary" size="large">
                Get started
            </Button>
        </Box>

    </Container>
  )
}

export default Home