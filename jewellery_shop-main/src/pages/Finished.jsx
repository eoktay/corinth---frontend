import React, { useEffect } from 'react'
import Pagination from '../Component/paginatino/pagination'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts, getProducts } from '../store/product'
import Card from '../Component/card/card'
import Spinner from '../Component/spinner/spinner'
import * as url from '../store/url'
import { finishedProductRecived } from '../store/product'
export default function Finished() {
    let products = []
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(loadProducts(url.loadFinishedProducts(0), finishedProductRecived.type))
    },[])
    products = useSelector((state) => getProducts(state));
console.log(products.finishedProducts)

    return (
        <div class='scrollable'>
            <div className='box'>
                {products.loading? <Spinner /> : <div>
                    {products.finishedProducts.map((product, index) => <Card key={index} product={product} />)}
                </div>}
            </div>
            <Pagination pageNo={products.finishedProductPageNo} func={loadProducts}
                urlFunc={url.loadFinishedProducts} type={finishedProductRecived.type} />
        </div>
    )
}
