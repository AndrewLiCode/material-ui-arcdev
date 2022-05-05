import {createMuiTheme} from '@material-ui/core/styles'

const acrBlue = '#0b72b9'
const acrOrange = '#ffba60'
const acrGrey = '#696969'
const acrWhite = '#fff'
export default createMuiTheme({
  palette: {
    common: {
      blue: acrBlue,
      orange: acrOrange,
      white: acrWhite
    },
    primary: {
      main: acrBlue
    },
    secondary: {
      main: acrOrange
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '1rem'
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      fontSizeAdjust: 0.5,
      color: 'white'
    },
    h1: {
      fontFamily: 'Raleway',
      fontWeight: '700',
      fontSize: '2.5rem',
      color: acrBlue,
      lineHeight: 1.5,
      textAlign: 'center'
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: acrBlue
    },
    h4: {
      fontFamily: 'Raleway',
      fontWeight: '700',
      fontSize: '1.75rem',
      color: acrBlue
    },
    h6: {
      fontFamily: 'Raleway',
      fontWeight: '500',
      color: acrBlue,
      lineHeight: 1
    },
    subtitle1: {
      color: acrGrey,
      fontWeight: '300',
      fontSize: '1.25rem'
    },
    caption: {
      color: acrGrey,
      fontWeight: '300',
      fontSize: '1rem'
    },
    subtitle2: {
      color: acrWhite,
      fontWeight: '300',
      fontSize: '1.2rem'
    },
    body1: {
      fontWeight: '300',
      fontSize: '1.25rem'
    },
    learnButton: {
      borderColor: acrBlue,
      color: acrBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: '50px',
      fontFamily: 'Roboto',
      fontWeight: 'bold'
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        fontWeight: '300',
        color: acrBlue,
        fontSize: '1rem'
      }
    },
    MuiInput: {
      root: {
        color: acrGrey,
        fontSize: '1rem'
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${acrBlue}`
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${acrBlue}`
        }
      }
    }
  }
})
