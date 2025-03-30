import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box, Paper, Typography, Button, CircularProgress, Fade } from '@mui/material';
import Layout from '../components/Layout';

interface Candidate {
  id: number;
  name: string;
  party: string;
  imageUrl: string;
}

// Données de test (à remplacer par les vraies données)
const candidates: Candidate[] = [
  {
    id: 1,
    name: "Candidat 1",
    party: "Parti A",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Candidat 2",
    party: "Parti B",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Candidat 3",
    party: "Parti C",
    imageUrl: "https://via.placeholder.com/150"
  }
];

export default function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const candidateId = location.state?.candidateId;
  const selectedCandidate = candidates.find(c => c.id === candidateId);

  const handleConfirm = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    navigate('/thank-you');
  };

  if (!selectedCandidate) {
    return (
      <Layout 
        title="Erreur"
        subtitle="Aucun candidat sélectionné"
      >
        <Box sx={{ 
          maxWidth: 400, 
          mx: 'auto',
          mt: 4,
          textAlign: 'center'
        }}>
          <Paper 
            elevation={0}
            sx={{ 
              p: 4,
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <Typography variant="h6" color="error" gutterBottom>
              Oups ! Une erreur est survenue
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Vous devez d'abord sélectionner un candidat pour continuer.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/vote')}
              fullWidth
            >
              Retour au vote
            </Button>
          </Paper>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout 
      title="Confirmez votre choix"
      subtitle="Vérifiez que vous avez sélectionné le bon candidat"
    >
      <Fade in timeout={500}>
        <Box sx={{ 
          maxWidth: 600, 
          mx: 'auto',
          mt: 4
        }}>
          <Paper 
            elevation={0}
            sx={{ 
              p: 4,
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              mb: 4,
              p: 3,
              borderRadius: 2,
              background: 'linear-gradient(45deg, rgba(25, 118, 210, 0.1) 30%, rgba(33, 203, 243, 0.1) 90%)',
            }}>
              <Box
                component="img"
                src={selectedCandidate.imageUrl}
                alt={selectedCandidate.name}
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  mr: 3,
                  border: '3px solid #fff',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Box>
                <Typography variant="h4" gutterBottom>
                  {selectedCandidate.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {selectedCandidate.party}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center'
            }}>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/vote')}
                disabled={isSubmitting}
                sx={{ minWidth: 200 }}
              >
                Modifier mon choix
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={handleConfirm}
                disabled={isSubmitting}
                sx={{ 
                  minWidth: 200,
                  position: 'relative'
                }}
              >
                {isSubmitting ? (
                  <CircularProgress
                    size={24}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: '-12px',
                      marginLeft: '-12px',
                    }}
                  />
                ) : (
                  'Valider mon vote'
                )}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Fade>
    </Layout>
  );
} 