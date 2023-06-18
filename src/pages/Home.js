import { Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/Home.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      imageSrc: "../images/chemistry.jpg",
      title: "Chemistry",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/physics.jpg",
      title: "Physics",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/computer.jpg",
      title: "Computers",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/geology.jpg",
      title: "Geology",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/biophysics.jpg",
      title: "BioPhysics",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/geophysics.jpg",
      title: "GeoPhysics",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/astronomy.jpg",
      title: "Astronomy",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/mathematics.png",
      title: "Mathematics",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/botany.jpg",
      title: "Botany",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/entomology.png",
      title: "Entomology",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/zology.jpg",
      title: "Zoology",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
  };
  return (
    <div className="divrooth">
      <div id="root">
        <nav className="navbar navbar-expand-lg navbar-dark   fixed-top">
          <div className="container-fluid">
            <div className="divlogo fs-5">
              <h className="h" style={{ color: "black" }}>
                Faculty Of Science
              </h>
            </div>
            <button
              className="navbar-toggler collapsed "
              type="button"
              data-toggle="collapse"
              data-target="#navbar-collapse"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{ marginLeft: "15px" }}>
                  <Link
                    className="navbar-brand badge rounded-pill btn  fs-5  "
                    aria-current="page"
                    to="/"
                  >
                    <h className="h" style={{ color: "black" }}>
                      Home
                    </h>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Login"
                    id="login-link"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      Log in{" "}
                    </h>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/GetID"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      {" "}
                      Get ID
                    </h>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <main>
        <div
          className="px-4 py-5 my-5 text-center"
          style={{ position: "relative", height: "400px" }}
        >
          <img
            className="immg"
            src="../images/College.jpg"
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="b-example-divider"></div>

        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold">Information about Faculty</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              The Faculty of Science is a place for education and research on
              science. Science is a study that engages in a “dialogue with
              Nature” to understand the principles and laws working in the
              natural world. We strive to unravel the mysteries of nature,
              starting by asking simple questions such as “Why?” and “How?” The
              principal incentives to do most research activities lie in pure
              interest, and human wisdom has been accumulated in this manner for
              many generations. Sometimes the understanding of Nature directly
              results in applied use in the real world. Other times, it takes a
              long time before the understanding of Nature brings a significant
              change to our lifestyles. The Faculty of Science is a complete,
              student-oriented science faculty where research and education are
              closely related. The faculty aims to be an academic community with
              an international character, where staff members from different
              backgrounds can combine their talents with the common goal of
              being a leading faculty of science in Egypt.The Faculty of Science
              has eleven departments: mathematics,physics,astronomy,
              computer,geology,zology,entomology,geophysics, botany, chemistry
              and biophysics. More than 90% of our undergraduate students
              continue their study at a graduate school (including that of other
              universities or of other fields). Our students are expected to
              master more advanced knowledge in their fields of specialty
              through actual research and to be active players in various
              fields, including researchers who work at universities, government
              agencies or companies. Of course, a certain portion of
              undergraduate students join companies or government agencies right
              after graduation.
            </p>
          </div>
        </div>

        <div className="b-example-divider"></div>

        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold">College departments</h1>
          <div className="slideshow">
            <div className="controls">
              <button className="cardbtn" onClick={handlePrevious}>
                {"<"}
              </button>
            </div>
            <div className="card-container">
              {cards
                .slice(currentIndex, currentIndex + 3)
                .map((card, index) => (
                  <div className="card" key={index}>
                    <img
                      src={card.imageSrc}
                      className="card-img-top "
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.description}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="controls">
              <button className="cardbtn" onClick={handleNext}>
                {">"}
              </button>
            </div>
          </div>
        </div>

        <div className="b-example-divider"></div>

        <div className="containerH col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 mb-3">
                For inquiries or complaints
              </h1>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="complaint">Complaint or Inquiries</label>
                  <textarea
                    className="form-control"
                    id="complaint"
                    rows="6"
                  ></textarea>
                </div>
                <button type="submit" className="btnSub  ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="b-example-divider"></div>
      </main>

      <footer className="text-muted py-5">
        <div className="container9">
          <p className="float-end mb-1">
            <a href="#Top" className="btnbtn-dark">
              <img className="img" src="../images/up-arrow.png" alt="" />
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
