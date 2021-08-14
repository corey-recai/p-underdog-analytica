import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import {competitionColumns, uaBenefits} from "./details";
import {Box, Flex} from "rebass";

export default class CompetitionComparison extends Component {
  render() {
    return (
      <>
        <Flex>
          <Box
              p={3}
              width={1}
              fontSize={1}
              color='black'
              bg='secondary'>
            <BootstrapTable
                striped
                bordered={false}
                hover
                keyField="id"
                data={ uaBenefits }
                columns={ competitionColumns }
            />
          </Box>
        </Flex>
      </>
    );
  }
}
