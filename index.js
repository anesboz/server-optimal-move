const express = require("express")
const app = express()

const toAdd = {
  name: "Auchan",
  logo: "https://logo-marque.com/wp-content/uploads/2021/02/Auchan-Logo.png",
  list: [
    [
      "b185 Convention - Fontainebleau",
      "m7 Le Kremlin-Bicetre",
      "velib 42707 Okabé",
      "velib 42703  Kremlin",
    ],
  ],
}

app.get("/", (req, res) => {
  res.send(toAdd)
})

app.listen(() => {
  console.log("server started")
})
