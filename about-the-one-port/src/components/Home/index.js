import React from 'react';
import { Link } from "react-router-dom";

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
                src={`${process.env.PUBLIC_URL}profile_pic.jpg`}
                alt="Is myself"
                />
            </div>
        </section>
    );
}

export default Home;