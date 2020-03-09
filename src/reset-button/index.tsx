import * as React from 'react';
import { Button } from 'antd';
import { FormSpy } from 'react-final-form';
import { ButtonProps } from 'antd/lib/button';

const ResetButton = ({ children, onClick, ...restProps }: ButtonProps) => (
  <FormSpy>
    {(props) => (
      <Button
        type='primary'
        disabled={props.pristine}
        onClick={(event) => {
          onClick && onClick(event);
          props.form.reset();
        }}
        {...restProps}
      >
        {children}
      </Button>
    )}
  </FormSpy>
);

export { ResetButton };
export default ResetButton;
