import React,{useState,useEffect} from 'react'
import {Grid,useTheme} from '@material-ui/core';
import SectiontwoSize from './SectiontwoSize'
const Sectiontwo = () => {
    const [clickSectiontwo, setclickSectiontwo] = useState(false)
    const size:any = SectiontwoSize();
            
useEffect(() => {
    if(size.width >=700){
       return setclickSectiontwo(false)
    }
}, [size])
    return (
        <div>
            {
          size.width >= 700 ?
            <>
        <Grid container justify='center'>
        <Grid item lg={12}>
       <img src="images/girl.jpg" alt="girl" style={{maxWidth:'100%',height:'100%',objectFit:'fill'}} />
       </Grid>
        </Grid>
       <Grid container justify='center'>
        <Grid item lg={12}>
       <img src="images/girlfour.jpg" alt="girl" style={{maxWidth:'100%',height:'100%',objectFit:'fill'}} />
        </Grid>
        </Grid>
        </>
        :
        <>
        <Grid container justify='center'>
        <Grid item lg={12}>
       <img src="images/girltwo.jpg" alt="girl" style={{maxWidth:'100%',height:'100%',objectFit:'fill'}} />
        </Grid>
        </Grid>
       <Grid container justify='center'>
        <Grid item xs={12}>
        <img src="images/girlthree.jpg" alt="girl" style={{maxWidth:'100%',height:'100%',objectFit:'fill'}} />
        </Grid>
        </Grid>
        </>
}
        </div>
    )
}

export default Sectiontwo
