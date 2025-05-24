import { Field, Form, Formik, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';


const ContactForm = () => {
  const initialValues = { name: '', number: '' };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({
      name: values.name,
      number: values.number,
    }));
    actions.resetForm();
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.contactForm}>
        <span className={css.formInputWrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.formInput}
          />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMessage}
          />
        </span>
        <span className={css.formInputWrapper}>
          <label htmlFor={numberFieldId}>Phone</label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={css.formInput}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        </span>
        <button type="submit" className={css.primaryButton}>Add</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
