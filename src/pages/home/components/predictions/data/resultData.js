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
        country: 'Belgium',
        league: 'BelgianFirst',
        homeTeam: 'Cercle Brugge',
        awayTeam: 'Standard',
        prediction: 'X',
        odds: '3.38',
        result: 'Win',
        netUnits: '2.38',
        date: '23/10/2021'
    },
    {
        id: 2,
        country: 'Belgium',
        league: 'BelgianFirst',
        homeTeam: 'Kortrijk',
        awayTeam: 'Oostende',
        prediction: 'X',
        odds: '3.57',
        result: 'Loss',
        netUnits: '-1',
        date: '23/10/2021'
    },
    {
        id: 3,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Crystal Palace',
        awayTeam: 'Newcastle',
        prediction: 'X',
        odds: '3.55',
        result: 'Win',
        netUnits: '2.55',
        date: '23/10/2021'
    },
    {
        id: 4,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Leeds',
        awayTeam: 'Wolves',
        prediction: 'X',
        odds: '3.41',
        result: 'Win',
        netUnits: '2.41',
        date: '23/10/2021'
    },
    {
        id: 5,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Wolfsburg',
        awayTeam: 'Freiburg',
        prediction: 'X',
        odds: '3.34',
        result: 'Loss',
        netUnits: '-1',
        date: '23/10/2021'
    },
    {
        id: 6,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Salernitana',
        awayTeam: 'Empoli',
        prediction: '2',
        odds: '2.63',
        result: 'Win',
        netUnits: '1.63',
        date: '23/10/2021'
    },
    {
        id: 7,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Bologna',
        awayTeam: 'Milan',
        prediction: 'X',
        odds: '3.49',
        result: 'Loss',
        netUnits: '-1',
        date: '23/10/2021'
    },
    {
        id: 8,
        country: 'Portugal',
        league: 'PrimeiraLiga',
        homeTeam: 'Santa Clara',
        awayTeam: 'Famalicao',
        prediction: '2',
        odds: '2.98',
        result: 'Win',
        netUnits: '1.98',
        date: '23/10/2021'
    },
    {
        id: 9,
        country: 'Scotland',
        league: 'ScottishPL',
        homeTeam: 'Ross County',
        awayTeam: 'Livingston',
        prediction: 'X',
        odds: '3.21',
        result: 'Loss',
        netUnits: '-1',
        date: '23/10/2021'
    },
    {
        id: 10,
        country: 'Scotland',
        league: 'ScottishPL',
        homeTeam: 'Aberdeen',
        awayTeam: 'Hibernian',
        prediction: 'X',
        odds: '3.11',
        result: 'Loss',
        netUnits: '-1',
        date: '23/10/2021'
    },
    {
        id: 11,
        country: 'Scotland',
        league: 'ScottishPL',
        homeTeam: 'Dundee United',
        awayTeam: 'Motherwell',
        prediction: '1',
        odds: '2.27',
        result: 'Win',
        netUnits: '1.27',
        date: '23/10/2021'
    },
    {
        id: 12,
        country: 'Spain',
        league: 'Liga',
        homeTeam: 'Ath Bilbao',
        awayTeam: 'Villarreal',
        prediction: 'X',
        odds: '3.11',
        result: 'Loss',
        netUnits: '-1',
        date: '23/10/2021'
    },
    {
        id: 13,
        country: 'Spain',
        league: 'Liga',
        homeTeam: 'Cadiz',
        awayTeam: 'Alaves',
        prediction: '2',
        odds: '3.13',
        result: 'Win',
        netUnits: '2.13',
        date: '23/10/2021'
    },
]
export const sundayResults = [
    {
        id: 14,
        country: 'Belgium',
        league: 'BelgianFirst',
        homeTeam: 'Genk',
        awayTeam: 'Gent',
        prediction: 'X',
        odds: '3.65',
        result: 'Loss',
        netUnits: '-1',
        date: '24/10/2021'
    },
    {
        id: 15,
        country: 'Belgium',
        league: 'BelgianFirst',
        homeTeam: 'Oud-Heverlee Leuven',
        awayTeam: 'St Truiden',
        prediction: 'X',
        odds: '3.42',
        result: 'Loss',
        netUnits: '-1',
        date: '24/10/2021'
    },
    {
        id: 16,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'West Ham',
        awayTeam: 'Tottenham',
        prediction: '1',
        odds: '2.35',
        result: 'Win',
        netUnits: '1.35',
        date: '24/10/2021'
    },
    {
        id: 17,
        country: 'England',
        league: 'PremierLeague',
        homeTeam: 'Man United',
        awayTeam: 'Liverpool',
        prediction: '2',
        odds: '2.24',
        result: 'Win',
        netUnits: '1.24',
        date: '24/10/2021'
    },
    {
        id: 18,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Reims',
        awayTeam: 'Troyes',
        prediction: 'X',
        odds: '3.2',
        result: 'Loss',
        netUnits: '-1',
        date: '24/10/2021'
    },
    {
        id: 19,
        country: 'France',
        league: 'Ligue1',
        homeTeam: 'Nice',
        awayTeam: 'Lyon',
        prediction: 'X',
        odds: '3.53',
        result: 'Loss',
        netUnits: '-1',
        date: '24/10/2021'
    },
    {
        id: 20,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Bochum',
        awayTeam: 'Ein Frankfurt',
        prediction: '2',
        odds: '2.24',
        result: 'Loss',
        netUnits: '-1',
        date: '24/10/2021'
    },
    {
        id: 21,
        country: 'Germany',
        league: 'Bundesliga',
        homeTeam: 'Stuttgart',
        awayTeam: 'Union Berlin',
        prediction: 'X',
        odds: '3.45',
        result: 'Win',
        netUnits: '2.45',
        date: '24/10/2021'
    },
    {
        id: 22,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Roma',
        awayTeam: 'Napoli',
        prediction: 'X',
        odds: '3.47',
        result: 'Win',
        netUnits: '2.47',
        date: '24/10/2021'
    },
    {
        id: 23,
        country: 'Italy',
        league: 'SerieA',
        homeTeam: 'Inter',
        awayTeam: 'Juventus',
        prediction: 'X',
        odds: '3.55',
        result: 'Win',
        netUnits: '2.55',
        date: '24/10/2021'
    },
    {
        id: 24,
        country: 'Netherlands',
        league: 'Eredivisie',
        homeTeam: 'Groningen',
        awayTeam: 'AZ Alkmaar',
        prediction: 'X',
        odds: '3.7',
        result: 'Loss',
        netUnits: '-1',
        date: '24/10/2021'
    },
    {
        id: 25,
        country: 'Portugal',
        league: 'PrimeiraLiga',
        homeTeam: 'Portimonense',
        awayTeam: 'Estoril',
        prediction: '1',
        odds: '2.39',
        result: 'Loss',
        netUnits: '-1',
        date: '24/10/2021'
    }
]