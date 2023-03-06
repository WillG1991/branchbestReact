import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import AboutOne from "../../assets/images/about/about1.jpeg"
import AboutTwo from "../../assets/images/about/about2.jpeg"
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Slide from 'react-reveal/Slide';


const useStyles = makeStyles((theme) => ({
  about: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  aboutImg: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
  },
  callUs: {
    position: 'absolute',
    bottom: '10%',
    left: '25%',
    backgroundColor: 'white',
    color: 'black',
    width: "50%",
    padding: theme.spacing(2),
  },
  content: {
    paddingLeft: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(5),
    },
  },
  playBtn: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90px',
    height: '90px',
  },
}));

function About() {
  const classes = useStyles();

  return (
    <Slide bottom timeout={2500}>
    <Container>
    <section id="about" className={classes.about}>
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <Typography variant="body1">About Us</Typography>
          <Typography variant="h3">
           Good Food, <span>Good Stuff</span>
          </Typography>
        </div>
        <Grid container spacing={4}>
          <Grid item lg={7}>
            <div
              className={`position-relative about-img ${classes.aboutImg}`}
              style={{ backgroundImage: `url(${AboutOne})` }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className={`call-us position-absolute ${classes.callUs}`}>
                <Typography variant="h4">Book a Table</Typography>
                <Typography variant="body1">+1 555-555-5555</Typography>
              </div>
            </div>
          </Grid>

          <Grid item lg={5}>
          <div
  className={`content ps-0 ps-lg-5 ${classes.content}`}
  data-aos="fade-up"
  data-aos-delay="300"
  style={{ textAlign: "left" }}
>
  <Typography variant="body1" fontStyle="italic">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Typography>
  <ul style={{ listStyle: "none", paddingLeft: "0" }}>
    <li>
      <Typography variant="body1">
      <CheckCircleIcon color="inherit" style={{ marginRight: "8px" }} />
         Ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
    </li>
    <li>
      <Typography variant="body1">
      <CheckCircleIcon color="inherit" style={{ marginRight: "8px" }} />
        Duis aute irure dolor in reprehenderit in voluptate velit.
      </Typography>
    </li>
    <li>
      <Typography variant="body1">
      <CheckCircleIcon color="inherit" style={{ marginRight: "8px" }} />
        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
      </Typography>
    </li>
  </ul>
  <Typography variant="body1">
    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
  </Typography>
              <div className={`position-relative mt-4 ${classes.positionRelative}`}>
                <img src={AboutTwo} className={`img-fluid ${classes.imgFluid}`} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  </Container>
  </Slide>
);
}


export default About;