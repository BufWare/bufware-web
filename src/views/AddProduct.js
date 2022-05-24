import React from 'react'
import {useEffect, useState} from 'react';
import AddProductForm from '../components/AddProductForm';
import '../css/AddProduct.css';

export default function AddProduct() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(
              `https://62849a953060bbd3473b9bce.mockapi.io/products`
            );
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            let actualData = await response.json();
            setData(actualData);
            setError(null);
          } catch(err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }  
        }
        getData()
      }, [])
      
      return (
        <div className='addProductContainer'>
        <h1>Seznam produktů</h1>
          {loading && <div>Načítání...</div>}
          {error && (
            <div>{'There is a problem fetching the post data - '}{error}</div>
          )}
          <table>
            <tr>
                <th></th>
                <th>Název</th>
                <th>Cena</th>
                <th>Popis</th>
            </tr>
            {data &&
              data.map(({ id, nazev, cena, popis}) => (
                  <tr key={id}>
                      <td><input type="radio" name='ProductSelect' key={id}/></td>
                      <td>{nazev}</td>
                      <td>{cena} Kč</td>
                      <td>{popis}</td>
                  </tr>
              ))}
           </table>
           <h1>Přidání produktu</h1>
            <AddProductForm />
          
        </div>
      );
    /*return (        
        <>    
            <div>
                
            </div>
            <AddProductForm />
        </>
    );*/
}
