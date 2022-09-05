import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://products-api-shop.herokuapp.com/api")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {products.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "inline-block",
                padding: "25px",
                margin: "20px",
              }}
            >
              <h4>{item.name}</h4>
              <h5>{item.price}</h5>
            </div>
          )
        })}
      </header>
    </div>
  )
}

export default App
