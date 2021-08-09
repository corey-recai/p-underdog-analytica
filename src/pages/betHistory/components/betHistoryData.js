
export const may22 = [
    {
        division: 'Bundesliga',
        homeTeam: 'Stuttgart',
        awayTeam: 'Bielefeld',
        prediction: "1",
        odds: 2.41,
        date: '5/22/2021',
        result: "Loss",
        netUnits: -1.00
    },
    {
        division: 'Bundesliga',
        homeTeam: 'Werder Bremen',
        awayTeam: 'M\'gladbach',
        prediction: "2",
        odds: 2.43,
        date: '5/22/2021',
        result: 'Win',
        netUnits: 1.43
    },
    {
        division: 'Bundesliga',
        homeTeam: 'Union Berlin',
        awayTeam: 'RB Leipzig',
        prediction: "2",
        odds: 2.21,
        date: '5/22/2021',
        result: 'Loss',
        netUnits: -1.00
    },
    {
        division: 'Liga',
        homeTeam: 'Granada',
        awayTeam: 'Getafe',
        prediction: "X",
        odds: 3.37,
        date: '5/23/2021',
        result: 'Win',
        netUnits: 2.37
    },
    {
        division: 'Ligue1',
        homeTeam: 'Reims',
        awayTeam: 'Bordeaux',
        prediction: "2",
        odds: 3.22,
        date: '5/23/2021',
        result: 'Win',
        netUnits: 2.22
    },
    {
        division: 'Ligue1',
        homeTeam: 'Metz',
        awayTeam: 'Marseille',
        prediction: "X",
        odds: 3.53,
        date: '5/23/2021',
        result: 'Win',
        netUnits: 2.53
    },
    {
        division: 'PremierLeague',
        homeTeam: 'Wolves',
        awayTeam: 'Man United',
        prediction: "2",
        odds: 2.7,
        date: '5/23/2021',
        result: 'Win',
        netUnits: 1.70
    },
];







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
        sort: true,
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
