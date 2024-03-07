/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1235px',
        },
      },
      colors:{
        primary : '#DB004B',
        secondry: '#1D1D1B',
      },
      fontFamily: {
        proximaNova: ['ProximaNova-Regular', 'sans-serif'],
        Otamendi:['Otamendi', 'sans-serif'],
        newfont:['newfont', 'newfont'],
        newlibre:['newlibre', 'newlibre'],
      },
      backgroundImage: {
        'banner':"url('../src/images/mainbg.png')",
        'selectbanner':"url('../src/images/Sectiontwobg.png')",
        'Newsletter': "url('../src/images/Newsletter.png')",
        'footer-texture': "url('../src/images/before-footer.png')",
        'magazines' : "url('../src/images/bg-magazine.png')",
        'travel' : "url('../src/images/travel.png')",
      },
      boxShadow: {
        'dark-sm': '7px 8px 24px 0px rgba(219, 0, 75, 0.05), 28px 34px 44px 0px rgba(219, 0, 75, 0.04), 62px 76px 59px 0px rgba(219, 0, 75, 0.03), 110px 135px 70px 0px rgba(219, 0, 75, 0.01), 172px 210px 76px 0px rgba(219, 0, 75, 0.00);',
        inputshadow: '10px 15px 40px 0px rgba(0, 0, 0, 0.04)',
      },
      fontFamily: {
        'fontbrandon': ['Brandon Grotesque'],
        'parenttext':['Libre Caslon Text'],
        new: ["new", "new"],
      }
    },
  },
  plugins: [],
}

