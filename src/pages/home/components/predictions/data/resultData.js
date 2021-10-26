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
        hidden: 'true'
    },
    {
        dataField: 'awayTeam',
        text: 'Match',
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
        text: 'Units +/-',
        sort: true,
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
        id: 1,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Cercle Brugge',
        awayTeam: 'Standard @ Cercle Brugge',
        prediction: 'X',
        odds: '3.38',
        result: 'Win',
        netUnits: '2.38',
        date: '23/10/2021'
    },
    {
        id: 2,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Kortrijk',
        awayTeam: 'Oostende @ Kortrijk',
        prediction: 'X',
        odds: '3.57',
        result: 'Loss',
        netUnits: '-1',
        date: '23/10/2021'
    },
    {
        id: 3,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Crystal Palace',
        awayTeam: 'Newcastle @ Crystal Palace',
        prediction: 'X',
        odds: '3.55',
        result: 'Win',
        netUnits: '2.55',
        date: '23/10/2021'
    },
    {
        id: 4,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Leeds',
        awayTeam: 'Wolves @ Leeds',
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
        awayTeam: 'Freiburg @ Wolfsburg',
        prediction: 'X',
        odds: '3.34',
        result: 'Loss',
        netUnits: '-1',
        date: '23/10/2021'
    },
    {
        id: 6,
        country: 'Italy',
        league: 'Serie A',
        homeTeam: 'Salernitana',
        awayTeam: 'Empoli @ Salernitana',
        prediction: '2',
        odds: '2.63',
        result: 'Win',
        netUnits: '1.63',
        date: '23/10/2021'
    },
    {
        id: 7,
        country: 'Italy',
        league: 'Serie A',
        homeTeam: 'Bologna',
        awayTeam: 'Milan @ Bologna',
        prediction: 'X',
        odds: '3.49',
        result: 'Loss',
        netUnits: '-1',
        date: '23/10/2021'
    },
    {
        id: 8,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Santa Clara',
        awayTeam: 'Famalicao @ Santa Clara',
        prediction: '2',
        odds: '2.98',
        result: 'Win',
        netUnits: '1.98',
        date: '23/10/2021'
    },
    {
        id: 9,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'Ross County',
        awayTeam: 'Livingston @ Ross County',
        prediction: 'X',
        odds: '3.21',
        result: 'Loss',
        netUnits: '-1',
        date: '23/10/2021'
    },
    {
        id: 10,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'Aberdeen',
        awayTeam: 'Hibernian @ Aberdeen',
        prediction: 'X',
        odds: '3.11',
        result: 'Loss',
        netUnits: '-1',
        date: '23/10/2021'
    },
    {
        id: 11,
        country: 'Scotland',
        league: 'Scottish PL',
        homeTeam: 'Dundee United',
        awayTeam: 'Motherwell @ Dundee United',
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
        awayTeam: 'Villarreal @ Ath Bilbao',
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
        awayTeam: 'Alaves @ Cadiz',
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
        league: 'Belgian First',
        homeTeam: 'Genk',
        awayTeam: 'Gent @ Genk',
        prediction: 'X',
        odds: '3.65',
        result: 'Loss',
        netUnits: '-1',
        date: '24/10/2021'
    },
    {
        id: 15,
        country: 'Belgium',
        league: 'Belgian First',
        homeTeam: 'Oud-Heverlee Leuven',
        awayTeam: 'St Truiden @ Oud-Heverlee Leuven',
        prediction: 'X',
        odds: '3.42',
        result: 'Loss',
        netUnits: '-1',
        date: '24/10/2021'
    },
    {
        id: 16,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'West Ham',
        awayTeam: 'Tottenham @ West Ham',
        prediction: '1',
        odds: '2.35',
        result: 'Win',
        netUnits: '1.35',
        date: '24/10/2021'
    },
    {
        id: 17,
        country: 'England',
        league: 'Premier League',
        homeTeam: 'Man United',
        awayTeam: 'Liverpool @ Man United',
        prediction: '2',
        odds: '2.24',
        result: 'Win',
        netUnits: '1.24',
        date: '24/10/2021'
    },
    {
        id: 18,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Reims',
        awayTeam: 'Troyes @ Reims',
        prediction: 'X',
        odds: '3.2',
        result: 'Loss',
        netUnits: '-1',
        date: '24/10/2021'
    },
    {
        id: 19,
        country: 'France',
        league: 'Ligue 1',
        homeTeam: 'Nice',
        awayTeam: 'Lyon @ Nice',
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
        awayTeam: 'Ein Frankfurt @ Bochum',
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
        awayTeam: 'Union Berlin @ Stuttgart',
        prediction: 'X',
        odds: '3.45',
        result: 'Win',
        netUnits: '2.45',
        date: '24/10/2021'
    },
    {
        id: 22,
        country: 'Italy',
        league: 'Serie A',
        homeTeam: 'Roma',
        awayTeam: 'Napoli @ Roma',
        prediction: 'X',
        odds: '3.47',
        result: 'Win',
        netUnits: '2.47',
        date: '24/10/2021'
    },
    {
        id: 23,
        country: 'Italy',
        league: 'Serie A',
        homeTeam: 'Inter',
        awayTeam: 'Juventus @ Inter',
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
        awayTeam: 'AZ Alkmaar @ Groningen',
        prediction: 'X',
        odds: '3.7',
        result: 'Loss',
        netUnits: '-1',
        date: '24/10/2021'
    },
    {
        id: 25,
        country: 'Portugal',
        league: 'Primeira Liga',
        homeTeam: 'Portimonense',
        awayTeam: 'Estoril @ Portimonense',
        prediction: '1',
        odds: '2.39',
        result: 'Loss',
        netUnits: '-1',
        date: '24/10/2021'
    }
]
