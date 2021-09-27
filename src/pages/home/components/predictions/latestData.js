export const pickColumns = [
    {
        dataField: "id",
        text: "ID",
        hidden: true,
    },
    {
        dataField: "country",
        text: "Country",
    },
    {
        dataField: "league",
        text: "League",
    },
    {
        dataField: "homeTeam",
        text: "Home Team",
    },
    {
        dataField: "awayTeam",
        text: "Away Team",
    },
    {
        dataField: "prediction",
        text: "Prediction",
        // align: 'center'
    },
    {
        dataField: "odds",
        text: "Odds",
        // align: 'center'
    },
    {
        dataField: "result",
        text: "Result",
        sort: true,
        style: (cell) => {
            if (cell === 'Win') {
                return {
                    backgroundColor: '#c8e6c9',
                    color: 'green',
                };
            }else if (cell === 'Loss') {
                return {
                    backgroundColor: 'rgba(245,124,124,0.69)',
                    color: 'red',
                };
            }
            return {
                backgroundColor: '#94c3f3'
            };
        }
    },
    {
        dataField: "netUnits",
        text: "Net Units +/-",
        sort: true
    },
    {
        dataField: "date",
        text: "Date",
    },
];