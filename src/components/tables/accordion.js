import BootstrapTable from "react-bootstrap-table-next";

export const Accordion = (props) => {
    const expandRow = {
        renderer: row => (
            <div>
                <p>{ `This Expand row is belong to rowKey ${props.homeTeam}` }</p>
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
                keyField='id'
                data={ props.data }
                columns={ props.columns }
                expandRow={ expandRow }
            />
        </>
    );
}