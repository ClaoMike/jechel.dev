const common = {
    fontFamily: 'Courier New, monospace',
    fontSize: 'min(30px, 4vw)',
    margin: '0px',
    padding: '0px',
};

const main = {
    lightTheme: {
        ...common,
        backgroundColor: '#FFFFFF',
        color: '#000000',
    },

    darkTheme: {
        ...common,
        backgroundColor: '#000000',
        color: '#FFFFFF',
    },

    linkLightTheme: {
        // color: '#3C0753'
        color: '#E9A8F2'
    },

    linkDarkTheme: {
        color: '#43766C',
    },

};

export default main;