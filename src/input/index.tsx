import * as React from 'react';
import { Input, Typography } from 'antd';
import { FieldRenderProps } from 'react-final-form';

const { Text } = Typography;

type Props = FieldRenderProps<string>;

const AntdInput: React.FC<Props> = ({ input, meta, label, ...rest }: Props) => {
  const isError = meta.error && meta.touched;
  return (
    <div>
      <label>{label}</label>
      <Input {...input} {...rest} />
      {isError && <Text type='danger'>{meta.error}</Text>}
    </div>
  );
};

export default AntdInput;
export { AntdInput };
