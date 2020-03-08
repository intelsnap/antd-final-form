import * as React from 'react';
import { AntdInput } from 'antd-final-form';
import { Input } from 'antd';
import { Form, Field } from 'react-final-form';
import 'antd/dist/antd.css';

export default function App() {
  return (
    <Form
      onSubmit={(values) => console.log(values)}
      initialValues={{ firstName: 'Larry', lastName: 'Bird' }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field name='firstName' component={AntdInput} placeholder='First Name' />
          </div>
          <div>
            <label>Last Name</label>
            <Field name='lastName' component={AntdInput} placeholder='Last Name' />
          </div>

          <div className='buttons'>
            <button type='submit' disabled={submitting || pristine}>
              Submit
            </button>
            <button type='button' onClick={form.reset} disabled={submitting || pristine}>
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values)}</pre>
        </form>
      )}
    />
  );
}
