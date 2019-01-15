import React from "react";
// import RouteView from "route/index";
import {connect} from "react-redux";


class Home extends React.Component {
	
    render() {
        return <div className="">
            
    	</div>
    }
}
let mapStateToProps = (state) =>{
    return state.Reducer
}
let mapdispathProps=(dispatch)=>{
    return {
    
    }
}
export default connect(mapStateToProps,mapdispathProps)(Home);