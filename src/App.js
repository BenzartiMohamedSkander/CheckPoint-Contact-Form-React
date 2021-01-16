import React from 'react'
import './App.css';
import { Form } from 'react-bootstrap'



function App() {
  return (
    <div className="App">
      <div className={"contactBox"}>
        <div className={"leftBox"}>
          <div className={"bgGreen"} />
          <div className={"imageContact"} />
          <div className={"imageText bold style1 "}>Welcome</div>
          <div className={"imageText style2 "}>Let's Talk</div>
        </div>
        <div className={"rightBox"}>
          <div className={"box"}>
            <div className={"titleContact"}>Contact Us</div>
            <div className={"inputSbox"}>

              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter name" />

                </Form.Group>



                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group controlId="contactForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Message..." />
                </Form.Group>


                <div className={'btnContact'}>Submit</div>
                {/* <Button  className={'btnContact'} type="submit">
                  Submit
  </Button> */}
              </Form>

             
            </div>
           

          </div>
        </div>
      </div>
    </div>

    // </div>
  );
}

export default App;
