export const predictionColumns = [
    {
        dataField: "id",
        text: "ID",
        hidden: true,
    },
    {
        dataField: "league",
        text: "League",
        sort: true
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
        sort: true
    },
    {
        dataField: "odds",
        text: "Odds",
        sort: true
    },
    {
        dataField: "date",
        text: "Date",
        hidden: true
    },
];

export const latestPredictions = [
    {
        id: 1,
        country: 'Scotland',
        league: 'ScottishPL',
        homeTeam: 'Dundee United',
        awayTeam: 'Dundee',
        prediction: '1',
        odds: '2.52',
        date: '19/09/2021'
    },
    {
        id: 2,
        country: 'Belgium',
        league: 'BelgianFirst',
        homeTeam: 'Standard',
        awayTeam: 'Anderlecht',
        prediction: 'X',
        odds: '3.49',
        date: '19/09/2021'
    }
]