import * as React from 'react';
import { Slider, Typography } from 'antd';
import { SliderProps, SliderValue } from 'antd/lib/slider';
import { FieldRenderProps } from 'react-final-form';

const { Text } = Typography;

type Props = FieldRenderProps<SliderValue> & SliderProps;

const AntdSlider: React.FC<Props> = ({ input, meta, label, ...rest }: Props) => {
  const isError = meta.error && meta.touched;
  return (
    <div>
      <label>{label}</label>
      <Slider {...input} {...rest} />
      {isError && <Text type='danger'>{meta.error}</Text>}
    </div>
  );
};

export default AntdSlider;
export { AntdSlider };
