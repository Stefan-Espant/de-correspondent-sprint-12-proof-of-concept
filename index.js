// Importeert de 'path' module
import * as path from 'path';

// Importeert de fs module 
import fs from 'fs';

// Importeert de bodyParser module
import bodyParser from 'body-parser';

// Importeert de express module
import express from 'express';

// Initialiseer een express-applicatie
const app = express();

// Importeert de 'http' module
import http from 'http';

// Importeert het .env bestand
import dotenv from 'dotenv';

// Configureert het .env bestand
dotenv.config();

const collectionsJson = "https://raw.githubusercontent.com/Stefan-Espant/de-correspondent-sprint-12-proof-of-concept/main/course/collections.json" 

// Start de server en luister naar de opgegeven poort
app.set("port", process.env.PORT || 8888);

const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log(`Server is gestart op http://localhost:${app.get("port")}`);
});

// Stel de view engine in op "ejs"
app.set("view engine", "ejs");
app.set("views", "./views")


// Wijs de "public" map toe als de statische map voor het serveren van bestanden
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Definieer de route voor de hoofdpagina ("/")
app.get("/", (request, response) => {
    // Fetch the data from the url
    fetchJson(collectionsJson).then((data) => {
      var mainVisuals = {};
      var imageFiles = {};
  
      // Loop door alle included variabelen heen
      data.included.forEach((element) => {
        if (element.type == "MainVisual") {
          mainVisuals[element.id] = element.relationships.image.data.id;
        } else if (element.type == "ImageFile") {
          imageFiles[element.id] = element.attributes.sourceSet;
        }
      });
  
      response.render("index", {
        ...data,
        mainVisuals: mainVisuals,
        imageFiles: imageFiles,
      });
    });
  });
  
  // Definieer de route voor de overzichtspagina ("/collection/:slug")
  app.get("/collection/:slug", (request, response) => {
    const slug = request.params.slug;
  
    fetchJson(collectionsJson).then((data) => {
      const collections = data.data;
      const item = collections.find(
        (collection) => collection.attributes.slug === slug
      );
  
      if (item) {
        const itemId = item.id;
        const itemJsonUrl = `https://raw.githubusercontent.com/Stefan-Espant/de-correspondent-sprint-12-proof-of-concept/main/course/collection/${itemId}.json`;

        fetchJson(itemJsonUrl).then((itemData) => {
          // Fetch main visuals and image files
          var mainVisuals = {};
          var imageFiles = {};
  
          data.included.forEach((element) => {
            if (element.type === "MainVisual") {
              mainVisuals[element.id] = element.relationships.image.data.id;
            } else if (element.type === "ImageFile") {
              imageFiles[element.id] = element.attributes.sourceSet;
            }
          });

          fetchJson(collectionsJson).then((data) => {
            })
  
          const message = "De Correspondent - " + item.attributes.title;
          response.render("collection", {
            ...data,
            item,
            itemData,
            message,
            mainVisuals,
            imageFiles,
          });
          console.log(itemJsonUrl)
        });
      }
    });
  });

// Definieert een route voor de 404-pagina
app.get("*", (request, response) => {
    // Render de "404" view
    response.status(404).render("404");
});

// Asynchrone functie om JSON-gegevens op te halen van een opgegeven URL
    async function fetchJson(url) {
        // Doe een HTTP-verzoek naar de opgegeven URL
        const response = await fetch(url);
        // Wacht op de respons en converteer deze naar JSON-formaat
        const responseData = await response.text();
        // console.log(responseData); // Log de ontvangen respons
        const data = JSON.parse(responseData);
        return data;
  }

// Asynchrone functie om JSON-gegevens te verzenden naar een opgegeven URL
async function postJson(url, data) {
    // Doe een HTTP POST-verzoek naar de opgegeven URL met de opgegeven gegevens
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    // Wacht op de respons en converteer deze naar JSON-formaat
    const responseData = await response.json();
    // Geef de ontvangen gegevens terug
    return responseData;
}
