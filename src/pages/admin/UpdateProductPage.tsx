import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input , Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { RcFile, UploadChangeParam } from 'antd/lib/upload/interface';
import { useNavigate, useParams } from 'react-router-dom';


interface IProduct {
   key: string | number;
  id: number;
  name: string;
  price: number;
  image: string;
  desc: string;
  category : string;
}


interface IProps {
  product: IProduct[],
  onUpdate: (product: IProduct) => void;
}


const UpdateProductPage = (props: IProps) => {


const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);


  const onFinish = (values: any) => {
    props.onUpdate({ ...values, image: imageUrl });
    navigate('/admin/products');
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

const { id } = useParams()
// const navigate = useNavigate()
// const { register, handleSubmit, reset } = useForm()
// useEffect(() => {
//     const currentProduct = props.products.find((product) => product.id === Number(id))
//     reset(currentProduct)
// }, [props])
// const onHandleSubmit = data => {
//     props.onUpdate(data);
// }



const [product, setProduct] = useState<IProduct>() // khởi tạo biến state product có kiểu dữ liệu là IProduct
useEffect(() => { // khi props thay đổi thì sẽ chạy useEffect này
    const currentProduct = props.product.find((product: IProduct) => product.id == Number(id))
    // tìm trong mảng props.products có phần tử nào có id trùng với id trên url không
    setProduct(currentProduct) // nếu có thì set lại giá trị cho biến product
}, [props])
useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
    setFields() // gọi hàm setFields để set lại giá trị cho các input
}, [product])
const [form] = Form.useForm();
// khởi tạo một instance của Form và gán vào biến form
// Instance của form là một đối tượng được tạo ra bởi Ant Design để thực hiện các chức năng của form trong React

const setFields = () => {// hàm này để set lại giá trị cho các input
    form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
        id: product?.id,
        name: product?.name,
        price: product?.price,
        desc: product?.desc,
        image : product?.image,
        category : product?.category
    })
}

  return (
    <div>
        <Form form={form}
    name="basic"
    labelCol={{ span: 8 }}
    style={{ maxWidth: 600 }}
    onFinish={onFinish}
    
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input your name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Price"
      name="price"
      rules={[{ required: true, message: 'Please input your Price!' }]}
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
      label="desc"
      name="desc"
      rules={[{ required: true, message: 'Please input your desc!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="category"
      name="category"
      rules={[{ required: true, message: 'Please input your category!' }]}
    >
      <Input />
    </Form.Item>




    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Update
      </Button>
    </Form.Item>
  </Form></div>
  )
}


export default UpdateProductPage