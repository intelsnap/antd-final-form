import * as React from 'react';
import { InputNumber, Typography } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import { FieldRenderProps } from 'react-final-form';

const { Text } = Typography;

type Props = FieldRenderProps<number>;

const AntdInputNumber: React.FC<Props> = ({ input, meta, label, ...rest }: Props) => {
  const isError = meta.error && meta.touched;
  return (
    <div>
      <label>{label}</label>
      <InputNumber {...input} {...rest} />
      {isError && <Text type='danger'>{meta.error}</Text>}
    </div>
  );
};

export default AntdInputNumber;
export { AntdInputNumber };
