export const resultColumns = [
    {
        dataField: 'id',
        text: 'ID',
        hidden: true
    },
    {
        dataField: 'country',
        text: 'Country',
        sort: true,
        hidden: true
    },
    {
        dataField: 'league',
        text: 'League',
        sort: true,
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
    },
    {
        dataField: 'odds',
        text: 'Odds',
        sort: true,
    },
    {
        dataField: 'result',
        text: 'Result',
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
        dataField: 'netUnits',
        text: 'Units +/-',
        sort: true,
        style: (cell) => {
            if (cell > 0) {
                return {
                    // backgroundColor: '#c8e6c9',
                    color: 'green',
                };
            } else if(cell < 0) {
                return {
                    // backgroundColor: 'rgba(245,124,124,0.69)',
                    color: 'red',
                };
            }
        }
    },
    {
        dataField: 'date',
        text: 'Date',
        hidden: true
    }
];

export const saturdayResults = [
    {
        id: 1,
        country: 'Belgium',
        league: 'BelgianFirst',
        homeTeam: 'Kortrijk',
        awayTeam: 'Charleroi',
        prediction: '2',
        odds: '2.58',
        result: 'Loss',
        netUnits: '-1',
        date: '2/10/2021'
    },
    {
        id: 5,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Brighton',
        awayTeam: 'Arsenal',
        prediction: 'X',
        odds: '3.18',
        result: 'Win',
        netUnits: '2.18',
        date: '2/10/2021'
    },
    {
        id: 10,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Stuttgart',
        awayTeam: 'Hoffenheim',
        prediction: '1',
        odds: '2.63',
        result: 'Win',
        netUnits: '1.63',
        date: '2/10/2021'
    },
    {
        id: 12,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Torino',
        awayTeam: 'Juventus',
        prediction: 'X',
        odds: '3.49',
        result: 'Loss',
        netUnits: '-1',
        date: '2/10/2021'
    },
    {
        id: 15,
        country: 'Portugal',
        league: 'PrimeiraLiga',
        homeTeam: 'Vizela',
        awayTeam: 'Santa Clara',
        prediction: '1',
        odds: '2.47',
        result: 'Loss',
        netUnits: '-1',
        date: '2/10/2021'
    },
    {
        id: 18,
        country: 'Spain',
        league: 'Liga',
        homeTeam: 'Ath Madrid',
        awayTeam: 'Barcelona',
        prediction: 'X',
        odds: '3.47',
        result: 'Loss',
        netUnits: '-1',
        date: '2/10/2021'
    },
    {
        id: 19,
        country: 'Spain',
        league: 'Liga',
        homeTeam: 'Mallorca',
        awayTeam: 'Levante',
        prediction: '2',
        odds: '3.44',
        result: 'Loss',
        netUnits: '-1',
        date: '2/10/2021'
    },
    {
        id: 21,
        country: 'Scotland',
        league: 'ScottishPL',
        homeTeam: 'St Johnstone',
        awayTeam: 'Dundee',
        prediction: 'X',
        odds: '3.23',
        result: 'Loss',
        netUnits: '-1',
        date: '2/10/2021'
    }
]
export const sundayResults = [

    {
        id: 2,
        country: 'Belgium',
        league: 'BelgianFirst',
        homeTeam: 'Seraing',
        awayTeam: 'Waregem',
        prediction: '2',
        odds: '3.28',
        result: 'Loss',
        netUnits: '-1',
        date: '3/10/2021'
    },
    {
        id: 3,
        country: 'Belgium',
        league: 'BelgianFirst',
        homeTeam: 'Antwerp',
        awayTeam: 'Gent',
        prediction: 'X',
        odds: '3.72',
        result: 'Loss',
        netUnits: '-1',
        date: '3/10/2021'
    },
    {
        id: 4,
        country: 'Belgium',
        league: 'BelgianFirst',
        homeTeam: 'Anderlecht',
        awayTeam: 'Club Brugge',
        prediction: '2',
        odds: '2.37',
        result: 'Loss',
        netUnits: '-1',
        date: '3/10/2021'
    },

    {
        id: 6,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Tottenham',
        awayTeam: 'Aston Villa',
        prediction: 'X',
        odds: '3.46',
        result: 'Loss',
        netUnits: '-1',
        date: '3/10/2021'
    },
    {
        id: 7,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Liverpool',
        awayTeam: 'Man City',
        prediction: '1',
        odds: '2.85',
        result: 'Loss',
        netUnits: '-1',
        date: '3/10/2021'
    },
    {
        id: 8,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Nantes',
        awayTeam: 'Troyes',
        prediction: 'X',
        odds: '3.57',
        result: 'Loss',
        netUnits: '-1',
        date: '3/10/2021'
    },
    {
        id: 9,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Angers',
        awayTeam: 'Metz',
        prediction: 'X',
        odds: '3.3',
        result: 'Loss',
        netUnits: '-1',
        date: '3/10/2021'
    },

    {
        id: 11,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Mainz',
        awayTeam: 'Union Berlin',
        prediction: 'X',
        odds: '3.37',
        result: 'Loss',
        netUnits: '-1',
        date: '3/10/2021'
    },

    {
        id: 13,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Bologna',
        awayTeam: 'Lazio',
        prediction: '2',
        odds: '2.2',
        result: 'Loss',
        netUnits: '-1',
        date: '3/10/2021'
    },
    {
        id: 14,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Atalanta',
        awayTeam: 'Milan',
        prediction: 'X',
        odds: '3.61',
        result: 'Loss',
        netUnits: '-1',
        date: '3/10/2021'
    },

    {
        id: 16,
        country: 'Portugal',
        league: 'PrimeiraLiga',
        homeTeam: 'Belenenses',
        awayTeam: 'Tondela',
        prediction: 'X',
        odds: '3.28',
        result: 'Loss',
        netUnits: '-1',
        date: '3/10/2021'
    },
    {
        id: 17,
        country: 'Portugal',
        league: 'PrimeiraLiga',
        homeTeam: 'Estoril',
        awayTeam: 'Gil Vicente',
        prediction: 'X',
        odds: '3.18',
        result: 'Win',
        netUnits: '2.18',
        date: '3/10/2021'
    },

    {
        id: 20,
        country: 'Spain',
        league: 'Liga',
        homeTeam: 'Villarreal',
        awayTeam: 'Betis',
        prediction: '2',
        odds: '3.65',
        result: 'Loss',
        netUnits: '-1',
        date: '3/10/2021'
    },
]