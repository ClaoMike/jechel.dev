import { isMobile } from 'react-device-detect';

const style = {
        accordion: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                marginTop: '0px',
                paddingTop: '0px'
        },

        accordion_summary_stack: {
                width: '100vw',
                position: 'sticky', 
                top: isMobile ? '3%' : '12%',
                zIndex: 999,
        },

        accordion_summary: {
                marginLeft: '10%',
                marginRight: '10%',
        },

        box: {
                transition: 'all .5s',
                width: '100%',
                height: isMobile ? '20px' : '50px',
            },
        
        accordion_details: {
                paddingLeft: '10%',
                paddingRight: '10%'
        },

}

export default style;