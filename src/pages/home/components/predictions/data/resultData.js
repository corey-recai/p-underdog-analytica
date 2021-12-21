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
            return {
                backgroundColor: '#94c3f3',
            };
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
        homeTeam: 'Beerschot VA',
        awayTeam: 'Oostende',
        prediction: 'X',
        odds: '3.49',
        result: 'Loss',
        netUnits: '-1',
        date: '18/12/2021'
    },
    {
        id: 2,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Leeds',
        awayTeam: 'Arsenal',
        prediction: 'X',
        odds: '3.74',
        result: 'Loss',
        netUnits: '-1',
        date: '18/12/2021'
    },
    {
        id: 3,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Bochum',
        awayTeam: 'Union Berlin',
        prediction: '2',
        odds: '2.41',
        result: 'Win',
        netUnits: '1.41',
        date: '18/12/2021'
    },
    {
        id: 4,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Ein Frankfurt',
        awayTeam: 'Mainz',
        prediction: '2',
        odds: '3',
        result: 'Loss',
        netUnits: '-1',
        date: '18/12/2021'
    },
    {
        id: 5,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Heracles',
        awayTeam: 'Groningen',
        prediction: 'X',
        odds: '3.35',
        result: 'Loss',
        netUnits: '-1',
        date: '18/12/2021'
    },
    {
        id: 6,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Tondela',
        awayTeam: 'Pacos Ferreira',
        prediction: '2',
        odds: '2.97',
        result: 'Win',
        netUnits: '1.97',
        date: '18/12/2021'
    },
    {
        id: 7,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Portimonense',
        awayTeam: 'Arouca',
        prediction: '1',
        odds: '2.03',
        result: 'Loss',
        netUnits: '-1',
        date: '18/12/2021'
    },
    {
        id: 8,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'Livingston',
        awayTeam: 'Ross County',
        prediction: 'X',
        odds: '3.34',
        result: 'Win',
        netUnits: '2.34',
        date: '18/12/2021'
    },
    {
        id: 9,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'Motherwell',
        awayTeam: 'St Johnstone',
        prediction: 'X',
        odds: '3.14',
        result: 'Loss',
        netUnits: '-1',
        date: '18/12/2021'
    },
    {
        id: 10,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'Dundee',
        awayTeam: 'Hearts',
        prediction: 'X',
        odds: '3.46',
        result: 'Loss',
        netUnits: '-1',
        date: '18/12/2021'
    },
    {
        id: 11,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Sociedad',
        awayTeam: 'Villarreal',
        prediction: 'X',
        odds: '3.25',
        result: 'Loss',
        netUnits: '-1',
        date: '18/12/2021'
    },
    {
        id: 12,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Sevilla',
        awayTeam: 'Ath Madrid',
        prediction: 'X',
        odds: '2.97',
        result: 'Loss',
        netUnits: '-1',
        date: '18/12/2021'
    },
    {
        id: 13,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Vallecano',
        awayTeam: 'Alaves',
        prediction: 'X',
        odds: '3.53',
        result: 'Loss',
        netUnits: '-1',
        date: '18/12/2021'
    },

]

export const sundayResults = [
    {
        id: 14,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Genk',
        awayTeam: 'Antwerp',
        prediction: 'X',
        odds: '3.62',
        result: 'Win',
        netUnits: '2.62',
        date: '19/12/2021'
    },
    {
        id: 15,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Club Brugge',
        awayTeam: 'Anderlecht',
        prediction: 'X',
        odds: '3.65',
        result: 'Win',
        netUnits: '2.65',
        date: '19/12/2021'
    },
    {
        id: 16,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Oud-Heverlee Leuven',
        awayTeam: 'Standard',
        prediction: '1',
        odds: '2.48',
        result: 'Win',
        netUnits: '1.48',
        date: '19/12/2021'
    },
    {
        id: 17,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Eupen',
        awayTeam: 'Charleroi',
        prediction: 'X',
        odds: '3.41',
        result: 'Loss',
        netUnits: '-1',
        date: '19/12/2021'
    },
    {
        id: 18,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Freiburg',
        awayTeam: 'Leverkusen',
        prediction: '1',
        odds: '2.68',
        result: 'Win',
        netUnits: '1.68',
        date: '19/12/2021'
    },
    {
        id: 19,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Go Ahead Eagles',
        awayTeam: 'Nijmegen',
        prediction: '2',
        odds: '3.07',
        result: 'Win',
        netUnits: '2.07',
        date: '19/12/2021'
    },
    {
        id: 20,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Cambuur',
        awayTeam: 'Heerenveen',
        prediction: 'X',
        odds: '3.57',
        result: 'Loss',
        netUnits: '-1',
        date: '19/12/2021'
    },
    {
        id: 21,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Boavista',
        awayTeam: 'Moreirense',
        prediction: 'X',
        odds: '3.13',
        result: 'Loss',
        netUnits: '-1',
        date: '19/12/2021'
    },
    {
        id: 22,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Ath Bilbao',
        awayTeam: 'Betis',
        prediction: 'X',
        odds: '3.25',
        result: 'Loss',
        netUnits: '-1',
        date: '19/12/2021'
    },
    {
        id: 23,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Getafe',
        awayTeam: 'Osasuna',
        prediction: 'X',
        odds: '2.89',
        result: 'Loss',
        netUnits: '-1',
        date: '19/12/2021'
    },
    {
        id: 24,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Granada',
        awayTeam: 'Mallorca',
        prediction: '2',
        odds: '3.07',
        result: 'Loss',
        netUnits: '-1',
        date: '19/12/2021'
    }
]