import * as React from 'react';
import { Select, Typography } from 'antd';
import { FieldRenderProps } from 'react-final-form';
import { SelectProps } from 'antd/lib/select';

const { Text } = Typography;

type Props<T = any> = FieldRenderProps<string> & SelectProps<T> & { children?: React.ReactNode };

const AntdSelect = ({ input, meta, children, ...rest }: Props) => {
  const isError = meta.error && meta.touched;
  return (
    <span style={{ position: 'relative' }}>
      <Select {...input} {...rest} onChange={(value) => input.onChange(value)}>
        {children}
      </Select>
      {isError && <Text type='danger'>{meta.error}</Text>}
    </span>
  );
};

export default AntdSelect;
export { AntdSelect };

AntdSelect.Option = Select.Option;
AntdSelect.OptGroup = Select.OptGroup;
