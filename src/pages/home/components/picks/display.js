import BootstrapTable from 'react-bootstrap-table-next';
import {columns, defaultSorted} from "../../../betHistory/components/data/tableConfig";
import {may22_23} from "../../../betHistory/components/data/mayResults";


export const Display = () => {
    return (
        <>
            <BootstrapTable
                bordered={false}
                striped
                hover
                keyField="homeTeam"
                data={ may22_23 }
                columns={ columns }
                defaultSorted={ defaultSorted }
            />
        </>
    );
};