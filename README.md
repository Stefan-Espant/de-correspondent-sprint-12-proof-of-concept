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

![Schermafbeelding 2023-06-20 om 14 45 53](https://github.com/Stefan-Espant/de-correspondent-sprint-12-proof-of-concept/assets/89298385/26b8d64f-0ec4-414b-904f-e81a755a7c62)


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
De html in dit project is opgebouwd met een javascript template genaamd ejs. Hierdoor was onder anderen het laden van item in een array mogelijk op de homepage.

```html
		<% if (data && data.length) { %> <%
		data.forEach(collection => { %>
		<article>
			<picture>
				<source
					srcset="/public<%= imageFiles[mainVisuals[collection.relationships.mainVisual.data.id]] %>"
					alt="<%= collection.attributes.title %>"
					width="320"
					height="320"
					loading="lazy"
				/>
				<img
					src="/public<%= imageFiles[mainVisuals[collection.relationships.mainVisual.data.id]] %>"
					alt="<%= collection.attributes.title %>"
					width="320"
					height="320"
					loading="lazy"
				/>
			</picture>

			<h2><%= collection.attributes.title %></h2>
			<p><%= collection.attributes.intro %></p>
			<a
				id="<%= collection.attributes.slug %>"
				class="default-link"
				href="/collection/<%= collection.attributes.slug %>"
			>
				Ga naar deze show
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-player-play"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						stroke="none"
						d="M0 0h24v24H0z"
						fill="none"
					></path>
					<path d="M7 4v16l13 -8z"></path>
				</svg>
			</a>
		</article>
		<% }); %> <% } %>
```

### css

Met css heb ik de volledige stijling gemaakt voor de website. Zo had ik diverse custom properties aangemaakt en toegepast op mijn product.

```css
:root {

    /* Animaties */
    --a-quick: 0.2s;
    --a-default: 0.3s;
    --a-medium: 0.6s;
    --a-large: 1s;
    --a-loading: 3s;

    /* Kleuren */
    --color-default: #ffffff;
    --color-invert: #121212;
    --color-primary: #df5b57;
    --color-secundary-150: #194d49;
    --color-secundary-125: #2f736e;
    --color-secundary-100: #70b3ad;
    --color-secundary-75: #9dceca;
    --color-secundary-50: #c7ece9;
    --color-secundary-0: #eaf6f5;
    --color-accent-100: #666666;
    --color-accent-75: #b2b2b2;
    --color-accent-50: #e5e4e4;

    /* Eenheden */
    --u-nano: 0.125em;
    --u-micro: 0.25em;
    --u-small: 0.4em;
    --u-medium: 0.5em;
    --u-default: 1em;
    --u-large: 2em;
    --u-round: 50%;

    /* Schaduwen en effecten */
    --shadow-default: 0px 1px var(--u-micro) rgba(0, 0, 0, 0.1), 0px var(--u-micro) var(--u-micro) -2px rgba(0, 0, 0, 0.12), 0px 10px 12px -5px rgba(0, 0, 0, 0.2);
}
```

Niet alleen voor de default stijl, maar ook voor de dark mode.

```css
/* Activeert donkere modus */
@media (prefers-color-scheme: dark) {
    :root {
        /* Kleuren */
        --color-default: #121212;
        --color-invert: #ffffff ;
        --color-primary: #df5b57;
        --color-secundary-150: #eaf6f5;
        --color-secundary-125: #c7ece9;
        --color-secundary-100: #9dceca;
        --color-secundary-75: #70b3ad;
        --color-secundary-50: #2f736e;
        --color-secundary-0: #194d49 ;
        --color-accent-100: #666666;
        --color-accent-75: #b2b2b2;
        --color-accent-50: #e5e4e4;
    }
```

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
Dit project gebruikt node als basis

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

![file-info](https://github.com/Stefan-Espant/de-correspondent-sprint-12-proof-of-concept/assets/89298385/bc2c8e9d-64e6-47a4-917d-8c657887320e)[LottieFiles Animtatie](https://lottiefiles.com/118830-people-with-microphones-record-podcast-in-studio)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
