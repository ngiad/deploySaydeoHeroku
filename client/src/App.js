import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import LoadingHomeApp from './Components/LoadingHomeApp.jsx';
import { AuthContext } from './contexts/AuthContext';
import Admin from './layout/Admin/Admin';


const Front = React.lazy(() => import("./layout/Front/Front"))
const About =  React.lazy(() => import('./pages/About'))
const AdminHomePage =  React.lazy(() => import('./pages/AdminHomePage'))
const AdminNews =  React.lazy(() => import('./pages/AdminNews'))
const AdminProducts =  React.lazy(() => import('./pages/AdminProducts'))
const Contact =  React.lazy(() => import('./pages/Contact'))
const Guide =  React.lazy(() => import('./pages/Guide'))
const Home =  React.lazy(() => import('./pages/Home'))
const LoginAdmin =  React.lazy(() => import('./pages/LoginAdmin'))
const News =  React.lazy(() => import('./pages/News'))
const NotFound =  React.lazy(() => import('./pages/NotFound'))
const Product =  React.lazy(() => import('./pages/Product'))
const Products =  React.lazy(() => import('./pages/Products'))
const Search =  React.lazy(() => import('./pages/Search'))
const Cart = React.lazy(() => import('./pages/Cart'))
const PostsNews = React.lazy(() => import('./pages/PostsNews.jsx'))


function App() {
  const { LoginSuccect } = useContext(AuthContext)
  return (
        <Routes>
            <Route path='/' element={<React.Suspense fallback={<LoadingHomeApp />}><Front /></React.Suspense>}>
              <Route index element={<Home />} />
              <Route index path="about" element={<About />} />
              <Route index path="products" element={<Products />} />
              <Route index path="guide" element={<Guide />} />
              <Route index path="news" element={<News />} />
              <Route index path="news/:id" element={<PostsNews />} />
              <Route index path="contact" element={<Contact />} />
              <Route index path="/:search" element={<Search />} />
              <Route index path="products/:id" element={<Product />} />
              <Route index path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route index path="login" element={<LoginAdmin />} />
            {
              LoginSuccect &&
              <Route path='/admin' element={<Admin />}>
                <Route index element={<AdminHomePage />} />
                <Route index path='/admin/products' element={<AdminProducts />} />
                <Route index path='/admin/News' element={<AdminNews />} />
              </Route>
            }
      </Routes>
  );
}

export default App;
