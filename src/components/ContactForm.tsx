import { Formik, Form, Field, ErrorMessage } from 'formik';
import type { FormikProps } from 'formik';
import * as Yup from 'yup';
import { CTAButton } from './CTAButton';

const fields = [
  { name: 'fullName', label: 'FULL NAME', placeholder: 'John Doe', type: 'text', col: true },
  { name: 'email', label: 'EMAIL ADDRESS', placeholder: 'john@restaurant.com', type: 'email', col: true },
  { name: 'phone', label: 'PHONE NUMBER', placeholder: '+1 555 000-0000', type: 'tel', col: true },
  { name: 'city', label: 'CITY', placeholder: 'Atlanta', type: 'text', col: true },
  { name: 'businessName', label: 'BUSINESS NAME', placeholder: 'The Blue Bistro', type: 'text', col: true },
  { name: 'message', label: 'HOW CAN WE HELP?', placeholder: 'Tell us about your requirements...', type: 'textarea', col: false },
] as const;

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  phone: Yup.string()
    .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Invalid phone number')
    .required('Phone number is required'),
  city: Yup.string()
    .min(2, 'City must be at least 2 characters')
    .required('City is required'),
  businessName: Yup.string()
    .min(2, 'Business name must be at least 2 characters')
    .required('Business name is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .required('Please tell us how we can help'),
});

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  businessName: string;
  message: string;
}

const initialValues: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  businessName: '',
  message: '',
};

export function ContactForm() {
  function handleSubmit(
    values: FormValues,
    { setSubmitting, resetForm }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) {
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', values);
      setSubmitting(false);
      resetForm();
      // You can add success notification here
    }, 1000);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, touched, errors }: FormikProps<FormValues>) => (
        <Form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fields
              .filter((f) => f.type !== 'textarea')
              .map((field) => (
                <div key={field.name} className="flex flex-col gap-1.5">
                  <label htmlFor={field.name} className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {field.label}
                  </label>
                  <Field
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition ${
                      touched[field.name as keyof FormValues] && errors[field.name as keyof FormValues]
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20'
                    }`}
                  />
                  <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-red-500 text-xs mt-0.5"
                  />
                </div>
              ))}
          </div>
          {fields
            .filter((f) => f.type === 'textarea')
            .map((field) => (
              <div key={field.name} className="flex flex-col gap-1.5">
                <label htmlFor={field.name} className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {field.label}
                </label>
                <Field
                  as="textarea"
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition resize-y min-h-[100px] ${
                    touched[field.name as keyof FormValues] && errors[field.name as keyof FormValues]
                      ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                      : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20'
                  }`}
                />
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="text-red-500 text-xs mt-0.5"
                />
              </div>
            ))}
          <CTAButton type="submit" className="w-full sm:w-auto mt-2" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </CTAButton>
        </Form>
      )}
    </Formik>
  );
}
