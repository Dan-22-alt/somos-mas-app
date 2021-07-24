# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Chakra IU install`

Dentro de su directorio de proyecto React, instale la interfaz de usuario de Chakra ejecutando lo siguiente:<br />
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4.

lugo realice la siguiente configuracion del ChakraProvider en la raíz de la aplicacion (archivo index.js):<br />
import { ChakraProvider } from "@chakra-ui/react"

    <ChakraProvider>
        <App />
    </ChakraProvider>

# Alert component

## Usage

```javascript
import { useState } from 'react';
import { Alert } from '../components';

//...

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Test button</button>

      <Alert
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Alert title"
        description="Alert description"
        onConfirm={() => console.log('onConfirm')}
        type="error"
        hasFeedback
        feedbackTitle="Feedback Title"
        feedbackDescription="Feedback description"
        feedbackType="info"
      />
    </>
  );
};
```

## Props

| prop                | default value | description                                                        | required |
| ------------------- | ------------- | ------------------------------------------------------------------ | -------- |
| isOpen              | null          | If true, the alert will be open.                                   | true     |
| setIsOpen           | null          | Allows to change the isOpen variable                               | true     |
| title               | ""            | Title of the alert                                                 | false    |
| type                | "success"     | Determines the variant of the alert ("error","success","info")     | false    |
| onConfirm           | null          | allows to pass a function to be executed when confirming the alert | false    |
| confirmButtonText   | "Aceptar"     | Determines the text of the confirm button                          | false    |
| cancelButtonText    | "Cancelar"    | Determines the text of the cancel button                           | false    |
| hasFeedback         | false         | If true, enables the feedback functionality (toast)                | false    |
| feedbackTitle       | ""            | Title of the feedback (toast)                                      | false    |
| feedbackDescription | ""            | Description of the feedback (toast)                                | false    |
| feedbackType        | "success"     | Determines the variant of the feedback ("error","success","info")  | false    |
| feedbackDuration    | 9000          | Determines the duration of the feedback (toast)                    | false    |
