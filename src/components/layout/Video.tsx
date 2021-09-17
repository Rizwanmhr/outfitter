import React from 'react'
import {Grid,useTheme} from '@material-ui/core';
import useStyles from './Video.style'
const Video = () => {
    const classes = useStyles()
    return (
        <div>
         <Grid container justify={'center'}>
             <Grid item lg={12}>
            <video src="https://cdn.shopify.com/s/files/1/2290/7887/files/1920x750_Desktop_banner_evolve_new.mp4?v=1629980666" 
            autoPlay loop muted className={classes.video} />
             </Grid>
         </Grid>
        </div>
    )
}

export default Video
