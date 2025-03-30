import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function Layout({ children, title, subtitle }: LayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
          py: 2
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 700,
                letterSpacing: '0.5px',
                color: 'white'
              }}
            >
              {title}
            </Typography>
          </Toolbar>
          {subtitle && (
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                mt: 1
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Container>
      </AppBar>

      <Container 
        maxWidth="lg" 
        sx={{ 
          flex: 1,
          py: 4,
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        {children}
      </Container>
    </Box>
  );
} 