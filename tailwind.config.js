/** @type {import("tailwindcss").Config} */
import colors from "tailwindcss/colors";

export default {
    content: [ "./src/**/*.{html,js,jsx,svelte,ts,tsx}" ],
    safelist:
        [
            {pattern : /bg.*/, variants : [ "hover" ]}, {pattern : /text.*/},
            {pattern : /border.*/, variants : [ "hover", "focus" ]}
        ],
    theme: {
        fontFamily: {
            sans: [ "var( --theme-font-family)" ],
        },
        colors: {
            black: colors.black,
            overlay: colors.neutral["950"],
            primary: {
                lightest: "#EEA2B1",
                light: "#E15C77",
                DEFAULT: "#D4163C",
                dark: "#BF1435",
                darkest: "#9F112D",
                text: colors.white
            },
            secondary: {
                lightest: "#B5CEDF",
                light: "#7EAAC7",
                DEFAULT: "#4784AF",
                dark: "#3F789E",
                darkest: "#346483",
                text: colors.white
            },
            tertiary: {
                lightest: "#E6E2E1",
                light: "#D3CCCB",
                DEFAULT: "#C0B6B4",
                dark: "#ADA4A2",
                darkest: "#908987",
                text: colors.black
            },
            surface: {
                lightest: "#FCFCFC",
                light: "#F9F9F9",
                DEFAULT: "#F9F9F9",
                dark: "#F2F3F3",
                darkest: "#ECECEE",
                text: colors.black
            },
            success: {DEFAULT: "#C1DD97", text: colors.black},
            warning: {DEFAULT: "#E4C25E", text: colors.black},
            error: {DEFAULT: "#D17F81", text: colors.black},
        },
        extend: {},
    },
    plugins: [],
}
