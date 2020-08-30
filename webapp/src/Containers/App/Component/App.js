import React from 'react'

import Header from '../../../Components/Header'

import './App.css'

class App extends React.Component {
  container = (children) => (
    <div className='agile-tracker-app-container'>
      <div className='col-12 agile-tracker-app-container-children'>
        {children}
      </div>
    </div>
  )

  render() {
    const { children } = this.props
    return (
      <div className='agile-tracker-app-root'>
        <Header />
        {this.container(children)}
      </div>
    )
  }
}

export default App
