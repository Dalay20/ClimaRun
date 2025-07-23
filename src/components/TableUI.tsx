import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import DataFetcher from '../functions/DataFetcher';
import type { OpenMeteoResponse } from '../types/DashboardTypes';

function getRows(data: OpenMeteoResponse) {
  if (
    !data ||
    !data.daily ||
    !data.daily.time ||
    !data.daily.temperature_2m_max ||
    !data.daily.temperature_2m_min
  ) {
    return [];
  }

  return data.daily.time.map((date, i) => {
    const tempMax = data.daily.temperature_2m_max[i];
    const tempMin = data.daily.temperature_2m_min[i];
    const uvMax = data.daily.uv_index_max[i];
    const lluvia = data.daily.rain_sum[i];
    const nubes = data.daily.cloud_cover_mean[i];

    // Índice Runner simple (ajústalo según tus criterios)
    const runnerScore = Math.round(
      100 -
      (Math.abs(tempMax - 20) * 2 + uvMax * 3 + lluvia * 5 + nubes * 0.5)
    );

    return {
      id: i,
      dia: date,
      tempMax,
      tempMin,
      uvMax,
      lluvia,
      nubes,
      runnerScore: Math.max(0, Math.min(100, runnerScore)), // lo limitamos entre 0 y 100
    };
  });
}


const columns: GridColDef[] = [
  { field: 'dia', headerName: '📅 Día', width: 110 },
  { field: 'tempMax', headerName: '🌡️ Máx (°C)', width: 120 },
  { field: 'tempMin', headerName: '🌡️ Mín (°C)', width: 120 },
  { field: 'uvMax', headerName: '☀️ UV máx', width: 100 },
  { field: 'lluvia', headerName: '🌧️ Lluvia (mm)', width: 130 },
  { field: 'nubes', headerName: '☁️ Nubes (%)', width: 130 },
  {
    field: 'runnerScore',
    headerName: '👟 Índice Runner',
    width: 160,
    renderCell: (params) => {
      const value = params.value;
      const color =
        value >= 70
          ? 'green'
          : value >= 40
            ? 'orange'
            : 'red';
      return (
        <span style={{ color, fontWeight: 'bold' }}>{value}</span>
      );
    },
  },
];


export default function TableUI({ city }: { city: string }) {
  const { data, loading, error } = DataFetcher(city);

  const rows = getRows(data as OpenMeteoResponse);
  const dataError = !loading && !error && rows.length === 0;

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {dataError && (
        <Alert severity="error">
          Error al procesar los datos de la API. Intente nuevamente más tarde.
        </Alert>
      )}
      {!loading && !error && !dataError && (
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{
            border: 'none',
            fontFamily: 'Inter, Roboto, sans-serif',
            color: '#000', // texto global

            backgroundColor: '#ffffff',
            borderRadius: 2,

            '.MuiDataGrid-columnHeaders': {
              backgroundColor: '#e3e9f3',
              color: '#000', // encabezados en negro
              fontWeight: 'bold',
              fontSize: '0.95rem',
              borderBottom: '1px solid #ccc',
            },

            '.MuiDataGrid-cell': {
              color: '#000', // celdas en negro
              borderBottom: '1px solid #f0f0f0',
            },

            '.MuiDataGrid-row:hover': {
              backgroundColor: '#f9fbff',
            },

            '.MuiDataGrid-footerContainer': {
              backgroundColor: '#f4f6f8',
              borderTop: '1px solid #ddd',
              color: '#000', // pie de tabla en negro
            },

            '.MuiTablePagination-root': {
              color: '#000', // números de paginación
            },
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
        />

      )}
    </Box>
  );
}