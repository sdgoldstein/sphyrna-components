/** @type {import("tailwindcss").Config} */
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

export default {
    content: [ "./src/**/*.{html,js,jsx,svelte,ts,tsx}" ],
    safelist:
        [
            {pattern : /bg.*/, variants : [ "hover", "focus", "data_checked" ]}, {pattern : /text.*/},
            {pattern : /border.*/, variants : [ "hover", "focus", "data_checked", "data_active" ]}
        ],
    theme: {
        fontFamily: {
            sans:
                [
                    "Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
                    "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji",
                    "Segoe UI Symbol", "Noto Color Emoji"
                ],
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
                lightest: "#FFFFFF",
                light: colors.neutral["50"],
                DEFAULT: "#FFFFFF",
                dark: colors.neutral["100"],
                darkest: colors.neutral["300"],
                text: {DEFAULT: colors.black, placeholder: "#BFBFBF"}
            },
            success: {DEFAULT: "#C1DD97", text: colors.black},
            warning: {DEFAULT: "#E4C25E", text: colors.black},
            error: {
                lightest: "#EFD2D2",
                light: "#E4B4B5",
                DEFAULT: "#D17F81",
                dark: "#C9696B",
                darkest: "#B44143x",
                text: colors.black
            },
        },
        extend: {},
    },
    plugins: [ plugin(function({addVariant}) {
        addVariant("data_checked", "&[data-state='checked']");
        addVariant("data_active", "&[data-state='active']");
        addVariant("data_placeholder", "&[data-placeholder]");
    }) ],
}
