import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { ColumnToggle } from 'react-bootstrap-table2-toolkit';
import {boardData} from "./boardData";
const { ToggleList } = ColumnToggle;

export const DisplayDogs = () => {
    return (
        <>
            <ToolkitProvider
                keyField="homeTeam"
                data={ boardData.picks }
                columns={ boardData.columns }
                columnToggle
            >
                {
                    props => (
                        <div>
                            <ToggleList { ...props.columnToggleProps } />
                            <hr />
                            <BootstrapTable
                                { ...props.baseProps }
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
            {/*<BootstrapTable*/}
            {/*    bordered={false}*/}
            {/*    striped*/}
            {/*    hover*/}
            {/*    keyField="homeTeam"*/}
            {/*    data={boardData.picks}*/}
            {/*    columns={boardData.columns}*/}
            {/*    defaultSorted={boardData.defaultSorted}*/}
            {/*/>*/}
        </>
    );
};