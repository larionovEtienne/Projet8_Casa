// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import PropertyDetail from "./components/PropertyDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetailHeaderOnly />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <Header />
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
