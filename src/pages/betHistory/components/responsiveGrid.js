import React, {Component} from 'react';
import { Flex, Box  } from 'rebass';
import {AccordionTable} from "./accordianTable";

export default class ResponsiveGrid extends Component {
    render() {
        return (
            <>
                <Flex>
                    <Box
                        p={3}
                        width={1/2}
                        color='black'
                        bg='primary'>
                    </Box>
                    <Box
                        p={3}
                        width={1/2}
                        color='black'
                        bg='secondary'>
                        <AccordionTable />
                    </Box>
                </Flex>
            </>
        )
    }
}