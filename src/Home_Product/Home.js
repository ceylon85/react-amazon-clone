import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  //
  // src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
  // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
  // src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt=""
      />
      {/* Product Id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="49538094"
          title="AmazonBasics Humidifier with Night Light and Aroma Diffuser - 4-Liter, White"
          price={34.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71JHDQfKgUL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="495394"
          title="AmazonBasics Hardside Spinner, Carry-On, Expandable Suitcase Luggage with Wheels, 21 Inch, Black"
          price={54.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71s7HbyqzEL._AC_UL320_.jpg"
        />
        <Product
          id="121341"
          title="AmazonBasics Carrying Case for Nintendo Switch and Accessories - 10 x 2 x 5 Inches, Neon Yellow"
          price={12.58}
          rating={4}
          image="https://m.media-amazon.com/images/I/81N-Hg1GKrL._AC_UL320_.jpg"
        />
        <Product
          id="123213"
          title="AmazonBasics Steel, Security Safe Lock Box, Black - 0.5 Cubic Feet"
          price={71.88}
          rating={1}
          image="https://m.media-amazon.com/images/I/718l03qCcJL._AC_UL320_.jpg"
        />
      </div>
      <div className="last__row">
        <Product
          id="321341"
          title="Samsung QN75Q60RAFXZA Flat 75 QLED 4K Q60 Series (2019) Ultra HD Smart TV with HDR and Alexa Compatibility"
          price={1199.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51Amu04fYcL._AA210_.jpg"
        />
        <Product
          id="458094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>
      <div className="last__row">
        <Product
          id="453094"
          title="Glass BowlOculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 64 GB"
          price={299.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/31MPSDnQmUL._AC_US218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
