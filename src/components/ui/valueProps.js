import React, {useContext} from "react";
import {Box, Grid, ResponsiveContext, Text} from "grommet";
import Container from "react-bootstrap/Container";
import {ValuePropCard} from "./valuePropCard";
import {GridCard} from "./gridCard";
import homeIcons from "../../pages/home/icons/homeIcons";

export const ValueProps = () => {
    const size = useContext(ResponsiveContext)
    return (

              <Container>
                <Box pad="small">
                  <Grid gap="small" columns={[size]} alignContent="center">
                    <div className="center">
                      <GridCard title="Why Underdog Analytica?"
                                content={[
                          <Grid
                            columns={[size, size]}
                            rows={[size, size]}
                            gap="small"
                            areas={[
                              {name: 'first', start: [0,0], end: [0,0]},
                              {name: 'second', start: [1,0], end: [1,0]},
                              {name: 'third', start: [0,1], end: [0,1]},
                              {name: 'fourth', start: [1,1], end: [1,1]},
                            ]}>

                            <Box gridArea='first'>
                              <ValuePropCard
                                title="Transparency"
                                content="All of our previous recommendation data available for review
                                          in BET HISTORY before you even make an account
                                          because you deserve a handicapper with integrity."
                                image={homeIcons.honesty}/>
                            </Box>

                            <Box gridArea='second'>
                              <ValuePropCard
                                title="Hassle Free"
                                content="Retweeting for free predictions that come hours later is annoying.
                                        When our new picks are available, you will be instantly and automatically notified."
                                image={homeIcons.wealth}/>
                            </Box>

                            <Box gridArea='fourth'>
                              <ValuePropCard
                                title="Data Driven"
                                content="Our machine learning algorithm generates emotionless
                                          predictions based on historical performance and key metrics.
                                          Select your next winners with data, not “feeling!”"
                                image={homeIcons.data}/>
                            </Box>

                            <Box gridArea='third'>
                              <ValuePropCard
                                title="Accessibility"
                                content="High-quality picks and outstanding customer service now come
                                          in free and paid tiers, so sports bettors with any size
                                          bankroll can bet with more confidence."
                                image={homeIcons.access}/>
                            </Box>
                            </Grid>
                        ]}/>
                      </div>
                    </Grid>
                  </Box>
                </Container>

    )
}
