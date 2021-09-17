import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { BorderStyle } from '@material-ui/icons';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({

kidimg:{
 position:'relative'
},
girlcontent:{
position:'absolute',
// marginTop:'5rem',
  bottom:'15%',
  left:'0%', 
  right:'0%',  
  textAlign:'center'
  // [theme.breakpoints.up('lg')]:{
  //      },
  // [theme.breakpoints.up('md')]:{
  //   left:'25%', 
  //   right:'25%',  
  //      },
  // [theme.breakpoints.up('sm')]:{
  //   left:'15%', 
  //   right:'15%',  
  //      },
  // [theme.breakpoints.up('xs')]:{
  //   left:'40%', 
  //   right:'40%',  
  //      },
},
kidbtn:{
  position:'absolute',
  top:0,
  left:0,
},
girltext:{
  fontSize:'2.5rem',
  // marginTop:'1rem',
  color:'#fff',
  textShadow: '2px 2px 2px black'
},
years:{
  color:'#fff',
  textShadow: '2px 2px 2px black'
},
shopbtn:{
  backgroundColor:'#fff',
  fontSize:'1rem',
  fontWeight:'bold',
  width:'100%',
  height:'2.5rem',
  marginTop:'1rem',
  borderStyle:'none',
  color:'#232323',
  '&:hover':{
  backgroundColor:'#232323',
  color:'#fff',
  borderStyle:'none'
}
}


}),
);
export default useStyles