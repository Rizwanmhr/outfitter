import React, {useState,useEffect} from 'react'
import SectiontwoSize from './SectiontwoSize'
import {Grid}from '@material-ui/core'
const Boypic = () => {
    const [boysize, setBoySize] = useState(false)
    const size:any = SectiontwoSize();
    useEffect(() => {
        if(size.width >=700){
            return setBoySize(false)
         }
    })
    return (
        <div>
            {
                 size.width >= 700 ?
                <>
               
                <Grid container justify='center'>
                <Grid item xs={12}lg={12}>
                <img src="images/boyone.jpg" style={{maxWidth:'100%',height:'100%',objectFit:'fill'}} alt="boyone" />
                </Grid>
                </Grid>
                <Grid container justify='center'>
                <Grid item xs={12}lg={12}>
                <img src="images/boytwo.jpg" style={{maxWidth:'100%',height:'100%',objectFit:'fill'}} alt="boyone" />
                </Grid>
                </Grid>
                </>
                :
                <>
                <Grid container justify='center'>
                <Grid item xs={12}lg={12}>
                <img src="images/boythree.jpg" style={{maxWidth:'100%',height:'100%',objectFit:'fill'}} alt="boyone" />
                </Grid>
                </Grid>
                <Grid container justify='center'>
                <Grid item xs={12}lg={12}>
                <img src="images/boyfour.jpg" style={{maxWidth:'100%',height:'100%',objectFit:'fill'}} alt="boyone" />
                </Grid>
                </Grid>
                </>
            }
       
        </div>
    )
}

export default Boypic
