import * as React from 'react';
import { AntdInput, SubmitButton } from 'antd-final-form';
import { Form, Field, FormSpy } from 'react-final-form';
import 'antd/dist/antd.css';

export const required = (value: string | number) => (value ? undefined : '* Required');

export default function App() {
  return (
    <Form
      onSubmit={(values) => console.log(values)}
      initialValues={{ firstName: 'Larry', lastName: 'hello' }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            label='test'
            name='firstName'
            validate={required}
            component={AntdInput}
            placeholder='First Name'
          />
          <Field name='lastName' label='Last Name' component={AntdInput} />
          <SubmitButton />
          <pre>{JSON.stringify(values)}</pre>
        </form>
      )}
    />
  );
}
