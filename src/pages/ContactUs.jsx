import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const [success, setSuccess] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: Yup.string().min(3, "Subject must be at least 3 characters"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <p>Have questions? We'd love to hear from you.</p>

      {success && <p className="success">{success}</p>}

      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log("Form Data:", values);
            setSuccess("Message sent successfully!");
            resetForm();
            setSubmitting(false);
          }, 1500);
        }}
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
