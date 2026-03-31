// import { useState } from 'react'

// import './App.css'

// function App() {

//   return (
//     <>
//     <h1 className=' text-red-700 bg-amber-200'>hello world</h1>
//     <p className='font-bold text-amber-400 bg-blue-200'>Lorem ipsum dolor sit amet.</p>
//      <button className="btn btn-primary">Primary</button>

//     </>
//   )
// }

// export default App

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Products from './components/Products'
import Cart from './components/Cart'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import productsData from './Data/products'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [cart, setCart] = useState([])
  const [activeTab, setActiveTab] = useState('product')

  const addToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id)
    if (!isExist) {
      setCart([...cart, product])
      toast.success('Successfully added to cart!')
    } else {
      toast.warn('This product is already in your cart!')
    }
  }

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
    toast.error('Removed from cart!')
  }

  const checkout = () => {
    setCart([])
    toast.info('Checkout completed!')
  }

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer position="top-center" autoClose={2000} />
      <Navbar count={cart.length} />
      <Hero />
      <Stats />

      
      <main className="py-24 text-center container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Premium Digital Tools</h2>
        <div className="inline-flex bg-gray-100 p-1.5 rounded-full mb-16 shadow-inner">
          <button onClick={() => setActiveTab('product')} className={`px-10 py-3 rounded-full transition-all ${activeTab === 'product' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-600'}`}>Products</button>
          <button onClick={() => setActiveTab('cart')} className={`px-10 py-3 rounded-full transition-all ${activeTab === 'cart' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-600'}`}>Cart ({cart.length})</button>
        </div>

        {activeTab === 'product' ? (
          <Products products={productsData} addToCart={addToCart} />
        ) : (
          <Cart cart={cart} removeItem={removeItem} checkout={checkout} />
        )}
      </main>

      <Steps />
      <Pricing />
      <Footer />
    </div>
  )
}
export default App