export interface OpenMeteoResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: Currentunits;
  current: Current;
  hourly_units: Hourlyunits;
  hourly: Hourly;
  daily_units: Dailyunits;
  daily: Daily;
}

export interface Daily {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  uv_index_max: number[];
  rain_sum: number[];
  sunrise: string[];
  wind_direction_10m_dominant: number[];
  wind_speed_10m_max: number[];
  cloud_cover_mean: number[];
}

export interface Dailyunits {
  time: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  uv_index_max: string;
  rain_sum: string;
  sunrise: string;
  wind_direction_10m_dominant: string;
  wind_speed_10m_max: string;
  cloud_cover_mean: string;
}

export interface Hourly {
  time: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  relative_humidity_2m: number[];
  precipitation_probability: number[];
  wind_speed_10m: number[];
  wind_direction_10m: number[];
  cloud_cover: number[];
  uv_index: number[];
}

export interface Hourlyunits {
  time: string;
  temperature_2m: string;
  apparent_temperature: string;
  relative_humidity_2m: string;
  precipitation_probability: string;
  wind_speed_10m: string;
  wind_direction_10m: string;
  cloud_cover: string;
  uv_index: string;
}

export interface Current {
  time: string;
  interval: number;
  temperature_2m: number;
  apparent_temperature: number;
  relative_humidity_2m: number;
  cloud_cover: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  precipitation: number;
  is_day: number;
}

export interface Currentunits {
  time: string;
  interval: string;
  temperature_2m: string;
  apparent_temperature: string;
  relative_humidity_2m: string;
  cloud_cover: string;
  wind_speed_10m: string;
  wind_direction_10m: string;
  precipitation: string;
  is_day: string;
}