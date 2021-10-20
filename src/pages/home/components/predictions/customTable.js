import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {defaultSorted} from "../../../betHistory/data/tableConfig";

export const CustomTable = (props) => {
    return (
        <div className="Picks">
            <h5 className="pt-1">{props.date}</h5>
            <BootstrapTable
                striped
                bordered={true}
                hover
                keyField="id"
                data={props.data}
                columns={props.columns}
                defaultSorted={defaultSorted}
            />
        </div>
    )
}
