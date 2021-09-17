import React,{useState,useEffect} from 'react'
import {Grid} from '@material-ui/core'
import SectiontwoSize from './SectiontwoSize'
const Kid = () => {
    const [kidsize, setKidSize] = useState(false)
    const size:any = SectiontwoSize()
    useEffect(() => {
            if(size.width >=700){
               return setKidSize(false)
            }
        }, [size])
    return (
        <div>
          
                <Grid justify='center'>
                <Grid item xs={12}lg={12}>
                <img src={size.width >= 700 ?"images/kid.jpg":"images/kidtwo.jpg"} style={{maxWidth:'100%',height:'100%',objectFit:'fill'}} alt="kid" />
                </Grid>
                </Grid>
      
        </div>
    )
}

export default Kid
