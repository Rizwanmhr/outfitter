import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { BorderStyle } from '@material-ui/icons';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainTwo:{
        [theme.breakpoints.up('xs')]:{
        // paddingLeft:'4rem'
          },
marginTop:'1rem',
padding:'1rem',
},
 main:{
    [theme.breakpoints.up('xs')]:{
        // marginTop:'1rem'
          },
          [theme.breakpoints.up('lg')]:{
            marginTop:'2rem'
              },
    
     padding:'1rem',
  
     
},
rowStyle:{
    [theme.breakpoints.up('lg')]:{
        // display:'flex',
        justifyContent:'flex-end',
          },

     
},
mainOne:{
    marginTop:'2rem',
    // padding:'1rem',  
},
mainthree:{
    [theme.breakpoints.up('xs')]:{
        marginTop:'1rem',
    },
    [theme.breakpoints.up('lg')]:{
 marginTop:'3rem',
    },
// marginTop:'3rem',
padding:'1rem',
// marginTop:'1rem',
},
subscribe:{
width:'100%',
backgroundColor:'#ccc',
// width:'38rem',
height:'3.3rem',
color:'#fff',
 marginTop:'1rem',
},

heading:{
    [theme.breakpoints.up('xs')]:{
        textAlign:'center'
        },
        [theme.breakpoints.up('lg')]:{
            textAlign:'start'
            },
fontSize:'1.3rem',
 fontWeight:'bold',
},

footer:{
    
    [theme.breakpoints.up('xs')]:{
        marginBottom:'-2rem'
    },
width:'100%',
height:'3rem',
},
cntrtwo:{
textAlign:'center',


},
headingtwo:{
    [theme.breakpoints.up('xs')]:{
    textAlign:'center',
    marginTop:'2rem'
    },
    [theme.breakpoints.up('lg')]:{
        textAlign:'start',
   
        },
    
    fontSize:'1.3rem',
    fontWeight:'bold',   
},
headingtwoo:{
     
    fontSize:'1.3rem',
    fontWeight:'bold', 
    marginTop:'3rem' 
},

contactBtn:{
    borderStyle:'none',
    [theme.breakpoints.up('xs')]:{
        width:'100%',
        height:'3rem',
        backgroundColor:'#000000',
    },
    [theme.breakpoints.up('lg')]:{
        width:'10rem',
        height:'3rem',
        backgroundColor:'#000000',
    },
    color:'#fff',
    '&:hover':{
    backgroundColor:'#28a745',
    BorderStyle:'none'
}
},
botonhover:{
 
    },
    lineheigh:{
        [theme.breakpoints.up('xs')]:{
            textAlign:'center',
        },
        [theme.breakpoints.up('lg')]:{
            textAlign:'start',
        },
   marginTop:'2rem',
   lineHeight:'2',
    },
    lineheightwo:{
        [theme.breakpoints.up('xs')]:{
            textAlign:'center',
        },
        [theme.breakpoints.up('lg')]:{
            textAlign:'start',
            borderBottom:'none'
        },
    },
    mainFour:{
        padding:'1rem', 
        height:'100%',
        paddingLeft:'1rem'
    },
    lineTop:{
        marginTop:'1rem',  
        lineHeight:'1',
        alignItems:'center'
    },
    hoverEffec:{
        position:'relative',
        backgroundColor:'white'
},
hoverEffechover:{
     '&::after':{
content:'',
width:'35%',
height:'7px',
backgroundColor:'red',
position:'absolute',
bottom:'0%',
left:'50%',
borderRadius:'10px',
Transition:'all 500ms ease'
}
},
headingtLang:{
    fontSize:'1.3rem',
    fontWeight:'bold', 
    marginTop:'3rem'
},
autoComp:{
// marginTop:'2rem',
paddingLeft:'6rem'
},
set:{
    [theme.breakpoints.up('xs')]:{
        textAlign:'center',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        padding:'.5rem 0 .5rem 0',
        // marginTop:'2rem'
        },
    [theme.breakpoints.up('lg')]:{
        textAlign:'start',
        borderBottom: 'none',
        borderTop: 'none',
        display:'flex',
    },
   
    // justifyContent:'space-between',
    // width:'26%',
    // marginTop:'-6rem'
 
},
moveRight:{
    [theme.breakpoints.up('xs')]:{
        marginTop:'1rem',    
},
[theme.breakpoints.up('lg')]:{
        marginTop:'5rem', 
},
paddingLeft:'1rem',
marginTop:'5rem',
},
settwo:{
paddingRight:'1rem'
},
bottom:{
    borderBottom:'1px solid'  
},
imgStore:{
//  display:'flex',
//     justifyContent:'space-between',
//      width:'15%', 
},
imgset:{
    [theme.breakpoints.up('xs')]:{
        marginTop:'1rem',
        display:'flex',
         justifyContent:'space-between',
        width:'58%',
        textAlign:'center',
        
         paddingLeft:'4rem'
        },
        [theme.breakpoints.up('lg')]:{
            marginTop:'0',
            display:'flex',
            justifyContent:'space-between',
            width:'90%',
            paddingLeft:'0'
            },
        display:'flex',
        justifyContent:'space-between',
        width:'90%', 
},
imghover:{
    height:'20%',
    '&:hover':{
        opacity:0.5,
    }
},
ImgiconSet:{
    [theme.breakpoints.up('xs')]:{
        marginTop:'1rem',
        display:'flex',
        justifyContent:'start',
        // flexWrap:'nowrap',
        width:'100%',
        // textAlign:'center',
        // paddingLeft:'3rem'
        },
        [theme.breakpoints.up('lg')]:{
            marginTop:'0',
            paddingLeft:'0',
            display:'flex',
            justifyContent:'space-between',
            width:'60%',
            },
    display:'flex',
    justifyContent:'space-between',
    width:'60%',
},
socialIconheading:{  
marginTop:'2rem'
},
headingLeft:{
    [theme.breakpoints.up('xs')]:{
        paddingLeft:'1rem',
        justifyContent:'center',
          },
          [theme.breakpoints.up('lg')]:{
            marginTop:'1rem',
            paddingLeft:'0'
            },
},
socialIcon:{
    display:'flex',
    alignItems:'center',
    marginTop:'1rem',
    justifyContent:'flex-end',
    width:'90%',
    [theme.breakpoints.up('xs')]:{
        paddingLeft:'1rem',
        justifyContent:'center',
          },
          [theme.breakpoints.up('lg')]:{
            marginTop:'1rem',
            paddingLeft:'0'
            },
},
icon:{
    [theme.breakpoints.up('xs')]:{
marginTop:'0',
    },
    [theme.breakpoints.up('lg')]:{
        marginTop:'1rem',
            },
    // marginTop:'1rem',
    marginLeft:'1rem',
    // borderRadius:'60%',
    '&:hover':{
        opacity:0.5,
    }
},
bottomm:{
paddingLeft:'1rem',
marginTop:'1rem'
},
text:{
   display:'flex',
//    justifyContent:'center',
justifyContent:'space-between',
    width:'85%',
   alignItems:'center',
   marginTop:'1rem',
},
end:{
    marginTop:'1rem'
}
}),
);
export default useStyles