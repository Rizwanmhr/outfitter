import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
 
video:{
    maxWidth:'100%',
    height:'100%',
    objectFit:'fill'
}

}),
);
export default useStyles