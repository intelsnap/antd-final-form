import * as React from 'react'
import { Input, Typography } from 'antd'

export type FieldInputProps = {
  name: string
  onBlur: React.FocusEventHandler<HTMLInputElement>
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: React.FocusEventHandler<HTMLInputElement>
  value: any
  type?: string
  checked?: boolean
  multiple?: boolean
}

export type FieldMetaProps = {
  active?: boolean
  data?: Object
  dirty?: boolean
  dirtySinceLastSubmit?: boolean
  error?: any
  initial?: any
  invalid?: boolean
  length?: number
  modified?: boolean
  pristine?: boolean
  submitError?: any
  submitFailed?: boolean
  submitSucceeded?: boolean
  submitting?: boolean
  touched?: boolean
  valid?: boolean
  validating?: boolean
  visited?: boolean
}
export type FieldRenderProps = {
  input: FieldInputProps
  meta: FieldMetaProps
  isReadOnly: boolean
}


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
