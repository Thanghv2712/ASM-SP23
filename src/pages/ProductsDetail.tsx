import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb, Button, Col, Rate, Row } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const ProductsDetail = (props) => {

  const { id } = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
      setProduct(props.product.find(product => product.id == id))
  })

  const [value, setValue] = useState(4);
  return (
    <div>
    <Row style={{ padding: 50 }}>
        <Col span={12}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Products</Breadcrumb.Item>
                <Breadcrumb.Item>{product?.name}</Breadcrumb.Item>
            </Breadcrumb>
            <img alt="example" src={product?.image} />
        </Col>
        <Col span={12}>
            <h1>Tên sản phẩm: {product?.name}</h1>
            <span>
                <Rate tooltips={desc} onChange={setValue} value={value} />
                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
            </span>
            <div style={{ paddingBottom: 30, paddingTop: 30 }}>
                <span>{product?.price}đ</span>
            </div>
            <p>{product?.desc}</p>
            <Button type="primary">Mua sản phẩm</Button>
        </Col>
    </Row>
</div>
  
  )
}



export default ProductsDetail