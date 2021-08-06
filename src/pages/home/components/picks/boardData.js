export const boardData = {
    picks: [
        {
            division: 'Bundesliga',
            homeTeam: 'Stuttgart',
            awayTeam: 'Bielefeld',
            prediction: "1",
            odds: 2.41,
            date: '5/22/2021'
        },
        {
            division: 'Bundesliga',
            homeTeam: 'Werder Bremen',
            awayTeam: 'M\'gladbach',
            prediction: "2",
            odds: 2.43,
            date: '5/22/2021'
        },
        {
            division: 'Bundesliga',
            homeTeam: 'Union Berlin',
            awayTeam: 'RB Leipzig',
            prediction: "2",
            odds: 2.21,
            date: '5/22/2021'
        },
        {
            division: 'Liga',
            homeTeam: 'Granada',
            awayTeam: 'Getafe',
            prediction: "X",
            odds: 3.37,
            date: '5/23/2021'
        },
        {
            division: 'Ligue1',
            homeTeam: 'Reims',
            awayTeam: 'Bordeaux',
            prediction: "2",
            odds: 3.22,
            date: '5/23/2021'
        },
        {
            division: 'Ligue1',
            homeTeam: 'Metz',
            awayTeam: 'Marseille',
            prediction: "X",
            odds: 3.51,
            date: '5/23/2021'
        },
        {
            division: 'PremierLeague',
            homeTeam: 'Wolves',
            awayTeam: 'Man United',
            prediction: "2",
            odds: 2.7,
            date: '5/23/2021'
        },
    ],
    columns: [
        {
            dataField: 'division',
            text: 'Division',
            sort: true
        }, {
            dataField: 'homeTeam',
            text: 'HomeTeam',
            sort: true
        }, {
            dataField: 'awayTeam',
            text: 'AwayTeam',
            sort: true
        }, {
            dataField: 'prediction',
            text: 'Prediction',
            sort: true
        }, {
            dataField: 'odds',
            text: 'Odds',
            sort: true
        }, {
            dataField: 'date',
            text: 'Date',
            sort: true
        }
    ],
    defaultSorted: [
        {
            dataField: 'division',
            order: 'desc'
        }
    ]
}


