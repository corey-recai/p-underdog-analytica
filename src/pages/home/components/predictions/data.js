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
    }
];


export const saturdayPicks = [
    {
        id: 1,
        country: 'Scotland',
        league: 'ScottishPL',
        homeTeam: 'Hearts',
        awayTeam: 'Livingston',
        prediction: 'X',
        odds: '3.66'
    },
    {
        id: 2,
        country: 'Belgium',
        league: 'BelgianFirst',
        homeTeam: 'Standard',
        awayTeam: 'St Truiden',
        prediction: 'X',
        odds: '3.54'
    },
    {
        id: 3,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'St Etienne',
        awayTeam: 'Nice',
        prediction: 'X',
        odds: '3.34'
    },
    {
        id: 4,
        country: 'Portugal',
        league: 'PrimeiraLiga',
        homeTeam: 'Moreirense',
        awayTeam: 'Arouca',
        prediction: '1',
        odds: '2.1'
    },
    {
        id: 5,
        country: 'Portugal',
        league: 'PrimeiraLiga',
        homeTeam: 'Tondela',
        awayTeam: 'Famalicao',
        prediction: '2',
        odds: '2.23'
    },
    {
        id: 6,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Chelsea',
        awayTeam: 'Man City',
        prediction: '2',
        odds: '2.75'
    },
    {
        id: 7,
        country: 'Spain',
        league: 'Liga',
        homeTeam: 'Valencia',
        awayTeam: 'Ath Bilbao',
        prediction: '2',
        odds: '2.83'
    },
    {
        id: 8,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Ein Frankfurt',
        awayTeam: 'FC Koln',
        prediction: 'X',
        odds: '3.74'
    },
    {
        id: 9,
        country: 'Scotland',
        league: 'League One',
        homeTeam: 'Montrose',
        awayTeam: 'Falkirk',
        prediction: '2',
        odds: '2.169'
    },
    {
        id: 10,
        country: 'Malta',
        league: 'Premier League',
        homeTeam: 'Gudja United',
        awayTeam: 'Valletta',
        prediction: '2',
        odds: '2.245'
    },
    {
        id: 11,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Eintracht Frankfurt',
        awayTeam: 'FC Koln',
        prediction: '1',
        odds: '2.009'
    },
    {
        id: 12,
        country: 'Spain',
        league: 'Segunda Division',
        homeTeam: 'Las Palmas',
        awayTeam: 'Ponferradina',
        prediction: '1',
        odds: '2.013'
    },
    {
        id: 13,
        country: 'Russia',
        league: 'Premier League',
        homeTeam: 'FK Khimki',
        awayTeam: 'Lokomotiv Moskva',
        prediction: '2',
        odds: '2.066'
    },
    {
        id: 14,
        country: 'England',
        league: 'League Two',
        homeTeam: 'Salford City',
        awayTeam: 'Northampton',
        prediction: '1',
        odds: '2.076'
    },
    {
        id: 15,
        country: 'Germany',
        league: '2. Bundesliga',
        homeTeam: 'Paderborn',
        awayTeam: 'Holstein Kiel',
        prediction: '1',
        odds: '2.004'
    },
    {
        id: 16,
        country: 'England',
        league: 'League One',
        homeTeam: 'Milton Keynes Dons',
        awayTeam: 'Wycombe',
        prediction: '1',
        odds: '2.173'
    }
]

export const sundaysPicks = [
    {
        id: 1,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Troyes',
        awayTeam: 'Angers',
        prediction: '1',
        odds: '2.73'
    },
    {
        id: 2,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Reims',
        awayTeam: 'Nantes',
        prediction: 'X',
        odds: '3.13'
    },
    {
        id: 3,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Bordeaux',
        awayTeam: 'Rennes',
        prediction: 'X',
        odds: '3.42'
    },
    {
        id: 4,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Brest',
        awayTeam: 'Metz',
        prediction: '1',
        odds: '2.02'
    },
    {
        id: 5,
        country: 'Portugal',
        league: 'PrimeiraLiga',
        homeTeam: 'Portimonense',
        awayTeam: 'Vizela',
        prediction: 'X',
        odds: '3.28'
    },
    {
        id: 6,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Empoli',
        awayTeam: 'Bologna',
        prediction: 'X',
        odds: '3.62'
    },
    {
        id: 7,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Lazio',
        awayTeam: 'Roma',
        prediction: 'X',
        odds: '3.49'
    },
    {
        id: 8,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Southampton',
        awayTeam: 'Wolves',
        prediction: 'X',
        odds: '3.2'
    },
    {
        id: 9,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Arsenal',
        awayTeam: 'Tottenham',
        prediction: '2',
        odds: '3.35'
    },
    {
        id: 10,
        country: 'Spain',
        league: 'Liga',
        homeTeam: 'Mallorca',
        awayTeam: 'Osasuna',
        prediction: '2',
        odds: '2.72'
    },
    {
        id: 11,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Bochum',
        awayTeam: 'Stuttgart',
        prediction: '2',
        odds: '2.3'
    },
    {
        id: 12,
        country: 'Belgium',
        league: 'First Division A',
        homeTeam: 'Union Saint-Gilloise',
        awayTeam: 'Royal Antwerp',
        prediction: 'X2',
        odds: '2.529'
    },
    {
        id: 13,
        country: 'Germany',
        league: '2. Bundesliga',
        homeTeam: 'Dynamo Dresden',
        awayTeam: 'Werder Bremen',
        prediction: '2',
        odds: '2.057'
    },
    {
        id: 14,
        country: 'Switzerland',
        league: 'Swiss Super League',
        homeTeam: 'Luzern',
        awayTeam: 'Lugano',
        prediction: '1',
        odds: '2.223'
    },
    {
        id: 15,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Bordeaux',
        awayTeam: 'Rennais',
        prediction: '2',
        odds: '2.151'
    }

]

export const mondaysPicks = [
    {
        id: 1,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Crystal Palace',
        awayTeam: 'Brighton',
        prediction: '2',
        odds: '2.5'
    }
]