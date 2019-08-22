import 'bootstrap/dist/css/bootstrap.min.css';
import Meta from '../containers/Meta';
import DefaultLayout from '../containers/DefaultLayout.js';
import Examples from '../components/example';

import {connect} from 'react-redux';
import { startClock, serverRenderClock } from '../store'
import React, { Component } from 'react'

 class Home extends Component {

  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    // TO TICK THE CLOCK
    this.timer = setInterval(() => this.props.startClock(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }










  render() {
    return (
      <div >
     <Meta/>
    
   <DefaultLayout>
   <div className="about_us">
            <h1 className="set-text-center">
              Home    
            </h1>
            <code className="">
             Just General Set Up of Next Js We are adding some more cool things in this repo soon  
           
            </code>
            <Examples/>
          </div>
         
       </DefaultLayout>
    
    </div>
    )
  }
}



const mapDispatchToProps = { startClock }
export default connect(
  null,
  mapDispatchToProps
)(Home)
  
