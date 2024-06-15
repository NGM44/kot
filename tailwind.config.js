const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        box: "0px 4px 3px rgba(0, 0, 0, 0.03)",
      },
      dropShadow: {
        box: "0px 4px 3px rgba(0, 0, 0, 0.03)",
      },
      backgroundImage: {
        wave: "url('/src/utils/assets/wave.svg')",
      },
      fontWeight: {
        semi_medium: 450,
      },
      width: {
        128: "32rem",
        140: "36rem",
        150: "40rem",
        200: "50rem",
        21: "21%",
        78: "78%",
      },
      fontSize: {
        sm1: ["15px", "22px"],
        xs1: ["12px", "18px"], //
        xs2: ["0.8125rem", "1.125rem"], // 13px, 18px
        xs3: ["0.875rem", "1.375rem"], //14px, 22px
        xs4: ["0.875rem", "1.25rem"],
        xxs: ["0.625rem", "0.833rem"], // 13px, 18px .625 = 10px
        xxs1: ["0.6875rem", "1.375rem"], /// 11px 22px
      },
      colors: {
        preference1: "#2671C9",
        preference2: "#EF6E6E",
        preference3: "#686DC8",
        preference4: "#EA6481",
        preference5: "#9268C2",
        preference6: "#CC9350",
        preference7: "#DE6094",
        preference8: "#D98159",
        preference9: "#B263B6",
        preference10: "#DE716B",
        preference11: "#CC60A6",
        primary: "#E85936",
        secondary: "#0C224A",
        primaryText: "#464E5F",
        secondaryText: "#737385",
        tertiaryText: "#181C32",
        tertiaryBg: "#F1F1F2",
        tertiaryBgHover: "#E1E3EA",
        primaryHover: "#D15031",
        borderColor: "#F1F1F4",
        inputBorder: "#DBDFE9",
        inputBorderFocus: "#C6CCDC",
        descriptionColor: "#99A1B7",
        headerColor: "#071437",
        labelColor: "#252F2A",
        slate: {
          201: "#F5F8FA",
          501: "#84869D",
          light: "#F6F9FB",
          dark: "#A7A9B8",
        },
        gray: {
          dark: "#464E5F",
          light: "#B5B5C3",
          201: "#C2C2C2",
        },
        brown: {
          300: "#6D6D6F",
          500: "#4C3D3A",
        },
        mustard: {
          300: "#FFF8DD",
          500: "#FFD952",
        },
        green: {
          301: "#E8FFF3",
          401: "#66D497",
          501: " #50CD89",
          op: "rgba(122, 208, 150, 0.73)",
        },
        orange: {
          301: "#E8FFF3",

          501: "#E85936",
          p: "#EF5B2D",
        },
      },
      // fontFamily: {
      //   // sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
