import * as React from 'react';
import { AntdInput, SubmitButton, ResetButton, FormState } from 'antd-final-form';
import { Form, Field } from 'react-final-form';
import 'antd/dist/antd.css';

export const required = (value: string | number) => (value ? undefined : '* Required');

export default function App() {
  return (
    <Form
      onSubmit={(values) => console.log(values)}
      initialValues={{ firstName: 'Larry', lastName: 'hello' }}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            label='test'
            name='firstName'
            validate={required}
            component={AntdInput}
            placeholder='First Name'
          />
          <Field name='lastName' label='Last Name' component={AntdInput} />
          <SubmitButton onClick={() => console.log(values)}>Submit</SubmitButton>
          <ResetButton type='danger'>Reset</ResetButton>
          <FormState />
        </form>
      )}
    />
  );
}
