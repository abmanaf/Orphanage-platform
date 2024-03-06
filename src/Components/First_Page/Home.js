import React from "react";
import Circle from "./circle.png";

function Home() {
  return (
    <div style={{ marginTop: "5em" }}>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row gy-4 d-flex justify-content-between">
            <div className="col-lg-7 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1
                style={{ fontSize: "40px", textTransform: "uppercase" }}
                data-aos="fade-up"
              >
                Providing Hope and Care for Every Child
              </h1>
              <p
                style={{ fontSize: "20px" }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Our goal at <mark>Spread Love Organisation</mark> is to give
                vulnerable and orphaned children a caring and safe environment.
                Making ensuring every child has the opportunities, love, and
                support they deserve is our aim. We work to meet their physical,
                emotional, and educational requirements using a holistic
                approach, enabling them to flourish and realize their full
                potential.
              </p>
            </div>

            <div
              className="col-lg-5 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
            >
              <img src={Circle} className="img-fluid mb-3 mb-lg-0" alt="" />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="services" className="services sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header" style={{ textAlign: "center" }}>
            <h2> Our Supportive Services</h2>
            <p>
              We are dedicated to giving vulnerable and orphaned children
              complete assistance and care. View our selection of services
              below:
            </p>
          </div>

          <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img
                  src="https://media.gettyimages.com/id/182720270/photo/indian-rural-girls.jpg?s=612x612&w=0&k=20&c=qMRFMvpe6XK1wrGDDOND0il8oCmkc1KUMnGpP-Yn8pg="
                  alt=" by Sam manns"
                  style={{ width: "100%" }}
                />
                <div className="container py-4">
                  <p>Innocence in Every Smile</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img
                  src="https://media.gettyimages.com/id/1399267460/photo/african-children-from-an-orphanage-in-nairobi-kenya.jpg?s=612x612&w=0&k=20&c=5x3xKCH0xVEMDMIo6NDKpCQA6ZfAYx8hS7fXHFpW2pE="
                  alt=" by Wieger Stienstra"
                  style={{ width: "100%" }}
                />
                <div className="container py-4">
                  <p>Their Dreams, Our Responsibility</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img
                  src="https://media.gettyimages.com/id/477437511/photo/children-say-hello-from-african-school.jpg?s=612x612&w=0&k=20&c=bK3Qbl70l6Jf_84YpV-EqrN5iREls1Q_AqVHQO0_4O4="
                  alt=" by Manuel Meza"
                  style={{ width: "100%" }}
                />
                <div className="container py-4">
                  <p>Love, Hope, and Compassion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="features mt-5">
        <div className="container">
          {/* First Features Item */}
          <div
            className="row gy-4 py-5 align-items-center features-item"
            data-aos="fade-up"
          >
            <div className="col-md-5">
              <img
                src="https://newsghana.com.gh/wp-content/uploads/2021/12/Social-%E2%80%93-Orphanage-donation--640x340.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-7">
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check"></i> Ullam est qui quos consequatur
                  eos accusamus.
                </li>
              </ul>
            </div>
          </div>

          {/* Second Features Item */}
          <div
            className="row gy-4 py-5 mt-5 align-items-center features-item"
            data-aos="fade-up"
          >
            <div className="col-md-5 order-1 order-md-2">
              <img
                src="https://fefghana.org/wp-content/uploads/2016/05/Nyamadua-Donation-featured-image-780x437.jpeg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-7 order-2 order-md-1">
              <h3>Corporis temporibus maiores provident</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>

          {/* Third Features Item */}
          <div
            className="row gy-4 py-5 mt-5 align-items-center features-item"
            data-aos="fade-up"
          >
            <div className="col-md-5">
              <img
                src="https://www.globalgiving.org/pfil/14810/ph_14810_164205.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-7">
              <h3>
                Sunt consequatur ad ut est nulla consectetur reiciendis animi
                voluptas
              </h3>
              <p>
                Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus
                quia minima quod. Sunt saepe odit aut quia voluptatem hic
                voluptas dolor doloremque.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check"></i> Facilis ut et voluptatem
                  aperiam. Autem soluta ad fugiat.
                </li>
              </ul>
            </div>
          </div>

          {/* Fourth Features Item */}
          <div
            className="row gy-4 py-5 mt-5 align-items-center features-item"
            data-aos="fade-up"
          >
            <div className="col-md-5 order-1 order-md-2">
              <img
                src="https://www.etharrelief.org/_D8A5990.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-7 order-2 order-md-1">
              <h3>
                Quas et necessitatibus eaque impedit ipsum animi consequatur
                incidunt in
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
