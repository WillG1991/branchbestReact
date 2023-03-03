import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage: 'url(./assets/img/header-bg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'HarmanScript, sans-serif',
    textShadow: '2px 2px #000000',
  },
  subTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'HarmanSlab, sans-serif',
    textShadow: '2px 2px #000000',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    height: theme.spacing(0.25),
    width: '50px',
    margin: '0 auto',
    marginBottom: theme.spacing(3),
  },
  tagline: {
    color: 'white',
    marginBottom: theme.spacing(4),
  },
  actionButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.hero}>
      <Grid item xs={12}>
        <div className={classes.overlay} />
        <div className={classes.content}>
          <Typography variant="h1" className={classes.title}>
            Branchburg's
          </Typography>
          <Typography variant="h1" className={classes.subTitle}>
            Best
          </Typography>
          <div className={classes.divider} />
          <Typography variant="h5" className={classes.tagline}>
            Where It Always Feels Like Home
          </Typography>
          <Button variant="contained" color="primary" size="large" className={classes.actionButtons}>
            Order Now!
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Hero;