import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    subject: Yup.string().min(3, "Subject must be at least 3 characters"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!", { position: "top-right" });
        resetForm();
      } else {
        toast.error(data.error || "Something went wrong!", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("Server Error! Please try again later.", {
        position: "top-right",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <p>Have questions? We'd love to hear from you.</p>

      {/* Toast Notification Container */}
      <ToastContainer />

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="contact-form">
            <div className="input-group">
              <Field type="text" name="name" placeholder="Your Name" />
              <ErrorMessage name="name" component="p" className="error" />
            </div>

            <div className="input-group">
              <Field type="email" name="email" placeholder="Your Email" />
              <ErrorMessage name="email" component="p" className="error" />
            </div>

            <div className="input-group">
              <Field type="text" name="phone" placeholder="Your Phone Number" />
              <ErrorMessage name="phone" component="p" className="error" />
            </div>

            <div className="input-group">
              <Field
                type="text"
                name="subject"
                placeholder="Subject (Optional)"
              />
              <ErrorMessage name="subject" component="p" className="error" />
            </div>

            <div className="input-group">
              <Field as="textarea" name="message" placeholder="Your Message" />
              <ErrorMessage name="message" component="p" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactUs;
