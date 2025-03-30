import { useState, useEffect } from 'react';
import { Box, Paper, Typography, Grid, CircularProgress, Fade } from '@mui/material';
import Layout from '../components/Layout';

interface Candidate {
  id: number;
  name: string;
  party: string;
  votes: number;
  percentage: number;
}

// Données de test
const candidates: Candidate[] = [
  {
    id: 1,
    name: "Candidat 1",
    party: "Parti A",
    votes: 1500,
    percentage: 45
  },
  {
    id: 2,
    name: "Candidat 2",
    party: "Parti B",
    votes: 1200,
    percentage: 35
  },
  {
    id: 3,
    name: "Candidat 3",
    party: "Parti C",
    votes: 600,
    percentage: 20
  }
];

export default function Observer() {
  const [loading, setLoading] = useState(true);
  const [totalVotes, setTotalVotes] = useState(0);
  const [participationRate, setParticipationRate] = useState(0);

  useEffect(() => {
    // Simuler le chargement des données
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    // Calculer le total des votes et le taux de participation
    const total = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);
    setTotalVotes(total);
    // Simuler un taux de participation (à remplacer par les vraies données)
    setParticipationRate(75);
  }, []);

  return (
    <Layout 
      title="Résultats en temps réel"
      subtitle="Suivez l'évolution des votes"
    >
      <Fade in timeout={500}>
        <Grid container spacing={3}>
          {/* Statistiques globales */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                background: 'linear-gradient(45deg, rgba(25, 118, 210, 0.1) 30%, rgba(33, 203, 243, 0.1) 90%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Typography variant="h6" gutterBottom>
                Total des votes
              </Typography>
              <Typography variant="h3" color="primary">
                {loading ? (
                  <CircularProgress size={40} />
                ) : (
                  totalVotes.toLocaleString()
                )}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                background: 'linear-gradient(45deg, rgba(25, 118, 210, 0.1) 30%, rgba(33, 203, 243, 0.1) 90%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Typography variant="h6" gutterBottom>
                Taux de participation
              </Typography>
              <Typography variant="h3" color="primary">
                {loading ? (
                  <CircularProgress size={40} />
                ) : (
                  `${participationRate}%`
                )}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                background: 'linear-gradient(45deg, rgba(25, 118, 210, 0.1) 30%, rgba(33, 203, 243, 0.1) 90%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Typography variant="h6" gutterBottom>
                Dernière mise à jour
              </Typography>
              <Typography variant="h3" color="primary">
                {loading ? (
                  <CircularProgress size={40} />
                ) : (
                  new Date().toLocaleTimeString()
                )}
              </Typography>
            </Paper>
          </Grid>

          {/* Résultats par candidat */}
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Typography variant="h5" gutterBottom>
                Résultats par candidat
              </Typography>
              <Box sx={{ mt: 3 }}>
                {candidates.map((candidate) => (
                  <Box
                    key={candidate.id}
                    sx={{
                      mb: 3,
                      '&:last-child': { mb: 0 }
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle1">
                        {candidate.name} ({candidate.party})
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        {candidate.votes.toLocaleString()} votes
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: 8,
                        bgcolor: 'grey.200',
                        borderRadius: 4,
                        overflow: 'hidden'
                      }}
                    >
                      <Box
                        sx={{
                          height: '100%',
                          width: `${candidate.percentage}%`,
                          bgcolor: 'primary.main',
                          borderRadius: 4,
                          transition: 'width 1s ease-in-out'
                        }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {candidate.percentage}%
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Fade>
    </Layout>
  );
} 