export const competitionColumns = [
    {
        dataField: 'id',
        text: '         ',
        align:'left'
    },
    {
        dataField: 'ua',
        text: 'Underdog Analytica',
        align:'center',
        headerStyle: (colum, colIndex) => {
         return { width: '15%', textAlign: 'center' };
       }
    },
    {
        dataField: 'betTwitter',
        text: '#BettingTwitter',
        align:'center',
        headerStyle: (colum, colIndex) => {
         return { width: '25%', textAlign: 'center' };
       }
    },
    {
        dataField: 'actionNetwork',
        text: 'Action Network (Football) ',
        align:'center',
        headerStyle: (colum, colIndex) => {
         return { width: '20%', textAlign: 'center' };
       }
    },
    {
        dataField: 'sportsMemo',
        text: '"Experts" @ Sportsmemo.com',
        align:'center',
        headerStyle: (colum, colIndex) => {
         return { width: '25%', textAlign: 'center' };
       }
    },
]

export const uaBenefits = [
    {
        id: 'Transparent results before payment',
        ua: 'YES',
        betTwitter: 'NO',
        actionNetwork: "NO",
        sportsMemo: 'YES',
    },
    {
        id: 'Data-driven predictions',
        ua: 'YES',
        betTwitter: 'NO',
        actionNetwork: "NO",
        sportsMemo: 'YES',
    },
    {
        id: 'Monthly Cost',
        ua: '\u20ac0 - \u20ac15',
        betTwitter: '\u20ac25 - \u20ac300',
        actionNetwork: '\u20ac60',
        sportsMemo: '\u20ac200',
    },
    {
        id: 'Integrity promise',
        ua: 'YES',
        betTwitter: 'NO',
        actionNetwork: 'NO',
        sportsMemo: 'NO',
    },
    {
        id: 'Curated news feed',
        ua: 'YES',
        betTwitter: 'NO',
        actionNetwork: 'YES',
        sportsMemo: 'NO',
    },
    {
        id: 'Consistent free predictions',
        ua: 'YES',
        betTwitter: 'NO',
        actionNetwork: 'NO',
        sportsMemo: 'NO',
    },
    {
        id: 'Bet archive',
        ua: 'YES',
        betTwitter: 'NO',
        actionNetwork: 'NO',
        sportsMemo: 'YES',
    }
]
