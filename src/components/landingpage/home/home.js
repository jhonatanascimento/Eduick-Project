import React from "react";
import "./home.css";
import Nav from "../nav/nav";
import Form from "../form/form";
import Dots from "./svgs/dots/dots";

class Home extends React.Component {
  render() {
    return (
      <div className="homePage">
        {/* header */}

        <header className="homeHeader">
          <Nav />
        </header>

        {/* Main Start*/}

        <main className="homeMain">
          <section className="title">
            <h1>
              Find your <span>BEST TEACHER</span>
            </h1>
            <p>
              Whether you are a student trying to find your ideal private
              language teachers/tutors or a teacher trying to find great
              students for your customised private lessons!
            </p>
          </section>

          {/* Form */}

          <section className="homeForm">
            <Form />
          </section>

          {/* Image with Effect */}
        </main>

        <div className="homeImageEffect">
          <div className="dots">
            <Dots />
          </div>
          <i></i>
        </div>
        <div className="homeImageEffect2">
          <div className="homeImageEffect"></div>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default Home;
