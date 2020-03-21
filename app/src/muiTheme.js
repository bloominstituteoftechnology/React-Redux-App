import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
       primary: {
          main: '#9d0b0b'
       },
       secondary: {
         main: '#303030',
         light: '#eee'
       },
       background: {
         default: "#eee"
       }
    }
 });

theme.typography.h5 = {
   fontSize: theme.typography.h5.fontSize,
   [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
   }
}

 export default theme;