const standard_colors = {
    astral_entity: '#FFC436',
    black: '#000000',
    light_blue: '#6DA4AA',
    dark_green: '#005B41',
    pale_yellow: '#FAEF9B',
    shadow: '#647D87',
    white: '#DCF2F1',
    youtube: '#B80000',
    gray_blue: '#3C5B6F', 
    pale_orange: '#DCA47C'
};

const colors = {
    background: {
        light: standard_colors.pale_yellow,
        dark: standard_colors.black
    },
    text: {
        light: standard_colors.black,
        dark: standard_colors.white
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
    },
    tabs: {
        tab: {
            borderColor: {
                light: standard_colors.light_blue,
                dark: standard_colors.dark_green
            },
            selected: {
                background: {
                    light: standard_colors.light_blue,
                    dark: standard_colors.dark_green
                }
            }
        }
    },
    navigation_bar: {
        background: {
            light: standard_colors.pale_yellow,
            dark: standard_colors.black
        },
        icons: {
            latest: '#FF9800',
            moto: '#820300',
            aboutMe: '#28007d',
            menu: {
                light: standard_colors.pale_yellow,
                dark: standard_colors.black
            }
        }
    },
    loading_spinner: {
        light: standard_colors.light_blue,
        dark: standard_colors.dark_green
    },
    version: {
        icons: {
            react: '#087a9f',
            javascript: '#dab92d',
            html: '#dd4b25',
            css: '#254bdd',
            ruby: standard_colors.youtube,
            rails: standard_colors.youtube
        }
    },
    moto: {
        icons: {
            comment: standard_colors.dark_green,
            location: standard_colors.youtube,
            youtube: standard_colors.youtube,
            expand: {
                background: {
                    light: standard_colors.light_blue,
                    dark: standard_colors.dark_green
                },
                color: {
                    light: standard_colors.dark,
                    dark: standard_colors.white
                }
                
            }
        },
        button: {
            background: {
                light: standard_colors.pale_orange,
                dark: standard_colors.gray_blue
            },
            border: {
                light: standard_colors.pale_orange,
                dark: standard_colors.gray_blue
            }
        },
        content: {
            border: {
                light: standard_colors.pale_orange,
                dark: standard_colors.gray_blue
            }
        },
        redirect_link: {
            light: standard_colors.light_blue,
            dark: standard_colors.dark_green
        }
    },
    latest: {
        background: {
            light: standard_colors.pale_orange,
            dark: standard_colors.gray_blue
        },
        redirect: {
            light: standard_colors.pale_yellow ,
            dark: standard_colors.black
        }
    }
};

export default colors;