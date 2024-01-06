import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado >= 30 && imcCalculado < 34.9) {
      setClassificacao('Obesidade Grau I');
    } else if (imcCalculado >= 35 && imcCalculado < 39.9) {
      setClassificacao('Obesidade Grau II');
    } else {
      setClassificacao('Obesidade Grau III');
    }
  };

  return (
    <Container className="App" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Calculadora de IMC
        </Typography>
        <form>
          <TextField
            label="Altura (cm)"
            type="number"
            fullWidth
            margin="normal"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
          <TextField
            label="Peso (kg)"
            type="number"
            fullWidth
            margin="normal"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth onClick={calcularIMC}>
            Calcular IMC
          </Button>
        </form>
        {imc !== null && (
          <div style={{ marginTop: '20px' }}>
            <Typography variant="h6" align="center" gutterBottom>
              Resultado
            </Typography>
            <Typography variant="body1" align="center">
              Seu IMC é: {imc}
            </Typography>
            <Typography variant="body1" align="center">
              Classificação: {classificacao}
            </Typography>
          </div>
        )}
      </Paper>
    </Container>
  );
}

export default App;
