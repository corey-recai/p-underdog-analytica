import BootstrapTable from "react-bootstrap-table-next";
import {useState} from "react";
import {aug13} from "../../pages/betHistory/data/season21_22/august";
import {resultColumns} from "../../pages/home/components/predictions/data";


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
                data={aug13}
                columns={resultColumns}
                expandRow={expandRow}
            />
        </>
    );
}