import React from "react";
import Circle from "./circle.png";

function Home() {
  return (
    <div style={{}}>
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
              <h3>Providing Necessary Materials</h3>
              <p className="fst-italic">
                We see to it that people in need have easy access to necessities
                like food, clothing, and shelter. Our goal is to provide each
                person in our care with a secure and supportive environment.
              </p>
              <ul>
                <li>
                  {/*<i className="bi bi-check"></i>*/} Provide wholesome food
                  and uncontaminated water.
                </li>
                <li>
                  {/*<i className="bi bi-check"></i>*/} Provide cozy apparel and
                  bedding.
                </li>
                <li>
                  {/*<i className="bi bi-check"></i>*/} Providing amenities for
                  safe and secure shelter.
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
              <h3>Education and Skill Development</h3>
              <p className="fst-italic">
                The secret to opening the door to a better future is education.
                In order to provide children and teenagers with the knowledge
                and skills they need to succeed in life, we place a high
                priority on education and skill development programs.
              </p>
              <p>
                <ul>
                  <li>
                    {/*<i className="bi bi-check"></i>*/} Delivering
                    individualized formal education programs.
                  </li>
                  <li>
                    {/*<i className="bi bi-check"></i>*/} Offering possibilities
                    for apprenticeships and vocational training.
                  </li>
                  <li>
                    {/*<i className="bi bi-check"></i>*/} Holding lectures and
                    workshops on a range of life skills.
                  </li>
                </ul>
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
              <h3>Initiatives for Wellness and Healthcare</h3>
              <p>
                By giving our beneficiaries access to high-quality healthcare
                services and encouraging wellness programs, we put their health
                and wellbeing first. Making ensuring that each person gets the
                attention and assistance they require to flourish is our main
                objective.
              </p>
              <ul>
                <li>
                  {/*<i className="bi bi-check"></i>*/} Provide immunizations
                  and routine medical examinations.
                </li>
                <li>
                  {/*<i className="bi bi-check"></i>*/} Granting access to
                  experts and professionals in healthcare.
                </li>
                <li>
                  {/*<i className="bi bi-check"></i>*/} Putting in place
                  wellness initiatives that emphasize mental and nutritional
                  well-being.
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
              <h3>Outreach and Community Involvement</h3>
              <p className="fst-italic">
                We regularly connect with local communities because we believe
                in their capacity to create a sense of support and belonging.
                Together, we strive to bring about positive change and support
                those in need through outreach initiatives and community
                collaborations.
              </p>
              <ul>
                <li>
                  {/*{<i className="bi bi-check"></i>}*/} Arranging social
                  events and community activities.
                </li>
                <li>
                  {/*<i className="bi bi-check"></i>*/} Partnering with
                  businesses and organizations in the community.
                </li>
                <li>
                  {/*<i className="bi bi-check"></i> */}Enabling community
                  members to act as change agents by developing their leadership
                  and advocating for them.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*
      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-end"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
       */}
    </div>
  );
}

export default Home;
