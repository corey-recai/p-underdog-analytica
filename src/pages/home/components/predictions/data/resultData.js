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
        id: 2,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Lille',
        awayTeam: 'Angers',
        prediction: 'X',
        odds: '3.58',
        result: 'Win',
        netUnits: '2.58',
        date: '6/11/2021\r'
    },
    {
        id: 3,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Spezia',
        awayTeam: 'Torino',
        prediction: '2',
        odds: '2.04',
        result: 'Loss',
        netUnits: '-1',
        date: '6/11/2021\r'
    },
    {
        id: 4,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Willem II',
        awayTeam: 'Sparta Rotterdam',
        prediction: 'X',
        odds: '3.48',
        result: 'Loss',
        netUnits: '-1',
        date: '6/11/2021\r'
    },
    {
        id: 5,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Nijmegen',
        awayTeam: 'Heerenveen',
        prediction: 'X',
        odds: '3.4',
        result: 'Win',
        netUnits: '2.4',
        date: '6/11/2021\r'
    },
    {
        id: 6,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Vizela',
        awayTeam: 'Estoril',
        prediction: 'X',
        odds: '3.11',
        result: 'Win',
        netUnits: '2.11',
        date: '6/11/2021\r'
    },
    {
        id: 7,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Alaves',
        awayTeam: 'Levante',
        prediction: '1',
        odds: '2.45',
        result: 'Win',
        netUnits: '1.45',
        date: '6/11/2021\r'
    },
]
export const sundayResults = [
    {
        id: 8,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Antwerp',
        awayTeam: 'Anderlecht',
        prediction: 'X',
        odds: '3.6',
        result: 'Loss',
        netUnits: '-1',
        date: '7/11/2021\r'
    },
    {
        id: 9,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Nantes',
        awayTeam: 'Strasbourg',
        prediction: 'X',
        odds: '3.28',
        result: 'Win',
        netUnits: '2.28',
        date: '7/11/2021\r'
    },
    {
        id: 10,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Reims',
        awayTeam: 'Monaco',
        prediction: 'X',
        odds: '3.42',
        result: 'Win',
        netUnits: '2.42',
        date: '7/11/2021\r'
    },
    {
        id: 11,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'St Etienne',
        awayTeam: 'Clermont',
        prediction: 'X',
        odds: '3.35',
        result: 'Loss',
        netUnits: '-1',
        date: '7/11/2021\r'
    },
    {
        id: 12,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Rennes',
        awayTeam: 'Lyon',
        prediction: 'X',
        odds: '3.55',
        result: 'Loss',
        netUnits: '-1',
        date: '7/11/2021\r'
    },
    {
        id: 13,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Lorient',
        awayTeam: 'Brest',
        prediction: 'X',
        odds: '3.28',
        result: 'Loss',
        netUnits: '-1',
        date: '7/11/2021\r'
    },
    {
        id: 14,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Hertha',
        awayTeam: 'Leverkusen',
        prediction: 'X',
        odds: '3.61',
        result: 'Win',
        netUnits: '2.61',
        date: '7/11/2021\r'
    },
    {
        id: 15,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Sampdoria',
        awayTeam: 'Bologna',
        prediction: '2',
        odds: '2.9',
        result: 'Win',
        netUnits: '1.9',
        date: '7/11/2021\r'
    },
    {
        id: 16,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Vitesse',
        awayTeam: 'Utrecht',
        prediction: 'X',
        odds: '3.57',
        result: 'Loss',
        netUnits: '-1',
        date: '7/11/2021\r'
    },
    {
        id: 17,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Valencia',
        awayTeam: 'Ath Madrid',
        prediction: 'X',
        odds: '3.25',
        result: 'Win',
        netUnits: '2.25',
        date: '7/11/2021\r'
    },
    {
        id: 18,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Betis',
        awayTeam: 'Sevilla',
        prediction: '1',
        odds: '2.92',
        result: 'Loss',
        netUnits: '-1',
        date: '7/11/2021'
    }
]