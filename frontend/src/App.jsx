import { Button, Table, Image, Modal, Input, Form, Select } from 'antd';
import { DeleteFilled, DeleteOutlined, EditFilled, EditOutlined, PlusOutlined } from '@ant-design/icons';
import adityaImg from "./assets/P Aditya Patro_Profile.jpg";
import { useState } from 'react';

const App = () => {
  const [modal, setModal] = useState(false);

  const columns = [
  { title: "Profile", key: "profile", dataIndex: "profile" },
  { title: "Name", key: "name", dataIndex: "name" },
  { title: "Email", key: "email", dataIndex: "email" },
  { title: "Mobile", key: "mobile", dataIndex: "mobile" },
  { title: "DOB", key: "dob", dataIndex: "dob" },
  { title: "Gender", key: "gender", dataIndex: "gender" },
  { title: "Address", key: "address", dataIndex: "address" },
  { title: "Action", key: "action", dataIndex: "action",
    render: () => (
      <div>
      <Button 
          style={{ color: "green"}}
          icon={<EditFilled />}
          shape='circle'
          type='text'
        />
        <Button 
          style={{ color: "red"}}
          icon={<DeleteFilled />}
          shape='circle'
          type='text'
        />
      </div>
    )
   },
];
const data = [
  {
    profile: <Image className='rounded-full object-cover' width={80}   src={adityaImg} />,
    name: 'Just for code',
    email:'xxyy@gamail.com',
    mobile: '7894777990',
    dob: '04-12-2001',
    gender: 'Male',
    address: 'xxusud',
  },
  {
    profile: <Image className='rounded-full object-cover' width={80}   src={adityaImg} />,
    name: 'Just for code',
    email:'xxyy@gamail.com',
    mobile: '7894777990',
    dob: '04-12-2001',
    gender: 'Male',
    address: 'xxusud',
  },
  {
    profile: <Image className='rounded-full object-cover' width={80}   src={adityaImg} />,
    name: 'Just for code',
    email:'xxyy@gamail.com',
    mobile: '7894777990',
    dob: '04-12-2001',
    gender: 'Male',
    address: 'xxusud',
  },
  {
    profile: <Image className='rounded-full object-cover' width={80}   src={adityaImg} />,
    name: 'Just for code',
    email:'xxyy@gamail.com',
    mobile: '7894777990',
    dob: '04-12-2001',
    gender: 'Male',
    address: 'xxusud',
  },
  {
    profile: <Image className='rounded-full object-cover' width={80}   src={adityaImg} />,
    name: 'Just for code',
    email:'xxyy@gamail.com',
    mobile: '7894777990',
    dob: '04-12-2001',
    gender: 'Male',
    address: 'xxusud',
  },
]

  return (
    <div className='min-h-screen bg-rose-100 flex flex-col items-center'>
    <div className='flex rounded justify-between items-center bg-blue-600 w-10/12 my-5 p-4'>
      <h1 className='capitalize font-bold text-center text-white text-2xl md:text-5xl'>Mern Crud Operation</h1>
      <Button
  shape="circle"
  size="large"
  style={{ backgroundColor: "#15803d", color: "white" }}
  type='text'
  icon={<PlusOutlined />}
  onClick={() => setModal(true)}
/>
    </div>
    <Table 
      className="w-10/12"
      columns={columns}
      dataSource={data}
      pagination={{pageSize: 2}}
      scroll={{ x: 'max-content' }}
    />
    <Modal
    open={modal}
    onCancel={() => setModal(false) }
    footer={null}
    title={
      <h1 className='text-xl font-semibold'>Registration Form</h1>
    }
     >
      <Form layout='vertical' className="font-semibold">
        <div className='grid md:grid-cols-2 gap-x-2'>
          <Form.Item
  label="Profile"
  name="profile"
>
  <Input type="file" style={{ borderRadius: 0 }} />
</Form.Item>

<Form.Item
  label="Full Name"
  name="name"
  rules={[{ required: true, message: "Please enter name" }]}
>
  <Input size="large" style={{ borderRadius: 0 }} />
</Form.Item>

<Form.Item
  label="Email"
  name="email"
  rules={[{ required: true, message: "Please enter email" }]}
>
  <Input size="large" style={{ borderRadius: 0 }} />
</Form.Item>

<Form.Item
  label="Mobile"
  name="mobile"
  rules={[{ required: true, message: "Please enter mobile number" }]}
>
  <Input size="large" style={{ borderRadius: 0 }} />
</Form.Item>

<Form.Item
  label="DOB"
  name="dob"
  rules={[{ required: true, message: "Please select DOB" }]}
>
  <Input type="date" size="large" style={{ borderRadius: 0 }} />
</Form.Item>

<Form.Item
  label="Gender"
  name="gender"
  rules={[{ required: true, message: "Please select gender" }]}
>
  <Select
    placeholder="Select Gender"
    size="large"
    style={{ borderRadius: 0 }}
  >
    <Select.Option value="Male">Male</Select.Option>
    <Select.Option value="Female">Female</Select.Option>
  </Select>
</Form.Item>

<Form.Item
  label="Address"
  name="address"
  rules={[{ required: true, message: "Please enter address" }]}
  className="md:col-span-2"
>
  <Input.TextArea
    rows={3}
    style={{ borderRadius: 0, width: "100%" }}
  />
</Form.Item>

        </div>
        <Button
  className="w-full font-semibold text-white bg-blue-600"
  size="large"
   style={{
    width: "100%",
    fontWeight: 600,
    color: "#ffffff",
    backgroundColor: "#2563eb", // blue-600
    borderRadius: 0
  }}
  icon={<PlusOutlined />}
>
  Register Now
</Button>
      </Form>
     </Modal>
    </div>
  )
}

export default App;
