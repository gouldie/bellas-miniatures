import React from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

export default ({ margin }) => (
  <Loader
    type="TailSpin"
    color="#00BFFF"
    height={50}
    width={50}
    style={{ margin: margin || '0' }}
  />
)
