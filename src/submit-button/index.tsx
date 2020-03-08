import * as React from 'react';
import { Button } from 'antd';
import { Field, FieldProps, FormSpy } from 'react-final-form';
import { ButtonProps } from 'antd/lib/button';

const SubmitButton = () => (
  <FormSpy>
    {(props) => (
      <button type='button' disabled={props.pristine} onClick={() => props.form.reset()}>
        Reset
      </button>
    )}
  </FormSpy>
);

export { SubmitButton };
export default SubmitButton;
