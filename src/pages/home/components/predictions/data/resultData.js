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
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Leverkusen',
        awayTeam: 'Union Berlin',
        prediction: 'X',
        odds: '3.74',
        result: 'Win',
        netUnits: '2.74',
        date: '8-01-22'
    },
    {
        id: 2,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Boavista',
        awayTeam: 'Tondela',
        prediction: 'X',
        odds: '3.39',
        result: 'Win',
        netUnits: '2.39',
        date: '8-01-22'
    },
    {
        id: 3,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Vizela',
        awayTeam: 'Moreirense',
        prediction: 'X',
        odds: '3.19',
        result: 'Loss',
        netUnits: '-1',
        date: '8-01-22'
    },
]

export const mondayResults = [
    {
        id: 10,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Gil Vicente',
        awayTeam: 'Guimaraes',
        prediction: 'X',
        odds: '3.18',
        result: 'Loss',
        netUnits: '-1',
        date: '10-01-22'
    }
]


export const sundayResults = [
    {
        id: 4,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Clermont',
        awayTeam: 'Reims',
        prediction: 'X',
        odds: '3.11',
        result: 'Win',
        netUnits: '2.11',
        date: '9-01-22'
    },
    {
        id: 5,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Brest',
        awayTeam: 'Nice',
        prediction: 'X',
        odds: '3.43',
        result: 'Loss',
        netUnits: '-1',
        date: '9-01-22'
    },
    {
        id: 6,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Bochum',
        awayTeam: 'Wolfsburg',
        prediction: '2',
        odds: '2.11',
        result: 'Loss',
        netUnits: '-1',
        date: '9-01-22'
    },
    {
        id: 7,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Genoa',
        awayTeam: 'Spezia',
        prediction: 'X',
        odds: '3.26',
        result: 'Loss',
        netUnits: '-1',
        date: '9-01-22'
    },
    {
        id: 8,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Belenenses',
        awayTeam: 'Arouca',
        prediction: '2',
        odds: '2.64',
        result: 'Loss',
        netUnits: '-1',
        date: '9-01-22'
    },
    {
        id: 9,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Vallecano',
        awayTeam: 'Betis',
        prediction: '2',
        odds: '2.74',
        result: 'Loss',
        netUnits: '-1',
        date: '9-01-22'
    },

]