import React from 'react'
import Footer from '../components/footer'
import MobileMenu from '../components/MobileMenu'
import Navigation from '../components/Navigation'
import Product from '../components/product'

const products = () => {
    return (
        <>
            <MobileMenu/>
            <Navigation/>
            <Product/>
            <Footer/>
        </>
    )
}

export default products
