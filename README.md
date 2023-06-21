# Podcast applicatie - de Correspondent
<!-- Geef je project een titel en schrijf in één zin wat het is -->
In deze repository is gewerkt aan een webapplicatie die podcasts aanbied aan de leden van De Correspondent.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

<img width="1440" alt="Schermafbeelding 2023-06-19 om 07 59 45" src="https://github.com/Stefan-Espant/de-correspondent-sprint-12-proof-of-concept/assets/89298385/d5188b5c-5f56-438e-9fe2-6ea36398c9cf">

https://sprint-12-de-correspondent.onrender.com/

Dit project is de webversie van de native app van de Correspondent. De functie van deze webapplicatie is het te beluisteren naar diverse podcasts. 

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
De user stories die werden toegepast luidden alsvolgt:
* Als gebruiker wil ik een overzicht van alle podcasts
* Als gebruiker wil ik zien of de podcast app getest is op toegankelijkheid
* Als ontwikkelaar wil ik de API gekoppeld hebben aan de site zodat data correct word ingeladen

Gebruikers van de Correspondent kunnen shows uitkiezen waarnaar ze kunnen luisteren. Voor de ontwikkelaar is de gekregen API gekoppeld zodat de data correct word ingeladen en dat zo de site dynamisch word gemaakt.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
Voor dit project zijn de volgende technieken toegepast:
* html
* css
* javascript
* node
* express

### html

### css

### javascript
Dit project bevat, naast node, ook client-side javascript. Het bevat een enhancement op de links die linken naar de detailpagina en terug naar de homepage. De enhancement is een geluidseffect wanneer de gebruiker klikt.

Deze code verzorgt het geluidseffect voor de link naar de detailpagina.
```js
const interfaceSound = new Audio(
	"./assets/interface-124464.mp3"
);
const interfaceClicks =
	document.querySelectorAll(".default-link");

interfaceClicks.forEach((interfaceClick) => {
	interfaceClick.addEventListener("click", (event) => {
		event.preventDefault(); // Voorkomt dat de standaard linkactie wordt uitgevoerd

		interfaceSound.play();

		setTimeout(() => {
			window.location.href = event.target.href; // Doorsturen naar de volgende pagina
		}, 800); // Wacht 0.8 seconden voordat de doorstuuring plaatsvindt
	});
});
```

Deze onderstaande code het geluidseffect voor de link naar de homepage terug.

```js
const interfaceBackSound = new Audio(
	"../assets/interface-124476.mp3"
);
const interfaceBackClick =
	document.querySelector(".link-retro");

interfaceBackClick.addEventListener("click", (event) => {
	interfaceBackSound.play();

	setTimeout(() => {
		window.location.href = event.target.href; // Doorsturen naar de volgende pagina
	}, 600); // Wacht 0.6 seconden voordat de doorstuuring plaatsvindt
});
```

### node

### express


## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
In dit project is gebruik gemaakt van onder anderen:
* Node
* Express
* EJS

Voor het installeren van node gebruikte ik het commando `npm init` om node te initialiseren. Volgens 

Deze modules kunnen geinstalleerd worden doormiddel van:
`npm install` `express` `ejs`

Om de applicatie te laten werken, voer dan het volgende commando uit:
`npm start`

## Bronnen
![file-info](https://github.com/Stefan-Espant/de-correspondent-sprint-12-proof-of-concept/assets/89298385/bc2c8e9d-64e6-47a4-917d-8c657887320e)
[docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

![file-info](https://github.com/Stefan-Espant/de-correspondent-sprint-12-proof-of-concept/assets/89298385/bc2c8e9d-64e6-47a4-917d-8c657887320e)
[caniuse.com](https://caniuse.com/)

![file-info](https://github.com/Stefan-Espant/de-correspondent-sprint-12-proof-of-concept/assets/89298385/bc2c8e9d-64e6-47a4-917d-8c657887320e)
[geluidseffect](https://pixabay.com/sound-effects/search/click/)

![file-info](https://github.com/Stefan-Espant/de-correspondent-sprint-12-proof-of-concept/assets/89298385/bc2c8e9d-64e6-47a4-917d-8c657887320e)
[Afbeelding naar tekst converter](https://www.imagetotext.info/)

![file-info](https://github.com/Stefan-Espant/de-correspondent-sprint-12-proof-of-concept/assets/89298385/bc2c8e9d-64e6-47a4-917d-8c657887320e)
[Simulatie brillen](https://nl.optelec.com/oogaandoeningen)

![file-info](https://github.com/Stefan-Espant/de-correspondent-sprint-12-proof-of-concept/assets/89298385/bc2c8e9d-64e6-47a4-917d-8c657887320e)
[Tutorial view transition](https://www.youtube.com/watch?v=HNXmgR4Y8k4)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
