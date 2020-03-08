# antd-final-form

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Simple declarative bindings for Ant Design and React Final Form.

## Core Concept

This library enriches several Ant Design components with props that connects them to a Final-Form field. It is quite simple. Instead of importing your form components from antd, you need to import them from 'antd-final-form' and set their `name` prop.

The Ant Design components are feature rich and provide a lot of props to customize their visual presentation. These features and also their apis stay exactly the same. Visit their documentation to learn more.

### Example:

```tsx
import * as React from 'react';
import { AntdInput } from 'antd-final-form';
import { Form, Field } from 'react-final-form';
import 'antd/dist/antd.css';

export const required = (value: string | number) => (value ? undefined : '* Required');

export default function App() {
  return (
    <Form
      onSubmit={(values) => console.log(values)}
      initialValues={{ firstName: 'Larry', lastName: 'hello' }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            label='test'
            name='firstName'
            validate={required}
            component={AntdInput}
            placeholder='First Name'
          />
          <Field name='lastName' label='Last Name' component={AntdInput} />
          <pre>{JSON.stringify(values)}</pre>
        </form>
      )}
    />
  );
}
```

## Getting started

```
npm install antd-final-form
```

Add `import "antd/dist/antd.css"` to your `index.js` file.

## Core Components

|                    | Name  | Props                                              |
| ------------------ | ----- | -------------------------------------------------- |
| :white_check_mark: | Input | [InputProps](https://ant.design/components/input/) |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/arif-hanif"><img src="https://avatars1.githubusercontent.com/u/8672758?v=4" width="100px;" alt=""/><br /><sub><b>Arif Hanif</b></sub></a><br /><a href="https://github.com/intelsnap/antd-final-form/commits?author=arif-hanif" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
