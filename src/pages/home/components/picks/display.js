import BootstrapTable from 'react-bootstrap-table-next';
import {columns, picks, defaultSorted} from "./boardData";

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