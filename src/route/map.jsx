import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

class RouterMap extends React.Component{
    
    render(){
        let {routes} = this.props        
        let defaultRoute = <Route path="/" component={()=>{
                return <Redirect to="/home"></Redirect>
            }
        } key={1} exact></Route>        
        return <div>
                <Switch>
                {
                    routes.map((item,index)=>{
                        let Comp = item.component
                        return <Route path={item.path} component={(apiroute)=>{                            
                            return <Comp routes={item.children} {...apiroute}></Comp>
                        }} key={index}></Route>
                    }).concat(defaultRoute)
                }

        </Switch>
        </div>
        
    }
}
export default RouterMap