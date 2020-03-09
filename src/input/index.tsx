import * as React from 'react';
import { Input, Typography } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import { FieldRenderProps } from 'react-final-form';

const { Text } = Typography;

type Props = FieldRenderProps<string>;

const AntdInput: React.FC<Props> = ({ input, meta, label, ...rest }: Props) => {
  const isError = meta.error && meta.touched;
  return (
    <div>
      <label>{label}</label>
      <Input {...input} {...rest} />
      {meta.error && meta.touched && <Text type='danger'>{meta.error}</Text>}
    </div>
  );
};

export default AntdInput;
export { AntdInput };
