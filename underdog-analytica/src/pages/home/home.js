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

    this.checkWidth(this.mobileView);
    this.mobileView.addListener(this.checkWidth);
  }

  componentWillUnmount() {
    this.mobileView.removeListener(this.checkWidth);
  }
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
                <div className="home-section-1-cta-text">
                  <h1 className="bold home-section-1-h1-text">
                    TRANSPARENT &amp; HASSLE FREE SPORTS BETTING PREDICTIONS
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
                    SIGN UP NOW &nbsp;&nbsp;
                    <FontAwesomeIcon size="sm" icon={faAngleDoubleRight} />
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
                  className="home-section-1-big-board-chart-container px-5 py-5"
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
                <h2 className="pt-4 bold home-section-2-subtitle">Honesty</h2>
                <p className="home-section-2-text pt-4 mx-auto">
                  Competitors rarely make thier returns clear and
                  understandable. Thats why all our bets are available for
                  review in <a href="#">BET HISTORY</a> before you make an
                  account.
                </p>
              </Col>
              <Col className="text-center pt-5" sm={12} md={12} lg={3}>
                <img className="home-section-2-icon" src={homeIcons.wealth} />
                <h2 className="pt-4 bold home-section-2-subtitle">
                  Wealth Management
                </h2>
                <p className="home-section-2-text pt-4 mx-auto">
                  Sports Betting, when done by the numbers, is an investment
                  strategy. Using efficient bankroll management, consistent
                  monthly returns are possible... WORKSHOP
                </p>
              </Col>
              <Col className="text-center pt-5" sm={12} md={12} lg={3}>
                <img className="home-section-2-icon" src={homeIcons.data} />
                <h2 className="pt-4 bold home-section-2-subtitle">
                  Data Driven
                </h2>
                <p className="home-section-2-text pt-4 mx-auto">
                  We are not your cousin's friend who has a "good read" on the
                  matches. We use a machine learning algorithm to generate
                  emotionless predictions.
                </p>
              </Col>
              <Col className="text-center pt-5" sm={12} md={12} lg={3}>
                <img className="home-section-2-icon" src={homeIcons.access} />
                <h2 className="pt-4 bold home-section-2-subtitle">
                  Accessibilty
                </h2>
                <p className="home-section-2-text pt-4 mx-auto">
                  We are priced for everyone at all ages and experience levels
                  at 60 cents per pick on average. Who wants to use $200 of
                  their bank roll on a picks subscription?
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
                  <span className="home-section-4-h2-text purple-highlight">
                    "Handicapping" is the term for selling sports Betting
                    predictions
                  </span>
                </p>
              </Col>
              <Col className="text-center pt-5" sm={12} md={12} lg={4}>
                <div className="home-section-4-tier">
                  <h1 className="pt-4 bold home-section-4-title">Skeleton</h1>
                  <p className="bold pt-4 home-section-4-text mx-auto">
                    5 picks at a time
                  </p>
                  <p className="home-section-4-text text-start pt-4 mx-auto">
                    Access to sports Betting educational articles
                    <ul className="custom-bullet">
                      <li>
                        Learn how to bet on European football, how to manage a
                        bank roll, and how sports Betting affects taxes (USA
                        only)
                      </li>
                    </ul>
                  </p>
                  <h1 className="bold pt-4 home-section-4-pricing">$0/month</h1>
                  <div className="py-4">
                    <Button
                      className="home-section-4-signup-btn bold px-5 py-3"
                      size="lg"
                    >
                      GET TO KNOW <br />
                      UNDERDOG ANALYTICA
                    </Button>
                  </div>
                </div>
              </Col>
              <Col className="text-center pt-5 " sm={12} md={12} lg={4}>
                <div className="home-section-4-tier">
                  <h1 className="pt-4 bold home-section-4-title">Starter</h1>
                  <p className="bold pt-4 home-section-4-text mx-auto">
                    Access to all picks on the board
                  </p>
                  <p className="home-section-4-text text-start pt-4 mx-auto">
                    Curated list of cportswriter content
                    <ul className="custom-bullet">
                      <li>
                        Track your favorite leagues through internationally
                        followed writers
                      </li>
                    </ul>
                    Automatied email notifications when the board changes
                  </p>
                  <h1 className="bold pt-4 home-section-4-pricing">
                    $10/month
                  </h1>
                  <div className="py-4">
                    <Button
                      className="home-section-4-signup-btn bold px-5 py-3"
                      size="lg"
                    >
                      JOIN THE <br />
                      STARTER PROGRAM
                    </Button>
                  </div>
                </div>
              </Col>
              <Col className="text-center pt-5 " sm={12} md={12} lg={4}>
                <div className="home-section-4-tier">
                  <h1 className="pt-4 bold home-section-4-title">
                    High Roller
                  </h1>
                  <p className="bold pt-4 home-section-4-text mx-auto">
                    Starter +
                  </p>
                  <p className="home-section-4-text text-start pt-4 mx-auto">
                    Portfolio manager
                    <ul className="custom-bullet">
                      <li>Track your bankroll throughout the season</li>
                    </ul>
                    Automatied email notifications when the board changes
                  </p>
                  <h1 className="bold pt-4 home-section-4-pricing">
                    $25/month
                  </h1>
                  <div className="py-4">
                    <Button
                      className="home-section-4-signup-btn bold px-5 py-3"
                      size="lg"
                    >
                      BECOME A <br /> HIGH ROLLER
                    </Button>
                  </div>
                </div>
              </Col>
              <Col className="text-center pt-5" sm={12} md={12} lg={12}>
                <h1 className="bold home-section-4-h1-text mx-auto">Pricing</h1>
              </Col>
              <Col className="text-center py-4" sm={12} md={12} lg={12}>
                <div className="home-section-4-pricing-card mx-auto px-5 py-5">
                  <h2 className="bold home-section-4-pricing-card-text">
                    Once you select a package you want from the previous slide
                    we offer a 25% discount on the value of 10 months of service
                    if you pay up front for an annual pass.
                  </h2>
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
