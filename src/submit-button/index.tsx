import * as React from 'react';
import { Button } from 'antd';
import { Field, FieldProps, FormSpy } from 'react-final-form';
import { ButtonProps } from 'antd/lib/button';

const SubmitButton = () => (
  <FormSpy>
    {(props) => (
      <Button type='primary' disabled={props.pristine} onClick={() => props.form.reset()}>
        Reset
      </Button>
    )}
  </FormSpy>
);

export { SubmitButton };
export default SubmitButton;
