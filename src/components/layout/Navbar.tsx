
import React, {useEffect, useState} from 'react'
import { Typography, AppBar, Toolbar, Grid, useTheme,Slide,Paper} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import useStyles from './Navbar.style'
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useWindowSize from './Toggle'
import { useMediaQuery } from '@material-ui/core';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const Navbar = () => {
    // const [toggle, setToggle] = useState(false);
    const [click, setClick] = useState(false)
    const [checked, setToggleSlider] = useState(true)
    const size:any = useWindowSize();
    
useEffect(() => {
    if(size.width >=700){
       return setClick(false)
    }
}, [size])
//    console.log(size)

    // const toggleNav = () => {
    //     setToggle(!toggle)
    // }
  console.log(size.width)
    // const isBreakpoint = useWindowSize(768)

   // for responsive
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.up('xs'))
    // const logo = 'logo.jpg'
    const classes = useStyles()
    return (
        <React.Fragment>
        <AppBar className={classes.header} color='default'>
            
            {
              size.width >= 700 ?
         <>   
        <Grid container  justify={mobile ? 'center':'space-between'} >
        <Grid item xs={8}lg={5} >
        <Grid container  justify='flex-start' alignItems='center' style={{height:'100%'}} >
        <Grid item xs={8}lg={2} >
 <Typography className={classes.borderLeft}><NavLink className={classes.nav} to='men'>MEN</NavLink></Typography>

 </Grid>
        <Grid item xs={8}lg={2} >
        <Typography className={classes.borderLeft}><NavLink className={classes.women} to='/'>WOMEN</NavLink></Typography>
 </Grid>
        <Grid item xs={8}lg={2} >
        <Typography ><NavLink className={classes.navv} to='juniors'>JUNIORS</NavLink></Typography>

 </Grid>
 </Grid>

        <Toolbar>  
        {/* <Typography variant='h6'>
        <Typography className={classes.borderLeft}><NavLink className={classes.nav} to='men'>MEN</NavLink></Typography>
        <Typography className={classes.borderLeft}><NavLink className={classes.women} to='men'>MEN</NavLink></Typography>
        <Typography className={classes.borderLeft}><NavLink className={classes.navv} to='men'>MEN</NavLink></Typography> */}
{/*         
        <NavLink className={classes.nav} to='men'>MEN<span className={classes.borderLeft}></span></NavLink>
        <NavLink className={classes.women} to='/'>WOMEN<span className={classes.borderLeft}></span></NavLink>
        <NavLink className={classes.navv} to='juniors'><span className={classes.linkTextt}>JUNIORS</span></NavLink> */}
      
        {/* <Typography> */}
        </Toolbar>
        </Grid>  
        <Grid item xs={5}lg={4}>
        <span><img className={classes.logo1} src="images/logos.svg" alt="logos" /></span>
        </Grid>
        <Grid item xs={8}lg={3}>
         <div className={classes.navside}>
        <div className={classes.search}>
        <Typography className={classes.second}> <SearchIcon />Search</Typography>
        </div>
        <Grid>
        <div>
        <Typography className={classes.second}><FavoriteBorderIcon />0</Typography>
        </div>
        </Grid>
        <Grid>
        <div>
        <Typography className={classes.second}><PersonOutlineIcon />0</Typography>
        </div>
        </Grid>
        <Grid>
        <div>
        <Typography className={classes.second}><AddShoppingCartIcon /></Typography>
        </div>
        </Grid>
        </div>
        </Grid>
        </Grid>
        <div className={classes.navBorder}>
        <Grid container justify='center'>
        <Grid item lg={4} >
       <Toolbar>
        <Typography>
        <NavLink className={classes.navtwo} to='new'>NEW</NavLink>
        <NavLink className={classes.navtwo} to='collection'>Collection</NavLink>
        <NavLink className={classes.navsale} to='sale'>SALE</NavLink>
        <NavLink className={classes.navtwo} to='lookbook'>LOOKBOOK</NavLink>
        <NavLink className={classes.navtwo} to='outfitterscommunity'>#OUTFITTERSCOMMUNITY</NavLink>
        </Typography>
        </Toolbar>
        </Grid>
        </Grid>
        
        </div>
       
 </>
             : click ?
               <Grid container justify='space-between'>
               <Grid item xs={3}>
               <span><img className={classes.mobileLogosecond} src="images/logos.svg" alt="logos" /></span>
               </Grid>
               
               {/* <Grid item xs={1}>
               <CloseIcon onClick={() => setClick(!click)} className={classes.crossMobile} />
               </Grid> */}
             
             </Grid>
             : 
             
             <Grid container justify='space-between'>
              
             <Grid item xs={4}>
             <Typography className={classes.handBurger}>
           <Toolbar><FormatAlignJustifyIcon className={classes.togle} onClick={() => setClick(!click)}  /></Toolbar>
             <span><img className={classes.mobileLogo} src="images/logos.svg" alt="logos" /></span>

             </Typography>
             </Grid>
             <Toolbar>
             <Grid item xs={5}>
        <Typography className={classes.headerMobile}>
        
       <Typography className={classes.headerMobiletwo}> <SearchIcon />Search</Typography>
        
       <Typography className={classes.headerMobiletwo}><FavoriteBorderIcon />0</Typography>
      
       <Typography className={classes.headerMobiletwo}><PersonOutlineIcon />0</Typography>

       <Typography className={classes.headerMobiletwo}><AddShoppingCartIcon /></Typography> 
        
        </Typography>
     
        </Grid>
       </Toolbar>
        </Grid>
    
            }
            
     
        {/* </Grid> */}
    
  { click ?
  
  // <Slide direction="up" in={checked} >
  //   <>
  //   
  //         </>
  //  </Slide>

  <Slide direction="right" timeout={500} in={checked} mountOnEnter unmountOnExit>
  <Paper elevation={4} className={classes.slideMobile}>
    <Typography style={{width:'100%',height:'100%'}}>

  <Grid container justify='space-between'>
  <Grid item xs={6}lg={4}>

  <span><img className={classes.logo1} src="images/logos.svg" alt="logos" /></span>
  </Grid>
  
  <Grid item xs={1}>
  <CloseIcon onClick={() => setClick(!click)} className={classes.crossMobilee} />
  </Grid>



          

           {/* <Grid item xs={5}lg={4}>

<span><img className={classes.logo1} src="images/logos.svg" alt="logos" /></span>
           </Grid> */}
           {/* <Grid item xs={8}lg={3}>
            <div className={classes.navside}>
            <div className={classes.search}>
            <Typography className={classes.second}> <SearchIcon />Search</Typography>
            </div>
            <Grid>
            <div>
            <Typography className={classes.second}><FavoriteBorderIcon />0</Typography>
           </div>
           </Grid>
           <Grid>
           <div>
           <Typography className={classes.second}><PersonOutlineIcon />0</Typography>
           </div>
           </Grid>
           <Grid>
           <div>
           <Typography className={classes.second}><AddShoppingCartIcon /></Typography>
           </div>
           </Grid>
           </div>
          </Grid> */}
         
        
          
           {/* <Toolbar style={{width:'100%'}}>
          <Typography>ereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Typography>
        </Toolbar> */}


          <Grid container justify='space-between'>

          <Grid item xs={12}lg={4} >

          <Typography className={classes.Newspaper}>
          <Toolbar><Typography ><NavLink  to='new' className={classes.textDecorate}>NEW</NavLink></Typography></Toolbar>
           <Grid container justify='space-between'>
           <Grid item xs={6}>
           <Toolbar><Typography ><NavLink  to='collection' className={classes.textDecorate}>COLLECTION</NavLink></Typography></Toolbar>
           </Grid>
          <Grid item xs={1}>
          <Typography><AddIcon className={classes.plus} /></Typography>
            </Grid>
            <Grid item xs={6}>
            <Toolbar><Typography ><NavLink  to='sale' className={classes.textcolor}>SALE</NavLink></Typography></Toolbar>
            </Grid>
            <Grid item xs={1}>
          <Typography><AddIcon className={classes.plus} /></Typography>
            </Grid>
            <Grid item xs={6}>
            <Toolbar><Typography ><NavLink  to='lookbook' className={classes.textDecorate}>LOOKBOOK</NavLink></Typography></Toolbar>
            </Grid>
            <Grid item xs={1}>
       
            </Grid>
            <Grid item xs={6}>
            <Toolbar><Typography ><NavLink  to='outfitterscommunity' className={classes.textDecorate}>OUTFITTERSCOMMUNITY</NavLink></Typography></Toolbar>
           </Grid>
           <Grid item xs={1}>
          <Typography><AddIcon className={classes.plus} /></Typography>
            </Grid>
            </Grid>
            
         </Typography>
         <hr />
         </Grid>
         <Toolbar><Typography>Need Help?</Typography></Toolbar>
         {/* <Toolbar><span className={classes.btnColor}><Button  className={classes.buttonMobile}>CONTACT</Button></span></Toolbar>
        
         <Grid container  className={classes.textDecoratetwo}>
         <Grid item xs={6}>
            <Toolbar><Typography ><NavLink  to='faq'>FAQ'S</NavLink></Typography></Toolbar>
            </Grid>
            <Grid item xs={1}>
          <Typography><AddIcon className={classes.plus} /></Typography>
            </Grid>
            <Grid item xs={6}>
            <Toolbar><Typography ><NavLink  to='about outfitters'>About Outfitters</NavLink></Typography></Toolbar>
            </Grid>
            <Grid item xs={1}>
          <Typography><AddIcon className={classes.plus} /></Typography> */}
            </Grid>
            </Grid>
           {/* </Grid>
           </Grid> */}
{/* <hr /> */}

<Grid container justify='space-between'>
<Grid item xs={10}>
<Toolbar><span className={classes.btnColor}><Button  className={classes.buttonMobile}>CONTACT</Button></span></Toolbar>
</Grid>
</Grid>
{/* <Typography  > */}
<Grid container justify='space-between' style={{backgroundColor:'#cccccc'}}>
<Grid item xs={3}>
<Toolbar><NavLink to='faq'  className={classes.headingMobile}>FAQ'S</NavLink></Toolbar>
</Grid>
<Grid item xs={1}>
<Typography><AddIcon className={classes.plus} /></Typography>

</Grid>

</Grid>
<hr />
{/* </Typography> */}
<Grid container justify='space-between' style={{backgroundColor:'#cccccc'}}>
<Grid item xs={6}>
<Toolbar><Typography ><NavLink  to='about-outfitters' className={classes.headingMobile}>About Outfitters</NavLink></Typography></Toolbar>
</Grid>
<Grid item xs={1}>
<Typography><AddIcon className={classes.plus} /></Typography>
</Grid>
</Grid>
</Typography>


           </Paper>
           </Slide>

               : ''
               
 
            }
            </AppBar>
         
   </React.Fragment>
    )
  
  }
export default Navbar
