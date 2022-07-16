/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      width: {
        "1/100": "1%",
      },
      dmsans: ["DM Sans", "dmsans"],
      serif: ["Inter", "serif"],
      // serif: ['Spartan', 'serif'],
      // serif: ['Poppins', 'serif'],
    },
    extend: {},
  },

  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#570DF8",

  //         secondary: "#F000B8",

  //         accent: "#37CDBE",

  //         neutral: "#3D4451",

  //         "base-100": "#FFFFFF",

  //         info: "#3ABFF8",

  //         success: "#36D399",

  //         warning: "#ff6601",

  //         error: "#F87272",

  //         // primary: "#f6a85c",

  //         // secondary: "#978d8d",

  //         // accent: "#896150",

  //         // neutral: "#312c29",

  //         // "base-100": "#f6f6f5",

  //         // info: "#50A7DC",

  //         // success: "#118D5E",

  //         // warning: "#BB7F07",

  //         // error: "#F36D71",

  //         "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
  //         "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
  //         "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
  //         "--animation-btn": "0.25s", // duration of animation when you click on button
  //         "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
  //         "--btn-text-case": "uppercase", // set default text transform for buttons
  //         "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
  //         "--border-btn": "1px", // border width of buttons
  //         "--tab-border": "1px", // border width of tabs
  //         "--tab-radius": "0.5rem", // border radius of tabs
  //       },
  //     },
  //   ],
  // },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
