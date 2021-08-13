import BootstrapTable from "react-bootstrap-table-next";
import { Flex, Box } from "rebass";

export const Accordion = (props) => {
    const expandRow = {
        renderer: row => (
            <Flex>
                <Box width={1/2}>

                </Box>
                <Box width={1/2}>

                </Box>
            </Flex>
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