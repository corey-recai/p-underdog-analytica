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

export const mondayResults = [
    {
        id: 24,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Osasuna',
        awayTeam: 'Elche',
        prediction: 'X',
        odds: '3.41',
        result: 'Win',
        netUnits: '2.41',
        date: '29/11/2021'
    }
]

export const saturdayResults = [
    {
        id: 1,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Cercle Brugge',
        awayTeam: 'Mechelen',
        prediction: 'X',
        odds: '3.53',
        result: 'Loss',
        netUnits: '-1',
        date: '27/11/2021'
    },
    {
        id: 2,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Seraing',
        awayTeam: 'St Truiden',
        prediction: '2',
        odds: '2.37',
        result: 'Loss',
        netUnits: '-1',
        date: '27/11/2021'
    },
    {
        id: 3,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Charleroi',
        awayTeam: 'Anderlecht',
        prediction: 'X',
        odds: '3.55',
        result: 'Loss',
        netUnits: '-1',
        date: '27/11/2021'
    },
    {
        id: 4,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Crystal Palace',
        awayTeam: 'Aston Villa',
        prediction: '2',
        odds: '3.3',
        result: 'Win',
        netUnits: '2.3',
        date: '27/11/2021'
    },
    {
        id: 5,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Brighton',
        awayTeam: 'Leeds',
        prediction: 'X',
        odds: '3.39',
        result: 'Win',
        netUnits: '2.39',
        date: '27/11/2021'
    },
    {
        id: 6,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Wolfsburg',
        awayTeam: 'Dortmund',
        prediction: 'X',
        odds: '3.51',
        result: 'Loss',
        netUnits: '-1',
        date: '27/11/2021'
    },
    {
        id: 7,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Juventus',
        awayTeam: 'Atalanta',
        prediction: 'X',
        odds: '3.48',
        result: 'Loss',
        netUnits: '-1',
        date: '27/11/2021'
    },
    {
        id: 8,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Sampdoria',
        awayTeam: 'Verona',
        prediction: 'X',
        odds: '3.36',
        result: 'Loss',
        netUnits: '-1',
        date: '27/11/2021'
    },
    {
        id: 9,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Empoli',
        awayTeam: 'Fiorentina',
        prediction: 'X',
        odds: '3.53',
        result: 'Loss',
        netUnits: '-1',
        date: '27/11/2021'
    },
    {
        id: 10,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Willem II',
        awayTeam: 'Go Ahead Eagles',
        prediction: '2',
        odds: '3.48',
        result: 'Win',
        netUnits: '2.48',
        date: '27/11/2021'
    },
    {
        id: 11,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Famalicao',
        awayTeam: 'Portimonense',
        prediction: 'X',
        odds: '3.37',
        result: 'Loss',
        netUnits: '-1',
        date: '27/11/2021'
    },
    {
        id: 12,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'St Johnstone',
        awayTeam: 'Hibernian',
        prediction: '2',
        odds: '2.67',
        result: 'Win',
        netUnits: '1.67',
        date: '27/11/2021'
    },
    {
        id: 13,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'Dundee',
        awayTeam: 'Motherwell',
        prediction: 'X',
        odds: '3.27',
        result: 'Loss',
        netUnits: '-1',
        date: '27/11/2021'
    },
    {
        id: 14,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'Hearts',
        awayTeam: 'St Mirren',
        prediction: 'X',
        odds: '3.68',
        result: 'Loss',
        netUnits: '-1',
        date: '27/11/2021'
    },
    {
        id: 15,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Mallorca',
        awayTeam: 'Getafe',
        prediction: 'X',
        odds: '2.95',
        result: 'Win',
        netUnits: '1.95',
        date: '27/11/2021'
    },
    {
        id: 16,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Villarreal',
        awayTeam: 'Barcelona',
        prediction: 'X',
        odds: '3.42',
        result: 'Loss',
        netUnits: '-1',
        date: '27/11/2021'
    },
    {
        id: 17,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Valencia',
        awayTeam: 'Vallecano',
        prediction: 'X',
        odds: '3.36',
        result: 'Win',
        netUnits: '2.36',
        date: '27/11/2021'
    },

]

export const sundayResults = [
    {
        id: 18,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Waregem',
        awayTeam: 'Beerschot VA',
        prediction: 'X',
        odds: '3.56',
        result: 'Loss',
        netUnits: '-1',
        date: '28/11/2021'
    },
    {
        id: 19,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Burnley',
        awayTeam: 'Tottenham',
        prediction: 'X',
        odds: '3.53',
        result: 'Postponed',
        netUnits: '0 PPT*',
        date: '28/11/2021'
    },
    {
        id: 20,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Ein Frankfurt',
        awayTeam: 'Union Berlin',
        prediction: 'X',
        odds: '3.5',
        result: 'Loss',
        netUnits: '-1',
        date: '28/11/2021'
    },
    {
        id: 21,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Vitesse',
        awayTeam: 'AZ Alkmaar',
        prediction: 'X',
        odds: '3.52',
        result: 'Win',
        netUnits: '2.52',
        date: '28/11/2021'
    },
    {
        id: 22,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Maritimo',
        awayTeam: 'Pacos Ferreira',
        prediction: '2',
        odds: '2.75',
        result: 'Loss',
        netUnits: '-1',
        date: '28/11/2021'
    },
    {
        id: 23,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Espanol',
        awayTeam: 'Sociedad',
        prediction: 'X',
        odds: '3.25',
        result: 'Loss',
        netUnits: '-1',
        date: '28/11/2021'
    },
]