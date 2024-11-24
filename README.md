[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Y0f03qEq)
# Instruktioner

Denna uppgift går ut på att du bygga vidare uppgift u01 - Portfoliosida utifrån designskiss med Javascript. Du är nu fri att ändra till egen design / layout, samt eget innehåll. Det är dock viktigt att du behåller en sektion för CV ("About me") och en sektion med projekt ("Projects") eftersom du ska vidareutveckla sidan med Javascript på dessa sektioner. 

## Vad du ska göra

Du ska bygga vidare på  u01 - Portfoliosida utifrån designskiss med Javascript. och se till att du följer följande kravställningar: 

### CV i en fil:
Dina egna utbildningar och tidigare arbetsplatser ska nu ersätta "About me"-sidan. Ta med så mycket som möjligt att ditt "riktiga CV", men iallafall minst tre poster av varje.
Vilka utbildningar du läst och vilka tidigare arbeten du haft ska ligga i en separat fil i JSON-format. Denna JSON-fil ska läsas och och generera ditt CV på den tidigare motsvarigheten av "About me" sidan.


### Interaktiva scripts:
Din CV-sida ska innehålla minst två interaktiva JavaScript. Exempel kan vara en modal, slideshow, scroll-effekt, dölja/visa element, o.s.v

### Portfolio:
 Du publicerar minst två uppgifter / projekt från tidigare eller nuvarande studier / arbete inom HTML /CSS

### 👉  VG-krav

Din portfolio ska utökas så att den hämtar in publika projekt som finns i din egen Github via API. Den ska visa dessa projekt i din portfolio med namn och beskrivning.

Du får gärna ha både dessa projekt och andra som genereras utifrån JSON-data om du känner för det, eller så ersätter du projekten så det bara är dina Github-projekt. Eventuellt kan du behöva komplettera datan från Github API med t.ex bilder ifrån JSON-datan.

När hämtningen av projekten sker ska det finnas information om att projekten håller på att ladda in så att besökaren inte undrar varför sidan först är tom.



### Tekniska krav:
* Validerad med 0 fel på https://validator.w3.org
* Inga errors i Console

### Sammantfattning av projekt + teoretiska frågor

1. Du sammanfattar ditt projekt i README.md och reflekterar kring styrkor och ev brister. Max 500 ord.
2. Du svarar på dessa frågor (max 800 ord):

Vad kan man utveckla m.h.a av Javascript inom frontend?
Vad är JSON och hur används det inom frontend?
Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?


## Kriterier för bedömning


Icke Godkänd (IG), Godkänd (G) eller Väl Godkänd (VG)

### Godkänd (G)
Din portfolio-sida uppfyller alla krav enligt kravspecifikationen.
Du visar att du kan utan allvarliga brister eller missar utveckla denna portfoliosida enligt kraven
Du sammanfattar ditt projekt samt ger ett översiktligt och korrekt svar på frågorna


### Väl Godkänd (VG)

Din portfolio-sida uppfyller alla krav enligt kravspecifikationen samt VG-kraven
Du uppvisar en mer avancerad förståelse för Git genom att jobba med en developer-branch som du sedan mergar i main
Du visar att du kan utan brister, eller bara i sådan omfattning att de knappt märks eller påverkar slutresultatet


### Börja uppgift / Din inlämning
* Du börjar och lämnar in din uppgift genom Github Classroom på denna länk.
* Återkoppling ges i Canvas











### Fares Elloumi  FJS24

