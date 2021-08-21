import BootstrapTable from "react-bootstrap-table-next";
import {latestPicks, pickColumns} from '../../pages/home/components/picks/data';
import {useState} from "react";
import {LeagueMatchesPanel} from "./accordionPanel";

export const Accordion = (props) => {
    const [row, setRow] = useState(props.row)

    const clickHandler = () => {
        setRow(this.row);
        console.log('Row' + row)
    }

    const expandRow = {
        renderer: row => (
            <div onClick={clickHandler} >
                <p>{row.id}</p>
            </div>
        ),
        showExpandColumn: true,
        onExpand: (row, isExpand, rowIndex, e) => {
            console.log(row);
            console.log(isExpand);
        },
        onExpandAll: (isExpandAll, rows, e) => {
             console.log(isExpandAll);
        }
    };

    return (
        <>
            <LeagueMatchesPanel league="Bundesliga" matches={3} showExpandColumn={true}/>
            <BootstrapTable
                bordered={false}
                striped
                hover
                keyField='id'
                data={ latestPicks }
                columns={ pickColumns }
                expandRow={ expandRow }
            />
        </>
    );
}