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
        edit: "url('../src/images/pen-to-square-solid.svg')",
        delete: "url('../src/images/delete.svg')",
        profile: "url('../src/images/profile.svg')",
        home: "url('../src/images/home.svg')",
        settings: "url('../src/images/settings.svg')",
        password: "url('../src/images/Key.svg')",
      },
    },
  },
  plugins: [],
};
