import BootstrapTable from 'react-bootstrap-table-next';
import {columns, may22, defaultSorted} from "./betHistoryData";
import {april16, april24} from "./data/april2021/aprilResults";

export const ResultTable = () => {
    return (
        <>
            <div className="bet-history-tables">
                <BootstrapTable
                    bordered={false}
                    striped
                    hover
                    keyField="homeTeam"
                    data={ april16 }
                    columns={ columns }
                    defaultSorted={ defaultSorted }
                />
            </div>
            <div className="bet-history-tables pt-3">
                <h2>April 24-26</h2>
                <BootstrapTable
                    bordered={false}
                    striped
                    hover
                    keyField="homeTeam"
                    data={ april24 }
                    columns={ columns }
                    defaultSorted={ defaultSorted }
                />
            </div>


            <div className="bet-history-tables pt-3">
                <h2>May 22-23</h2>
                <BootstrapTable
                    bordered={false}
                    striped
                    hover
                    keyField="homeTeam"
                    data={ may22 }
                    columns={ columns }
                    defaultSorted={ defaultSorted }
                />
            </div>
        </>
    );
};




// Bundesliga	Mainz	Hertha	2	3.04	Loss	-1	3/5/2021
// Eredivisie	Groningen	Sparta Rotterdam	X	3.46	Loss	-1	2/5/2021
// Liga	Eibar	Alaves	1	2.59	Win	1.59	1/5/2021
// Ligue1	Monaco	Lyon	2	3.06	Win	2.06	2/5/2021
// Ligue1	Montpellier	St Etienne	X	3.45	Loss	-1	2/5/2021
// Ligue1	Nimes	Reims	X	3.45	Win	2.45	2/5/2021
// PremierLeague	West Brom	Wolves	2	2.65	Loss	-1	3/5/2021
// PremierLeague	Everton	Aston Villa	X	3.7	Loss	-1	1/5/2021
// PremierLeague	Everton	Aston Villa	2	3.72	Win	2.72	1/5/2021
// PremierLeague	Man United	Liverpool	X	3.65	Postponed	N/a	2/5/2021
// PremierLeague	Brighton	Leeds	X	3.52	Loss	-1	1/5/2021
// PrimeiraLiga	Portimonense	Rio Ave	X	3.18	Win	2.18	1/5/2021
// PrimeiraLiga	Santa Clara	Boavista	X	3.24	Win	2.24	1/5/2021
// ScottishPL	Rangers	Celtic	X	3.47	Loss	-1	2/5/2021
// ScottishPL	Dundee United	Ross County	X	3.51	Loss	-1	1/5/2021
// ScottishPL	Motherwell	Kilmarnock	X	3.55	Loss	-1	1/5/2021
// ScottishPL	Hibernian	St Johnstone	X	3.45	Loss	-1	1/5/2021
// ScottishPL	St Mirren	Hamilton	X	3.7	Loss	-1	1/5/2021

