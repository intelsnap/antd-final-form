import * as React from 'react';
import { Cascader, Typography } from 'antd';
import { CascaderProps } from 'antd/lib/cascader';
import { FieldRenderProps } from 'react-final-form';

const { Text } = Typography;

type Props = FieldRenderProps<string[]> & CascaderProps;

const AntdCascader: React.FC<Props> = ({ input, meta, label, ...rest }: Props) => {
  const isError = meta.error && meta.touched;
  return (
    <div>
      <label>{label}</label>
      <Cascader {...input} {...rest} />
      {isError && <Text type='danger'>{meta.error}</Text>}
    </div>
  );
};

export default AntdCascader;
export { AntdCascader };
