import { isMobile } from 'react-device-detect';

const style = {
    headerConfig: {
        marginBottom: '3vh',
    },

    photo: {
        width: isMobile ? '60%' : "30%",
        borderRadius: "20%",
        marginBottom: '2vh',
        maxWidth: '500px',
    }
    
}

export default style;