import React from "react";
import { useEffect, useState } from "react";
import "../css/AddProduct.css";

export default function AddProduct() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selekce, setSelekce] = useState("");

  const handleChange = (event) => {
    setSelekce(event.target.value);
  };

  const resetRadioState = () => {
    window.location.reload();
  };

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
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="AddProductForm">
      <h1>Seznam produktů</h1>
      {loading && <div>Načítání...</div>}
      {error && (
        <div>
          {"There is a problem fetching the post data - "}
          {error}
        </div>
      )}
      <table>
        <tr>
          <th></th>
          <th>Název</th>
          <th>Cena</th>
          <th>Popis</th>
        </tr>
        {data &&
          data.map(({ id, nazev, cena, popis }) => (
            <tr key={id}>
              <td>
                <input
                  type="radio"
                  name="selectProduct"
                  key={id}
                  value={id}
                  checked={selekce === id}
                  onChange={handleChange}
                />
              </td>
              <td>{nazev}</td>
              <td>{cena} Kč</td>
              <td>{popis}</td>
            </tr>
          ))}
      </table>
      <div>
        <button
          title="Reset"
          className="ResetButton"
          type="reset"
          onClick={resetRadioState}
        >
          Reset
        </button>
      </div>
      <h1>Přidání produktu</h1>
      <AddProductForm parentToChild={selekce} data={data} />
    </div>
  );
}

function AddProductForm({ parentToChild, data: produkty }) {
  const [kategorie, setKategorie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(null);
  const [nazev, setNazev] = useState("");
  const [cena, setCena] = useState("");
  const [popis, setPopis] = useState("");
  const [skryty, setSkryty] = useState(false);
  const [message, setMessage] = useState("");
  const [kategorieArr, updateKategorieArr] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://62849a953060bbd3473b9bce.mockapi.io/category`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setKategorie(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setKategorie(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (parentToChild !== "") {
      setNazev(produkty.find((x) => x.id === parentToChild).nazev);
      setCena(produkty.find((x) => x.id === parentToChild).cena);
      setPopis(produkty.find((x) => x.id === parentToChild).popis);
    }
  }, [parentToChild]);
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://ptsv2.com/t/4u5q2-1653307421/post", {
        /*Zde změnit REST API*/
        method: "POST",
        body: JSON.stringify({
          nazev: nazev,
          cena: cena,
          popis: popis,
          skryty: skryty,
          kategorie: kategorieArr,
        }),
      });
      if (res.status === 200) {
        /*Pokud odpověď API je správná/funguje, tak se hodnoty v inputech vynulují a vypíše se zpráva*/
        window.location.reload();
      } else {
        setMessage("Error někde.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="EditProduktu">
        <input
          className="Textak"
          type="text"
          placeholder="Název"
          value={nazev}
          onChange={(e) => setNazev(e.target.value)}
          required
        />
        <br></br>
        <input
          className="Textak"
          type="number"
          placeholder="Cena"
          value={cena}
          onChange={(e) => setCena(e.target.value)}
          required
        />
        <br></br>
        <input
          className="Textak"
          type="text"
          placeholder="Popis"
          value={popis}
          onChange={(e) => setPopis(e.target.value)}
        />
        <br></br>
        <label className="KategorieNazev">
          Skrytý
          <input
            type="checkbox"
            value={skryty}
            onChange={(e) => setSkryty(!skryty)}
          />
        </label>
        <br></br>

        {loading && <div>Načítání...</div>}
        {error && (
          <div>
            {"There is a problem fetching the post data - "}
            {error}
          </div>
        )}
        <div className="KategorieNazev">
          <b>Kategorie</b>
          <br></br>
          {kategorie &&
            kategorie.map(({ id, nazevKategorie }) => (
              <>
                <input
                  className="CheckboxKategorie"
                  type="checkbox"
                  value={id}
                  onChange={(e) =>
                    updateKategorieArr((kategorieArr) => [
                      ...kategorieArr,
                      e.target.value,
                    ]) && setChecked(e.target.checked)
                  }
                  checked={checked}
                />
                <label for={id}>{nazevKategorie}</label>
                <br></br>
              </>
            ))}
        </div>
        <button className="ResetButton" type="submit">
          Odeslat
        </button>
        <br></br>

        <div className="message">{message ? <h3>{message}</h3> : null}</div>
      </form>
    </>
  );
}
