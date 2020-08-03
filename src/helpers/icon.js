export const icon = ( icon ) => {
  switch (icon) {
    case '01d':
      return "fas fa-sun";
    case '01n':
      return "fas fa-moon";
    case '02d':
      return "fas fa-cloud-sun";
    case '02n':
      return "fas fa-cloud-moon";
    case '03d', '03n': 
      return "fas fa-cloud";
    case '04d', '04n':
      return "fas fa-clouds"; 
    case '09d', '09n':
      return "fad fa-cloud-showers"; 	
    case '10d':
      return "fas fa-cloud-sun-rain";
    case '10n':
      return "fas fa-cloud-moon-rain";
    case '11d', '11n':
      return "fad fa-thunderstorm";
    case '13d', '13n':
      return "fas fa-snowflake";
    case '50d', '50n':
      return "fas fa-wind";
    default:
      return "fas fa-cloud";
  }
};