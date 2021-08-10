
export const columns = [
    // {
    //     dataField: 'id',
    //     text: 'ID',
    //     hidden: true
    // },
    {
        dataField: 'league',
        text: 'League',
        sort: true,
    },
    {
        dataField: 'homeTeam',
        text: 'Home\nTeam',
    },
    {
        dataField: 'awayTeam',
        text: 'Away Team',
    },
    {
        dataField: 'prediction',
        text: 'Prediction',
        sort: true,
        align: 'center'
    },
    {
        dataField: 'odds',
        text: 'Odds',
        sort: true,
        align: 'center'
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
                backgroundColor: '#94c3f3'
            };

        }
    },
    {
        dataField: 'date',
        text: 'Date',
    }
];


export const defaultSorted = [
    {
        dataField: 'division',
        order: 'desc'
    }
];
