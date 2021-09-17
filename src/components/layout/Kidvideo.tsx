import React from 'react'
import {Grid} from '@material-ui/core';
const Kidvideo = () => {
    return (
        <div>
               <Grid container justify={'center'}>
             <Grid item lg={12}>
            <video src="https://cdn.shopify.com/s/files/1/2290/7887/files/VB_Desktop.mp4?v=1630068197" 
            autoPlay loop muted style={{maxWidth:'100%',height:'100',objectFit:'fill'}} />
             </Grid>
         </Grid>
        </div>
    )
}

export default Kidvideo
