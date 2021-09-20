import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

import Row from "react-bootstrap/Row";
import {columns, defaultSorted} from "../../../betHistory/data/tableConfig";


export const PicksTable = (props) => {
    return (
        <div className="Picks">
            {/*<h4 className="pt-1">Predictions Released: {props.date}</h4>*/}
            <BootstrapTable
                striped
                bordered={false}
                hover
                keyField="id"
                data={props.data}
                columns={columns}
                defaultSorted={defaultSorted}
            />
        </div>
    )
}