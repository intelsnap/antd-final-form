import * as React from 'react';
import { Checkbox } from 'antd';
import { FieldRenderProps } from 'react-final-form';
import { CheckboxProps } from 'antd/lib/checkbox/Checkbox';

export type Props = FieldRenderProps<boolean> & CheckboxProps;

const AntdCheckbox: React.FC<Props> = ({ input, label, ...rest }: Props) => (
  <div>
    <Checkbox {...input} {...rest} checked={input.checked}>
      {label}
    </Checkbox>
  </div>
);

export default AntdCheckbox;
export { AntdCheckbox };
