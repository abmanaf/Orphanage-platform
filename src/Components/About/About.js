import React from "react";

function About() {
  return (
    <div style={{ marginTop: "50px" }}>
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs">
          <div
            className="page-header d-flex align-items-center"
            style={{
              backgroundImage:
                "url('https://littlebridgefoundation.org/wp-content/uploads/2022/11/inner-banner.jpg ')",
              height: "100vh",
              color: "white",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "cover",
            }}
          >
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>About Us</h2>
                  <p>
                    Welcome to our About platform!We are committed to giving
                    orphaned children a caring and encouraging environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 
          <nav>
            <div className="container">
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>About</li>
              </ol>
            </div>
          </nav>
          */}
        </div>
        {/* End Breadcrumbs */}

        {/* ======= About Us Section ======= */}
        <section id="about" className="about">
          <h3
            className="content order-last order-lg-first"
            style={{
              textAlign: "center",
              marginBottom: "2em",
              color: "#001F8D",
            }}
          >
            <strong>Our Mission</strong>
          </h3>

          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQc2tvPSQNEUPjKFqSACp8-aLbTZs9gOiU3l4B6BCjmTk--q6V7iwN2T_rLJ6SX-NyBB4&usqp=CAU"
                  className="img-fluid"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>

              <div className="col-lg-6 content order-last order-lg-first">
                <p>
                  Our goal is to give orphaned children a loving, supportive
                  environment in which they can flourish socially, emotionally,
                  and academically.Our goal is to give orphaned children a
                  loving, supportive environment in which they can flourish
                  socially, emotionally, and academically.
                </p>
                <div style={{ marginTop: "3em" }}>
                  <h3>Our Values</h3>
                </div>

                <ul>
                  <li data-aos="fade-up" data-aos-delay="100">
                    <i className="bi bi-diagram-3"></i>
                    <div>
                      <h5>Compassion</h5>
                      <p>
                        We think every child in our care deserves compassion and
                        understanding.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-fullscreen-exit"></i>
                    <div>
                      <h5>Empowerment:</h5>
                      <p>
                        By giving kids life skills, emotional support, and
                        education, we enable them to realize their greatest
                        potential.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-broadcast"></i>
                    <div>
                      <h5>Community</h5>
                      <p>
                        We cultivate a feeling of community and belonging among
                        our volunteers, staff, and kids.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}

        {/* ======= Stats Counter Section ======= */}
        <section id="stats-counter" className="stats-counter pt-0">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">{/* Stats Counter items go here */}</div>
          </div>
        </section>
        {/* End Stats Counter Section */}

        {/* ======= Our Team Section ======= */}

        {/* End Our Team Section */}

        {/* ======= Testimonials Section ======= */}

        {/* End Testimonials Section */}

        {/* ======= Frequently Asked Questions Section ======= */}
      </main>
    </div>
  );
}

export default About;