## Sammanfattning av projekt
1. I detta projekt har jag vidareutvecklat min tidigare portfoliosida (u01) med fokus på att  integrera JavaScript för att förbättra användarupplevelsen. Målet har varit att skapa en mer interaktiv och informativ plattform som effektivt presenterar mina kvalifikationer och projekt. Jag har säkerställt att det finns en tydlig struktur med sektioner för "About me" och "Projects", vilket är centrala delar av min portfoliosida.
* I "About me"-sektionen har jag ersatt den tidigare generiska texten med mitt riktiga CV. Jag har sammanställt mina utbildningar och tidigare arbetsplatser i en separat JSON-fil, vilket gör det enkelt att hantera och uppdatera informationen. Denna fil läses in med JavaScript och genererar automatiskt innehållet på sidan. Jag har inkluderat tre poster för både utbildningar och arbetslivserfarenhet, vilket ger en tydlig översikt över mina kvalifikationer.
För att öka interaktiviteten på sidan har jag implementerat två JavaScript-funktioner. Den första funktionen gör det möjligt att dölja och visa "About me"-sektionen, vilket ger användaren möjlighet att fokusera på det som är mest relevant för dem. Den andra funktionen är en meny med en hamburgerikon som, när den klickas på, visar eller döljer navigationsalternativen. Detta gör att sidan känns mer dynamisk och modern, samtidigt som den sparar utrymme på skärmen.
* I "Projects"-sektionen har jag publicerat fyra av mina tidigare och nuvarande projekt. Dessa projekt har också hämtats från en JSON-fil, vilket gör det enkelt att uppdatera och lägga till nya projekt i framtiden. Varje projekt presenteras med en kort beskrivning och länk till relevant information, vilket ger besökare en inblick i mina färdigheter och erfarenheter.

Denna utveckling av min tidigare portfoliosida har gett mig möjlighet att visa upp mina kvalifikationer på ett mer professionellt sätt och har förbättrat användarupplevelsen. Jag ser fram emot att fortsätta utveckla sidan och lägga till fler funktioner och projekt i framtiden.

## Vad kan man utveckla m.h.a av Javascript inom frontend?
JavaScript är ett kraftfullt språk som används för att skapa interaktiva och dynamiska webbsidor.

* JavaScript kan användas för att ändra innehållet och strukturen på en webbsida i realtid. Genom att manipulera Document Object Model (DOM) kan utvecklare skapa dynamiska användargränssnitt.
* JavaScript gör det möjligt att hantera användarinteraktioner, såsom klick, musrörelser och tangenttryckningar. Detta gör att sidor kan reagera på användarens handlingar.
* Med hjälp av JavaScript kan utvecklare skapa animerade effekter och övergångar som förbättrar användarupplevelsen.
* JavaScript underlättar utvecklingen av komplexa användargränssnitt och applikationer med användning av populära JavaScript-ramverk och bibliotek, såsom React, Angular och Vue.js. 

## Vad är JSON och hur används det inom frontend?
JSON (JavaScript Object Notation) är ett lättviktigt dataformat som används för att lagra och överföra data. Det är lätt att läsa och skriva för människor och enkelt att parsa och generera för maskiner. JSON används ofta inom frontendutveckling för att:
* Överföra data mellan klienten (webbläsaren) och servern. Det är det vanligaste formatet för API-responser.
* Lagra konfigurationsinställningar för applikationer, vilket gör det enkelt att läsa och ändra inställningar.

## Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?
HTTP (Hypertext Transfer Protocol) är det protokoll som används för att överföra data på webben. Det definierar hur meddelanden skickas och tas emot mellan klienter och servrar. 
Anledningar till varför frontendutvecklare bör ha kunskap om HTTP och dess protokoll:
* Kan utvecklare förstå bättre hur deras applikationer kommunicerar med servrar och hur data överförs.
* Kunskap om HTTP-statuskoder (som 200, 404, 500) hjälper utvecklare att diagnostisera och hantera fel som kan uppstå vid dataöverföring.
* Genom att förstå HTTP-protokollets funktioner, såsom caching och komprimering, kan utvecklare optimera sina applikationer för bättre prestanda.
* Kännedom om HTTPS (HTTP Secure) och dess betydelse för att skydda dataöverföring är avgörande för att bygga säkra webbapplikationer.

