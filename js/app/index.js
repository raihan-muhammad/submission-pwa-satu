import loadNav from "./layouts/nav.js";
import loadPage from "./pages/pages.js";

let page = window.location.hash.substr(1);
if (page == "") page = "home";
const app = () => {
  loadNav(page);
  loadPage(page);
};

export default app;
