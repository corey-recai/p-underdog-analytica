import BootstrapTable from 'react-bootstrap-table-next';
import {columns, defaultSorted} from "./tableConfig";
import {april16, april24} from "./data/april2021/aprilResults";
import {may1_3, may7_10, may14_16, may22_23} from "./data/may2021/mayResults";

export const ResultTable = () => {
    return (
        <>
            <div>
                <h1>April 2021</h1>
                <div className="bet-history-tables">
                    <h2>April 16</h2>
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
            </div>

            <div className="pt-5">
                <h1>May 2021</h1>
                <div className="bet-history-tables pt-3">
                    <h2>May 1-3</h2>
                    <BootstrapTable
                        bordered={false}
                        striped
                        hover
                        keyField="homeTeam"
                        data={ may1_3 }
                        columns={ columns }
                        defaultSorted={ defaultSorted }
                    />
                </div>
                <div className="bet-history-tables pt-3">
                    <h2>May 7-10</h2>
                    <BootstrapTable
                        bordered={false}
                        striped
                        hover
                        keyField="homeTeam"
                        data={ may7_10 }
                        columns={ columns }
                        defaultSorted={ defaultSorted }
                    />
                </div>

                <div className="bet-history-tables pt-3">
                    <h2>May 14-16</h2>
                    <BootstrapTable
                        bordered={false}
                        striped
                        hover
                        keyField="homeTeam"
                        data={ may14_16 }
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
                        data={ may22_23 }
                        columns={ columns }
                        defaultSorted={ defaultSorted }
                    />
                </div>
            </div>

        </>
    );
};








// SerieA	Udinese	Sampdoria	1	2.46	Loss	-1	16/5/2021
// SerieA	Spezia	Torino	2	2.45	Loss	-1	15/5/2021
// SerieA	Juventus	Inter	X	3.61	Loss	-1	15/5/2021
