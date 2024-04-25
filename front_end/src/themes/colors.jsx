const standard_colors = {
    astral_entity: '#FFC436',
    black: '#000000',
    light_blue: '#6DA4AA',
    dark_green: '#005B41',
    pale_yellow: '#FAEF9B',
    shadow: '#647D87'
};

const colors = {
    background: {
        light: standard_colors.pale_yellow,
        dark: standard_colors.black
    },
    text: {
        light: standard_colors.black,
        dark: '#DCF2F1'
    },
    link: {
        light: standard_colors.light_blue,
        dark: standard_colors.dark_green
    },
    theme_switch: {
        moon_icon: standard_colors.astral_entity,
        sun_icon: standard_colors.astral_entity,
        offColour: '#89CFF3',
        onColour: '#0C356A',
        offBorder: standard_colors.shadow,
        onBorder: standard_colors.astral_entity
    },
    website_loader: {
        background: standard_colors.light_blue,
        greater_sign: standard_colors.dark_green,
        underscore_sign: standard_colors.dark_green
    },
    login_form: {
        textfield_input: {
            background: {
                light: standard_colors.pale_yellow,
                dark: standard_colors.black,
            },
            border: {
                normal: standard_colors.shadow,
                focused: {
                    light: standard_colors.light_blue,
                    dark: standard_colors.dark_green
                }
            }
        },
        button: {
            background: {
                light: standard_colors.light_blue,
                dark: standard_colors.dark_green
            },
            border: standard_colors.shadow
        }
    }
};

export default colors;