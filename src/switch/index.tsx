import * as React from 'react';
import { Switch, Typography } from 'antd';
import { SwitchProps } from 'antd/lib/switch';
import { FieldRenderProps } from 'react-final-form';

const { Text } = Typography;

type Props = FieldRenderProps<boolean> & SwitchProps;

const AntdSwitch: React.FC<Props> = ({ input, meta, label, ...rest }: Props) => {
  const isError = meta.error && meta.touched;
  return (
    <div>
      <label>{label}</label>
      <Switch {...input} {...rest} />
      {isError && <Text type='danger'>{meta.error}</Text>}
    </div>
  );
};

export default AntdSwitch;
export { AntdSwitch };
