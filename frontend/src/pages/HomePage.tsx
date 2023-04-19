import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {sampleProducts} from "../data"
import { Link } from 'react-router-dom'
export default function () {
  return (
    <>
      <Row>

{sampleProducts.map((e) => (
  <Col key={e.slug} sm={6} md={4} lg={3}>
   <Link to={'/product/'+e.slug}>
   <img src={e.image} alt={e.name} className='product-Image' />
    <h2>{e.name}</h2>
    <p>${e.price}</p>
   </Link>

  </Col>
))}
</Row>
    </>
  )
}
