
import {Container, Typography, AppBar, Toolbar, makeStyles } from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
// import Men from './components/layout/Men'
import Women from './components/layout/Women'
import Juniors from './components/layout/Juniors'
import New from './components/layout/New'
import Collection from './components/layout/Collection'
import Sale from './components/layout/Sale'
import Lookbook from './components/layout/Lookbook'
import Outfitterscommunity from './components/layout/Outfitterscommunity'
import Men from './components/layout/Men'
import Footer from './components/layout/Footer'


const useStyles = makeStyles((theme) => ({

   root:{
      // width:'100vw',
      // height:'100vh',
      // backgroundColor: theme.palette.grey[300],
      // paddingTop: 'Theme.spacing(5)'
   },
}));
const App = () => {
   const classes = useStyles();
   return(
      
    <BrowserRouter>
    
    <div  className={classes.root}>
   
      <Navbar />
     
      <Switch>
       
         <Route exact path='/men' component={Men} />
         <Route exact path='/' component={Women} />
         <Route exact path='/juniors' component={Juniors} />

         <Route exact path='/new' component={New} />
         <Route exact path='/collection' component={Collection} />
         <Route exact path='/sale' component={Sale} />
         <Route exact path='/lookbook' component={Lookbook} />
         <Route exact path='/outfitterscommunity' component={Outfitterscommunity} />
      </Switch>
    <Footer />
      </div>
      </BrowserRouter>
      
   )  
}

export default App
