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

export const mondayResults = [
    {
        id: 17,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Torino',
        awayTeam: 'Udinese',
        prediction: 'X',
        odds: '3.3',
        result: 'Loss',
        netUnits: '-1',
        date: '22/11/2021'
    },
    {
        id: 18,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Vallecano',
        awayTeam: 'Mallorca',
        prediction: 'X',
        odds: '3.48',
        result: 'Loss',
        netUnits: '-1',
        date: '22/11/2021'
    }

]

export const saturdayResults = [
    {
        id: 1,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Standard',
        awayTeam: 'Eupen',
        prediction: '2',
        odds: '3.57',
        result: 'Loss',
        netUnits: '-1',
        date: '20/11/2021'
    },
    {
        id: 2,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Burnley',
        awayTeam: 'Crystal Palace',
        prediction: '1',
        odds: '2.72',
        result: 'Loss',
        netUnits: '-1',
        date: '20/11/2021'
    },
    {
        id: 3,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Aston Villa',
        awayTeam: 'Brighton',
        prediction: '2',
        odds: '2.99',
        result: 'Loss',
        netUnits: '-1',
        date: '20/11/2021'
    },
    {
        id: 4,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Norwich',
        awayTeam: 'Southampton',
        prediction: '2',
        odds: '2.06',
        result: 'Loss',
        netUnits: '-1',
        date: '20/11/2021'
    },
    {
        id: 5,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Union Berlin',
        awayTeam: 'Hertha',
        prediction: 'X',
        odds: '3.4',
        result: 'Loss',
        netUnits: '-1',
        date: '20/11/2021'
    },
    {
        id: 6,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Fiorentina',
        awayTeam: 'Milan',
        prediction: 'X',
        odds: '3.45',
        result: 'Loss',
        netUnits: '-1',
        date: '20/11/2021'
    },
    {
        id: 7,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'Dundee United',
        awayTeam: 'Aberdeen',
        prediction: 'X',
        odds: '3.19',
        result: 'Loss',
        netUnits: '-1',
        date: '20/11/2021'
    },
    {
        id: 8,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Celta',
        awayTeam: 'Villarreal',
        prediction: '2',
        odds: '2.57',
        result: 'Loss',
        netUnits: '-1',
        date: '20/11/2021'
    },
]
export const sundayResults = [
    {
        id: 9,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'St Truiden',
        awayTeam: 'Antwerp',
        prediction: 'X',
        odds: '3.51',
        result: 'Loss',
        netUnits: '-1',
        date: '21/11/2021'
    },
    {
        id: 10,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Angers',
        awayTeam: 'Lorient',
        prediction: 'X',
        odds: '3.38',
        result: 'Loss',
        netUnits: '-1',
        date: '21/11/2021'
    },
    {
        id: 11,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Strasbourg',
        awayTeam: 'Reims',
        prediction: 'X',
        odds: '3.27',
        result: 'Win',
        netUnits: '2.27',
        date: '21/11/2021'
    },
    {
        id: 12,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Troyes',
        awayTeam: 'St Etienne',
        prediction: 'X',
        odds: '3.39',
        result: 'Loss',
        netUnits: '-1',
        date: '21/11/2021'
    },
    {
        id: 13,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Metz',
        awayTeam: 'Bordeaux',
        prediction: 'X',
        odds: '3.29',
        result: 'Win',
        netUnits: '2.29',
        date: '21/11/2021'
    },
    {
        id: 14,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Salernitana',
        awayTeam: 'Sampdoria',
        prediction: 'X',
        odds: '3.26',
        result: 'Loss',
        netUnits: '-1',
        date: '21/11/2021'
    },
    {
        id: 15,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Go Ahead Eagles',
        awayTeam: 'Groningen',
        prediction: 'X',
        odds: '3.31',
        result: 'Loss',
        netUnits: '-1',
        date: '21/11/2021'
    },
    {
        id: 16,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Getafe',
        awayTeam: 'Cadiz',
        prediction: 'X',
        odds: '3.09',
        result: 'Loss',
        netUnits: '-1',
        date: '21/11/2021'
    },
]