import * as React from 'react';
import { Radio, Typography } from 'antd';
import { FieldRenderProps } from 'react-final-form';
import { RadioGroupProps } from 'antd/lib/radio';

const { Text } = Typography;

type Props = FieldRenderProps<string> & RadioGroupProps;

const AntdRadio: React.FC = ({ input, meta, label, ...rest }: Props) => {
  const isError = meta.error && meta.touched;
  return (
    <div>
      <label>{label}</label>
      <Radio {...input} {...rest} />
      {isError && <Text type='danger'>{meta.error}</Text>}
    </div>
  );
};

export default AntdRadio;
export { AntdRadio };
