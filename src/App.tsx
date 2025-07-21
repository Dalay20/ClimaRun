import './App.css'
import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI'; 
import IndicatorUI from './components/IndicatorUI';
import DataFetcher from './functions/DataFetcher';
import TableUI from './components/TableUI';
import ChartUI from './components/ChartUI';
import { useState } from 'react'


function App() {

const [selectedCity, setSelectedCity] = useState('guayaquil'); // Valor inicial opcional

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  const dataFetcherOutput = DataFetcher(selectedCity);

  return (
    <Grid container spacing={5} justifyContent="center" alignItems="center">

         {/* Encabezado */}
          <Grid size={{ xs: 12, md: 12 }}><HeaderUI/></Grid>

         {/* Selector */}
            <Grid size={{ xs: 12, md: 3 }}>
            <SelectorUI onCityChange={handleCityChange} />
            </Grid>

         {/* Indicadores */}
          <Grid container size={{ xs: 12, md: 9 }} >

                 {/* Renderizado condicional de los datos obtenidos */}

                 {dataFetcherOutput.loading && <p>Cargando datos...</p>}
                  {!dataFetcherOutput.loading && !dataFetcherOutput.error && dataFetcherOutput.data && (
                 <>

                     {/* Indicadores con datos obtenidos */}

                     <Grid size={{ xs: 12, md: 3 }} >
                         <IndicatorUI
                             title=' 🌡️Temperatura actual'
                             description={dataFetcherOutput.data.current.temperature_2m + " " + dataFetcherOutput.data.current_units.temperature_2m} />
                     </Grid>

                     <Grid size={{ xs: 12, md: 3 }}>
                         <IndicatorUI
                             title='🌡️ Sensación térmica'
                             description={dataFetcherOutput.data.hourly.apparent_temperature[0] + " " + dataFetcherOutput.data.hourly_units.apparent_temperature} />
                     </Grid>

                     <Grid size={{ xs: 12, md: 3 }}>
                         <IndicatorUI
                             title=' 💨Velocidad del viento'
                             description={dataFetcherOutput.data.current.wind_speed_10m + " " + dataFetcherOutput.data.current_units.wind_speed_10m} />
                     </Grid>

                     <Grid size={{ xs: 12, md: 3 }}>
                         <IndicatorUI
                             title='💧 Humedad relativa'
                             description={dataFetcherOutput.data.current.relative_humidity_2m + " " + dataFetcherOutput.data.current_units.relative_humidity_2m} />
                     </Grid>

                     <Grid size={{ xs: 12, md: 3 }}>
                         <IndicatorUI
                             title='🌫️ Nubosidad'
                             description={dataFetcherOutput.data.current.cloud_cover + " " + dataFetcherOutput.data.current_units.cloud_cover} />
                     </Grid>

                 </>
                 )}

                 {dataFetcherOutput.error &&
                    <p>Error: {dataFetcherOutput.error}</p>
                 }

             </Grid>

         {/* Gráfico */}
         <Grid size={{ xs: 12, md: 12 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <ChartUI city={selectedCity} />
        </Grid>
         {/* Tabla */}
         <Grid size={{ xs: 12, md: 9 }} sx={{ display: { xs: 'none', md: 'block' } }}><TableUI city={selectedCity} /></Grid>

         {/* Alertas */}
         <Grid container justifyContent="right" alignItems="center"><AlertUI description="texto"/> </Grid>

         {/* Información adicional */}
         <Grid size={{ xs: 12, md: 3 }}>Elemento: Información adicional</Grid>

      </Grid>
  )
}

export default App
