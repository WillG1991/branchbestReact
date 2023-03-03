import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  Button,
  Link,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    masthead: {
      backgroundColor: "black",
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(8),
    },
    title: {
      color: "#fff",
      fontWeight: "bold",
      fontFamily: "harmanScript",
      marginBottom: theme.spacing(2),
    },
    subtitle: {
      color: "#fff",
      fontWeight: "bold",
      fontFamily: "harmanSlab",
      marginBottom: theme.spacing(4),
    },
    divider: {
      backgroundColor: "#fff",
      height: "1px",
      width: "50px",
      marginBottom: theme.spacing(4),
    },
    text: {
      color: "#fff",
      marginBottom: theme.spacing(5),
    },
    dailySpecials: {
      color: "#fff",
      fontWeight: "bold",
    },
    orderBtn: {
      marginTop: theme.spacing(3),
      backgroundColor: "#f4623a",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#f4623a",
      },
    },
  }));

export default function Masthead() {
  const classes = useStyles();

  return (
    <header className={classes.masthead}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item lg={8}>
            <Typography variant="h2" className={classes.title}>
              Branchburg's
            </Typography>
            <Typography variant="h2" className={classes.subtitle}>
              Best
            </Typography>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item lg={8}>
            <Typography variant="body1" className={classes.text}>
              Where It Always Feels Like Home
            </Typography>
            <Typography variant="body1">
              <Link
                href="https://branchburgs-best.square.site/daily-specials"
                className={classes.dailySpecials}
              >
                Daily Specials
              </Link>
            </Typography>
            <Button
              variant="contained"
              size="large"
              className={classes.orderBtn}
              href="https://branchburgs-best.square.site/s/order"
            >
              Order Now!
            </Button>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}
