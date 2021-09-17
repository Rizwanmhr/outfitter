import React, { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import SectiontwoSize from "./SectiontwoSize";
import useStyles from "./Girl.style";
const Girlkid = () => {
  const [juniorkid, setJuniorKid] = useState(false);
  const size: any = SectiontwoSize();
  const classes = useStyles();
  useEffect(() => {
    if (size.width >= 700) {
      return setJuniorKid(false);
    }
  }, [size]);

  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12} lg={12}>
          <div className={classes.kidimg}>
            <img
              src={
                size?.width > 768
                  ? "images/kidgirl.jpg"
                  : "images/kidgirltwo.jpg"
              }
              style={{ maxWidth: "100%", height: "100%", objectFit: "fill" }}
              alt="kid"
            />
            <Typography className={classes.girlcontent}>
              <Grid container justify="center">
                <Grid item xs={4} lg={2}>
                  <Typography className={classes.girltext}>GIRL</Typography>
                  <Typography className={classes.years}>
                    4 Years - 14 Year
                  </Typography>
                  <button className={classes.shopbtn}>SHOP NOW</button>
                </Grid>
              </Grid>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Girlkid;
