import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
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
    setThankYou(false);
    const formData = new FormData(formRef.current);
    formData.append("date", data.date);

    fetch(`${import.meta.env.VITE_SEND_EMAIL_API}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then(() => {
        setLoader(false);
        reset();
        setThankYou(true);
        setRemovePointer(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoader(false);
        setRemovePointer(false);
      });
  };

  return (
    <div className="form-panel">
      <div className="form-panel-heading">
        <h3>Request an appointment</h3>
      </div>

      <Form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="modern-form">
        <div className="form-grid">
          <div>
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Your name"
              name="name"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="form-error">This field is required.</span>}
          </div>

          <div>
            <Form.Label>Contact number</Form.Label>
            <Form.Control
              placeholder="09xx xxx xxxx"
              name="number"
              {...register("number", { required: true })}
            />
            {errors.number && <span className="form-error">This field is required.</span>}
          </div>

          <div className="form-grid-full">
            <Form.Label>Date and time</Form.Label>
            <Controller
              name="date"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  className="form-control"
                  placeholderText="Select your preferred schedule"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  minDate={new Date()}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              )}
            />
            {errors.date && <span className="form-error">This field is required.</span>}
          </div>
        </div>

        <Button
          type="submit"
          className="gallery-button"
          style={removePointer ? { pointerEvents: "none" } : undefined}
        >
          {loader ? (
            <Bars
              height="30"
              width="30"
              color="#121212"
              ariaLabel="bars-loading"
              wrapperStyle={{ justifyContent: "center" }}
              visible={true}
            />
          ) : (
            "Submit request"
          )}
        </Button>

        {thankYou && (
          <motion.div
            className="form-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            We received your request and will reach out shortly.
          </motion.div>
        )}
      </Form>
    </div>
  );
};

export default FormBox;
