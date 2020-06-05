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
         default: "#F6F6F6"
       }
    }
 });

 export default theme;