export default function Recieve({productDetails}) {
  let {prodName, price, desc, quantity, onSale} = productDetails;
  return (
    <>
      <div className="col-md-3">
        <div className="item bg-secondary p-4 text-light shadow-lg rounded position-relative">
          <h1>Product Name: {prodName}</h1>
          <h3>Price: {price}</h3>
          <h4>Description: {desc}</h4>
          <h4>Qunatity: {quantity}</h4>
          <span className='badge bg-danger p-2 position-absolute top-0 end-0'>
            {onSale ? `Sale` : ``}
          </span>

          <div className='d-flex justify-content-evenly my-3'>
            <button className='btn btn-danger'>Delete</button>
            <button className='btn btn-primary'>Update</button>
          </div>
        </div>
      </div>
    </>
  )
}