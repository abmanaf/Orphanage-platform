import React from "react";

function Gallery() {
  return (
    <div style={{ marginTop: "10em" }}>
      {" "}
      <section
        id="services"
        className="services sections-bg"
        style={{ marginTop: "4em" }}
      >
        <div className="container" data-aos="fade-up">
          {/*
          <div className="section-header" style={{ textAlign: "center" }}>
            <h2> Our Supportive Services</h2>
            <p>
              We are dedicated to giving vulnerable and orphaned children
              complete assistance and care. View our selection of services
              below:
            </p>
          </div>
 */}
          <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-4 col-md-6">
              <img
                src="https://media.gettyimages.com/id/182720270/photo/indian-rural-girls.jpg?s=612x612&w=0&k=20&c=qMRFMvpe6XK1wrGDDOND0il8oCmkc1KUMnGpP-Yn8pg="
                alt=" by Sam manns"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://media.gettyimages.com/id/1399267460/photo/african-children-from-an-orphanage-in-nairobi-kenya.jpg?s=612x612&w=0&k=20&c=5x3xKCH0xVEMDMIo6NDKpCQA6ZfAYx8hS7fXHFpW2pE="
                alt=" by Wieger Stienstra"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://media.gettyimages.com/id/477437511/photo/children-say-hello-from-african-school.jpg?s=612x612&w=0&k=20&c=bK3Qbl70l6Jf_84YpV-EqrN5iREls1Q_AqVHQO0_4O4="
                alt=" by Sam manns"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPlHT_azdtfuKqR6Sc_k8kyn2yYAq6H1X8w&usqp=CAU"
                alt=" by Wieger Stienstra"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3C91ApgHHxJLl6WfZJgElzuB-EIqfbH9ng&usqp=CAU"
                alt=" by Sam manns"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8c1P2I3QkBbP1FTbwFbgRmktYAhCzD7nP7PvBnkgyP-L5Ix8kMffgF5TvClivowDekZ4&usqp=CAU"
                alt=" by Wieger Stienstra"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2uQWJAhRlIyqx6NodDbjAqTeq78TvpcvnDg&usqp=CAU"
                alt=" by Sam manns"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmujMv_9O4trBJx1SJ0Byh4U_RdLxjWk7zQ&usqp=CAU"
                alt=" by Wieger Stienstra"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKx6VOU3_eNYcgMyMlFqanbCcDM8vqdac4Hg&usqp=CAU"
                alt=" by Sam manns"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2SG3FWus-Slb8Bo1RHGEXTD6127C_eCVNA&usqp=CAU"
                alt=" by Wieger Stienstra"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBDW0MwHxudeJ5rImF_JjnlpbRj5zdQTspuA&usqp=CAU"
                alt=" by Sam manns"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1kawo3HN_1ZlG2HmK1qT83WT9KgEyze-TGg&usqp=CAU"
                alt=" by Wieger Stienstra"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://www.globalgiving.org/pfil/14810/ph_14810_164205.jpg"
                alt=" by Sam manns"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://newsghana.com.gh/wp-content/uploads/2021/12/Social-%E2%80%93-Orphanage-donation--640x340.jpg"
                alt=" by Wieger Stienstra"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src="https://fefghana.org/wp-content/uploads/2016/05/Nyamadua-Donation-featured-image-780x437.jpeg"
                alt=" by Manuel Meza"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
