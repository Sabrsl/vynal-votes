import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Paper, Grid, Button } from '@mui/material';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
        {/* Header */}
        <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 4, mb: 4 }}>
          <Container>
            <Typography variant="h3" component="h1" gutterBottom>
              Système de Vote Électronique
            </Typography>
            <Typography variant="h6">
              Plateforme sécurisée et transparente pour les élections au Sénégal
            </Typography>
          </Container>
        </Box>

        {/* Main Content */}
        <Container>
          <Grid container spacing={4}>
            {/* Stats Section */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  100%
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Sécurisé
                </Typography>
                <Typography variant="body2">
                  Chiffrement de bout en bout et authentification forte
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  100%
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Anonyme
                </Typography>
                <Typography variant="body2">
                  Protection de la vie privée des électeurs
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  100%
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Transparent
                </Typography>
                <Typography variant="body2">
                  Vérification publique des résultats
                </Typography>
              </Paper>
            </Grid>

            {/* Features Section */}
            <Grid item xs={12}>
              <Paper sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                  Fonctionnalités Principales
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      • Authentification sécurisée
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Via numéro CNI ou NINEA avec validation OTP
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      • Interface multilingue
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Français, Wolof, Pulaar
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      • Chiffrement de bout en bout
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      AES-256 + RSA pour une sécurité maximale
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      • Accès multiple
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Web, mobile et USSD/SMS
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Call to Action */}
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center', my: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ mr: 2 }}
                  onClick={() => navigate('/login')}
                >
                  Voter maintenant
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ ml: 2 }}
                  onClick={() => navigate('/observer')}
                >
                  Vérifier les résultats
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
} 