import {defaultSorted, columns} from "../data/tableConfig";
import BootstrapTable from "react-bootstrap-table-next";


export const WeeklyResult = (props) => {
        return (
            <>
                <div className="py-3">
                    <BootstrapTable
                        striped
                        bordered={false}
                        hover
                        keyField="id"
                        data={ props.data }
                        columns={ columns }
                        defaultSorted={ defaultSorted }
                    />
                </div>
            </>
        );
}