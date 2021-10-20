import {Card, CardBody, CardFooter, CardHeader} from "grommet";
import SubscribeBtn from "../../pages/components/subscribeBtn";

export const CustomCard = () => {
    return (
        <Card >
            <CardHeader className="justify-content-center home-section-1-h1-text bold mx-auto" pad="small">
                The Future of Sports Investing
            </CardHeader>
            <CardBody pad="small" className="text-left">
                <div className="text-subsection">
                    <p>
                        Welcome to your honest, reliable, mathematically proven handicapper.
                        <br />
                        Our algorithm makes the calculations, you make the cash.
                    </p>
                </div>
                <div className="text-subsection">
                    <p>
                        We apply a Machine Learning approach to produce European football predictions that are mathematically supported.
                        Our algorithm discovers Underdogs, or teams who are underperforming according to our model. This means that all of the predictions we provide pay out at least +2 odds.
                    </p>
                    <p>Sign up to receive alerts for when we produce our weekend picks!</p>
                </div>
            </CardBody>
            <CardFooter pad={{horizontal: "small"}} background="light-5">
                <SubscribeBtn />
            </CardFooter>
        </Card>
    );
}