import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Form, Input , Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { RcFile, UploadChangeParam } from 'antd/lib/upload/interface';

interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface IProps {
  onAdd: (product: IProduct) => void;
}

const AddProductPage = (props: IProps) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  const onFinish = (values: any) => {
    props.onAdd({ ...values, image: imageUrl });
    navigate('/admin/products');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleUpload = (file: RcFile) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    return false;
  };

  const handleRemove = () => {
    setImageUrl(undefined);
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  
  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  return (
    <div>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 1000, margin: '0 auto' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Tên Sản Phẩm'
          name='name'
          rules={[{ required: true, message: 'Vui Lòng Nhập Tên Sản Phẩm' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Giá Tiền'
          name='price'
          rules={[{ required: true, message: 'Vui Lòng Nhập Giá Tiền' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Ảnh'
          name='image'
          rules={[{ required: true, message: 'Ảnh không được bỏ trống' }]}
        >
          <Upload
            accept='image/*'
            listType='picture-card'
            showUploadList={false}
            beforeUpload={handleUpload}
            onRemove={handleRemove}
          >
            {imageUrl ? (
              <img src={imageUrl} alt='product' style={{ width: '100%' }} />
            ) : (
              <div>
                <UploadOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>

        <Form.Item
          label='Mô Tả'
          name='description'
          rules={[{ required: true, message: 'Vui Lòng Nhập Mô Tả' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label='Category'
          name='category'
          rules={[{ required: true, message: 'Vui Lòng Nhập Mô Tả' }]}
        >
           <Select
    showSearch
    style={{ width: 160 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Danh Muc A',
        label: 'Danh Muc A',
      },
      {
        value: 'Danh Muc B',
        label: 'Danh Muc B',
      },
      {
        value: 'Danh Muc C',
        label: 'Danh Muc C',
      },
    ]}
  />
        </Form.Item>

       

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Thêm Sản Phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProductPage;