

import React from 'react'
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom'
// import Nav from '../Component/nav/nav'
import Product from './product'
import AddProduct from './AddProduct'
// import SearchBar from '../Component/searchBar/searchBar'
import Finished from './Finished'
import UnFinished from './unfinished'

export default function Home({
    
}) {
    let match = useRouteMatch();
    // console.log(productType)
    return (
        <div>

            {/* <Nav /> */}
            {/* <NavBar/> */}
            {/* <SearchBar /> */}
            <Switch>
                <Route path={`${match.path}finished`}>
                    <Finished />
                </Route>
                <Route path={`${match.path}unfinished`}>
                    {/* <Product /> */}
                    <UnFinished />
                </Route>
                <Route path={`${match.path}addProduct`} >
                    <AddProduct />
                </Route>

                <Route path={`${match.path}`}>
                    <Product  />
                </Route>



            </Switch>
        </div>
    )
}
