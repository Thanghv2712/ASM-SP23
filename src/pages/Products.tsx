import React from 'react'
import { Table, Divider , Button , Space  } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { IProduct } from '../types/product';

interface IProps {
  product: IProduct[],
  onRemove: (id: number) => void
}

const ProductPage = (props: IProps) => {
    // console.log(props)
    // return 
    const removeProduct = (id: number) => {
      props.onRemove(id)
  }
    const data = props.product.map((item)=>{
        return  {
            key : item.id , 
            name : item.name , 
            price : item.price,
            desc : item.desc,
            image : <img src={item.image} alt="" />,
            category : item.category
        }
    })
    interface DataType {
      key: string | number;
      id: number;
      name: string;
      price: number;
      desc : string;
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
              render: (record) => (
                
              
                
                <Space size="middle">
              <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record.key)}>Remove</Button>
              
                 <Button type="primary"><Link to={``}>Update</Link></Button>
                </Space>
                
              ),
             
            },
          ];
          return (
            <Table columns={columns} dataSource={data} />
            )
        
    
  
}

export default ProductPage