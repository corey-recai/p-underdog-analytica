import BootstrapTable from 'react-bootstrap-table-next';
import {boardData} from "./boardData";

export const Display = () => {
    return (
        <>
            <BootstrapTable
                bordered={false}
                striped
                hover
                keyField="homeTeam"
                data={boardData.picks}
                columns={boardData.columns}
                defaultSorted={boardData.defaultSorted}
            />
        </>
    );
};