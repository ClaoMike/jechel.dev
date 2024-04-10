import { isMobile } from 'react-device-detect';

const style = {
        accordion: {
                marginLeft: isMobile ? '5vw' :'10vw',
                marginRight: isMobile ? '5vw' :'10vw',
                backgroundColor: 'transparent',
                padding: '0px'
        },
        accordion_summary: {
                paddingLeft: '20%',
                paddingRight: '20%',
                marginLeft: '-20%', 
                marginRight: '-20%', 
                marginBottom: '20px', 
                marginTop: '20px',
                position: 'sticky', 
                top: isMobile ? '3%' : '10%', 
                zIndex: 999
        }
       
        
}

export default style;