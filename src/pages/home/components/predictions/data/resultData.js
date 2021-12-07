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
        id: 22,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Everton',
        awayTeam: 'Arsenal',
        prediction: 'X',
        odds: '3.45',
        result: 'Loss',
        netUnits: '-1',
        date: '06/12/2021'
    },
    {
        id: 23,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Empoli',
        awayTeam: 'Udinese',
        prediction: 'X',
        odds: '3.35',
        result: 'Loss',
        netUnits: '-1',
        date: '06/12/2021'
    },
    {
        id: 24,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Cagliari',
        awayTeam: 'Torino',
        prediction: 'X',
        odds: '3.24',
        result: 'Win',
        netUnits: '2.24',
        date: '06/12/2021'
    }
]

export const saturdayResults = [
    {
        id: 1,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Kortrijk',
        awayTeam: 'Cercle Brugge',
        prediction: 'X',
        odds: '3.45',
        result: 'Loss',
        netUnits: '-1',
        date: '04/12/2021'
    },
    {
        id: 2,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'West Ham',
        awayTeam: 'Chelsea',
        prediction: 'X',
        odds: '3.63',
        result: 'Loss',
        netUnits: '-1',
        date: '04/12/2021'
    },
    {
        id: 3,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Southampton',
        awayTeam: 'Brighton',
        prediction: 'X',
        odds: '3.16',
        result: 'Win',
        netUnits: '2.16',
        date: '04/12/2021'
    },
    {
        id: 4,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Augsburg',
        awayTeam: 'Bochum',
        prediction: '1',
        odds: '2.32',
        result: 'Loss',
        netUnits: '-1',
        date: '04/12/2021'
    },
    {
        id: 5,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Heracles',
        awayTeam: 'Heerenveen',
        prediction: 'X',
        odds: '3.54',
        result: 'Loss',
        netUnits: '-1',
        date: '04/12/2021'
    },
    {
        id: 6,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Cambuur',
        awayTeam: 'Vitesse',
        prediction: '2',
        odds: '2.16',
        result: 'Win',
        netUnits: '1.16',
        date: '04/12/2021'
    },
    {
        id: 7,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Pacos Ferreira',
        awayTeam: 'Guimaraes',
        prediction: '2',
        odds: '2.45',
        result: 'Win',
        netUnits: '1.45',
        date: '04/12/2021'
    },
    {
        id: 9,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'Hibernian',
        awayTeam: 'Motherwell',
        prediction: 'X',
        odds: '3.64',
        result: 'Win',
        netUnits: '2.64',
        date: '04/12/2021'
    },
    {
        id: 10,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Sevilla',
        awayTeam: 'Villarreal',
        prediction: 'X',
        odds: '3.35',
        result: 'Loss',
        netUnits: '-1',
        date: '04/12/2021'
    },
    {
        id: 8,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'St Johnstone',
        awayTeam: 'Ross County',
        prediction: 'X',
        odds: '3.18',
        result: 'Postponed',
        netUnits: 'PPD',
        date: '04/12/2021'
    },
]

export const sundayResults = [
    {
        id: 11,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Mechelen',
        awayTeam: 'Genk',
        prediction: 'X',
        odds: '3.66',
        result: 'Win',
        netUnits: '2.66',
        date: '05/12/2021'
    },
    {
        id: 13,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Leeds',
        awayTeam: 'Brentford',
        prediction: 'X',
        odds: '3.55',
        result: 'Win',
        netUnits: '2.55',
        date: '05/12/2021'
    },
    {
        id: 14,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Reims',
        awayTeam: 'Angers',
        prediction: 'X',
        odds: '3.02',
        result: 'Loss',
        netUnits: '-1',
        date: '05/12/2021'
    },
    {
        id: 15,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Nice',
        awayTeam: 'Strasbourg',
        prediction: 'X',
        odds: '3.6',
        result: 'Loss',
        netUnits: '-1',
        date: '05/12/2021'
    },
    {
        id: 16,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Stuttgart',
        awayTeam: 'Hertha',
        prediction: 'X',
        odds: '3.36',
        result: 'Win',
        netUnits: '2.36',
        date: '05/12/2021'
    },
    {
        id: 17,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Venezia',
        awayTeam: 'Verona',
        prediction: '2',
        odds: '2.08',
        result: 'Win',
        netUnits: '1.08',
        date: '05/12/2021'
    },
    {
        id: 18,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Bologna',
        awayTeam: 'Fiorentina',
        prediction: '2',
        odds: '2.56',
        result: 'Win',
        netUnits: '1.56',
        date: '05/12/2021'
    },
    {
        id: 19,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Celta',
        awayTeam: 'Valencia',
        prediction: '2',
        odds: '3.64',
        result: 'Win',
        netUnits: '2.64',
        date: '05/12/2021'
    },
    {
        id: 20,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Elche',
        awayTeam: 'Cadiz',
        prediction: '1',
        odds: '2.02',
        result: 'Win',
        netUnits: '1.02',
        date: '05/12/2021'
    },
    {
        id: 21,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Vallecano',
        awayTeam: 'Espanol',
        prediction: 'X',
        odds: '3.19',
        result: 'Loss',
        netUnits: '-1',
        date: '05/12/2021'
    },
]