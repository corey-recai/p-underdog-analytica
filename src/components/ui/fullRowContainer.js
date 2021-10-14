import Container from "react-bootstrap/Container";
import {Box} from "grommet";
import {ResultsContainer} from "../../pages/home/components/predictions/resultsContainer";

export const FullRowContainer = () => {
    return (
        <div className="row-container">
            <Container>
                <Box pad="large">
                    <ResultsContainer />
                </Box>
            </Container>
        </div>
    )
}