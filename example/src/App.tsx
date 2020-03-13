import * as React from 'react';
import {
  AntdInput,
  SubmitButton,
  ResetButton,
  FormState,
  AntdCheckbox,
  AntdInputNumber,
  AntdSelect,
  AntdRadio,
  AntdRate,
  AntdSwitch,
  AntdSlider,
  AntdTransfer,
  AntdCascader,
  AntdTable,
} from 'antd-final-form';
import { Form, Field } from 'react-final-form';
import { FieldValidator } from 'final-form';
import 'antd/dist/antd.css';

const { Option } = AntdSelect;

export const required: FieldValidator<string | number> = (value: string | number) =>
  value ? undefined : '* Required';

interface Values {
  firstName?: string;
  lastName?: string;
  employed?: boolean;
  salary?: number;
  stooge?: [string];
  choice?: string;
  rating?: number;
  switch?: boolean;
  slider?: number;
  transfer?: string[];
  cascader?: string[];
  tableData?: object[];
}

const initialValues: Values = {
  firstName: 'Larry',
  lastName: 'Bird',
  employed: true,
  salary: 120000,
  choice: 'choice1',
  stooge: ['larry'],
  rating: 4,
  switch: true,
  slider: 30,
  transfer: ['1', '3'],
  cascader: ['path1', 'child1', 'child2'],
  tableData: [
    {
      id: '123',
      name: 'item 1',
      description: 'description 1',
    },
    {
      id: '124',
      name: 'item 2',
      description: 'description 2',
    },
  ],
};

const cascaderOptions: object[] = [
  {
    value: 'path1',
    label: 'Path 1',
    children: [
      {
        value: 'child1',
        label: 'Child 1',
        children: [
          {
            value: 'child2',
            label: 'Child 2',
          },
        ],
      },
    ],
  },
  {
    value: 'path2',
    label: 'Path 2',
    children: [
      {
        value: 'child1',
        label: 'Child 1',
        children: [
          {
            value: 'child2',
            label: 'Child 2',
          },
        ],
      },
    ],
  },
];

const mockData: object[] = [];

for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  });
}

const App: React.FC = () => (
  <Form
    onSubmit={(values): void => console.log(values)}
    initialValues={initialValues}
    render={({ handleSubmit }): React.ReactNode => (
      <form onSubmit={handleSubmit}>
        <Field
          label='First Name'
          name='firstName'
          validate={required}
          component={AntdInput}
          placeholder='First Name'
        />
        <Field name='lastName' label='Last Name' component={AntdInput} />
        <Field name='employed' type='checkbox' label='Employed' component={AntdCheckbox} />
        <Field
          label='Salary'
          formatter={(value: number): string => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          name='salary'
          component={AntdInputNumber}
        />
        <Field mode='multiple' label='Best Stooge' name='stooge' component={AntdSelect}>
          <Option value='larry'>Larry</Option>
          <Option value='moe'>Moe</Option>
          <Option value='curly'>Curly</Option>
        </Field>
        <Field type='radio' value='choice1' label='Choice 1' name='choice' component={AntdRadio} />
        <Field type='radio' value='choice2' label='Choice 2' name='choice' component={AntdRadio} />
        <Field label='Rating' name='rating' component={AntdRate} />
        <Field type='checkbox' label='Switch' name='switch' component={AntdSwitch} />
        <Field label='Slider' name='slider' component={AntdSlider} />
        <Field
          label='Transfer'
          name='transfer'
          render={(item): string => item.title}
          component={AntdTransfer}
          dataSource={mockData}
        />
        <Field
          options={cascaderOptions}
          label='Cascader'
          name='cascader'
          component={AntdCascader}
        />
        <Field
          columns={[
            {
              title: 'Name',
              key: 'name',
              render: (text: string, record: object, i: number): React.ReactNode => {
                return <Field component={AntdInput} name={`tableData.${i}.name`} />;
              },
            },
            {
              title: 'Description',
              key: 'description',
              dataIndex: 'description',
            },
            {
              key: 'actions',
              title: 'Actions',
              render: (text: string, record: object, i: number): JSX.Element => (
                <Field
                  component={AntdInput}
                  style={{ border: 'none' }}
                  name='tableData'
                  index={i}
                />
              ),
            },
          ]}
          pagination={false}
          label='Table'
          name='tableData'
          component={AntdTable}
        />
        <SubmitButton>Submit</SubmitButton>
        <ResetButton type='danger'>Reset</ResetButton>
        <FormState />
      </form>
    )}
  />
);

export default App;
