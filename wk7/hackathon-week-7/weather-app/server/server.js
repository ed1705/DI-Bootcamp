const express =require('express')
const axios = require("axios")
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
// const weatherData = require('/example.json')

app.get("/weather", (req, res)=> {
	const { lat, lon } =req.query 
	axios.get("https://api.openweathermap.org/data/2.5/onecall", {
		params: {
			lat,
			lon,
			appid: "0ed044c9d144ff02acfeaf1d9ee4ede7",
			units: "standard",
			exclude: "minutely,alerts",
		},
	}) 
	.then(({data}) => {
		res.json(data)
	})  .catch(e => {
      console.log(e)
      res.sendStatus(500)
    })
})

app.listen(3001)