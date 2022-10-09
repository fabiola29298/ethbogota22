const INFURA_KEY = "c7d8abb4c4b548519a01e01942d60c14";
const ContractAddress = "0x963B86136Ecf4ADBe99A6Ae85140C9504A649c21";
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
  APP_NAME,
  ContractAddress,
};
