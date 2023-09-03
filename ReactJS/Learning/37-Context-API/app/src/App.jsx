// import { useState } from 'react'
import './App.css'
import Section1 from "./component/section1"
import Section2 from "./component/section2"
import MyProvider from './context/myProvider'

function App() {

  return (
    <>
		{/* All childs inside this provider will have "Giver" name for context value */}
		<MyProvider myName="Giver">
			<Section1/>
		</MyProvider>
		{/* All childs inside this provider will have "Smith" name for context value */}
		<MyProvider myName="Smith">
			<Section1/>
		</MyProvider>
		<Section2/>
    </>
  )
}

export default App
