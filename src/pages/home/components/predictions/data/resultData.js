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
        hidden: true
    }
];

export const saturdayResults = [
    {
        id: 1,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Southampton',
        awayTeam: 'Leeds',
        prediction: 'X',
        odds: '3.49',
        result: 'Loss',
        netUnits: '-1',
        date: '16/10/2021'
    },
    {
        id: 2,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Clermont',
        awayTeam: 'Lille',
        prediction: 'X',
        odds: '3.33',
        result: 'Loss',
        netUnits: '-1',
        date: '16/10/2021'
    },
    {
        id: 3,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Lyon',
        awayTeam: 'Monaco',
        prediction: '1',
        odds: '2.2',
        result: 'Win',
        netUnits: '1.2',
        date: '16/10/2021'
    },
    {
        id: 4,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Union Berlin',
        awayTeam: 'Wolfsburg',
        prediction: 'X',
        odds: '3.21',
        result: 'Loss',
        netUnits: '-1',
        date: '16/10/2021'
    },
    {
        id: 5,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Greuther Furth',
        awayTeam: 'Bochum',
        prediction: '1',
        odds: '2.39',
        result: 'Loss',
        netUnits: '-1',
        date: '16/10/2021'
    },
    {
        id: 6,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Lazio',
        awayTeam: 'Inter',
        prediction: 'X',
        odds: '3.41',
        result: 'Loss',
        netUnits: '-1',
        date: '16/10/2021'
    },
    {
        id: 7,
        country: 'Scotland',
        league: 'ScottishPL',
        homeTeam: 'Ross County',
        awayTeam: 'St Mirren',
        prediction: 'X',
        odds: '3.32',
        result: 'Loss',
        netUnits: '-1',
        date: '16/10/2021'
    },
    {
        id: 8,
        country: 'Spain',
        league: 'Liga',
        homeTeam: 'Levante',
        awayTeam: 'Getafe',
        prediction: 'X',
        odds: '2.92',
        result: 'Win',
        netUnits: '1.92',
        date: '16/10/2021'
    },
]
export const sundayResults = [
    {
        id: 9,
        country: 'Belgium',
        league: 'BelgianFirst',
        homeTeam: 'Charleroi',
        awayTeam: 'Genk',
        prediction: 'X',
        odds: '3.61',
        result: 'Loss',
        netUnits: '-1',
        date: '17/10/2021'
    },
    {
        id: 10,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Everton',
        awayTeam: 'West Ham',
        prediction: 'X',
        odds: '3.34',
        result: 'Loss',
        netUnits: '-1',
        date: '17/10/2021'
    },
    {
        id: 11,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Strasbourg',
        awayTeam: 'St Etienne',
        prediction: '2',
        odds: '3.6',
        result: 'Loss',
        netUnits: '-1',
        date: '17/10/2021'
    },
    {
        id: 12,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Troyes',
        awayTeam: 'Nice',
        prediction: 'X',
        odds: '3.6',
        result: 'Loss',
        netUnits: '-1',
        date: '17/10/2021'
    },
    {
        id: 13,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Augsburg',
        awayTeam: 'Bielefeld',
        prediction: '2',
        odds: '3.32',
        result: 'Loss',
        netUnits: '-1',
        date: '17/10/2021'
    },
    {
        id: 14,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Genoa',
        awayTeam: 'Sassuolo',
        prediction: '2',
        odds: '2.25',
        result: 'Loss',
        netUnits: '-1',
        date: '17/10/2021'
    },
    {
        id: 15,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Udinese',
        awayTeam: 'Bologna',
        prediction: '1',
        odds: '2.33',
        result: 'Loss',
        netUnits: '-1',
        date: '17/10/2021'
    },
    {
        id: 16,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Juventus',
        awayTeam: 'Roma',
        prediction: 'X',
        odds: '3.69',
        result: 'Loss',
        netUnits: '-1',
        date: '17/10/2021'
    },
    {
        id: 17,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Sparta Rotterdam',
        awayTeam: 'Groningen',
        prediction: '2',
        odds: '3.02',
        result: 'Loss',
        netUnits: '-1',
        date: '17/10/2021'
    },
    {
        id: 18,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'AZ Alkmaar',
        awayTeam: 'Utrecht',
        prediction: '2',
        odds: '3.33',
        result: 'Loss',
        netUnits: '-1',
        date: '17/10/2021'
    },
    {
        id: 19,
        country: 'Spain',
        league: 'Liga',
        homeTeam: 'Celta',
        awayTeam: 'Sevilla',
        prediction: '2',
        odds: '2.25',
        result: 'Win',
        netUnits: '1.25',
        date: '17/10/2021'
    },
    {
        id: 20,
        country: 'Spain',
        league: 'Liga',
        homeTeam: 'Vallecano',
        awayTeam: 'Elche',
        prediction: 'X',
        odds: '3.54',
        result: 'Loss',
        netUnits: '-1',
        date: '17/10/2021'
    }

]