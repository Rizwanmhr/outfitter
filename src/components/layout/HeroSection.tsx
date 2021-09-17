import React,{useState, useEffect} from 'react'
import useStyles from './HeroSection.style'
import {Grid}from '@material-ui/core'
import { useMediaQuery,useTheme} from '@material-ui/core';
import Herophoto from './Herophoto'
const HeroSection = () => {
    const [clickHerophoto, setClickHeroPhoto] = useState(false)
    const size:any = Herophoto();
        
useEffect(() => {
    if(size.width >=700){
       return setClickHeroPhoto(false)
    }
}, [size])
    const theme = useTheme();

    const classes = useStyles()
    return(
        <>
 
<Grid container justify={'center'}>
<Grid item xs={12} lg={12}>
<img src={size.width >= 700?'images/sale.jpg':'images/saletwo.jpg'} style={{width:'100%',height:'100%'}} alt="pic" />
</Grid>
</Grid>

</>
    )
}
export default HeroSection