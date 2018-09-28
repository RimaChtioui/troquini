import React from "react";
import "./EditProfile.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class EditProfileFirstCase extends React.Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        style={{
          flexDirection: "column",
          width: "250px",
          marginLeft: "15px"
        }}
      >
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows="4"
          placeholder="changer votre description ici.."
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-textarea"
          label="Prénom"
          placeholder="prénom"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-with-placeholder"
          label="Nom"
          placeholder="nom"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

EditProfileFirstCase.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProfileFirstCase);
