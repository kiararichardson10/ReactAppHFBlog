import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Label,
  Button,
  Input,
} from "reactstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export const UserLoginForm = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <Button color="info" title="Login or Create Account" onClick={toggle}>
        {" "}
        <FontAwesomeIcon icon={faRightToBracket} /> Welcome
      </Button>
      <Modal
        className="modal-dialog modal-dialog-centered"
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader
          className="border-bottom-0"
          toggle={toggle}
          charCode="close"
        >
          Login
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="Username"
                className="form-control"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                className="form-control"
              />
            </FormGroup>
            <Button type="submit" color="warning">
              Login
            </Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="danger">
            Create An Account
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
