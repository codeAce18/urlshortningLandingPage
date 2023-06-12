/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(180, 66%, 49%)',
        primary2: 'hsl(257, 27%, 26%)',
       secondary: 'hsl(0, 87%, 67%)',
       neutral: ' hsl(0, 0%, 75%)',
       neutral2: 'hsl(257, 7%, 63%)',
       neutral3: 'hsl(255, 11%, 22%)',
       neutral4: ' hsl(260, 8%, 14%)',
       neutral5: 'rgb(239,241,247)',
      }
    },
  },
  plugins: [],
}

