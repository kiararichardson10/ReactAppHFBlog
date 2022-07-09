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
import {
  faMicrosoft,
  faGoogle,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";
import { ModalTitle, Badge } from "react-bootstrap";

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
          <ModalTitle
            style={{
              padding: "1rem",
              marginLeft: "180px",
            }}
          >
            Login
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form className="d-flex flex-column text-center">
            <FormGroup>
              {/* <Label htmlFor="username">Username</Label> */}
              <Input
                id="username"
                name="username"
                placeholder="Username"
                autoFocus
              />
            </FormGroup>
            <FormGroup>
              {/* <Label htmlFor="password">Password</Label> */}
              <Input
                id="password"
                name="password"
                placeholder="Password"
                className="form-control"
                autoFocus
              />
            </FormGroup>
            <a role="link" className="text-muted">
              {" "}
              Forgot your password?{" "}
            </a>
            <Badge pill="success" type="submit">
              Log In
            </Badge>
            <div className="text-center text-muted delimiter">
              Or log in with email
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-round btn-danger"
                data-toggle="tooltip"
                data-placement="top"
                title="Google"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button
                type="button"
                class="btn btn-round btn-info"
                data-toggle="tooltip"
                data-placement="top"
                title="Microsoft"
              >
                <FontAwesomeIcon icon={faMicrosoft} />
              </button>
              <button
                type="button"
                class="btn btn-round btn-warning"
                data-toggle="tooltip"
                data-placement="top"
                title="Yahoo"
              >
                <FontAwesomeIcon icon={faYahoo} />
              </button>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center">
          <div className="text-muted"> Not a member yet? </div>
          <Button type="button" color="danger">
            Create An Account
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
