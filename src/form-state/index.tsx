import { FormSpy } from 'react-final-form';
import * as React from 'react';

export const isDevelopmentMode = () =>
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const FormState = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) =>
  isDevelopmentMode() ? (
    <FormSpy subscription={{ values: true, touched: true }}>
      {({ values, touched }: any) => (
        <div>
          <pre style={{ padding: 15, ...props }}>Values: {JSON.stringify(values, null, 2)}</pre>
          <pre style={{ padding: 15, ...props }}>Touched: {JSON.stringify(touched, null, 2)}</pre>
        </div>
      )}
    </FormSpy>
  ) : null;

export default FormState;
export { FormState };
