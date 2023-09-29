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
      {
        loading ? (<p>Loading....</p>) : (

          <div >
            {data.map((product, index) => (
              <div className="card">
                <div className="card-content">
                <div className="offer">
                <button id='offer1'>{product.offer}%Off</button>
                </div>
                  <img className="imgs" src={product.imageUrl} alt={`Image ${index}`} />
                  <h4 id="name">{product.prodName}</h4>
                  <button className="button1">{product.qty} {product.unit}</button>
                  <p id="para1">₹ {product.actualPrice}</p>
                  <button className="addbutton">ADD</button>
                  <p id="para2">₹ {product.purchasePrice}</p>
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
