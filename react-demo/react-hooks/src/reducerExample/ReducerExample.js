import React from 'react'
import ShowArea from './ShowArea'
import Buttons from './Buttons'
import { Color } from './Color'

function ReducerExample() {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  )
}

export default ReducerExample;