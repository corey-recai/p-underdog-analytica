import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

import Row from "react-bootstrap/Row";
import {columns, defaultSorted} from "../../../betHistory/data/tableConfig";
import {pickColumns} from "./data";


export const PicksTable = (props) => {
    return (
        <div className="Picks">
            <h4 className="pt-1">{props.date}</h4>
            <BootstrapTable
                striped
                bordered={false}
                hover
                keyField="id"
                data={props.data}
                columns={props.columns}
                defaultSorted={defaultSorted}
            />
        </div>
    )
}