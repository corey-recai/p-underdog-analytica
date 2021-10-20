import {Card, CardBody, CardFooter, CardHeader} from "grommet";
import SubscribeBtn from "../../pages/components/subscribeBtn";

export const CustomCard = () => {
    return (
        <Card >
            <CardHeader className="justify-content-center home-section-1-h1-text bold mx-auto" pad="xsmall">
                <div className="gridcard-content-area gridcard-title">
                     The Future of Sports: Investing
                </div>
            </CardHeader>
            <CardBody pad="small">
                <div className="gridcard-subtitle gridcard-content-area">
                    <p>
                        Welcome to your honest, reliable, mathematically proven handicapper.
                    </p>
                </div>
                <div className="gridcard-content-area">
                    <p>
                        Our algorithm makes the calculations, you make the cash.
                        We apply a Machine Learning approach to produce European football predictions that are mathematically supported.
                        Our algorithm discovers Underdogs, or teams who are underperforming according to our model. This means that all of the predictions we provide pay out at least +2 odds.
                    </p>
                    <p className="gridcard-content-area">Sign up to receive alerts for when we produce our weekend picks!</p>
                </div>
                <div>
                    <SubscribeBtn />
                </div>
            </CardBody>
        </Card>
    );
}