import { isMobile } from 'react-device-detect';

const style = {
    mainDiv: {
        marginLeft: isMobile ? '5vw' :'10vw',
        marginRight: isMobile ? '5vw' :'10vw',
    },

    workExperienceSubsection: {
        padding: '0px', 
        margin: '0px'
    }
    
}

export default style;