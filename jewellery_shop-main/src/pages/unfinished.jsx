import React, { useEffect } from 'react'
import Pagination from '../Component/paginatino/pagination'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts, getProducts } from '../store/product'
import Card from '../Component/card/card'
import Spinner from '../Component/spinner/spinner'
import * as url from '../store/url'
import { unfinishedProductRecived } from '../store/product'
export default function UnFinished() {
    let products = []
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(loadProducts(url.loadUnFinishedProducts(0), unfinishedProductRecived.type))
    },[])
    products = useSelector((state) => getProducts(state));
console.log(products.unfinishedProducts)

    return (
        <div class='scrollable'>
            <div className='box'>
                {products.loading? <Spinner /> : <div>
                    {products.unfinishedProducts.map((product, index) => <Card key={index} product={product} />)}
                </div>}
            </div>
            <Pagination pageNo={products.unfinishedProductPageNo} func={loadProducts}
                urlFunc={url.loadUnFinishedProducts} type={unfinishedProductRecived.type} />
        </div>
    )
}
