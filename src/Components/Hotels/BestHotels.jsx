import React from 'react'
import Hotels from './Hotels'
import { hotels } from '../../Data'
export default function BestHotels() {
  return (
    <>
      <Hotels hotels={hotels} heading="Best Hotels"/>
    </>
  )
}
