import React, { useEffect, useState } from "react";
import { BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import Spinner from "./components/Spinner.jsx";
import Point from "./components/Point";
import Button from "./components/Button";
import AutoCard from "./components/AutoCard";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <>
      <BrowserRouter>
        {loading && <Spinner />}

        <NavBar />
        <Header />
        <Section id="points" text1="Pourquoi" text2="L'Autonnaire?">
          <Point icon="fa-car" text="Plusieurs marques" />
          <Point icon="fa-comments" text="Support 24 sur 7" />
          <Point icon="fa-wallet" text="Abordable" />
          <Point icon="fa-trophy" text="Dédication à l'excellence" />
        </Section>
        <div className="inventaire nav-link" id="inventaire">
          <Section text1="Nos" text2="Modèles">
            <div className="col-10 mx-auto col-md-12 d-flex justify-content-center">
              <Button
                color="outline-dark"
                text="Toyota"
                textStyle="text-uppercase"
              />
              <Button
                color="outline-dark"
                text="Nissan"
                textStyle="text-uppercase mx-1"
              />
              <Button
                color="outline-dark"
                text="Hyundai"
                textStyle="text-uppercase mx-1"
              />
            </div>
          </Section>
          <div className="row">
            <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
              <AutoCard
                type="SE"
                litre="50L"
                marque="Toyota"
                modèle="Camry"
                prix="20,000"
                src={require(`./images/toyota-2020-camry-xse.jpg-sm.jpg`)}
                trans="Automatique"
              />
            </div>
            <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
              <AutoCard
                type="SE"
                litre="40L"
                marque="Nissan"
                modèle="Maxima"
                prix="25,000"
                src={require(`./images/2019-nissan-maxima-bleu.jpg`)}
                trans="Automatique"
              />
            </div>
            <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
              <AutoCard
                type="VUS"
                litre="35L"
                marque="Nissan"
                modèle="Murango"
                prix="45,000"
                src={require(`./images/murango.jpg`)}
                trans="Automatique"
              />
            </div>
            <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
              <AutoCard
                type="SE"
                litre="39L"
                marque="Hyundai"
                modèle="Elantra"
                prix="35,000"
                src={require(`./images/hyundai-elantra-lg.jpg`)}
                trans="Manuel"
              />
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
