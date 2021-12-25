import { useState } from 'react';
import Input from './Components/Input';
import Textarea from './Components/Textarea';
import Field from './Components/Field';
import Button from './Components/Button';
import Modal from './Components/Modal';
import Alert from './Components/Alert';
import Select from './Components/Select';
import ListGroup from './Components/ListGroup';

function App() {
  const [showingConfirmationModal, setShowingConfirmationModal] =
    useState(false);

  return (
    <main className='min-h-screen bg-gray-50'>
      <div className='max-w-2xl'>
        <Alert dismissable>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Alert>
      </div>

      <div className='space-y-3'>
        <div className='max-w-md'>
          <ListGroup>
            <ListGroup.Item>1. Mecury</ListGroup.Item>
            <ListGroup.Item>2. Venus</ListGroup.Item>
            <ListGroup.Item>3. Earth</ListGroup.Item>
            <ListGroup.Item>4. Mars</ListGroup.Item>
          </ListGroup>
        </div>

        <Select>
          <Select.Option>Mecury</Select.Option>
          <Select.Option>Venus</Select.Option>
          <Select.Option>Earth</Select.Option>
          <Select.Option>Mars</Select.Option>
        </Select>

        <Field htmlFor='email' label='Email' help='Enter your email'>
          <Input id='email' type='email' />
        </Field>

        <Field label='About' help='Enter a brief description about yourself.'>
          <Textarea />
        </Field>

        <Modal
          header='Create link'
          show={showingConfirmationModal}
          onClose={() => setShowingConfirmationModal(false)}
        >
          <div className='p-4'></div>
          <footer className='bg-gray-100 px-4 py-3 sm:flex sm:justify-end'>
            <Button
              className='w-full sm:w-auto'
              color='white'
              onClick={() => setShowingConfirmationModal(false)}
            >
              Cancel
            </Button>
            <Button className='w-full sm:w-auto mt-3 sm:mt-0 sm:ml-3'>
              Create
            </Button>
          </footer>
        </Modal>

        <Button>Submit</Button>
        <Button onClick={() => setShowingConfirmationModal(true)}>
          Delete
        </Button>
      </div>
    </main>
  );
}

export default App;
