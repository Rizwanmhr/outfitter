import React,{useState,useEffect} from 'react'
import {Grid}from '@material-ui/core'
import SectiontwoSize from './SectiontwoSize'
const MensPic = () => {
    const [menSize, setMenSize] = useState(false)
    const size:any = SectiontwoSize();
    useEffect(() => {
        if(size.width >=700){
            return setMenSize(false)
         }
    })
    return (
        <>
        {
            size.width >= 700 ?

<Grid container justify={'center'}>
<Grid item xs={12} lg={12}>
<img src='images/men.jpg' style={{width:'100%',height:'100%',objectFit:'fill'}}  alt="pic" />
</Grid>

</Grid>
: 
<Grid container justify={'center'}>
<Grid item xs={12} lg={12}>
<img src='images/menmob.jpg' style={{width:'100%',height:'100%',objectFit:'fill'}}  alt="pic" />
</Grid>

</Grid>
        }
</>
)
}

export default MensPic
