import React from "react";
import Style from "../css/Hero.module.css";
import { MapPin, Search, ChevronDown, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className={Style.hero}>

      <img
        src="src/assets/Veggies_new.avif"
        alt="food"
        className={Style.leftImage}
        height="210px"
        width="420px"
      />
      <img
        src="src/assets/Sushi_replace.avif"
        alt="food"
        className={Style.rightImage}
      />


      <div className={Style.content}>

        <h1>
          Order food & groceries. Discover
          <br />
          best restaurants. Swiggy it!
        </h1>


        <div className={Style.searchBox}>

          <div className={Style.location}>
            <MapPin size={22} color="#ff5200" />
            <span>Enter your delivery location</span>
            <ChevronDown size={22} />
          </div>


          <div className={Style.search}>
            <span>
              Search for restaurant, item or more
            </span>
            <Search size={22} />
          </div>

        </div>


        <div className={Style.cards}>


          <div className={Style.card}>
            <div>
              <h2>FOOD DELIVERY</h2>
              <p>FROM RESTAURANTS</p>

              <b>UPTO 60% OFF</b>
            </div>

            <img src="src/assets/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.avif" alt="food" />

            <button>
              <ArrowRight />
            </button>
          </div>



          <div className={Style.card}>
            <div>
              <h2>INSTAMART</h2>
              <p>INSTANT GROCERY</p>

              <b>UPTO 60% OFF</b>
            </div>

            <img src="src/assets/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.avif" alt="grocery" />

            <button>
              <ArrowRight />
            </button>
          </div>



          <div className={Style.card}>
            <div>
              <h2>DINEOUT</h2>
              <p>EAT OUT & SAVE MORE</p>

              <b>UPTO 50% OFF</b>
            </div>

            <img src="src/assets/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.avif" alt="dineout" />

            <button>
              <ArrowRight />
            </button>
          </div>


        </div>

      </div>

    </section>
  );
};

export default Hero;