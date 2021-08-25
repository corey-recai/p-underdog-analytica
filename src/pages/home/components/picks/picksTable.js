import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import Row from "react-bootstrap/Row";
import {pickColumns} from "./latestData";

export const PicksTable = (props) => {
    return (
        <Row className="picks pt-2">
            <h5>{props.date}</h5>
            <BootstrapTable
                striped
                bordered={false}
                hover
                keyField="id"
                data={props.data}
                columns = {pickColumns}
            />
        </Row>
    );
}