import * as React from 'react';
import {
  AntdInput,
  SubmitButton,
  ResetButton,
  FormState,
  AntdCheckbox,
  AntdInputNumber,
  AntdSelect
} from 'antd-final-form';
import { Form, Field } from 'react-final-form';
import 'antd/dist/antd.css';

const { Option } = AntdSelect;

export const required = (value: string | number) => (value ? undefined : '* Required');

interface Values {
  firstName?: string;
  lastName?: string;
  employed?: boolean;
  salary?: number;
  stooge?: [string];
}

const initialValues: Values = {
  firstName: 'Larry',
  lastName: 'Bird',
  employed: true,
  salary: 120000,
  stooge: [ 'larry' ]
};

const App: React.FC = () => (
  <Form
    onSubmit={(values) => console.log(values)}
    initialValues={initialValues}
    render={({ handleSubmit, values }) => (
      <form onSubmit={handleSubmit}>
        <Field
          label='First Name'
          name='firstName'
          validate={required}
          component={AntdInput}
          placeholder='First Name'
        />
        <Field name='lastName' label='Last Name' component={AntdInput} />
        <Field name='employed' type='checkbox' label='Employed' component={AntdCheckbox} />
        <Field
          label='Salary'
          formatter={(value: number) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          name='salary'
          component={AntdInputNumber}
        />
        <Field mode='multiple' label='Best Stooge' name='stooge' component={AntdSelect}>
          <Option value='larry'>Larry</Option>
          <Option value='moe'>Moe</Option>
          <Option value='curly'>Curly</Option>
        </Field>
        <SubmitButton>Submit</SubmitButton>
        <ResetButton type='danger'>Reset</ResetButton>
        <FormState />
      </form>
    )}
  />
);

export default App;
