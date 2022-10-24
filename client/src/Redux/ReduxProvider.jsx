import React from 'react'
import search from "./store"
import {Provider} from "react-redux"


const ReduxProvider = ({children}) => {
  return (
    <Provider store={search}>{children}</Provider>
  )
}

export default ReduxProvider