import { useEffect, useState } from 'react';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

//Used redux-form library to create the form, validation checks and
//displaying the submitted values
const renderInput = ({ input, meta, placeholder, label }) => (
  <div className='field'>
    <label className='label'>{label}</label>
    <input
      {...input}
      placeholder={placeholder}
      className={`input ${meta.error ? 'is-danger' : 'is-cyan'}`}
    />
  </div>
);

//Form validation criterias
const validateEmail = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

const checkNum = (value) =>
  value && /\d/.test(value) ? 'Cannot contain number' : undefined;

const validateNumber = (value) =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength80 = maxLength(80);
const maxLength50 = maxLength(50);

let Form = ({ handleSubmit, name, phone, company, email }) => {
  const [countryCode, setCountryCode] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((response) => {
        setCountryCode(response.country_calling_code);
      })
      .catch((data) => {
        console.log('Request failed:', data);
      });
  }, []);

  return (
    <div>
      {!submitted && (
        <div className='formDiv'>
          <h2 className='formHeading'>
            Find inbound call centers for your company
          </h2>
          <h3 className='formSubHeading'>
            Use our AI and Big Data driven call center sourcing solution
          </h3>
          <form
            onSubmit={handleSubmit(() => {
              setSubmitted(true);
            })}
          >
            <div className='formElements'>
              <Field
                name='company'
                component={renderInput}
                placeholder='Company'
                label='Company'
                validate={[maxLength80, checkNum]}
              />
              <Field
                name='name'
                component={renderInput}
                placeholder='Full Name'
                label='Name'
                validate={maxLength50}
              />
              <Field
                name='phone'
                component={renderInput}
                placeholder={countryCode}
                label='Phone'
                validate={validateNumber}
              />
              <Field
                name='email'
                component={renderInput}
                placeholder='name@mail.com'
                label='E-mail'
                validate={validateEmail}
              />
            </div>
            <button className='button' type='submit'>
              Get Informed
            </button>
          </form>
        </div>
      )}
      {submitted && (
        <div className='formDiv'>
          <h2 className='resultFormHeading'>Thank you for your request!</h2>
          <h3 className='resultFormSubHeading'>
            You’ve taken the first step. Our experts will get in touch with you
            soon.
          </h3>
          <div className='line'></div>
          <div className='resultTable'>
            <div className='resultRow'>
              <div className='attribute'>
                <p>Company</p>
              </div>
              <div className='result'>
                <p>{company}</p>
              </div>
            </div>
            <div className='resultRow'>
              <div className='attribute'>
                <p>Name</p>
              </div>
              <div className='result'>
                <p>{name}</p>
              </div>
            </div>
            <div className='resultRow'>
              <div className=' attribute'>
                <p>Phone</p>
              </div>
              <div className='result'>
                <p>
                  {countryCode}
                  {phone}
                </p>
              </div>
            </div>
            <div className='resultRow'>
              <div className='attribute'>
                <p>E-mail</p>
              </div>
              <div className='result'>
                <p>{email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

//wrapping the form component with reduxForm higher order component
Form = reduxForm({
  form: 'get-informed-form',
})(Form);

//cannecting the form with the redux store to get the values to be displayed on submit
const selector = formValueSelector('get-informed-form');
Form = connect((state) => {
  const { company, name, phone, email } = selector(
    state,
    'company',
    'name',
    'phone',
    'email'
  );
  return {
    company,
    name,
    phone,
    email,
  };
})(Form);

export default Form;
