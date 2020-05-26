import React, {useState, useEffect} from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Form, Button } from "react-bootstrap";
import "../components/Css/BookTable.css";
import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://localhost:5000");

export default function BookTable() {
  const [submit, setSubmit] = useState("")
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (e) => {
    setSubmit(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    socket.emit("submit", submit)
  }

  useEffect(() => {
    socket.on("messages", (msg) => {
      console.log(msg);
    })
  }, []);

  return (
    <div>
      <section id="book-a-table" class="book-a-table">
        <div className="container">
          <div className="section-title">
            <h2>
              Book a <a href="/" style={{color:"#ffb03b"}}>Table</a>
            </h2>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>
          <div className="table-form">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>

            <Form onChange={handleChange} onSubmit={submitForm}>
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
            <Button variant="warning" type="submit">
              Submit
            </Button>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
