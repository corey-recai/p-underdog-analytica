import BootstrapTable from 'react-bootstrap-table-next';
import {april16} from "../data/aprilResults";
import {columns} from "../data/tableConfig";


export const AccordionTable = () => {
    const expandRow = {
        renderer: row => (
            <div>
                <p>{ `This Expand row is belong to rowKey ${row.homeTeam}` }</p>
                <p>You can render anything here, also you can add additional data on every row object</p>
                <p>expandRow.renderer callback will pass the origin row object to you</p>
            </div>
        ),
        showExpandColumn: true,
        onExpand: (row, isExpand, rowIndex, e) => {
            console.log(row.id);
            console.log(isExpand);
            console.log(rowIndex);
            console.log(e);
        },
        onExpandAll: (isExpandAll, rows, e) => {
            console.log(isExpandAll);
            console.log(rows);
            console.log(e);
        }
    };

    return (
        <>
            <BootstrapTable
                bordered={false}
                striped
                hover
                keyField='homeTeam'
                data={ april16 }
                columns={ columns }
                expandRow={ expandRow }
            />
        </>
    );
}



