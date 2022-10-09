const INFURA_KEY = "c7d8abb4c4b548519a01e01942d60c14";
const APP_NAME = "testIM";
let API_ROOT_URL = "";
let isProduction = false;
let isDev = false;

const isBrowser = () => typeof window !== "undefined";

if (isBrowser()) {
  if (
    (window.location.href.indexOf("http://127.0.0.1") > -1) |
    (window.location.href.indexOf("http://localhost") > -1)
  ) {
    API_ROOT_URL = "http://localhost:3000";
    isDev = true;
  } else if (
    window.location.href.indexOf("https://sb.your-frontend.com/") > -1
  ) {
    API_ROOT_URL = "https://sb-api.your-api.com";
    isDev = true;
  } else {
    isProduction = true;
    API_ROOT_URL = "https://api.your-api.com";
  }
}

export default {
  isProduction,
  isDev,
  API_ROOT_URL: `${API_ROOT_URL}`,
  INFURA_KEY,
  APP_NAME,
};
