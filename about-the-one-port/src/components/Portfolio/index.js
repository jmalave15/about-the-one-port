import React from 'react';
//import { Link } from "react-router-dom";
import happyHour from "../../images/TheHappyHour.jpg";
import askAlice from "../../images/AskAlice.png";
import place1 from "../../images/place1.jpg";

function Portfolio() {
    return (
        <section class="portfolio d-flex flex-column">

        <div class="card p-2">
          <img class="card-img-top"
            // eslint-disable-next-line no-undef
            src={happyHour}
            alt="App for a good time"
          />
          <div class="card-body">
          <a href= "https://github.com/Qaizen/TheHappyHour" >
              <button>GitHub Project Collab</button>
            </a>
            <a href= "https://qaizen.github.io/TheHappyHour/" >
              <button>Website</button>
            </a>
          </div>
        </div>
        <div class="card p-2">
          <img class="card-img-top"
            src={askAlice}
            alt="Bunny prescription drug recaller"
          />
          <div class="card-body">
          <a href= "https://github.com/andybockwrites/Ask-Alice-Final" >
              <button>GitHub Project Collab</button>
            </a>
            <a href= "https://ask-alice.herokuapp.com/" >
              <button>Website</button>
            </a>
          </div>
        </div>
        <div class="card p-2">
          <img class="card-img-top"
            src={place1}
            alt="future development"
          />
          <div class="card-body">
          <a href= "https://github.com/jmalave15" >
              <button>GitHub</button>
            </a>
            <a href= "https://github.com/jmalave15" >
              <button>Website</button>
            </a>
          </div>
        </div>
        </section>
    );
}

export default Portfolio;