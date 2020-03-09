import * as React from 'react';
import { Button } from 'antd';
import { FormSpy } from 'react-final-form';
import { ButtonProps } from 'antd/lib/button';

const ResetButton = ({ children, ...restProps }: ButtonProps) => (
  <FormSpy>
    {(props) => (
      <Button
        type='primary'
        disabled={props.pristine}
        onClick={() => props.form.reset()}
        {...restProps}
      >
        {children}
      </Button>
    )}
  </FormSpy>
);

export { ResetButton };
export default ResetButton;
