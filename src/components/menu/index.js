import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import breakfastLunchOne from "../../assets/images/menu/breakfastLunchOne.jpg"
import breakfastLunchTwo from "../../assets/images/menu/breakfastLunchTwo.jpg"
import dinnerOne from "../../assets/images/menu/dinnerOne.jpg"
import dinnerTwo from "../../assets/images/menu/dinnerTwo.jpg"
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
  },
}));

const Menu = () => {
  const classes = useStyles();

  const [selectedItem, setSelectedItem] = useState("breakfast");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Zoom timeout={1000}>
    <div style={{paddingTop: "64px", paddingBottom: "64px", backgroundColor: "#f4f4f4"}}>
      <p style={{fontWeight: "bold", marginBottom: "32px", textAlign: "center", color: "#888"}}>
        Menu
      </p>
      <Typography variant="h3">
           The Best Menu
          </Typography>
      <ul style={{display: "flex", justifyContent: "center", listStyle: "none"}}>
        <li style={{textDecoration: selectedItem === "breakfast" ? "underline" : "none", marginRight: "30px"}}
            onClick={() => handleItemClick("breakfast")}>
          Breakfast
        </li>
        <li style={{textDecoration: selectedItem === "daily-specials" ? "underline" : "none", marginRight: "30px"}}
            onClick={() => handleItemClick("daily-specials")}>
         Lunch
        </li>
        <li style={{textDecoration: selectedItem === "dinner" ? "underline" : "none", marginRight: "30px"}}
            onClick={() => handleItemClick("dinner")}>
          Dinner
        </li>
      </ul>
      {selectedItem === "breakfast" && (
        <img src={breakfastLunchOne} alt="Breakfast" style={{width: "50%"}} />
      )}
      {selectedItem === "dinner" && (
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={6}>
            <img src={dinnerOne} alt="Dinner" className={classes.image} />
            <img src={dinnerTwo} alt="Dessert" className={classes.image} />
          </Grid>
        </Grid>
      )}
      {selectedItem === "daily-specials" && (
        <img src={breakfastLunchTwo} alt="Lunch" style={{width: "50%"}} />
      )}
    </div>
    </Zoom>
  );
};

export default Menu;
