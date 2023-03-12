import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { StyledEngineProvider } from '@mui/material/styles';
import DataGridTest from './grid';
import DataGridFromLocalServer from './grid2'

export default function App() {
  return (

      <React.StrictMode>
        <StyledEngineProvider injectFirst>
          <Container maxWidth="xl">
            <Box sx={{ my: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Test React, TypeScript, mui
              </Typography>
            </Box>
            <DataGridTest />
            <DataGridFromLocalServer />
            </Container>
        </StyledEngineProvider>
      </React.StrictMode>
  );
}
