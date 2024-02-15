import { isMobile } from 'react-device-detect';

const HCenter = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

const Transition = {
    transition: 'all .5s',
};

const minimumMargin = {
    marginLeft: '5vw',
    marginRight: '5vw',
};

const imageContainerStyle = {
    width: '100%', // Full width initially
    margin: isMobile ? '0 auto' : '0', // Center the image horizontally on mobile
    overflow: 'hidden', // Ensures the rounded corners are visible
};

const appStyle = {
    horizontalCenterStyle: {
        ...HCenter
    },

    youTubeEpisodes: {
        ...HCenter,
        ...minimumMargin
    },

    responsiveTitle: {
        fontSize: 'min(90px, 7vw)',
        marginBottom: '20px'
    },

    navigationBox: {
        ...Transition,
        width: '100%',
        height: isMobile ? '20px' : '50px',
    },

    navigationStack: {
        ...HCenter,
        ...Transition,
        position: 'sticky',
        top: '0',
        zIndex: '1000',
    },

    nav: {
        ...HCenter,
        ...Transition,
        width: '100%',
    },
  
    // youtube
    paperStyle: {
        borderRadius: '10px', // Adjust the value as needed for rounded borders
        width: '80%', // Default width is 80% of the screen width
        maxWidth: '1000px', // Maximum width is 1000px
        margin: '0 auto', // Center the Paper horizontally
        padding: '20px', // Add padding as needed
    },
    
    imageContainerStyleLatest: {
        ...imageContainerStyle,
        maxWidth: isMobile ? '80%' : '40%', // Adjusted width based on device
    },

    imageContainerStyleYouTubeEpisode: {
        width: '100%', // Full width initially
        overflow: 'hidden', // Ensures the rounded corners are visible
        maxWidth: isMobile ? '20%' : '30%', // Adjusted width based on device
    },
    
    roundedImageStyle: {
        width: '100%', // Full width initially
        height: 'auto', // Maintain the original aspect ratio
        borderRadius: '10px', // Adjust the value as needed for rounded corners
    },
    //

    containerConfig: {
        marginBottom: isMobile ? '20px' : '30px'
    },

    iconConfig: {
        verticalAlign: 'middle', /* Adjust the vertical alignment as needed */
        marginTop: '-5px',
    },

    switchIconConfig: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },

    headerConfig: {
        marginBottom: '3vh',
    },

    accordion: {
        ...HCenter,
    },

    accordionItem: {
        width: '90%',
        maxWidth: '1000px',
    },

    mePhoto: {
        width: isMobile ? '60%' : "30%",
        borderRadius: "20%",
        marginBottom: '2vh',
        maxWidth: '500px',
    },

    skillsSection: {
        marginLeft: '10vw',
        marginRight: '10vw',
    },

    pieChart: {
        width: isMobile ? '120px' : '300px',
        overflow: 'visible',
    },

    pieChartLabel: {
        fontSize: '5px',
        fontFamily: 'Courier New, monospace',
    },

    workExperienceSubsection: {
        padding: '0px', 
        margin: '0px'
    },
      
};

export default appStyle;
