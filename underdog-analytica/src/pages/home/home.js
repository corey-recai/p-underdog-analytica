import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/nav";
import CompetetionComparison from "./components/competetionComparison";
import Footer from "../components/footer";
import LineChart from "./components/lineChart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import "./home.css";
import homeIcons from "./icons/homeIcons";
import logos from "../../assets/logos/logos";

export default class Home extends Component {
  componentDidMount() {
    this.mobileView = window.matchMedia("(max-width: 767.98px)");
    this.homeBigBoardCol = document.getElementById(
      "home-section-1-big-board-col"
    );
    this.homeSectionOneContainer = document.getElementById(
      "home-section-1-container"
    );
    this.homeBigBoardChart = document.getElementById(
      "home-section-1-big-board-chart-container"
    );

    this.homeSectionThreeChart = document.getElementById(
      "home-section-3-chart-container"
    );
    this.checkWidth = (e) => {
      if (e.matches) {
        this.homeBigBoardCol.classList.add("pt-5");
        this.homeSectionOneContainer.classList.add("py-5");
        this.homeBigBoardChart.classList.remove("px-5", "py-5");
        this.homeSectionThreeChart.classList.remove("px-5", "py-5");
      } else {
        this.homeBigBoardCol.classList.remove("pt-5");
        this.homeSectionOneContainer.classList.remove("py-5");
        this.homeBigBoardChart.classList.add("px-5", "py-5");
        this.homeSectionThreeChart.classList.add("px-5", "py-5");
      }
    };
    window.onscroll = () => {
      this.scrollFunction();
    };
    this.checkWidth(this.mobileView);
    this.mobileView.addListener(this.checkWidth);
  }

  componentWillUnmount() {
    this.mobileView.removeListener(this.checkWidth);
  }

