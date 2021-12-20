import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
        main: '#03A6A6',
    },
    // Secondary will control radio button colors
    secondary: {
        main: '#3498DB',
    }
 },   
  typography: {
     fontFamily: 'Play',
     color: '#03A6A6'
  },


  overrides: {

    MuiSelect: {
      
      root: {
        color: '#2acecd'
      },
      icon: {
        color: '#2acecd'
      },
      underline: {
        "&:before": {
          borderBottomColor: 'white'
        }
      }
    },

    // Control color of 'Select' component label
    MuiInputLabel: {
      root: {
        color: '#2acecd',
      }
    },

    MuiInputBase: {
      root: {
        color: '#2acecd'
      }      
    },

    MuiListItem: {
       root: {
        backgroundColor: "#03A6A6",
        color: 'white',
          "&$selected": {
             backgroundColor: "#28c7c7",
             "&:hover": {
                backgroundColor: "#3498DB",
             },
          },
       },
       button: {
          "&:hover": {
             backgroundColor: "#3498DB",
          },
       }
    },

 },
});

export default theme;