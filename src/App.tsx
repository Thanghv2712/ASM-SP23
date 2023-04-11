import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { addProduct, deleteProduct , getAllProduct, updateProduct} from './api/product'

import HomePage from './pages/HomePage'

import ProductsDetail from './pages/ProductsDetail'
import SignUp from './pages/auth/SignUp'

import { IProduct } from './types/product'
import WebsiteLayout from './layouts/WebLayout'
import ProductPage from './pages/Products'
import AdminLayout from './layouts/AdminLayout'

import ProductManagementPage from './pages/admin/ProductManagement'

import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProductPage'
import Signin from './pages/auth/Signin'
import RegistrationForm from './pages/auth/SignUp'
import SignIn from './pages/auth/Signin'


function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])

  const onHandleRemove = (id: number) => {
    fetch('http://localhost:3000/products/' + id, {
      method: 'DELETE'
    }).then(() => setProduct(product.filter(item => item.id != id)))
    console.log("id" , id);
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAllProduct().then(({ data }) => setProduct(data)))
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => getAllProduct().then(({ data }) => setProduct(data)))
  }



  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path='products'>
              <Route index element={<ProductPage product={product} onRemove={onHandleRemove} />} />
              <Route path=':id' element={<ProductsDetail product={product} />} />
            </Route>
          </Route>

          <Route path='/admin' element={<AdminLayout/>}>
          <Route path='products'>
            <Route index element={<ProductManagementPage product={product} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} product={product} />} />
          </Route>
        </Route>
      

        <Route path='auth'>
        <Route index element={<RegistrationForm/>}/>
        <Route  path='signin' element={<SignIn/>} />

        </Route>

            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

