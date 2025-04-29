import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ContactaPage.css";

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone must be 10 digits')
        .required('Phone is required'),
   
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch('https://miracle-backend-three.vercel.app/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success('Form submitted successfully!');
          resetForm();
        } else {
          toast.error(data.error || 'Something went wrong!');
        }
      } catch (error) {
        toast.error('Failed to send form. Please try again.');
      }
    },
  });

  return (
    <div className="footer_popup-content">
      <form className="footer_popup-form" onSubmit={formik.handleSubmit}>
        {[
          { label: "Username", name: "name", type: "text", placeholder: "Enter your name" },
          { label: "Email ID", name: "email", type: "email", placeholder: "Enter your email" },
          { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter your phone number" },
        
        ].map(({ label, name, type, placeholder }) => (
          <div className="footer_popup-form-group" key={name}>
            <label className="footer_popup-label">{label}</label>
            <input
              type={type}
              className="footer_popup-input"
              name={name}
              placeholder={placeholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[name]}
            />
            {formik.touched[name] && formik.errors[name] && (
              <div className="footer_popup-error">{formik.errors[name]}</div>
            )}
          </div>
        ))}

        <div className="footer_popup-form-group">
          <label className="footer_popup-label">Message</label>
          <textarea
            className="footer_popup-input"
            name="message"
            placeholder="Enter your message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message && (
            <div className="footer_popup-error">{formik.errors.message}</div>
          )}
        </div>

        <button type="submit" className="footer_popup-submit-btn">Submit</button>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ContactPage;
