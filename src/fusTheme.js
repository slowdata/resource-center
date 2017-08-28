/*
  More infor here: https://material-ui-1dab0.firebaseapp.com/customization/themes/

*/

import { createMuiTheme, createPalette } from 'material-ui/styles'

const fusTheme = createMuiTheme({
  palette: createPalette({
    primary: 800,
    accent: 800,
    error: '#F44336',
    type: 'light'
  }),
  appBar: {
    background: '#142348'
  }
})

export default fusTheme
