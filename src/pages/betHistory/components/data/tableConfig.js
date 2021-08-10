export const columns = [
    {
        dataField: 'division',
        text: 'Division',
        sort: true,
    },
    {
        dataField: 'homeTeam',
        text: 'HomeTeam',
    },
    {
        dataField: 'awayTeam',
        text: 'AwayTeam',
    },
    {
        dataField: 'prediction',
        text: 'Prediction',
        sort: true,
        align: 'center'
    },
    {
        dataField: 'odds',
        text: 'Odds',
        // sort: true,
        align: 'center'
    },
    {
        dataField: 'result',
        text: 'Result',
        sort: true,
    },
    {
        dataField: 'netUnits',
        text: 'Units Won/Loss',
        sort: true,
    },
    {
        dataField: 'date',
        text: 'Date',
        sort: true,
    }
];


export const defaultSorted = [
    {
        dataField: 'division',
        order: 'desc'
    }
];
