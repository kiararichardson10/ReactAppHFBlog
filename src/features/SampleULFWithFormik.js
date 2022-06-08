export const UserLoginForm = () => {
    // const [loginModalOpen, setLoginModalOpen] = useState(false);
  
    // //   handleLogin = (values) => {
    // //     const currentUser = {
    // //       id: Date.now(),
    // //       avatar: defaultAvatar,
    // //       username: values.username,
    // //       password: values.password,
    // // //     };
  
    // //   };
    return (
      <>
        <Modal>
          <ModalHeader toggle={() => setLoginModalOpen(false)}>Login</ModalHeader>
          <ModalBody>
            <Formik
            //   initialValues={{
            //     username: "",
            //     password: "",
            //   }}
            //   // onSubmit={handleLogin()}
            >
              <Form>
                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Field
                    id="username"
                    name="username"
                    Placeholder="Username"
                    className="form-control"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Field
                    id="password"
                    name="password"
                    Placeholder="Password"
                    className="form-control"
                  />
                </FormGroup>
                <Button type="submit" color="warning">
                  Login
                </Button>
              </Form>
            </Formik>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="danger">
              Create An Account
            </Button>
          </ModalFooter>
        </Modal>
      </>