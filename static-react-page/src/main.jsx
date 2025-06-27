import { createRoot } from "react-dom/client";
import './index.css'
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";

createRoot(document.getElementById("root")).render(
  <>
    <Header/>
    <MainContent/>
    <Footer/>
  </>
);






