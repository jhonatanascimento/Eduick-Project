import React from "react";
import Logo from "./svgs/logo/logo";
import "./dashboard.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="homePage">
        <header>
          <nav>
            <div>
              <Logo />
            </div>
          </nav>
        </header>
        <main>
          <section className="welcome">
            <div className="yellowImage"></div>
            <h1>
              Hello <span>Student</span>
            </h1>
            <p>
              Whether you are a student trying to find your ideal private
              language teachers/tutors
            </p>
          </section>

          <section className="container">
            <div className="cards">
              <div className="card">
                <img alt="Imagem" />
                <div className="reviewsAndLessons">
                  <span>10 Lessons</span>
                </div>
                <h2>Master English: Improve Your Speaking</h2>
              </div>

              <div className="card">
                <img alt="Imagem" />
                <div className="reviewsAndLessons">
                  <span>10 Lessons</span>
                </div>
                <h2>Master English: Improve Your Speaking</h2>
              </div>
            </div>
          </section>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default Dashboard;
