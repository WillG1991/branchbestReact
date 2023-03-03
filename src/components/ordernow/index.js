import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageSection: {
    backgroundColor: "#212529",
    color: "#fff",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  btn: {
    marginTop: theme.spacing(4),
  },
}));

export default function OrderNow() {
  const classes = useStyles();

  return (
    <section className={classes.pageSection}>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h2" component="h2" className={classes.title}>
          Order Now!
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          className={classes.btn}
          href="https://branchburgs-best.square.site/s/order"
        >
          Order Now!
        </Button>
      </Container>
    </section>
  );
}
