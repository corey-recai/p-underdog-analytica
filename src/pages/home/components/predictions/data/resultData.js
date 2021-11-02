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
        headerStyle: (colum, colIndex) => {
         return { width: '20%', textAlign: 'center' };
       },
        sort: true,
    },
    {
        dataField: 'homeTeam',
        text: 'Home',
        headerStyle: (colum, colIndex) => {
            return { width: '30%', textAlign: 'center' };
        },
    },
    {
        dataField: 'awayTeam',
        text: 'Away',
        headerStyle: (colum, colIndex) => {
         return { width: '30%', textAlign: 'center' };
       },
    },
    {
        dataField: 'prediction',
        text: 'Prediction',
        sort: true,
        headerStyle: (colum, colIndex) => {
         return { width: '20%', textAlign: 'center' };
       },
    },
    {
        dataField: 'odds',
        text: 'Odds',
        sort: true,
        headerStyle: (colum, colIndex) => {
         return { width: '10%', textAlign: 'center' };
       },
    },
    {
        dataField: 'result',
        text: 'Result',
        sort: true,
        hidden: true,
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
        text: 'Units (+/-)',
        sort: true,
        headerStyle: (colum, colIndex) => {
         return { width: '15%', textAlign: 'center' };
       },
        style: (cell) => {
            if (cell > 0) {
                return {
                    backgroundColor: '#c8e6c9',
                    color: 'green',
                };
            } else if(cell < 0) {
                return {
                    backgroundColor: 'rgba(245,124,124,0.69)',
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
        league: 'Belgian First',
        homeTeam: 'Standard',
        awayTeam: 'Kortrijk',
        prediction: '2',
        odds: '3.43',
        results: 'Loss',
        netUnits: '-1',
        date: '30/10/2021'
    },

    {
        id: 2,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Watford',
        awayTeam: 'Southampton',
        prediction: 'X',
        odds: '3.35',
        results: 'Loss',
        netUnits: '-1',
        date: '30/10/2021'
    },

    {
        id: 3,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Burnley',
        awayTeam: 'Brentford',
        prediction: 'X',
        odds: '3.21',
        results: 'Loss',
        netUnits: '-1',
        date: '30/10/2021'
    },

    {
        id: 4,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Leverkusen',
        awayTeam: 'Wolfsburg',
        prediction: 'X',
        odds: '3.61',
        results: 'Loss',
        netUnits: '-1',
        date: '30/10/2021'
    },
    {
        id: 5,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'Aberdeen',
        awayTeam: 'Hearts',
        prediction: '1',
        odds: '2.66',
        results: 'Win',
        netUnits: '1.66',
        date: '30/10/2021'
    },
    {
        id: 6,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'St Mirren',
        awayTeam: 'Dundee',
        prediction: 'X',
        odds: '3.49',
        results: 'Loss',
        netUnits: '-1',
        date: '30/10/2021'
    },

    {
        id: 7,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'Ross County',
        awayTeam: 'Hibernian',
        prediction: 'X',
        odds: '3.42',
        results: 'Canceled',
        netUnits: '0',
        date: '30/10/2021'
    },

    {
        id: 8,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Valencia',
        awayTeam: 'Villarreal',
        prediction: 'X',
        odds: '3.43',
        results: 'Loss',
        netUnits: '-1',
        date: '30/10/2021'
    }
]
export const sundayResults = [
    {
        id: 9,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Gent',
        awayTeam: 'St. Gilloise',
        prediction: 'X',
        odds: '3.43',
        results: 'Loss',
        netUnits: '-1',
        date: '31/10/2021'
    },

    {
        id: 10,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Clermont',
        awayTeam: 'Marseille',
        prediction: 'X',
        odds: '3.57',
        results: 'Loss',
        netUnits: '-1',
        date: '31/10/2021'
    },
    {
        id: 11,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Augsburg',
        awayTeam: 'Stuttgart',
        prediction: '2',
        odds: '2.48',
        results: 'Loss',
        netUnits: '-1',
        date: '31/10/2021'
    },
    {
        id: 12,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Genoa',
        awayTeam: 'Venezia',
        prediction: 'X',
        odds: '3.45',
        results: 'Win',
        netUnits: '2.45',
        date: '31/10/2021'
    },

    {
        id: 13,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Nijmegen',
        awayTeam: 'Groningen',
        prediction: 'X',
        odds: '3.3',
        results: 'Loss',
        netUnits: '-1',
        date: '31/10/2021'
    },
    {
        id: 14,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Maritimo',
        awayTeam: 'Gil Vicente',
        prediction: '2',
        odds: '2.64',
        results: 'Win',
        netUnits: '1.64',
        date: '31/10/2021'
    },
    {
        id: 15,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Sociedad',
        awayTeam: 'Ath Bilbao',
        prediction: 'X',
        odds: '3.19',
        results: 'Win',
        netUnits: '2.19',
        date: '31/10/2021'
    }
]



export const mondayResults = [
    {
        id: 16,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Wolves',
        awayTeam: 'Everton',
        prediction: '2',
        odds: '3.4',
        results: 'Loss',
        netUnits: '-1',
        date: '1/11/2021'
    },
    {
        id: 17,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Bologna',
        awayTeam: 'Cagliari',
        prediction: 'X',
        odds: '3.69',
        results: 'Loss',
        netUnits: '-1',
        date: '1/11/2021'
    },
    {
        id: 18,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Moreirense',
        awayTeam: 'Pacos Ferreira',
        prediction: 'X',
        odds: '3.24',
        results: 'Win',
        netUnits: '2.24',
        date: '1/11/2021'
    }
]

