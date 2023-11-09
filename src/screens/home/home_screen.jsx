import React from 'react'
import { Header } from '../../components/header/header'
import { ProductCard } from '../../components/products/product_card/product_card'
import { ProductWidget } from '../../components/products/product_widget/product_widget'
import { Footer } from '../../components/footer/footer'
import { Navbar } from '../../components/navbar/navbar';
import { HomeLayout } from '../../layout/home/home_layout'
export const HomeScreen = () => {
    return(
        <HomeLayout>
            <Navbar></Navbar>
            <Header/>
            <ProductWidget></ProductWidget>
            <Footer></Footer>
        </HomeLayout>
    )
}