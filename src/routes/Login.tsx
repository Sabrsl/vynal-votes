import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography, TextField, Button, CircularProgress } from '@mui/material';
import Layout from '../components/Layout';

export default function Login() {
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    if (!otpSent) {
      // Simuler l'envoi du code OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOtpSent(true);
    } else {
      // Simuler la validation du code OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/vote');
    }
    
    setLoading(false);
  };

  return (
    <Layout 
      title="Connexion Électeur"
      subtitle="Entrez votre identifiant pour recevoir un code de vérification"
    >
      <Box sx={{ 
        maxWidth: 400, 
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
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Identifiant (CNI ou NINEA)"
              variant="outlined"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              disabled={otpSent || loading}
              sx={{ mb: 3 }}
            />

            {otpSent && (
              <TextField
                fullWidth
                label="Code de vérification"
                variant="outlined"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                disabled={loading}
                sx={{ mb: 3 }}
              />
            )}

            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              sx={{ 
                py: 1.5,
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
                otpSent ? 'Valider le code' : 'Recevoir le code'
              )}
            </Button>
          </form>
        </Paper>
      </Box>
    </Layout>
  );
} 