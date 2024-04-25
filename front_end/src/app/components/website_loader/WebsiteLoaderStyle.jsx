import colors from "../../../themes/colors";

const style = {
    background: colors.website_loader.background,
    svg: {
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",

        greater_sign: {
            x: "0",
            y: "50",
            fontSize: "100",
            fill: colors.website_loader.greater_sign,
        },

        underscore_sign: {
            x: "40",
            y: "50",
            fontSize: "100",
            fill: colors.website_loader.underscore_sign
        }
    },
};

export default style;