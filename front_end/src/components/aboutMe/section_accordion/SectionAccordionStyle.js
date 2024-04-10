import { isMobile } from 'react-device-detect';

const style = {
        accordion: {
                backgroundColor: 'transparent',
        },

        accordion_summary_div: {
                width: '100vw',
                position: 'sticky', 
                top: isMobile ? '3%' : '10%',
                zIndex: 999,
                marginBottom: '50px'
        },

        accordion_summary: {
                marginLeft: '10%',
                marginRight: '10%',
        }
       
        
}

export default style;