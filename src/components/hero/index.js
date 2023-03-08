import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HeroImage from '../../assets/images/heroImage.jpeg';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  hero: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    padding: theme.spacing(8, 0),
  },
  heroImage: {
    maxWidth: '100%',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(4),
    },
  },
  heroContent: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  heroTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      fontSize: '7rem',
      textAlign: 'left',
    },
  },
  heroDescription: {
    marginBottom: theme.spacing(4),
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
      textAlign: 'left',
    },
  },
  heroButtons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  button: {
    marginRight: theme.spacing(2),
    color: "white",
    backgroundColor: "black"
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <section id="hero" className={classes.hero}>
      <Container maxWidth="xl">
        <Fade bottom timeout={1500}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={12} md={5} className={classes.heroContent}>
              <Typography variant="h2" className={classes.heroTitle} data-aos="fade-up">
                Branchburgs<br />Best
              </Typography>
              <Typography variant="body1" className={classes.heroDescription} data-aos="fade-up" data-aos-delay="100">
                Where it always feels like home.
              </Typography>
              <div className={classes.heroButtons} data-aos="fade-up" data-aos-delay="200">
                <Button variant="contained" className={classes.button}>
                  Order now!
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={HeroImage} alt="" className={classes.heroImage} data-aos="zoom-out" data-aos-delay="300" />
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </section>
  );
};

export default Hero;
