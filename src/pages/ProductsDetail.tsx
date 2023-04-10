import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Button } from 'antd/es/radio';
import { Link, useParams } from 'react-router-dom';

const ProductsDetail = (props) => {
  const { id } = useParams()
  console.log({id})

  const [Product, SetProduct] = useState({})
  useEffect(() => {
      SetProduct(props.product.find(product => product.id == id))
  })

  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'desc',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: 'image',
      dataIndex: 'image',
      key: 'image',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
      },
   
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
         <Button type="primary"><Link to={``}>Update</Link></Button>
        </Space>
      ),
    },
  ];
  return (
      <div>
        <Table columns={columns}  />
          <h1>Product Detail</h1>
          <table border={1}> 
            <thead>
              <tr>
    <th>Product Name</th>
    <th>Price</th>
    <th>DESc</th>
    <th>image</th>
    <th>CateGory</th>
              </tr>
   
            </thead>
            <tbody>
              <tr>
                <td>{Product?.name}</td>
                <td>{Product?.price}</td>
                <td>{Product?.desc}</td>
                <td> <img src={Product?.image} alt="" />
                </td>
                <td>{Product?.category}</td>
              </tr>
            </tbody>
          </table>
      </div>
  
  )
}



export default ProductsDetail