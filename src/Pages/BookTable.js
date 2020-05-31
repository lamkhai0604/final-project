import React, { useState, useEffect } from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Snackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar";
import { Form, Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import "../components/Css/BookTable.css";
import MuiAlert from "@material-ui/lab/Alert";
// import socketIOClient from "socket.io-client";
// const socket = socketIOClient("http://localhost:5000");

export default function BookTable() {
  // const [submit, setSubmit] = useState("");
  // const [selectedDate, setSelectedDate] = useState(
  //   new Date("2014-08-18T21:11:54")
  // );
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center"
  });
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
  const [displayFailMessage, setdisplayFailMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    dateAndTime: "2017-05-24T10:30",
    email: ""
  });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };

  const handleChange = e => {
    // setSubmit(e.target.value);
  };

  // const submitForm = e => {
  //   e.preventDefault();
  //   socket.emit("submit", submit);
  // };

  const handleNotification = async e => {
    e.preventDefault();

    const { dateAndTime } = formData;
    const getDateAndTime = dateAndTime.split("T");

    // formData.dateAndTime = "";
    formData.date = getDateAndTime[0];
    formData.time = getDateAndTime[1];

    const { email, date, time } =
      !!localStorage.getItem("appointment") &&
      JSON.parse(localStorage.getItem("appointment"));

    // Email trùng và time khác = success

    // email , date, time trùng = fail
    if (
      formData.email === email &&
      formData.date === date &&
      formData.time === time
    ) {
      setdisplayFailMessage(true);
    }
    localStorage.setItem("appointment", JSON.stringify(formData));
    setDisplaySuccessMessage(true);
  };

  // useEffect(() => {
  //   socket.on("messages", msg => {
  //     console.log(msg);
  //   });
  // }, []);

  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setDisplaySuccessMessage(false);
    setdisplayFailMessage(false);
  };

  const { email, name } = formData;

  const disabled = !email.length || !name.length;
  return (
    <div>
      <section id="book-a-table" className="book-a-table">
        <div className="container">
          <div className="section-title">
            <h2>
              Book a{" "}
              <a href="/" style={{ color: "#ffb03b" }}>
                Table
              </a>
            </h2>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>
          <div className="table-form">
            <form noValidate>
              <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                onChange={onChange}
                name="dateAndTime"
              />
            </form>
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={onChange}
                  name="date"
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  value={selectedDate}
                  
                  onChange={onChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider> */}

            <div>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={onChange}
                  name="email"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  onChange={onChange}
                  name="name"
                  type="text"
                  placeholder="Mr. Khai Lam"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your Phone</Form.Label>
                <Form.Control
                  name="phone"
                  type="number"
                  placeholder="12345678910"
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  rows="3"
                  onChange={onChange}
                />
              </Form.Group>
              <Button
                disabled={disabled}
                onClick={handleNotification}
                variant="warning"
              >
                Submit
              </Button>
            </div>

            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={displaySuccessMessage}
              onClose={handleClose}
              key={vertical + horizontal}
            >
              {displaySuccessMessage && (
                <Alert onClose={handleClose} severity="success">
                  Your appointment at Khai's restaurant will be on{" "}
                  {formData.date} at {formData.time}{" "}
                  {!!formData.message && `with the message ${formData.message}`}
                </Alert>
              )}
            </Snackbar>

            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={displayFailMessage}
              onClose={handleClose}
              key={vertical + horizontal}
            >
              <Alert onClose={handleClose} severity="warning">
                This appointment with the email {formData.email} has been made
              </Alert>
            </Snackbar>

            {/* <Form
              
              onChange={e => console.log(e.target)}
              onSubmit={() => console.log("Submit")}
            >
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Mr. Khai Lam" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your Phone</Form.Label>
                <Form.Control type="number" placeholder="12345678910" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="warning">Submit</Button>
            </Form> */}
          </div>
        </div>
      </section>
    </div>
  );
}
