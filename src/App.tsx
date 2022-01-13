import { useState } from 'react';
import Input from './Components/Input';
import Textarea from './Components/Textarea';
import Field from './Components/Field';
import Button from './Components/Button';
import Modal from './Components/Modal';
import Alert from './Components/Alert';
import Select from './Components/Select';
import ListGroup from './Components/ListGroup';
import Dropdown from './Components/Dropdown';
import Switch from './Components/Switch';
import Badge from './Components/Badge';
import Card from './Components/Card';
import Breadcrumb from './Components/Breadcrumb';
// import Tooltip from './Components/Tooltip';

function App() {
  const [showingConfirmationModal, setShowingConfirmationModal] =
    useState(false);

  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <main className='min-h-screen space-y-6 bg-gray-50'>
      <div className='max-w-2xl space-y-2'>
        <Alert dismissable>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Alert>
        <Alert dismissable color='secondary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Alert>
        <Alert dismissable color='success'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          fuga eveniet cum iure molestiae sapiente veniam ipsum nemo, modi ipsa,
          nesciunt natus nobis in dignissimos necessitatibus blanditiis fugit
          quidem quos.
        </Alert>
        <Alert dismissable color='danger'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Alert>
        <Alert dismissable color='warning'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Alert>
        <Alert dismissable color='info'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Alert>
      </div>

      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href='/home'>Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href='/mecury'>Astronomy</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href='/planets'>Planets</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Venus</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className='max-w-lg'>
        <Card>
          <Card.Header>
            Agenda
          </Card.Header>
          <Card.Image src='https://i.imgur.com/qGlsV0i.jpg' />
          <Card.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            repudiandae, repellendus nemo doloremque placeat unde quis adipisci
            officiis iusto dolores suscipit? Perferendis fugit nihil commodi
            cumque sapiente amet odio voluptates.
          </Card.Content>
        </Card>
      </div>

      <div className='space-x-2'>
        <Badge color='primary'>Mecury</Badge>
        <Badge color='secondary'>Venus</Badge>
        <Badge color='success'>Earth</Badge>
        <Badge color='danger'>Mars</Badge>
        <Badge color='warning'>Jupiter</Badge>
        <Badge color='info'>Saturn</Badge>
      </div>

      <div className='space-x-2'>
        <Button color='white'>Submit</Button>
        <Button>Submit</Button>
        <Button color='secondary'>Submit</Button>
        <Button color='success'>Submit</Button>
        <Button color='danger'>Submit</Button>
        <Button color='warning'>Submit</Button>
        <Button color='info'>Submit</Button>
      </div>

      <div className='flex space-x-2'>
        <Switch value={isAdmin} onChange={setIsAdmin} />
        <Switch value={isAdmin} onChange={setIsAdmin} color='secondary' />
        <Switch value={isAdmin} onChange={setIsAdmin} color='success' />
        <Switch value={isAdmin} onChange={setIsAdmin} color='danger' />
        <Switch value={isAdmin} onChange={setIsAdmin} color='warning' />
        <Switch value={isAdmin} onChange={setIsAdmin} color='info' />
      </div>

      <div className='max-w-md'>
        <ListGroup>
          <ListGroup.Item>1. Mecury</ListGroup.Item>
          <ListGroup.Item>2. Venus</ListGroup.Item>
          <ListGroup.Item>3. Earth</ListGroup.Item>
          <ListGroup.Item>4. Mars</ListGroup.Item>
        </ListGroup>
      </div>

      <Dropdown>
        <Dropdown.Trigger>
          <Button>Contact</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Link href='https://twitter.com'>Twitter</Dropdown.Link>
          <Dropdown.Link href='https://facebook.com'>Facebook</Dropdown.Link>
        </Dropdown.Content>
      </Dropdown>

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
        <footer className='px-4 py-3 bg-gray-100 sm:flex sm:justify-end'>
          <Button
            className='w-full sm:w-auto'
            color='white'
            onClick={() => setShowingConfirmationModal(false)}
          >
            Cancel
          </Button>
          <Button className='w-full mt-3 sm:w-auto sm:mt-0 sm:ml-3'>
            Create
          </Button>
        </footer>
      </Modal>

      <Button onClick={() => setShowingConfirmationModal(true)}>Create</Button>
    </main>
  );
}

export default App;
