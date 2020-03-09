import * as React from 'react';
import { Button } from 'antd';
import { FormSpy } from 'react-final-form';
import { ButtonProps } from 'antd/lib/button';

const SubmitButton = ({ children, ...restProps }: ButtonProps) => (
  <FormSpy subscription={{ dirty: true, pristine: true, valid: true, submitting: true }}>
    {({ pristine, valid, submitting }) => (
      <Button
        loading={submitting}
        type='primary'
        htmlType='submit'
        disabled={valid && pristine}
        {...restProps}
      >
        {children}
      </Button>
    )}
  </FormSpy>
);

export default SubmitButton;
export { SubmitButton };
