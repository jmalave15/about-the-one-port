import React from 'react';
import { Link } from "react-router-dom";
import profile_pic from "../../images/resumepic.png"

function Home() {
    return (
        <section className="home my-5">
            <div className="title">
                <h2>My name is Jose Malave</h2>
                <p>Welcome to my portfolio</p>
                <Link to="portfolio">
                    <button>View my work</button>
                </Link>
            </div>
            <div className="portrait">
                <img
                src={profile_pic}
                alt="Is myself"
                />
            </div>
        </section>
    );
}

export default Home;