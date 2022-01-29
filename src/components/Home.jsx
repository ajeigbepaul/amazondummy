import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="amazonbanner.jpg" alt="banner" />
        <div className="home__row">
          <Product
            id="12345"
            title="THE DREAM Leapers digital Oceans giving you the best user experience"
            ratings={3}
            image="dreamerleaper.jpg"
            price={459.99}
          />
          <Product
            id="1234567"
            title="HEARTBREAT Hotel superb creame making your skin glow"
            ratings={4}
            image="heartbreak.jpg"
            price={759.99}
          />
          {/* products */}
        </div>
        <div className="home__row">
          <Product
            id="123456789"
            title="THE CASE FOR CHRIST Glow feast. Your one in all fit all personality"
            ratings={5}
            image="thecase.jpg"
            price={459.99}
          />
          <Product
            id="2345"
            title="NIGHT Oceans giving you the best user experience"
            ratings={3}
            image="night.jpg"
            price={459.99}
          />
          <Product
            id="234567"
            title="THE CASE FOR CHRIST superb creame making your skin glow"
            ratings={4}
            image="thecase.jpg"
            price={900.99}
          />
        </div>
        <div className="home__row">
          <Product
            id="345"
            title="HOTEL Kit making your vlog very exiting and fun. "
            ratings={3}
            image="heartbreakhotel.jpg"
            price={1059.99}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