  scrollFunction = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("ua-nav").classList.add("ua-nav-scrolled");
    } else {
      document.getElementById("ua-nav").classList.remove("ua-nav-scrolled");
    }
  };
  render() {
    return (
      <>
        <Helmet>
          <title>Underdog Analytica | Home</title>
          <link rel="stylesheet"></link>
        </Helmet>
        <Navigation />
        <div className="home-section-1">
          <Container
            fluid
            id="home-section-1-container"
            className="content-container"
          >
            <Row>
              <Col className="pt-5" sm={12} md={12} lg={6}>
                <div className="home-section-1-cta-text mt-5">
                  <h1 className="bold home-section-1-h1-text">
                    Transparent &amp; Hassle Free Sports Betting Predictions
                  </h1>
                  <span className="home-section-1-h2-text highlight">
                    Honesty and clarity meets real-time, data-driven European
                    football predictions
                  </span>
                </div>
                <div className="py-3">
                  <Button
                    className="home-section-1-signup-btn bold px-5 py-3"
                    size="lg"
                  >
                    Sign Up Now
                  </Button>
                </div>
              </Col>
              <Col
                id="home-section-1-big-board-col"
                className="text center "
                sm={12}
                md={12}
                lg={6}
              >
                <div
                  id="home-section-1-big-board-chart-container"
                  className="home-section-1-big-board-chart-container px-5 my-5"
                >
                  <LineChart />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="home-section-2">
          <Container fluid className="content-container py-5">
            <Row>
              <Col className="text-center pt-3" sm={12} md={12} lg={12}>
                <h1 className="bold home-section-2-h1-text mx-auto">
                  Why Underdog Analytica?
                </h1>
              </Col>
              <Col className="text-center pt-5" sm={12} md={12} lg={3}>
                <img className="home-section-2-icon" src={homeIcons.honesty} />
                <h2 className="pt-4 bold home-section-2-subtitle">
                  Transparency
                </h2>
                <p className="home-section-2-text pt-4 mx-auto">
                  All our previous recommendation data available for review in{" "}
                  <a href="#">BET HISTORY</a> before you even make an account
                  because you deserve a handicapper with integrity.
                </p>
              </Col>
              <Col className="text-center pt-5" sm={12} md={12} lg={3}>
                <img className="home-section-2-icon" src={homeIcons.wealth} />
                <h2 className="pt-4 bold home-section-2-subtitle">
                  Wealth Management
                </h2>
                <p className="home-section-2-text pt-4 mx-auto">
                  Incorporating sports betting* into your wealth management
                  strategy is an exciting way to diversify and grow your assets.
                  We provide tools to manage those assets throughout the season.
                </p>
              </Col>
              <Col className="text-center pt-5" sm={12} md={12} lg={3}>
                <img className="home-section-2-icon" src={homeIcons.data} />
                <h2 className="pt-4 bold home-section-2-subtitle">
                  Data Driven
                </h2>
                <p className="home-section-2-text pt-4 mx-auto">
                  A machine learning algorithm generates emotionless predictions
                  based on historical performance and key metrics. Select your
                  next winners with data, not “feeling!”
                </p>
              </Col>
              <Col className="text-center pt-5" sm={12} md={12} lg={3}>
                <img className="home-section-2-icon" src={homeIcons.access} />
                <h2 className="pt-4 bold home-section-2-subtitle">
                  Accessibilty
                </h2>
                <p className="home-section-2-text pt-4 mx-auto">
                  High-quality picks and outstanding customer service now come
                  in free and paid tiers, so sports bettors with any size
                  bankroll can bet with more confidence.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="home-section-3">
          <Container fluid className="content-container py-5">
            <Row>
              <Col className="text-center pt-3" sm={12} md={12} lg={12}>
                <h1 className="bold home-section-3-h1-text mx-auto">
                  Underdog Analytica vs Stock Market
                </h1>
              </Col>
              <Col className="text-center" sm={12} md={12} lg={12}>
                <div
                  id="home-section-3-chart-container"
                  className="home-section-3-chart-container px-5 py-5"
                >
                  <LineChart />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="home-section-4">
          <Container fluid className="content-container py-5">
            <Row>
              <Col className="text-center pt-3" sm={12} md={12} lg={12}>
                <h1 className="bold home-section-4-h1-text mx-auto">
                  Handicapping Service Tiers
                </h1>
                <p className="home-section-4-h2-text-wrapper mx-auto">
                  <span className="home-section-4-h2-text highlight">
                    "Handicapping" is the term for selling sports Betting
                    predictions
                  </span>
                </p>
              </Col>
              <Col className="pt-5" sm={12} md={12} lg={4}>
                <div className="home-section-4-tier px-5">
                  <h1 className="pt-4 bold home-section-4-title">New Bettor</h1>
                  <h1 className="bold pt-4 home-section-4-pricing">Free</h1>
                  <hr className="home-section-4-separator" />
                  <p className="home-section-4-text text-start pt-4 mx-auto">
                    <span className="highlight">
                      Best for beginner betting:
                    </span>
                    <br />
                    Develop sports betting experience and determine your unit
                    size with free picks and educational resources
                    <ul className="custom-bullet">
                      <li>
                        Data-driven, machine learning algorithm generated
                        predictions
                      </li>
                      <li>Transparent results in real time</li>
                      <li>Empathetic customer service</li>
                      <li>
                        Automated email/Twitter notifications when board updates
                      </li>
                      <li>Educational resources and articles</li>
                      <li>33% of match predictions</li>
                    </ul>
                  </p>

                  <div className="bottom text-center py-4">
                    <Button
                      className="home-section-4-signup-btn bold px-5 py-3"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </Col>
              <Col className="pt-5" sm={12} md={12} lg={4}>
                <div className="home-section-4-tier px-5">
                  <h1 className="pt-4 bold home-section-4-title">
                    Sharp Player
                  </h1>
                  <h1 className="bold pt-4 home-section-4-pricing">
                    &euro;10/month*
                  </h1>
                  <hr className="home-section-4-separator" />
                  <p className="home-section-4-text pt-4">
                    <span className="highlight">
                      Best for consistent betting:
                    </span>
                    <br />
                    Build your bankroll with steady wagers using the entire
                    prediction board while enjoying filtered international
                    football blog posts
                    <ul className="custom-bullet">
                      <li>
                        Data-driven, machine learning algorithm generated
                        predictions
                      </li>
                      <li>Transparent results in real time</li>
                      <li>Empathetic customer service</li>
                      <li>
                        Automated email/Twitter notifications when board updates
                      </li>
                      <li>Educational resources and articles</li>
                      <li>
                        <span className="highlight">
                          100% of match predictions
                        </span>
                      </li>
                      <li>
                        <span className="highlight">
                          Curated international football news feed from top
                          bloggers
                        </span>
                      </li>
                    </ul>
                    <span className="red-highlight">
                      *25% off a yearly subsription
                    </span>
                  </p>
                  <div className="bottom text-center py-4 ">
                    <Button
                      className="home-section-4-signup-btn bold px-5 py-3"
                      size="lg"
                    >
                      Join Now
                    </Button>
                  </div>
                </div>
              </Col>
              <Col className="pt-5" sm={12} md={12} lg={4}>
                <div className="home-section-4-tier px-5">
                  <h1 className="pt-4 bold home-section-4-title">
                    High Roller
                  </h1>
                  <h1 className="bold pt-4 home-section-4-pricing">
                    &euro;25/month*
                  </h1>
                  <p></p>
                  <hr className="home-section-4-separator" />
                  <p className="home-section-4-text text-start pt-4 mx-auto">
                    <span className="highlight">
                      Best for strategic betting:
                    </span>
                    <br />
                    Allocate your assets effectively with our premier wealth
                    management tool, Sports Portfolio Manager
                    <ul className="custom-bullet">
                      <li>
                        Data-driven, machine learning algorithm generated
                        predictions
                      </li>
                      <li>Transparent results in real time</li>
                      <li>Empathetic customer service</li>
                      <li>
                        Automated email/Twitter notifications when board updates
                      </li>
                      <li>Educational resources and articles</li>
                      <li>100% of match predictions</li>
                      <li>
                        Curated international football news feed from top
                        bloggers
                      </li>
                      <li>
                        <span className="highlight">
                          Sports Portfolio Manager bankroll tracking software
                        </span>
                      </li>
                    </ul>
                    <span className="red-highlight">
                      *25% off a yearly subsription
                    </span>
                  </p>

                  <div className="text-center py-4">
                    <Button
                      className="home-section-4-signup-btn bold px-5 py-3"
                      size="lg"
                    >
                      Join Now
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="home-section-5">
          <Container fluid className="content-container">
            <Row>
              <Col className="text-center pt-5" sm={12} md={12} lg={12}>
                <h1 className="bold home-section-5-h1-text mx-auto">
                  Underdog Analytica vs The Competition
                </h1>
              </Col>
              <Col className="py-4" sm={12} md={12} lg={12}>
                <CompetetionComparison />
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}
