import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
       primary: {
          main: '#9d0b0b'
       },
       secondary: {
         main: '#303030',
         light: '#c0c0c0'
       },
       background: {
         default: "#eee"
       }
    }
 });

 export default theme;