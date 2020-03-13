import * as React from 'react';
import { Table } from 'antd';
import { FieldRenderProps } from 'react-final-form';
import { TableProps } from 'antd/lib/table';

export interface AntdTableProps {
  AddRowButton: React.FC;
}

type Props = FieldRenderProps & TableProps & AntdTableProps;

const AntdTable: Props = ({ input, ...rest }: Props) => {
  return <Table dataSource={input.value || []} {...rest} />;
};

const AddRowButton: React.FC = () => <div>Add Row</div>;

export default AntdTable;
export { AntdTable };

AntdTable.AddRowButton = AddRowButton;
