import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { BorderBottom, Height } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header:{
      position:'relative',
      borderTop:'1px solid',
      BorderBottom:'1px solid',
      [theme.breakpoints.up('xs')]:{
        borderTop:'1px solid',
        BorderBottom:'1px solid'
        // borderTop:'1px solid',
      //  justifyContent:'center',
      }
    // height:'8%'

    },
    nav:{
    color:'#343a40',
    marginLeft: theme.spacing(3),
    textDecoration:'none',
    fontSize: 13,
    opacity:0.5,
    fontWeight: 500,
    // borderRight:'1px solid',
    // paddingLeft:'5rem'

   },
   navv:{
    color:'#343a40',
    marginLeft: theme.spacing(3),
    textDecoration:'none',
    fontSize: 13,
    opacity:0.5,
    fontWeight: 500,
   },
   navBorder:{
borderTop:'1px solid',
borderBottom:'1px solid'
   },
        
    linkText:{
    color:'#343a40',
    '&:hover':{
    color: '#000000',
    }
    },
    
    linkTextt:{
      color:'#343a40',
      '&:hover':{
      color: '#000000',
      }
      },

    women:{
    color: '#000000',
    fontSize: 13,
    marginLeft: theme.spacing(3),
    textDecoration:'none',
    fontWeight: 500,
    letterSpacing: 1,
    // borderRight:'1px solid'
    },
    borderLeft:{
 borderRight:'1px solid',
 paddingLeft:'1rem'
    },

    logo1:{
    width:'8rem',
    paddingTop: '1rem',
   
    [theme.breakpoints.up('xs')]:{
      textAlign: 'center',
      paddingLeft:'1.5rem',
      paddingBottom:'.5rem'
    //  justifyContent:'center',
    }
    },
    search:{
    
    alignItems:'center',
    // height:'30%',
    },
    second:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
     
    

    },
    // heart:{
    //   display:'flex',
    //   justifyContent:'center',
    //   alignItems:'center'

    // }
    navside:{
      paddingTop:'1.5rem',
      display:'flex',

       justifyContent:'space-between',
       width:'70%',
      alignItems:'center',
      [theme.breakpoints.up('xs')]:{
        textAlign: 'center',
        paddingLeft:'2rem',
      //  justifyContent:'center',
      }
    },
   media:{
    // justifyContent:'space-between',
     [theme.breakpoints.up('xs')]:{
       textAlign: 'center',
      justifyContent:'center',
     }
   },
   navtwo:{
    color: '#000000',
    fontSize: 13,
    marginLeft: theme.spacing(3),
    textDecoration:'none',
    fontWeight: 500,
    paddingBottom: '2rem'
   },
    navsale:{
    color: 'red',
    fontSize: 13,
    marginLeft: theme.spacing(3),
    textDecoration:'none',
    fontWeight: 500,
  },
  //  togglebtn:{
  // marginTop:'1rem'
  //  },
   togle:{
    marginTop:'1rem'
   },
   mobileLogo:{
     width:'100%',
     height:'2rem',
     paddingLeft:'0.5rem',
     marginTop:'1rem'
  
   },
   handBurger:{
     display:'flex',
     justifyContent:'center',
     alignItems:'center'
   },
   headerMobile:{
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  paddingTop:'0.5rem',
  width:'80'
},
headerMobiletwo:{
  display:'flex',
 
},
mobileLogosecond:{
 paddingLeft:'1rem',
 marginTop:'1rem'
},
crossMobile:{
marginTop:'1rem'
},
// navMenu:{
//   backgroundColor:'#fff',
//   width:'250px',
//   height:'100vh',
//   display:'flex',
//   justifyContent:'center',
//   position:'fixed',
//   top:'0',
//   left:'-100%',
//   transition:'850ms'
// },
slideMobile:{
  //   [theme.breakpoints.up('xs')]:{
  //  position:'absolute',
  //     },
      [theme.breakpoints.up('lg')]:{
   position:'relative',
      },
  position:'absolute',
  // height:'100vh',
  width:'80%',
  top:0,
  left:0,
},
crossMobilee:{
  marginTop:'1rem',
  
},
navMobile:{
  color:'#343a40',
    marginLeft: theme.spacing(3),
    textDecoration:'none',
    fontSize: '15px',
    opacity:0.5,
 
    
},
borderMobile:{
border:'1px solid'
},
linkTextMobile:{
  color:'#343a40',
  '&:hover':{
  color: '#000000',
  }
  },
  womenMobile:{
    color: '#000000',
    fontSize: '15px',
    marginLeft: theme.spacing(3),
    textDecoration:'none',
    fontWeight: 500,
    letterSpacing: 1,
  },
  active_class:{
  borderBottom:'1px solid',
  },
  Newspaper:{
  paddingTop:'2rem',
  },
textDecorate:{
textDecoration:'none',
lineHeight:'3',
color:'#000000',

 },
 textcolor:{
  textDecoration:'none',
  color:'red'
 },
 plus:{
  paddingTop:'1rem',
},
buttonMobile:{
width:'20rem',
color:'#fff',
backgroundColor:'#3c3c3c',
marginLeft:'1rem'
},
 btnColor:{
  color:'#3c3c3c',
  '&:hover':{
  backgroundColor:'#28a745',
  
  }
  },
 
  headingMobile:{
    color:'#000000',
    textDecoration:'none',
}
   }),
   );
export default useStyles