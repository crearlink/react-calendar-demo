import { createMuiTheme } from '@material-ui/core/styles'


export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'dark'
  },
  overrides: {
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: 'white'
        }
      }
    }
  }
})
