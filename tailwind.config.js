/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                titillium: ["Titillium Web", "sans-serif"],
            },
            colors: {
                conduit: {
                    gray: {
                        100: "#f3f3f3",
                        200: "#eceeef",
                        300: "#ddd",
                        400: "#ccc",
                        500: "#bbb",
                        600: "#aaa",
                        700: "#999",
                        800: "#818a91",
                        900: "#687877",
                        1000: "#373a3c",
                    },
                    green: "#5CB85C",
                    darkGreen: "#3d8b3d",
                },
            },
            spacing: {
                navItem: "0.425rem",
                0.2: "0.2rem",
                0.3: "0.3rem",
                25: "6.25rem",
                tagPx: "0.6rem"
            },
            boxShadow: {
                banner: "inset 0 8px 8px -8px rgba(0, 0, 0, .3), inset 0 -8px 8px -8px rgba(0, 0, 0, .3)",
            },
            dropShadow: {
                bannerLogo: "0 1px 3px rgba(0, 0, 0, .3)",
            },
            fontSize: {
                bannerLogo: "3.5rem",
                date: "0.8rem",
            },
            borderRadius: {
                buttonSm: "0.2rem",
                tagRadius: "10rem",
            }
        },
    },
    plugins: [],
};
