import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/nav";
import CompetitionComparison from "./components/competitors/competitionComparison";
import Footer from "../components/footer";
import LineChart from "./components/lineChart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel } from "swiper/core";
import "swiper/swiper.min.css";
import "./home.css";
import homeIcons from "./icons/homeIcons";
import logos from "../../assets/logos/logos";
import Chart from "./components/charting/chartContainer";
import SubscribeBtn from "../components/subscribeBtn";
// import {DisplayContainer} from "./components/predictions/displayContainer";
import {StatsGrid} from "./components/highlights/statsGrid";
import {DisplayContainer} from "./components/predictions/displayContainer";
import {ResultsContainer} from "./components/predictions/resultsContainer";
import {TwoColGrid} from "../../components/ui/twoColGrid";
import {SubscribeSection} from "./components/intro/subscribeSection";
import {FullRowContainer} from "../../components/ui/fullRowContainer";
import {UpcomingPredictions} from "./components/predictions/upcomingPredictions";


SwiperCore.use([Mousewheel]);

export default class Home extends Component {
    componentDidMount() {
        window.onscroll = () => {
            this.scrollFunction();
        };
    }

    scrollFunction = () => {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            document.getElementById("ua-nav").classList.add("ua-nav-scrolled");
        } else if (
            document.body.scrollTop < 50 ||
            document.documentElement.scrollTop < 50
        ) {
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
                <TwoColGrid />

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
                                    All of our previous recommendation data available for review
                                    in <a href="#">BET HISTORY</a> before you even make an account
                                    because you deserve a handicapper with integrity.
                                </p>
                            </Col>
                            <Col className="text-center pt-5" sm={12} md={12} lg={3}>
                                <img className="home-section-2-icon" src={homeIcons.wealth} />
                                <h2 className="pt-4 bold home-section-2-subtitle">
                                    Hassle Free
                                </h2>
                                <p className="home-section-2-text pt-4 mx-auto">
                                    Retweeting for free predictions that come hours later is annoying.
                                    When new picks are available, you’ll be automatically notified. Simple as that.
                                </p>
                            </Col>
                            <Col className="text-center pt-5" sm={12} md={12} lg={3}>
                                <img className="home-section-2-icon" src={homeIcons.data} />
                                <h2 className="pt-4 bold home-section-2-subtitle">
                                    Data Driven
                                </h2>
                                <p className="home-section-2-text pt-4 mx-auto">
                                    Our machine learning algorithm generates emotionless
                                    predictions based on historical performance and key metrics.
                                    Select your next winners with data, not “feeling!”
                                </p>
                            </Col>
                            <Col className="text-center pt-5" sm={12} md={12} lg={3}>
                                <img className="home-section-2-icon" src={homeIcons.access} />
                                <h2 className="pt-4 bold home-section-2-subtitle">
                                    Accessibility
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
                                <div className="home-section-3-chart-container">
                                    <Chart />
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
                    "Handicapping" is the term for selling sports betting
                    predictions
                  </span>
                                </p>
                            </Col>
                            <Col className="pt-5" sm={12} md={12} lg={4}>
                                <div id="new-bettor-tier" className="home-section-4-tier px-5">
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
                                                Automated email/Twitter notifications when Bet Board
                                                updates
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
                                            <a href="#" className="text-white">Bet Smarter</a>
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col className="pt-5" sm={12} md={12} lg={4}>
                                <div
                                    id="sharp-player-tier"
                                    className="home-section-4-tier px-5"
                                >
                                    <div className="home-section-4-coming-soon-cover">
                    <span className="home-section-4-coming-soon-text">
                      Coming Soon
                    </span>
                                    </div>
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
                      *25% off annual subscription
                    </span>
                                    </p>

                                    <div className="bottom text-center py-4 ">
                                        <Button
                                            className="home-section-4-signup-btn bold px-5 py-3"
                                            size="lg"
                                        >
                                            Bet Strategically
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col className="pt-5" sm={12} md={12} lg={4}>
                                <div id="high-roller-tier" className="home-section-4-tier px-5">
                                    <div className="home-section-4-coming-soon-cover">
                    <span className="home-section-4-coming-soon-text">
                      Coming Soon
                    </span>
                                    </div>
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
                          Portfolio Manager for bankroll tracking
                        </span>
                                            </li>
                                        </ul>
                                        <span className="red-highlight">
                      *25% off a annual subscription
                    </span>
                                    </p>

                                    <div className="text-center py-4">
                                        <Button
                                            className="home-section-4-signup-btn bold px-5 py-3"
                                            size="lg"
                                        >
                                            Bet Professionally
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/*<div className="home-section-5">*/}
                {/*  <Container fluid className="content-container">*/}
                {/*    <Row>*/}
                {/*      <Col className="text-center pt-5" sm={12} md={12} lg={12}>*/}
                {/*        <h1 className="bold home-section-5-h1-text mx-auto">*/}
                {/*          How it Works*/}
                {/*        </h1>*/}
                {/*      </Col>*/}
                {/*      <Col sm={12} md={12} lg={12}>*/}

                {/*        <Swiper*/}
                {/*          direction={"vertical"}*/}
                {/*          mousewheel={true}*/}
                {/*          className="mySwiper"*/}
                {/*        >*/}
                {/*          <SwiperSlide>*/}
                {/*            Slide 1*/}
                {/*            <div class="scroll-indicator-container">*/}
                {/*              <div class="scroll-indicator-chevron"></div>*/}
                {/*              <div class="scroll-indicator-chevron"></div>*/}
                {/*              <div class="scroll-indicator-chevron"></div>*/}
                {/*            </div>*/}
                {/*          </SwiperSlide>*/}
                {/*          <SwiperSlide>*/}
                {/*            Slide 2*/}
                {/*            <div class="scroll-indicator-container">*/}
                {/*              <div class="scroll-indicator-chevron"></div>*/}
                {/*              <div class="scroll-indicator-chevron"></div>*/}
                {/*              <div class="scroll-indicator-chevron"></div>*/}
                {/*            </div>*/}
                {/*          </SwiperSlide>*/}
                {/*          <SwiperSlide>Slide 3</SwiperSlide>*/}
                {/*        </Swiper>*/}

                {/*      </Col>*/}
                {/*    </Row>*/}
                {/*  </Container>*/}
                {/*</div>*/}

                <div className="home-section-6">
                    <Container fluid className="content-container">
                        <Row>
                            <Col className="text-center pt-5" sm={12} md={12} lg={12}>
                                <h1 className="bold home-section-6-h1-text mx-auto">
                                    Underdog Analytica vs The Competition
                                </h1>
                            </Col>
                            <Col className="py-4" sm={12} md={12} lg={12}>
                                <CompetitionComparison />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </>
        );
    }
}
