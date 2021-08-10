import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import {columns, defaultSorted} from "../../../betHistory/components/data/tableConfig";
import {may22_23} from "../../../betHistory/components/data/mayResults";


const CustomToggleList = ({
                              columns,
                              onColumnToggle,
                              toggles
                          }) => (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
        {
            columns
                .map(column => ({
                    ...column,
                    toggle: toggles[column.dataField]
                }))
                .map(column => (
                    <button
                        type="button"
                        key={column.dataField}
                        className={`btn btn-warning ${column.toggle ? 'active' : ''}`}
                        data-toggle="button"
                        aria-pressed={column.toggle ? 'true' : 'false'}
                        onClick={() => onColumnToggle(column.dataField)}
                    >
                        {column.text}
                    </button>
                ))
        }
    </div>
);


export const DisplayDogs = () => {
    return (
        <>
            <ToolkitProvider
                keyField="homeTeam"
                data={may22_23}
                columns={columns}
                defaultSorted={defaultSorted}
                bootstrap4
                columnToggle
            >
                {
                    props => (
                        <div>
                            <BootstrapTable
                                striped
                                hover
                                condensed
                                keyField="homeTeam"
                                bordered={false}
                                {...props.baseProps}
                            />
                            <CustomToggleList {...props.columnToggleProps} />
                        </div>
                    )
                }
            </ToolkitProvider>
        </>
    );
};