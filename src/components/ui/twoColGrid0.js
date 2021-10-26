import React, {useContext} from "react";
import {Box, Grid, ResponsiveContext} from "grommet";
import Container from "react-bootstrap/Container";
import {GridCard} from "./gridCard";
import SubscribeBtn from "../../pages/components/subscribeBtn";
import {ResultsContainer} from "../../pages/home/components/predictions/resultsContainer";
import {StatsGrid} from "../../pages/home/components/highlights/statsGrid";
import {DisplayContainer} from "../../pages/home/components/predictions/displayContainer";
import {CustomCard} from "./customCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import homeIcons from "../../pages/home/icons/homeIcons";
import {Card, CardBody, CardFooter, CardHeader} from "grommet";


export const TwoColGrid0 = () => {
    return (
        <Container>
            <Box pad="large">

                <div className="gridcard-title mx-auto">
                  <h1> Why Underdog Analytica? </h1>
                </div>
                <div class="center">
                <Grid
                    columns={["25%", "25%", "25%", "25%"]}
                    gap="small">
                    <Card width="large">
                      <img className="home-section-2-icon center" src={homeIcons.honesty} />
                      <CardHeader className="percent-25-card-title">
                          Transparency
                          </CardHeader>
                          <CardBody className="percent-25-card-text pt-4 mx-auto">
                          All of our previous recommendation data available for review
                          in <a href="#">BET HISTORY</a> before you even make an account
                          because you deserve a handicapper with integrity.
                          </CardBody>
                    </Card>
                    <Card>
                      <img className="home-section-2-icon center" src={homeIcons.wealth} />
                      <CardHeader className="percent-25-card-title">
                          Hassle Free
                          </CardHeader>
                          <CardBody className="percent-25-card-text pt-4 mx-auto">
                          Retweeting for free predictions that come hours later is annoying.
                          When new picks are available, you’ll be automatically notified. Simple as that.
                          </CardBody>
                    </Card>
                    <Card>
                      <img className="home-section-2-icon center" src={homeIcons.data} />
                      <CardHeader className="percent-25-card-title">
                          Data Driven
                          </CardHeader>
                          <CardBody className="percent-25-card-text pt-4 mx-auto">
                          Our machine learning algorithm generates emotionless
                          predictions based on historical performance and key metrics.
                          Select your next winners with data, not “feeling!”
                          </CardBody>
                    </Card>
                    <Card width="large">
                      <img className="home-section-2-icon center" src={homeIcons.access} />
                      <CardHeader className="percent-25-card-title">
                          Accessibility
                          </CardHeader>
                          <CardBody className="percent-25-card-text pt-4 mx-auto">
                          High-quality picks and outstanding customer service now come
                          in free and paid tiers, so sports bettors with any size
                          bankroll can bet with more confidence. </CardBody>
                    </Card>
                </Grid>
                </div>
            </Box>
        </Container>
    )
}
