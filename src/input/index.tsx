import * as React from 'react';
import { Input, Typography } from 'antd';

const { Text } = Typography;

const AntdInput = ({ input, meta, ...rest }: any): React.ReactElement => {
	return (
		<div>
			<Input {...input} {...rest} />
			{meta.error && meta.touched && <Text type="danger">{meta.error}</Text>}
		</div>
	);
};
export { AntdInput };
export default AntdInput;
