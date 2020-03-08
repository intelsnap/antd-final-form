import * as React from 'react';
import { Input, Typography } from 'antd';
import { FieldRenderProps } from 'react-final-form';

const { Text } = Typography;

type Props = FieldRenderProps<string>;

const AntdInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
  return (
    <div>
      <Input {...input} {...rest} />
      {meta.error && meta.touched && <Text type='danger'>{meta.error}</Text>}
    </div>
  );
};
export { AntdInput };
export default AntdInput;
