import React from 'react';
import { Link } from "react-router-dom";


function Portfolio() {
    return (
        <section class="portfolio d-flex flex-column">

        <div class="card p-2">
          <img class="card-img-top"
            // eslint-disable-next-line no-undef
            src={TheHappyHour}
            alt="lookUp"
          />
          <div class="card-body">
          <Link to={{ pathname: "https://github.com/Qaizen/TheHappyHour" }} target="_blank">
              <button>GitHub Project Collab</button>
            </Link>
            <Link to={{ pathname: "https://qaizen.github.io/TheHappyHour/" }} target="_blank">
              <button>Website</button>
            </Link>
          </div>
        </div>
        <div class="card p-2">
          <img class="card-img-top"
            src={`${process.env.PUBLIC_URL}place2.jpg`}
            alt="lookUp"
          />
          <div class="card-body">
          <Link to={{ pathname: "https://github.com/andybockwrites/Ask-Alice-Final" }} target="_blank">
              <button>GitHub Project Collab</button>
            </Link>
            <Link to={{ pathname: "https://ask-alice.herokuapp.com/" }} target="_blank">
              <button>Website</button>
            </Link>
          </div>
        </div>
        <div class="card p-2">
          <img class="card-img-top"
            src={`${process.env.PUBLIC_URL}place1.jpg`}
            alt="lookUp"
          />
          <div class="card-body">
          <Link to={{ pathname: "https://github.com/jmalave15" }} target="_blank">
              <button>GitHub</button>
            </Link>
            <Link to={{ pathname: "https://github.com/jmalave15" }} target="_blank">
              <button>Website</button>
            </Link>
          </div>
        </div>
        </section>
    );
}

export default Portfolio;