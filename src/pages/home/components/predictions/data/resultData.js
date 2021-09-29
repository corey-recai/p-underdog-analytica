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

export const weekend_results = [
    {
        id: 1,
        country: 'Belgium',
        league: 'BelgianFirst',
        homeTeam: 'Standard',
        awayTeam: 'St Truiden',
        prediction: 'X',
        odds: '3.54',
        result: 'Loss',
        netUnits: '-1',
        date: '25/9/2021'
    },
    {
        id: 2,
        country: 'Belgium',
        league: 'First Division A',
        homeTeam: 'Union Saint-Gilloise',
        awayTeam: 'Royal Antwerp',
        prediction: 'X',
        odds: '2.53',
        result: 'Loss',
        netUnits: '-1',
        date: '26/9/2021'
    },
    {
        id: 3,
        country: 'Belgium',
        league: 'First Division A',
        homeTeam: 'Union Saint-Gilloise',
        awayTeam: 'Royal Antwerp',
        prediction: '2',
        odds: '4.90',
        result: 'Win',
        netUnits: '3.9',
        date: '26/9/2021'
    },
    {
        id: 4,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Chelsea',
        awayTeam: 'Man City',
        prediction: '2',
        odds: '2.75',
        result: 'Win',
        netUnits: '1.75',
        date: '25/9/2021'
    },
    {
        id: 5,
        country: 'England',
        league: 'League Two',
        homeTeam: 'Salford City',
        awayTeam: 'Northampton',
        prediction: '1',
        odds: '2.08',
        result: 'Loss',
        netUnits: '-1',
        date: '25/9/2021'
    },
    {
        id: 6,
        country: 'England',
        league: 'League One',
        homeTeam: 'Milton Keynes Dons',
        awayTeam: 'Wycombe',
        prediction: '1',
        odds: '2.17',
        result: 'Win',
        netUnits: '1.17',
        date: '25/9/2021'
    },
    {
        id: 7,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Southampton',
        awayTeam: 'Wolves',
        prediction: 'X',
        odds: '3.20',
        result: 'Loss',
        netUnits: '-1',
        date: '26/9/2021'
    },
    {
        id: 8,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Arsenal',
        awayTeam: 'Tottenham',
        prediction: '2',
        odds: '3.35',
        result: 'Loss',
        netUnits: '-1',
        date: '26/9/2021'
    },
    {
        id: 9,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Crystal Palace',
        awayTeam: 'Brighton',
        prediction: '2',
        odds: '2.50',
        result: 'Loss',
        netUnits: '-1',
        date: '27/9/2021'
    },
    {
        id: 10,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'St Etienne',
        awayTeam: 'Nice',
        prediction: 'X',
        odds: '3.34',
        result: 'Loss',
        netUnits: '-1',
        date: '25/9/2021'
    },
    {
        id: 11,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Troyes',
        awayTeam: 'Angers',
        prediction: '1',
        odds: '2.73',
        result: 'Loss',
        netUnits: '-1',
        date: '26/9/2021'
    },
    {
        id: 12,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Reims',
        awayTeam: 'Nantes',
        prediction: 'X',
        odds: '3.13',
        result: 'Loss',
        netUnits: '-1',
        date: '26/9/2021'
    },
    {
        id: 13,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Bordeaux',
        awayTeam: 'Rennes',
        prediction: 'X',
        odds: '3.42',
        result: 'Win',
        netUnits: '2.42',
        date: '26/9/2021'
    },
    {
        id: 14,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Brest',
        awayTeam: 'Metz',
        prediction: '1',
        odds: '2.02',
        result: 'Loss',
        netUnits: '-1',
        date: '26/9/2021'
    },
    {
        id: 15,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Bordeaux',
        awayTeam: 'Rennes',
        prediction: '2',
        odds: '2.15',
        result: 'Loss',
        netUnits: '-1',
        date: '26/9/2021'
    },
    {
        id: 16,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Ein Frankfurt',
        awayTeam: 'FC Koln',
        prediction: 'X',
        odds: '3.74',
        result: 'Win',
        netUnits: '2.74',
        date: '25/9/2021'
    },
    {
        id: 17,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Eintracht Frankfurt',
        awayTeam: 'FC Koln',
        prediction: '1',
        odds: '2.01',
        result: 'Loss',
        netUnits: '-1',
        date: '25/9/2021'
    },
    {
        id: 18,
        country: 'Germany',
        league: '2. Bundesliga',
        homeTeam: 'Paderborn',
        awayTeam: 'Holstein Kiel',
        prediction: '1',
        odds: '2.00',
        result: 'Loss',
        netUnits: '-1',
        date: '25/9/2021'
    },
    {
        id: 19,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Bochum',
        awayTeam: 'Stuttgart',
        prediction: '2',
        odds: '2.30',
        result: 'Loss',
        netUnits: '-1',
        date: '26/9/2021'
    },
    {
        id: 20,
        country: 'Germany',
        league: '2. Bundesliga',
        homeTeam: 'Dynamo Dresden',
        awayTeam: 'Werder Bremen',
        prediction: '2',
        odds: '2.06',
        result: 'Loss',
        netUnits: '-1',
        date: '26/9/2021'
    },
    {
        id: 21,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Empoli',
        awayTeam: 'Bologna',
        prediction: 'X',
        odds: '3.62',
        result: 'Loss',
        netUnits: '-1',
        date: '26/9/2021'
    },
    {
        id: 22,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Lazio',
        awayTeam: 'Roma',
        prediction: 'X',
        odds: '3.49',
        result: 'Loss',
        netUnits: '-1',
        date: '26/9/2021'
    },
    {
        id: 23,
        country: 'Malta',
        league: 'Premier League',
        homeTeam: 'Gudja United',
        awayTeam: 'Valletta',
        prediction: '2',
        odds: '2.25',
        result: 'Loss',
        netUnits: '-1',
        date: '25/9/2021'
    },
    {
        id: 24,
        country: 'Portugal',
        league: 'PrimeiraLiga',
        homeTeam: 'Moreirense',
        awayTeam: 'Arouca',
        prediction: '1',
        odds: '2.10',
        result: 'Win',
        netUnits: '1.1',
        date: '25/9/2021'
    },
    {
        id: 25,
        country: 'Portugal',
        league: 'PrimeiraLiga',
        homeTeam: 'Tondela',
        awayTeam: 'Famalicao',
        prediction: '2',
        odds: '2.23',
        result: 'Loss',
        netUnits: '-1',
        date: '25/9/2021'
    },
    {
        id: 26,
        country: 'Portugal',
        league: 'PrimeiraLiga',
        homeTeam: 'Portimonense',
        awayTeam: 'Vizela',
        prediction: 'X',
        odds: '3.28',
        result: 'Win',
        netUnits: '2.28',
        date: '26/9/2021'
    },
    {
        id: 27,
        country: 'Russia',
        league: 'Premier League',
        homeTeam: 'FK Khimki',
        awayTeam: 'Lokomotiv Moskva',
        prediction: '2',
        odds: '2.07',
        result: 'Loss',
        netUnits: '-1',
        date: '25/9/2021'
    },
    {
        id: 28,
        country: 'Scotland',
        league: 'ScottishPL',
        homeTeam: 'Hearts',
        awayTeam: 'Livingston',
        prediction: 'X',
        odds: '3.66',
        result: 'Loss',
        netUnits: '-1',
        date: '25/9/2021'
    },
    {
        id: 29,
        country: 'Scotland',
        league: 'League One',
        homeTeam: 'Montrose',
        awayTeam: 'Falkirk',
        prediction: '2',
        odds: '2.17',
        result: 'Loss',
        netUnits: '-1',
        date: '25/9/2021'
    },
    {
        id: 30,
        country: 'Spain',
        league: 'Liga',
        homeTeam: 'Valencia',
        awayTeam: 'Ath Bilbao',
        prediction: '2',
        odds: '2.83',
        result: 'Loss',
        netUnits: '-1',
        date: '25/9/2021'
    },
    {
        id: 31,
        country: 'Spain',
        league: 'Segunda Division',
        homeTeam: 'Las Palmas',
        awayTeam: 'Ponferradina',
        prediction: '1',
        odds: '2.01',
        result: 'Win',
        netUnits: '1.01',
        date: '25/9/2021'
    },
    {
        id: 32,
        country: 'Spain',
        league: 'Liga',
        homeTeam: 'Mallorca',
        awayTeam: 'Osasuna',
        prediction: '2',
        odds: '2.72',
        result: 'Win',
        netUnits: '1.72',
        date: '26/9/2021'
    },
    {
        id: 33,
        country: 'Switzerland',
        league: 'Swiss Super League',
        homeTeam: 'Luzern',
        awayTeam: 'Lugano',
        prediction: '1',
        odds: '2.22',
        result: 'Loss',
        netUnits: '-1',
        date: '26/9/2021'
    }
]