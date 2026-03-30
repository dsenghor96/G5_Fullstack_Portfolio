module.exports = {
  content: ["./*.html", "./html-pages/**/*.html", "./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        dark: "#2c3e50",
        nav: "#34495e",
        success: "#2ecc71",
        info: "#3498db",
        primary: "#57a8f5",
        danger: "#dc3545",
        "danger-alt": "#f44336",
        blue: "#007bff",
        "green-link": "#00ff0d",
        "body-bg": "#f4f4f4",
        "card-bg": "#f9f9f9",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
