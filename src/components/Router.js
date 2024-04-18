import Home from "../pages/home.js";
import NotFound from "../pages/404.js";


export default function Router() {
  const url = window.location.pathname;

  switch (url) {
    case '/':
      return Home();
    default:
      return NotFound();
  }
}