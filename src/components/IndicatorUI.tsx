import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface IndicatorUIProps {
  title?: string;
  description?: string;
}

export default function IndicatorUI(props: IndicatorUIProps) {
  return (
    <Card
      elevation={3}
      sx={{
        backgroundColor: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: 3,
        py: 2,
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontWeight: 700,
            color: '#000',
            mb: 1,
          }}
        >
          {props.description}
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{
            color: '#555',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontWeight: 500,
          }}
        >
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
