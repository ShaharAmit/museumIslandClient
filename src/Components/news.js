import React, {
    Component
  } from 'react'
  import Header from './mainHeader'
  
  class news extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return ( 
        <div className='cont'>
        <Header />
        </div >
      )
    }
  }
  export default news