import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {pickColumns} from "./data";
import {columns, defaultSorted} from "../../../betHistory/data/tableConfig";

export const Picks = (props) => {
    return (
        <div className="Picks">
            {/*<h4 className="pt-1">Predictions Released: {props.date}</h4>*/}
            <BootstrapTable
                striped
                bordered={false}
                hover
                keyField="id"
                data={props.data}
                columns = {pickColumns}
                defaultSorted={defaultSorted}
            />
        </div>

    );
}