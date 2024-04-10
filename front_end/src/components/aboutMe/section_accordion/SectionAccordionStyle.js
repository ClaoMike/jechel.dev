import { isMobile } from 'react-device-detect';

const style = {
        accordion: {
                backgroundColor: 'transparent',
                boxShadow: 'none'
        },

        accordion_summary_stack: {
                width: '100vw',
                position: 'sticky', 
                top: isMobile ? '3%' : '10%',
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

}

export default style;