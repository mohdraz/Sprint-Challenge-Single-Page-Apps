import React from "react";
import { checkPropTypes } from "prop-types";

export default function WelcomePage(props) {

  const chracterRoute = e => {
    e.preventDefault();
    props.history.push('/characters');
  }
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <div className="mainImage">
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </div>

        <button className="btn" onClick={chracterRoute}>View All Chracters</button>
      </header>
    </section>
  );
}
