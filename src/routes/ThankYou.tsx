import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography, Button, Fade, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Layout from '../components/Layout';

export default function ThankYou() {
  const navigate = useNavigate();
  const [hash, setHash] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    // Simuler la génération d'un hash (à remplacer par le vrai hash)
    const generateHash = () => {
      return Math.random().toString(36).substring(2, 15) + 
             Math.random().toString(36).substring(2, 15);
    };
    setHash(generateHash());
  }, []);

  const handleCopyHash = () => {
    navigator.clipboard.writeText(hash);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <Layout 
      title="Merci d'avoir voté !"
      subtitle="Votre vote a été enregistré avec succès"
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
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'center'
            }}
          >
            <Box sx={{ mb: 4 }}>
              <CheckCircleIcon 
                sx={{ 
                  fontSize: 80, 
                  color: 'success.main',
                  mb: 2
                }} 
              />
              <Typography variant="h5" gutterBottom>
                Vote enregistré avec succès
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Votre participation est importante pour notre démocratie
              </Typography>
            </Box>

            <Box sx={{ 
              p: 3,
              borderRadius: 2,
              background: 'linear-gradient(45deg, rgba(25, 118, 210, 0.1) 30%, rgba(33, 203, 243, 0.1) 90%)',
              mb: 4
            }}>
              <Typography variant="h6" gutterBottom>
                Hash de vérification
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Conservez ce hash pour vérifier votre vote ultérieurement
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1
              }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'monospace',
                    p: 1,
                    borderRadius: 1,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider'
                  }}
                >
                  {hash}
                </Typography>
                <IconButton
                  onClick={handleCopyHash}
                  color={copySuccess ? "success" : "primary"}
                  sx={{ 
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  {copySuccess ? <CheckCircleIcon /> : <ContentCopyIcon />}
                </IconButton>
              </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/')}
                sx={{ minWidth: 200 }}
              >
                Retour à l'accueil
              </Button>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ mt: 2 }}
              >
                Vous pouvez maintenant fermer cette fenêtre
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Fade>
    </Layout>
  );
} 