// bootstrap
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min"

// animate.css
import "animate.css";

// normalize.css
import "normalize.css";

// swiper
// import Swiper from '../node_modules/swiper/swiper-bundle.min';
// import 'swiper/css/bundle';

// styles
import "./styles/style.scss";

// modules
import config from './modules/config'
import wow from "./modules/wow.js";
import form from "./modules/form";
import hamburger from "./modules/hamburger";
import LightCountdown from "./modules/lightCountdown/lightCountdown";

form();
document.addEventListener('DOMContentLoaded', () => {
  wow.init();
  hamburger();
  new LightCountdown(config.lightCountdown).play()
});