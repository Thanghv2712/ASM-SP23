import React, { useState } from 'react';
import { Col, Divider, Row, Card, Slider, InputNumber } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const style: React.CSSProperties = { background: '#ffffff', padding: '8px 0' };

const ProductPage = (props) => {

    const [inputValue, setInputValue] = useState(1);

    const onChange = (newValue: number) => {
        setInputValue(newValue);
    };

    return (
        <div>
            <Divider orientation="left">PRODUCT</Divider>
            <Row>
                <Col span={18} push={6}>
                    <Row gutter={[16, 24]}>
                        {props.product.map((item) => {
                            return <Col key={item.id} className="gutter-row" span={6}>
                                <div style={style}>
                                    <Link to={`/products/${item.id}`}>
                                        <Card
                                            hoverable
                                            style={{ width: 300, margin: 'auto', padding: 5 }}
                                            cover={<img alt="example" src={item.image} />}
                                        >
                                            <Meta
                                                title={item.name} description={item.price}
                                            />
                                        </Card>
                                    </Link>
                                </div>
                            </Col>
                        })}
                    </Row>
                </Col>
                <Col span={6} pull={18} style={{ padding: 30 }}>
                    <Row>
                        <Col span={12}>
                            <Slider
                                min={0}
                                max={1000000}
                                onChange={onChange}
                                value={typeof inputValue === 'number' ? inputValue : 0}
                                step={10000}
                            />
                        </Col>
                        <Col span={4}>
                            <InputNumber
                                min={0}
                                max={1000000}
                                style={{ margin: '0 16px' }}
                                value={inputValue}
                                onChange={onChange}
                                step={10000}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

// {props.products.map((item) => {
//     return <div key={item.id}>
//         <h2>{item.name}</h2>
//     </div>

// })}

export default ProductPage