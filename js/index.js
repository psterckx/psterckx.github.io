import NavBar from "./components/navbar.js";
import SplashPage from './components/splashPage.js'

const navbar = new NavBar;
const splashPage = new SplashPage;

navbar.build();
navbar.appendToRoot();
splashPage.build();
splashPage.appendToRoot();