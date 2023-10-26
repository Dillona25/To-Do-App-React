/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        close: "url('../src/images/close.svg')",
        submit: "url('../src/images/send.svg')",
        Add: "url('../src/images/add.svg')",
        profile: "url('../src/images/avatar.avif')",
      },
    },
  },
  plugins: [],
};
