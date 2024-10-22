# Choices choices: The Tech-Stack
> Gekozen tech-stack: Astro met Hygraph en Netlify

## Inhoudsopgave
- [Analyseren](https://github.com/Annevd/choices-choices-the-tech-stack/edit/main/README.md#-analyseren)
- [Ontwerpen](https://github.com/Annevd/choices-choices-the-tech-stack/edit/main/README.md#%EF%B8%8F-ontwerpen)
- [Bouwen](https://github.com/Annevd/choices-choices-the-tech-stack/edit/main/README.md#%EF%B8%8F-bouwen)
- [Integreren](https://github.com/Annevd/choices-choices-the-tech-stack/edit/main/README.md#-integreren)
- [Testen](https://github.com/Annevd/choices-choices-the-tech-stack/edit/main/README.md#-testen)
- [Conclusie](https://github.com/Annevd/choices-choices-the-tech-stack/edit/main/README.md#-conclusie)
- [Bronnen](https://github.com/Annevd/choices-choices-the-tech-stack/edit/main/README.md#%E2%84%B9%EF%B8%8F-bronnen)

## ⭐ Epic

De bieb in bloei release candidate website verbloemen met ideeën van de minor CMD.

## 🔮 Huidige site

![image](https://github.com/user-attachments/assets/60e72929-c2ca-41c5-b768-e1bb234d15b8)

## 🔍 Analyseren

Om te beginnen met deze opdracht heb ik eerst zorgvuldig de leertaak doorgelezen en een fork gemaakt.

Vervolgens heb ik met mijn team overlegd wie welke Site Generator van jamstack.org gaat onderzoeken.
Ik heb ervoor gekozen om het framework Astro te onderzoeken, en daarmee de website/1 á 2 pagina's opnieuw te realiseren.

Tot slot heb ik een groot deel van de documentatie gelezen en de volledige [tutorial](https://docs.astro.build/en/tutorial/0-introduction/) van Astro gevolgd om een idee te krijgen van het framework en hoe het werkt. ([final tutorial commit](https://github.com/Annevd/choices-choices-the-tech-stack/commit/ccd1e8b99a88e0cfa50126056d7ccb6d4af2807e))([Browse repository at this point](https://github.com/Annevd/choices-choices-the-tech-stack/tree/ccd1e8b99a88e0cfa50126056d7ccb6d4af2807e))

Informatie die ik heb gelezen in de documentatie heb ik vervolgens verwerkt in mijn [Learning Journal](https://github.com/Annevd/i-love-web/blob/main/learning-journal/sprint%2015/notes.md#wat-heb-ik-geleerd).

### Issues
- [Tutorial](https://github.com/Annevd/choices-choices-the-tech-stack/issues/2)

## ✏️ Ontwerpen

Issues van ontwerpfase vorige sprint:
- [Data model & Wireframes](https://github.com/fdnd-agency/buurtcampus-oost/issues/150)
- [Sitemap](https://github.com/fdnd-agency/buurtcampus-oost/issues/152)
- [Ontwerp accessibility menu](https://github.com/fdnd-agency/buurtcampus-oost/issues/136)

Dit framework stelt geen eisen waardoor ik mijn ontwerp zou moeten veranderen, dus ik ga bouwen vanuit hetzelfde ontwerp.

## ⚒️ Bouwen

Ik ben gaan bouwen met het framework Astro en de headless CMS Hygraph.
Tijdens het bouwen hiervan heb ik verschillende documentatie gelezen van Astro om grip te krijgen op het framework.

### Issues 
- [Astro installatie & project opzet](https://github.com/Annevd/choices-choices-the-tech-stack/issues/1)
- [Astro koppelen aan Hygraph](https://github.com/Annevd/choices-choices-the-tech-stack/issues/3)
- [Data uit hygraph ophalen en renderen](https://github.com/Annevd/choices-choices-the-tech-stack/issues/4)
- [Werken met componenten](https://github.com/Annevd/choices-choices-the-tech-stack/issues/5)
- [Werken met layouts](https://github.com/Annevd/choices-choices-the-tech-stack/issues/7)
- [Styling met Astro](https://github.com/Annevd/choices-choices-the-tech-stack/issues/9)
- [Accessibility menu toevoegen](https://github.com/Annevd/choices-choices-the-tech-stack/issues/10)
- [View transition maken in Astro](https://github.com/Annevd/choices-choices-the-tech-stack/issues/12)

## 📲 Integreren

Om de website live te zetten heb ik deze guide gevolgd: https://docs.astro.build/en/guides/deploy/netlify/

De website staat [live](https://bieb-in-bloei-astro.netlify.app/) met Netlify.

### Issues
- [Issue over het live zetten](https://github.com/Annevd/choices-choices-the-tech-stack/issues/8)

## 🎮 Testen

Ik heb mijn website getest op verschillende categoriën: UX, DX en CMX.

### Issues
- [Test voor UX](https://github.com/Annevd/choices-choices-the-tech-stack/issues/6#issuecomment-2429016866)
- [Test voor CMX](https://github.com/Annevd/choices-choices-the-tech-stack/issues/6#issuecomment-2429082556)
- [Test voor DX](https://github.com/Annevd/choices-choices-the-tech-stack/issues/6#issuecomment-2429200645)

## 🏁 Conclusie

Astro biedt een hele goede DX (developer experience) door de focus op performance en usability. Je kunt er snel mee aan de slag door de simpele projectopzet en het ondersteund diverse frameworks zoals React, Vue en Svelte. De documentatie is uitgebreid en heeft handige tutorials waardoor je makkelijk kunt leren en problemen kunt oplossen. De herbruikbare componenten en de mogelijkheid om je data rechtstreeks in de frontmatter op te halen dragen bij aan de efficiëntie van het ontwikkelproces.

De ingebouwde TypeScript-foutmeldingen kunnen soms wel vervelend zijn voor iedereen die liever met standaard Javascript werkt. Bovendien is het integreren van een headless CMS zoals Hygraph wat complexer en zul je je in GraphQL moeten verdiepen.

Al met al biedt Astro dus een sterke DX voor developers, maar moet je met sommige dingen zoals TypeScript en CMS-integraties rekening houden.

## ℹ️ Bronnen
- [Astro](https://astro.build/)
- [Astro docs](https://docs.astro.build/)
- [Astro blog](https://astro.build/blog/)
- [Astro installeren](https://docs.astro.build/en/install-and-setup/)
- [Project structuur](https://docs.astro.build/en/basics/project-structure/)
- [Componenten](https://docs.astro.build/en/basics/astro-components/)
- [Pages](https://docs.astro.build/en/basics/astro-pages/)
- [Layouts](https://docs.astro.build/en/basics/layouts/)
- [Imports](https://docs.astro.build/en/guides/imports/)
- [Routing](https://docs.astro.build/en/guides/routing/)
- [Endpoints](https://docs.astro.build/en/guides/endpoints/)
- [Data fetching](https://docs.astro.build/en/guides/data-fetching/)
- [Connect a CMS](https://docs.astro.build/en/guides/cms/hygraph/)
- [Styling](https://docs.astro.build/en/guides/styling/)
