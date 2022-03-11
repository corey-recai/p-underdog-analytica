export const predictionColumns = [
    {
        dataField: "id",
        text: "ID",
        hidden: true,
    },
    {
        dataField: "League",
        text: "League",
        sort: true,
        style: { textAlign: 'center' },
        headerStyle: () => {
            return { textAlign: 'center' };
        },
    },
    {
        dataField: "HomeTeam",
        text: "Home",
        style: { textAlign: 'center' },
        headerStyle: () => {
            return { textAlign: 'center' };
        },
    },
    {
        dataField: "AwayTeam",
        text: "Away",
        style: { textAlign: 'center' },
        headerStyle: () => {
            return { textAlign: 'center' };
        },
    },
    {
        dataField: "Prediction",
        text: "Recommendation",
        sort: true,
        style: { textAlign: 'center' },
        headerStyle: () => {
            return { width: '25%', textAlign: 'center' };
        },
    },
    {
        dataField: "Odds",
        text: "Odds",
        sort: true,
        style: { textAlign: 'center' },
        headerStyle: () => {
            return { width: '10%', textAlign: 'center' };
        },
    },
    {
        dataField: "Win",
        text: "Win",
        style: { textAlign: 'center' },
        headerStyle: () => {
            return { width: '10%', textAlign: 'center' };
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
        dataField: "Book",
        text: "Book",
        sort: true,
        style: { textAlign: 'center' },
        headerStyle: () => {
            return { width: '15%', textAlign: 'center' };
        },
    },
];