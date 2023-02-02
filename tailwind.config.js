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
                    green: "#5CB85C",
                    darkGreen: "#3d8b3d",
                    gray: "#bbb",
                    darkenGray: "#999",
                    lightenGray: "#ddd",
                    tagColor: "#aaa",
                    paginationHover: "#eceeef"
                },
            },
            spacing: {
                navItem: "0.425rem",
                0.3: "0.3rem",
                0.2: "0.2rem",
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
