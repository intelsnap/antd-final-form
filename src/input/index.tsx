import * as React from 'react'
import { Input, Typography } from 'antd'
import { FieldRenderProps } from '../types'

const { Text } = Typography

const AntdInput = ({ input, meta, isReadOnly, ...rest }: FieldRenderProps) => {
  if (isReadOnly) {
    return <span>{input.value}</span>
  }
  return (
    <>
      <Input {...input} {...rest} />
      {meta.error && meta.touched && <Text type='danger'>{meta.error}</Text>}
    </>
  )
}

export default AntdInput
