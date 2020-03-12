import * as React from 'react';
import { Transfer, Typography } from 'antd';
import { TransferProps, TransferItem } from 'antd/lib/transfer';
import { FieldRenderProps } from 'react-final-form';

const { Text } = Typography;

type Props = FieldRenderProps<string[]> & TransferProps;

const AntdTransfer: React.FC<Props> = ({ input, meta, label, ...rest }: Props) => {
  const isError = meta.error && meta.touched;
  return (
    <div>
      <label>{label}</label>
      <Transfer targetKeys={input.value} {...input} {...rest} />
      {isError && <Text type='danger'>{meta.error}</Text>}
    </div>
  );
};

export default AntdTransfer;
export { AntdTransfer, TransferItem, TransferProps };
