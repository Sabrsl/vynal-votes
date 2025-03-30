import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography, Button, CircularProgress, Grid, Fade } from '@mui/material';
import Layout from '../components/Layout';

interface Candidate {
  id: number;
  name: string;
  party: string;
  description: string;
  imageUrl: string;
}

// Données de test
const candidates: Candidate[] = [
  {
    id: 1,
    name: "Candidat 1",
    party: "Parti A",
    description: "Description du candidat 1",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Candidat 2",
    party: "Parti B",
    description: "Description du candidat 2",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Candidat 3",
    party: "Parti C",
    description: "Description du candidat 3",
    imageUrl: "https://via.placeholder.com/150"
  }
];

export default function Vote() {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVote = async () => {
    if (selectedCandidate) {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/confirmation', { state: { candidateId: selectedCandidate } });
    }
  };

  return (
    <Layout 
      title="Votez pour votre candidat"
      subtitle="Sélectionnez le candidat de votre choix"
    >
      <Grid container spacing={3}>
        {candidates.map((candidate) => (
          <Grid item xs={12} md={6} lg={4} key={candidate.id}>
            <Fade in timeout={500}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: selectedCandidate === candidate.id
                    ? 'linear-gradient(45deg, rgba(25, 118, 210, 0.1) 30%, rgba(33, 203, 243, 0.1) 90%)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: selectedCandidate === candidate.id
                    ? '2px solid #1976d2'
                    : '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                  },
                }}
                onClick={() => setSelectedCandidate(candidate.id)}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    component="img"
                    src={candidate.imageUrl}
                    alt={candidate.name}
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      mr: 2,
                      border: '2px solid #fff',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {candidate.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {candidate.party}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {candidate.description}
                </Typography>
                <Box
                  sx={{
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button
                    variant={selectedCandidate === candidate.id ? "contained" : "outlined"}
                    size="small"
                    disabled={loading}
                  >
                    {selectedCandidate === candidate.id ? "Sélectionné" : "Sélectionner"}
                  </Button>
                </Box>
              </Paper>
            </Fade>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleVote}
          disabled={!selectedCandidate || loading}
          sx={{ 
            minWidth: 200,
            position: 'relative'
          }}
        >
          {loading ? (
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
            'Continuer'
          )}
        </Button>
      </Box>
    </Layout>
  );
} 