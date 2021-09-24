import BootstrapTable from "react-bootstrap-table-next";

import {useState} from "react";
import {LeagueMatchesPanel} from "./accordionPanel";
import {pickColumns, results_aug21} from "../../pages/home/components/predictions/latestData";

export const Accordion = (props) => {
    const [row, setRow] = useState(props.row)

    const clickHandler = () => {
        setRow(this.row);
        console.log('Row' + row)
    }

    const expandRow = {
        renderer: row => (
            <div onClick={clickHandler}>
                <p>{row.id}</p>
            </div>
        ),
        showExpandColumn: true,
        onExpand: (row, isExpand, rowIndex, e) => {
            console.log(row);
            console.log(isExpand);
        },
        onExpandAll: (isExpandAll, rows, e) => {
             console.log(isExpandAll);
        }
    };

    return (
        <>
            <BootstrapTable
                bordered={false}
                striped
                hover
                keyField='id'
                data={results_aug21}
                columns={pickColumns}
                expandRow={expandRow}
            />
        </>
    );
}