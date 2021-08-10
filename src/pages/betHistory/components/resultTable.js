import BootstrapTable from 'react-bootstrap-table-next';
import {columns, defaultSorted} from "./data/tableConfig";
import {april16, april24} from "./data/aprilResults";
import {may1_3, may7_10, may14_16, may22_23} from "./data/mayResults";


export const ResultTable = () => {

    return (
        <>
            <div>
                <h1>April 2021</h1>
                <div className="bet-history-tables">
                    <h2>April 16</h2>
                    <BootstrapTable
                        striped
                        bordered={false}
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

