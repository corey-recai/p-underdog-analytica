export const columns = [
    {
        dataField: 'id',
        text: 'ID',
        hidden: true
    },
    {
        dataField: 'league',
        text: 'League',
    },
    {
        dataField: 'homeTeam',
        text: 'Home Team',
    },
    {
        dataField: 'awayTeam',
        text: 'Away Team',
    },
    {
        dataField: 'prediction',
        text: 'Prediction',
        sort: true,
        align: 'center'
    },
];

export const may = [
    {
        id: 1,
        league: 'Bundesliga',
        homeTeam: 'Stuttgart',
        awayTeam: 'Bielefeld',
        prediction: "1",
        odds: 2.41,
        date: '5/22/2021',
        result: "Loss",
        netUnits: -1.00
    },
    {
        id: 2,
        league: 'Bundesliga',
        homeTeam: 'Werder Bremen',
        awayTeam: 'M\'gladbach',
        prediction: "2",
        odds: 2.43,
        date: '5/22/2021',
        result: 'Win',
        netUnits: 1.43
    },
    {
        id: 3,
        league: 'Bundesliga',
        homeTeam: 'Union Berlin',
        awayTeam: 'RB Leipzig',
        prediction: "2",
        odds: 2.21,
        date: '5/22/2021',
        result: 'Loss',
        netUnits: -1.00
    },
    {
        id: 4,
        league: 'Liga',
        homeTeam: 'Granada',
        awayTeam: 'Getafe',
        prediction: "X",
        odds: 3.37,
        date: '5/23/2021',
        result: 'Win',
        netUnits: 2.37
    },
    {
        id: 5,
        league: 'Ligue1',
        homeTeam: 'Reims',
        awayTeam: 'Bordeaux',
        prediction: "2",
        odds: 3.22,
        date: '5/23/2021',
        result: 'Win',
        netUnits: 2.22
    },
    {
        id: 6,
        league: 'Ligue1',
        homeTeam: 'Metz',
        awayTeam: 'Marseille',
        prediction: "X",
        odds: 3.53,
        date: '5/23/2021',
        result: 'Win',
        netUnits: 2.53
    },
    {
        id: 7,
        league: 'Premier League',
        homeTeam: 'Wolves',
        awayTeam: 'Man United',
        prediction: "2",
        odds: 2.7,
        date: '5/23/2021',
        result: 'Win',
        netUnits: 1.70
    }
]