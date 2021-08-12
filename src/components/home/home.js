import React from "react";
import "./home.css";
import Nav from "../nav/nav";
import Form from "../form/form";

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
          </section>

          {/* Form */}

          <section className="homeForm">
            <Form />
          </section>

          {/* Image with Effect */}

          <section className="homeImage">
            <div className="homeImageEffect"></div>
          </section>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default Home;
