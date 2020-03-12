import * as React from 'react';
import { Rate, Typography } from 'antd';
import { RateProps } from 'antd/lib/rate';
import { FieldRenderProps } from 'react-final-form';

const { Text } = Typography;

type Props = FieldRenderProps<number> & RateProps;

const AntdRate: React.FC<Props> = ({ input, meta, label, ...rest }: Props) => {
  const isError = meta.error && meta.touched;
  return (
    <div>
      <label>{label}</label>
      <Rate {...input} {...rest} />
      {isError && <Text type='danger'>{meta.error}</Text>}
    </div>
  );
};

export default AntdRate;
export { AntdRate };
