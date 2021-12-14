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
        id: 27,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Arouca',
        awayTeam: 'Vizela',
        prediction: 'X',
        odds: '3.23',
        result: 'Loss',
        netUnits: '-1',
        date: '13/12/2021'
    },
    {
        id: 28,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Cadiz',
        awayTeam: 'Granada',
        prediction: 'X',
        odds: '3.1',
        result: 'Win',
        netUnits: '2.1',
        date: '13/12/2021'
    }

]

export const saturdayResults = [
    {
        id: 1,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Eupen',
        awayTeam: 'Beerschot VA',
        prediction: 'X',
        odds: '3.64',
        result: 'Loss',
        netUnits: '-1',
        date: '11/12/2021'
    },
    {
        id: 2,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Kortrijk',
        awayTeam: 'Oud-Heverlee Leuven',
        prediction: 'X',
        odds: '3.47',
        result: 'Loss',
        netUnits: '-1',
        date: '11/12/2021'
    },
    {
        id: 3,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'St Truiden',
        awayTeam: 'Cercle Brugge',
        prediction: 'X',
        odds: '3.06',
        result: 'Loss',
        netUnits: '-1',
        date: '11/12/2021'
    },
    {
        id: 4,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Brest',
        awayTeam: 'Montpellier',
        prediction: '2',
        odds: '3.43',
        result: 'Win',
        netUnits: '2.43',
        date: '11/12/2021'
    },
    {
        id: 5,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Reims',
        awayTeam: 'St Etienne',
        prediction: 'X',
        odds: '3.2',
        result: 'Loss',
        netUnits: '-1',
        date: '11/12/2021'
    },
    {
        id: 6,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Freiburg',
        awayTeam: 'Hoffenheim',
        prediction: 'X',
        odds: '3.53',
        result: 'Loss',
        netUnits: '-1',
        date: '11/12/2021'
    },
    {
        id: 7,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Hertha',
        awayTeam: 'Bielefeld',
        prediction: 'X',
        odds: '3.33',
        result: 'Loss',
        netUnits: '-1',
        date: '11/12/2021'
    },
    {
        id: 8,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Wolfsburg',
        awayTeam: 'Stuttgart',
        prediction: 'X',
        odds: '3.72',
        result: 'Loss',
        netUnits: '-1',
        date: '11/12/2021'
    },
    {
        id: 9,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Udinese',
        awayTeam: 'Milan',
        prediction: 'X',
        odds: '3.51',
        result: 'Win',
        netUnits: '2.51',
        date: '11/12/2021'
    },
    {
        id: 10,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Heerenveen',
        awayTeam: 'Sparta Rotterdam',
        prediction: '1',
        odds: '2.06',
        result: 'Loss',
        netUnits: '-1',
        date: '11/12/2021'
    },
    {
        id: 11,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Zwolle',
        awayTeam: 'For Sittard',
        prediction: 'X',
        odds: '3.65',
        result: 'Loss',
        netUnits: '-1',
        date: '11/12/2021'
    },
    {
        id: 12,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'Dundee United',
        awayTeam: 'Livingston',
        prediction: '1',
        odds: '2.31',
        result: 'Loss',
        netUnits: '-1',
        date: '11/12/2021'
    },
    {
        id: 13,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'Ross County',
        awayTeam: 'Dundee',
        prediction: 'X',
        odds: '3.26',
        result: 'Loss',
        netUnits: '-1',
        date: '11/12/2021'
    },
    {
        id: 14,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'St Johnstone',
        awayTeam: 'Aberdeen',
        prediction: '2',
        odds: '2.45',
        result: 'Win',
        netUnits: '1.45',
        date: '11/12/2021'
    },
    {
        id: 15,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'St Mirren',
        awayTeam: 'Hibernian',
        prediction: 'X',
        odds: '3.12',
        result: 'Win',
        netUnits: '2.12',
        date: '11/12/2021'
    },
    {
        id: 16,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Ath Bilbao',
        awayTeam: 'Sevilla',
        prediction: 'X',
        odds: '3.04',
        result: 'Loss',
        netUnits: '-1',
        date: '11/12/2021'
    },
    {
        id: 17,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Valencia',
        awayTeam: 'Elche',
        prediction: 'X',
        odds: '3.53',
        result: 'Loss',
        netUnits: '-1',
        date: '11/12/2021'
    },
]

export const sundayResults = [
    {
        id: 18,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Angers',
        awayTeam: 'Clermont',
        prediction: 'X',
        odds: '3.36',
        result: 'Loss',
        netUnits: '-1',
        date: '12/12/2021'
    },
    {
        id: 19,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Lille',
        awayTeam: 'Lyon',
        prediction: 'X',
        odds: '3.58',
        result: 'Win',
        netUnits: '2.58',
        date: '12/12/2021'
    },
    {
        id: 20,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Metz',
        awayTeam: 'Lorient',
        prediction: 'X',
        odds: '3.2',
        result: 'Loss',
        netUnits: '-1',
        date: '12/12/2021'
    },
    {
        id: 21,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Troyes',
        awayTeam: 'Bordeaux',
        prediction: 'X',
        odds: '3.47',
        result: 'Loss',
        netUnits: '-1',
        date: '12/12/2021'
    },
    {
        id: 22,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Ein Frankfurt',
        awayTeam: 'Leverkusen',
        prediction: 'X',
        odds: '3.75',
        result: 'Loss',
        netUnits: '-1',
        date: '12/12/2021'
    },
    {
        id: 23,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Sassuolo',
        awayTeam: 'Lazio',
        prediction: 'X',
        odds: '3.55',
        result: 'Loss',
        netUnits: '-1',
        date: '12/12/2021'
    },
    {
        id: 24,
        country: 'Italy',
        league: 'Seria A',
        homeTeam: 'Torino',
        awayTeam: 'Bologna',
        prediction: 'X',
        odds: '3.2',
        result: 'Loss',
        netUnits: '-1',
        date: '12/12/2021'
    },
    {
        id: 25,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Betis',
        awayTeam: 'Sociedad',
        prediction: '1',
        odds: '2.3',
        result: 'Win',
        netUnits: '1.3',
        date: '12/12/2021'
    },
    {
        id: 26,
        country: 'Spain',
        league: 'La Liga',
        homeTeam: 'Villarreal',
        awayTeam: 'Vallecano',
        prediction: 'X',
        odds: '3.74',
        result: 'Loss',
        netUnits: '-1',
        date: '12/12/2021'
    },
]