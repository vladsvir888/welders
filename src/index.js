// bootstrap
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min"

// font-awesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

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
import tabs from "./modules/tabs";
import toTop from "./modules/toTop";
// import scrollTo from "./modules/scrollTo";

form();
document.addEventListener('DOMContentLoaded', () => {
  wow.init();
  hamburger();
  new LightCountdown(config.lightCountdown).play();
  tabs();
  toTop();
  // scrollTo();
});