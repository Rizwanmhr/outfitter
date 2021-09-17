import React,{useState, useEffect} from 'react'
import {Grid,useTheme,Typography,Toolbar,Button} from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
// import FormHelperText from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import DevicesIcon from '@material-ui/icons/Devices';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useMediaQuery } from '@material-ui/core';
import useWindowSize from './Footertoogle'
import useStyles from './FooterStyle'
const Footer = () => {
    const [value,setValue] = useState('')
    const [clickuseWindowSize, setClickuseWindowSize] = useState(false)
    const size:any = useWindowSize();
    useEffect(() => {
        if(size.width >=700){
           return setClickuseWindowSize(false)
        }
    }, [size])
    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value)
    }
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.up('xs'))
    const classes = useStyles()
    
    return (
        <React.Fragment>
            {
                size.width <= 700 ?
                <>
           <div className={classes.mainTwo}>
            <hr />
            <Grid container justify='space-evenly'>
            <Grid item xs={12}lg={5} className={classes.mainOne}>
           <Typography className={classes.heading}>Newsletter</Typography>
           <Grid item xs={12}className={classes.mainthree}>
            Subscribe to our newsletter and be the first to receive the latest fashion news, promotions and more!
            </Grid>
           <input type="text" placeholder='Enter your email address'  className={classes.footer} />
            </Grid>
            <Grid item xs={12}lg={2} className={classes.main}>
            <Button disabled className={classes.subscribe}>SUBSCRIBE</Button>
            </Grid>
          
            </Grid>
            </div>
                </>
                :

                <div className={classes.mainTwo}>
                <hr />
                <Grid container justify='space-evenly'>
                <Grid item xs={10}lg={5} className={classes.mainOne}>
               <Typography className={classes.heading}>Newsletter</Typography>
               <input type="text" placeholder='Enter your email address'  className={classes.footer} />
                </Grid>
                <Grid item xs={12} lg={2} className={classes.main}>
                <Button disabled className={classes.subscribe}>SUBSCRIBE</Button>
                </Grid>
                <Grid item lg={5}className={classes.mainthree}>
                Subscribe to our newsletter and be the first to receive the latest fashion news, promotions and more!
                </Grid>
                </Grid>
                </div>
            }
        
            <div className={classes.mainFour}>
            <Grid container justify='space-between'>
            <Grid item xs={12}lg={4}>
         <Typography className={classes.headingtwo}>Need Help?</Typography>
         <Typography className={classes.botonhover}><button className={classes.contactBtn}>CONTACT</button></Typography>
         <Typography  className={classes.lineheigh}><CallIcon />UAN:04211-111-11-6387</Typography>
         <Typography className={classes.lineheightwo}>Mon-Fri 9.00 to 5.30 PST</Typography>
            </Grid>
            {
          size.width >= 700 ?
          <>
         <Grid item lg={4} className={classes.cntrtwo}>
            <Typography className={classes.headingtwoo}>FAQ'S</Typography>
            <span className={classes.hoverEffec}>
            <Typography className={classes.lineTop}>FAQ'S</Typography>
            <Typography className={classes.lineTop}>How to Buy</Typography>
            <Typography className={classes.lineTop}>Item Availability</Typography>
            <Typography className={classes.lineTop}>Payment</Typography>
            <Typography className={classes.lineTop}>Shipping & Deliveries</Typography>
            <Typography className={classes.lineTop}>Exchange & Returns</Typography>
            <Typography className={classes.lineTop}>Discounts/Promotional Codes</Typography>
            <Typography className={classes.lineTop}>Modification of Info & Orders</Typography>
            </span>
            </Grid>
          
        <Grid item lg={4}>
        <Grid container justify='flex-end'>
        <Grid item lg={5}>
        <Typography className={classes.headingtwoo}>About Outfitter's</Typography>
        <Typography className={classes.lineTop}>About us</Typography>
        <Typography className={classes.lineTop}>Stores</Typography>
        <Typography className={classes.lineTop}>Contact us</Typography>
        <Typography className={classes.lineTop}>Track Your Order</Typography>
        <Typography className={classes.lineTop}>Customer Feedback /</Typography>
        <Typography className={classes.lineTop}>Complaint Form</Typography>
        <Typography className={classes.lineTop}>News</Typography>
        </Grid>
        </Grid>
        </Grid>
        
        </>
        
        :
        ('')
            }
        </Grid>
          </div>
          
          {
            size.width >= 700 ?
         <hr />
         :
         ('')
        }
         <div className={classes.autoComp}>
         {
                size.width >= 700 ?
                <>
        <Grid container justify='space-around'>
        <Grid item xs={10}lg={4}>
          
                <Typography className={classes.headingtLang}>Language:</Typography>
           <FormControl variant='outlined' style={{width:300}}>
        <InputLabel>English</InputLabel>
        <Select value={value} onChange={() => handleChange}>
        <MenuItem value={'English'}>English</MenuItem>
        </Select>
        </FormControl>
       
        </Grid>
        </Grid>
       
        </>
        : 
        ('')
            }
        </div>
        <div className={classes.moveRight}>
        <Grid container justify='space-between'>
       
        <Grid item xs={12}lg={6}>
        <Typography className={classes.set}><LockOutlinedIcon />Secure online payment</Typography>
        
        </Grid>
        <Grid container justify='flex-end'>
        <Grid item xs={9}lg={2}>

        <Typography className={classes.ImgiconSet}>
        <Typography className={classes.settwo}><DevicesIcon /></Typography>
        <Typography className={classes.bottom}>Outfitter Apps</Typography>
        </Typography>
        </Grid>
        {/* <div className={classes.imgStore}> */}
        <Grid item xs={12}lg={2}>
        <Typography className={classes.imgset}>
        <img className={classes.imghover} src="images/store.png" alt="store" />
        <img className={classes.imghover} src="images/google.png" alt="store" />
        </Typography>
        </Grid>
      {/* </div> */}
      </Grid>
        </Grid>
        </div>
        <Grid container justify='flex-end'>
        <Grid item xs={8} lg={1}>
        <Typography className={classes.socialIconheading}></Typography>
       <Typography className={classes.headingLeft}>Follow us on</Typography>
        </Grid>
        <Grid item xs={12} lg={2}>
        <Typography className={classes.socialIcon}>
       {/* <Typography>Follow us on</Typography> */}
       
       <Typography className={classes.icon}><FacebookIcon /></Typography>
       <Typography className={classes.icon}><TwitterIcon /></Typography>
       <Typography className={classes.icon}><InstagramIcon /></Typography>
       <Typography className={classes.icon}><PinterestIcon/></Typography>
       <Typography className={classes.icon}><NotificationsIcon/></Typography>
   
       </Typography>
        </Grid>
        </Grid>
        {
            size.width >= 700 ?
            <>
  <hr />
        <Grid container justify='space-between'>
        <Grid item xs={10}lg={3}>
        <Typography className={classes.bottomm}>© 2021 Outfitters</Typography>
        </Grid>
        <Grid item xs={10}lg={3}>
        <Typography className={classes.text}>
        <Typography className={classes.bottom}>Terms and conditions of purchase</Typography>
        <Typography className={classes.bottom}>Delivery</Typography>
        </Typography>
        </Grid>
        </Grid>
        <hr className={classes.end} />
        

        </>
        :
        ('')

        }
      
        </React.Fragment>
    )
}

export default Footer
