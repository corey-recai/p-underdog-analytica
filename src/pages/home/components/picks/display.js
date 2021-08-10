import BootstrapTable from 'react-bootstrap-table-next';
import {columns, picks, defaultSorted} from "./boardData";
import paginationFactory from 'react-bootstrap-table2-paginator';

export const Display = () => {
    return (
        <>
            <BootstrapTable
                bordered={false}
                striped
                hover
                keyField="homeTeam"
                data={ picks }
                columns={ columns }
                defaultSorted={ defaultSorted }
            />
        </>
    );
};