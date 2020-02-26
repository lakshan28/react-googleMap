import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    margin: "1rem"
  }
}));
const menuValue = [1, 2, 3, 4, 5];
const menuValue2 = [10, 20, 30, 40, 50];
export default function Menu() {
  const classes = useStyles();
  const [age, setAge] = React.useState();
  const [age2, setAge2] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleChange = event => {
    setAge(event.target.value);
  };
  const handleChange2 = event => {
    setAge2(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const [menuValue1, setMenuValue1] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())

      .then(result => {
        setMenuValue1(result);
        console.log(menuValue1);
      });
  }, []);

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-">Test</InputLabel>
        <Select
          labelId="demo-l"
          id="demo-controlled-openct"
          open={open2}
          onClose={handleClose2}
          onOpen={handleOpen2}
          value={age2}
          onChange={handleChange2}
        >
          {menuValue1.map(arr => (
            <MenuItem value={arr.id}>{arr.address.geo.lat} </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
