import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Button, Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Bars } from "react-loader-spinner";
import { motion } from "framer-motion";

const FormBox = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const formRef = useRef(null);
  const [loader, setLoader] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const [removePointer, setRemovePointer] = useState(false);
  const onSubmit = (data) => {
    setLoader(true);
    setRemovePointer(true);
    const formData = new FormData(formRef.current);
    formData.append("date", data.date);
    fetch(`${import.meta.env.VITE_SEND_EMAIL_API}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);
        reset();
        setThankYou(true);
        setRemovePointer(false);
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <>
      <Container className="flex-column" style={{ height: "100%" }}>
        <Row style={{ height: "100%" }}>
          <Col className="contact-item">
            <h3>Request an appointment</h3>
            <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
              <Row className="contact-item-form">
                <Col xs={12} md={6}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    placeholder="Name"
                    name="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span style={{ color: "#fff" }}>
                      This field is required
                    </span>
                  )}
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>Contact number</Form.Label>
                  <Form.Control
                    placeholder="Contact number"
                    name="number"
                    {...register("number", { required: true })}
                  />
                  {errors.number && (
                    <span style={{ color: "#fff" }}>
                      This field is required
                    </span>
                  )}
                </Col>
                <Col xs={12} md={12}>
                  <Form.Label>Date and Time</Form.Label>
                  <Controller
                    name="date"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <DatePicker
                        className="form-control"
                        placeholderText="Select date"
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                        minDate={new Date()}
                        showTimeSelect
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                    )}
                  />
                  {errors.date && (
                    <span style={{ color: "#fff" }}>
                      This field is required
                    </span>
                  )}
                </Col>
                <Col xs={12} md={12}>
                  <Button
                    type="submit"
                    className="gallery-button"
                    style={removePointer ? { pointerEvents: "none" } : null}
                  >
                    {loader && loader ? (
                      <Bars
                        height="30"
                        width="30"
                        color="rgba(13, 13, 13, 0.5)"
                        ariaLabel="bars-loading"
                        wrapperStyle={{ justifyContent: "center" }}
                        wrapperClass=""
                        visible={true}
                      />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </Col>
                <Col xs={12} md={12} className>
                  {thankYou && (
                    <motion.div
                      variant="success"
                      className="alert alert-success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2 }}
                      exit={{ opacity: 0 }}
                    >
                      We have received your request. We will contact you
                      shortly.
                    </motion.div>
                  )}
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormBox;
