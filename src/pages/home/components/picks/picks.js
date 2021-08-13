import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {columns} from "../../../betHistory/data/tableConfig";

export const Picks = (props) => {
    return (
        <div className="Picks">
            <BootstrapTable
                striped
                bordered={false}
                hover
                keyField="id"
                data={ props.data }
                columns = {columns}
            />
        </div>

    );
}