# Anatomi for SW

Et hvert levende vesen har en kropp som består av organer, 
hvor hver organ har en funksjon, og anatomi er kunnskapsdisiplinen 
som studerer dette.

Programmer, har slik som levende vesener, organer, hvor hver organ har en funksjon.

1. Input :  det programmet leser fra filer, nettforbindelser, eller brukergrensesnitt
2. Output :  det programmet leverer fra seg til filer, printer, skjerm, eller til nettforbindelser
3. Styresignaler:  det programmet trigges av. Klokke, melding, klikk, sensorer, osv..
4. Ressurser:  det programmet trenger for å kunne fungere datamaskin, minne, nettverk, tastatur, mus, skjerm, nett-tjenester
5. Lagring:  lokale, variabler, globale variabler, environment variabler,  filsystem, database
6. Controller/Hovedprogram : det programmet skal egentlig gjøre for å fullføre sitt formål.

Deretter kommer etter behov, organer/funksjoner som representerer alt som programmet må likevel gjøre i tillegg til solskinnsløsningen:
1. Exception handling
2. Logging
3. Selftest/Ping/Heartbeat/Overvåkning
4. Internationalisation
5. Feature toggling
6. Configuration v/ bygging, leveranse, eller oppstart
7. Reconfiguration under bruk
8. Styling/GUI komponenter
9. Sikkerhet/authentication/Authorisation/signering/sertifikater/kryptering
10. Korttidslagring/Caching
11. Håndtering av hemmeligheter
12. Hjelp, hjelp til selvhjelp, context sensitive help, forklaringsfunksjon, varsler, faktaboks
13. Meldinger, aksjoner, tilstandsbytter
14. Undo/redo, 
15. Navigeringshjelp Faner/Site map/Breadcrumbs
16. Nudging (menus/shopping basket/varsler/anbefalinger for videre valg)
17. Toveis responsiv instrumentasjonsgrafikk, eller enveis forretningsgrafikk
18. Osv..

Sist må man også huske at ingen skriver alt det ovenstående fra bunnen av alene. 
Det betyr vanligvis mye gjenbruk av eksterne komponenter, plattformer, og biblioteker. 

Det vil i tillegg bety et eller flere alternative løsninger for å 
1. versjonshåndtere,
2. bygge, 
3. teste,
4. dokumentere,
5. deploye,
6. motta rapporterte incidents under test eller drift, følge opp, og løse disse,
7. koordinere utføring av alt dette blant en eller flere teams av flere utviklere.
