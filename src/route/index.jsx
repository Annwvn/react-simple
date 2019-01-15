
import React from 'react'
import Routers from './route'
import RouterMap from './map'

class RouteView extends React.Component{
    render(){
        let {routes} = this.props        
        return <RouterMap routes={routes===undefined?Routers:routes}></RouterMap>
    }
}
export default RouteView