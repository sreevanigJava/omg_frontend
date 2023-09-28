import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./cards.css"

function Cards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:2022/api/admin/getAllProducts');
      setData(response.data);
      setLoading(false)
      console.log(response.data); // Log the response data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {

    fetchData();
  }, []);
  return (
    <div className='Abc'>
      {/*
        loading?(<p>Loading....</p>):(
          <div>
            {data.map((product, index)=>(
              <li key={index}>
                <h5>Product Id: {product.prodId}</h5>
              </li>
            ))}
         </div>
        //   <div className="card" key={index}>
        //   <div className="card-content">
        //   <div className="offer">
        //   <button id='offer1' >25%off</button>
        //   </div>
        //   <img className="imgs" src={item.image} alt={`Image ${index}`} />
        //   <h6 id="name">{item.name}</h6>
        //   <button className="button1">1kg</button>
        //   <button className="button2">500gm</button>
        //   <p id="para1">Rs100.00 </p>
        //   <button className="addbutton">ADD</button>
        //   <p id="para2">Rs70.00</p>
        // </div>
        // </div>
        )
      */
        loading ? (<p>Loading....</p>) : (

          <div >
            {data.map((product, index) => (
              <div className="card">
                <div className="card-content">
                <div className="offer">
                <button id='offer1'>25%off</button>
                </div>
                  <img className="imgs" src={product.imageUrl} alt={`Image ${index}`} />
                  <h4 id="name">{product.prodName}</h4>
                  <button className="button1">{product.qty} {product.unit}</button>
                  <p id="para1">Price:{product.price}</p>
                  <button className="addbutton">ADD</button>
                  <p id="para2">Rs70.00</p>
                </div>
              </div>
            ))

            }
          </div>

        )


      }
    </div>
  );
}

export default Cards;
