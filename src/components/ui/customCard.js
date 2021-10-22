import {Card, CardBody, CardFooter, CardHeader} from "grommet";
import SubscribeBtn from "../../pages/components/subscribeBtn";

export const CustomCard = () => {
    return (
        <Card width="large">
            <CardHeader className="justify-content-center home-section-1-h1-text bold mx-auto gridcard-title" pad="small">
                     The Future of Sports: Investing
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
                    </p>
                    <p>
                        We apply a Machine Learning approach to produce European football predictions that are mathematically supported.
                    </p>
                    <p>
                        Our algorithm discovers Underdogs, or teams who are underperforming according to our model. This means that all of the predictions we provide pay out at least +2 odds.
                    </p>
                    <p>
                        Sign up to receive alerts for when we produce our weekend picks!
                    </p>
                </div>
                <div>
                    <SubscribeBtn />
                </div>
            </CardBody>
        </Card>
    );
}
