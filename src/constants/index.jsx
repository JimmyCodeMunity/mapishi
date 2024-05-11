import { LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer } from 'recharts'

export const map = (value, sMin, sMax, dMin, dMax) => {
    return dMin + ((value - sMin) / (sMax - sMin)) * (dMax - dMin);
};
export const pi = Math.PI;
export const tau = 2 * pi;

export const employeeData = [
    {
        id: 1,
        name: 'Esther Howard',
        position: "Sale's manager USA",
        transactions: 3490,
        rise: true,
        tasksCompleted: 3,
        imgId: 0,
    },

    {
        id: 2,
        name: 'Eleanor Pena',
        position: "Sale's manager Europe",
        transactions: 590,
        rise: false,
        tasksCompleted: 5,
        imgId: 2,
    },

    {
        id: 3,
        name: 'Robert Fox',
        position: "Sale's manager Asia",
        transactions: 2600,
        rise: true,
        tasksCompleted: 1,
        imgId: 3,
    },
];

export const Countrydata = [
    { name: 'USA', rise: true, value: 21942.83, id: 1 },
    { name: 'Ireland', rise: false, value: 19710.0, id: 2 },
    { name: 'Ukraine', rise: false, value: 12320.3, id: 3 },
    { name: 'Sweden', rise: true, value: 9725.0, id: 4 },
];
export const segmentationData = [
    { c1: 'Not Specified', c2: '800', c3: '#363636', color: '#535353' },
    { c1: 'Male', c2: '441', c3: '#818bb1', color: '#595f77' },
    { c1: 'Female', c2: '233', c3: '#2c365d', color: '#232942' },
    { c1: 'Other', c2: '126', c3: '#334ed8', color: '#2c3051' },
];

export const sidebarItems = [
    [
        { id: '0', title: 'Dashboard', notifications: false,link:'/' },
        { id: '1', title: 'Add Product', notifications: false,link:'/addproduct' },
        { id: '2', title: 'Add User', notifications: false,link:'/adduser' },
        { id: '3', title: 'Add Staff', notifications: false,link:'/addstaff' },
        // { id: '4', title: 'Chat', notifications: 6 },
        // { id: '5', title: 'Team', notifications: false },
        { id: '6', title: 'All Users', notifications: false,link:'/users' },
        { id: '7', title: 'All Staff', notifications: false,link:'/staffs' },
        { id: '8', title: 'All Sales', notifications: false,link:'/sales' },
    ],
    [
        { id: '9', title: 'Contact Us', notifications: false,link:'/contactus' },
        { id: '10', title: 'Feedbacks', notifications: false,link:'/feedbacks' },
        { id: '11', title: 'Send Notificatins', notifications: false,link:'/sendnotifications' },
        { id: '12', title: 'View Notificatins', notifications: false,link:'/viewnotifications' },
    ],
    [
        { id: '13', title: 'Blocked Accounts', notifications: false,link:'/blockedacc' },
        { id: '14', title: 'Restrict user', notifications: false,link:'/restrictuser' },
    ],
    [
        { id: '15', title: 'Create Ads', notifications: false,link:'/createad' },
        { id: '16', title: 'Add Admin', notifications: false,link:'/addadmin' },
        { id: '17', title: 'Create Category', notifications: false ,link:'/addcategory'},
        { id: '18', title: 'View/Restrict Admin', notifications: false,link:'/viewadmin' },
        { id: '19', title: 'ByLaws', notifications: false,link:'/bylaws' },
        { id: '20', title: 'Profile', notifications: false,link:'/profile' },
        { id: '21', title: 'Documentation', notifications: false,link:'/documentation' },
        { id: '22', title: 'Settings', notifications: false,link:'/settings' },
    ],
];

export const graphData = [
    'Nov',
    'Dec',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
].map((i) => {
    const revenue = 500 + Math.random() * 2000;
    const expectedRevenue = Math.max(revenue + (Math.random() - 0.5) * 2000, 0);
    return {
        name: i,
        revenue,
        expectedRevenue,
        sales: Math.floor(Math.random() * 500),
    };
});
