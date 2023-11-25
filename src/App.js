// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import PropertyDetail from "./components/PropertyDetail";
import AboutPage from "./components/AboutPage";
import PhotoTextComponent from "./components/PhotoTextComponent";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetailHeaderOnly />} />
          <Route path="/a-propos" element={<AboutPage />} />{" "}
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <Header />
    <PhotoTextComponent
      imagePath="/img/mere.png"
      text="Chez vous, partout et ailleurs"
    />
    <MainContainer />
    <Footer />
  </>
);

const PropertyDetailHeaderOnly = () => (
  <>
    <Header />
    <PropertyDetail />
  </>
);

export default App;
