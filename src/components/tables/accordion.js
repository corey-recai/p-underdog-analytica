import BootstrapTable from "react-bootstrap-table-next";
import {columns} from '../../pages/betHistory/data/tableConfig';
import {latestPicks, pickColumns} from '../../pages/home/components/picks/data';
import {useState} from "react";

export const Accordion = (props) => {
    const [row, setRow] = useState(props.row)

    const clickHandler = () => {
        setRow(this.row);
        console.log('Row' + row)
    }

    const expandRow = {
        renderer: row => (
            <div onClick={clickHandler}>
                <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
                <p></p>
                <p>expandRow.renderer callback will pass the origin row object to you</p>
            </div>
        ),
        showExpandColumn: true,
        onExpand: (row, isExpand, rowIndex, e) => {
            console.log(row);
            console.log(isExpand);
            // console.log(rowIndex);
            // console.log(e);
        },
        onExpandAll: (isExpandAll, rows, e) => {
             console.log(isExpandAll);
            // console.log(rows);
            // console.log(e);
        }
    };

    return (
        <>
            <BootstrapTable
                bordered={false}
                striped
                hover
                keyField='id'
                data={ latestPicks }
                columns={ pickColumns }
                expandRow={ expandRow }
            />
        </>
    );
}