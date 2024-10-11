/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { 
        metropolis: ['Metropolis'],
       },  
    //   fontFamily: {
    //     poppins: "Poppins", // Poppins font - to implement - font-poppins
    //     lato: "Lato"
    //  }
    },
  },
  plugins: [],
}

