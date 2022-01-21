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
        homeTeam: 'Oud-Heverlee Leuven',
        awayTeam: 'Mechelen',
        prediction: 'X',
        odds: '3.68',
        result: 'PPD',
        netUnits: 'PPD',
        date: '15-01-22'
    },
    {
        id: 2,            country: 'England',
        league: 'Premier League',
        homeTeam: 'Wolves',
        awayTeam: 'Southampton',
        prediction: 'X',
        odds: '3.13',
        result: 'Loss',
        netUnits: '-1',
        date: '15-01-22'
    },
    {
        id: 3,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Aston Villa',
        awayTeam: 'Man United',
        prediction: '2',
        odds: '2.37',
        result: 'Loss',
        netUnits: '-1',
        date: '15-01-22'
    },
    {
        id: 4,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Wolfsburg',
        awayTeam: 'Hertha',
        prediction: 'X',
        odds: '3.48',
        result: 'Win',
        netUnits: '2.48',
        date: '15-01-22'
    },
    {
        id: 5,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Union Berlin',
        awayTeam: 'Hoffenheim',
        prediction: 'X',
        odds: '3.46',
        result: 'Loss',
        netUnits: '-1',
        date: '15-01-22'
    },
    {
        id: 6,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Sampdoria',
        awayTeam: 'Torino',
        prediction: 'X',
        odds: '3.18',
        result: 'Loss',
        netUnits: '-1',
        date: '15-01-22'
    },
    {
        id: 7,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Go Ahead Eagles',
        awayTeam: 'Waalwijk',
        prediction: '1',
        odds: '2.08',
        result: 'Loss',
        netUnits: '-1',
        date: '15-01-22'
    },
    {
        id: 8,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Nijmegen',
        awayTeam: 'Heracles',
        prediction: 'X',
        odds: '3.38',
        result: 'Win',
        netUnits: '2.38',
        date: '15-01-22'
    },
    {
        id: 9,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Boavista',
        awayTeam: 'Gil Vicente',
        prediction: '2',
        odds: '2.38',
        result: 'Loss',
        netUnits: '-1',
        date: '15-01-22'
    },

]

export const mondayResults = [
    {
        id: 16,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Portimonense',
        awayTeam: 'Guimaraes',
        prediction: 'X',
        odds: '3.17',
        result: 'Win',
        netUnits: '2.17',
        date: '17-01-22'
    }
]


export const sundayResults = [
    {
        id: 10,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Eupen',
        awayTeam: 'Cercle Brugge',
        prediction: 'X',
        odds: '3.45',
        result: 'Loss',
        netUnits: '-1',
        date: '16-01-22'
    },
    {
        id: 11,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Lorient',
        awayTeam: 'Angers',
        prediction: 'X',
        odds: '3.23',
        result: 'Win',
        netUnits: '2.23',
        date: '16-01-22'
    },
    {
        id: 12,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Augsburg',
        awayTeam: 'Ein Frankfurt',
        prediction: 'X',
        odds: '3.47',
        result: 'Win',
        netUnits: '2.47',
        date: '16-01-22'
    },
    {
        id: 13,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Sassuolo',
        awayTeam: 'Verona',
        prediction: '1',
        odds: '2.2',
        result: 'Loss',
        netUnits: '-1',
        date: '16-01-22'
    },
    {
        id: 14,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Santa Clara',
        awayTeam: 'Tondela',
        prediction: 'X',
        odds: '3.4',
        result: 'Win',
        netUnits: '2.4',
        date: '16-01-22'
    },
    {
        id: 15,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Famalicao',
        awayTeam: 'Pacos Ferreira',
        prediction: '1',
        odds: '2.01',
        result: 'Loss',
        netUnits: '-1',
        date: '16-01-22'
    },
]