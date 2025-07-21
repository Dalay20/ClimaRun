import Alert from '@mui/material/Alert';

interface AlertConfig {
  description: string;
  severity?: 'info' | 'warning' | 'error' | 'success';
}

export default function AlertUI({ description, severity = 'info' }: AlertConfig) {
  return (
    <Alert variant="standard" severity={severity} sx={{ my: 1 }}>
      {description}
    </Alert>
  );
}
