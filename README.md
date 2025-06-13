# REST vs. GraphQL Demo Projekt

Dieses Projekt zeigt einen einfachen Vergleich zwischen REST und GraphQL als API-Methoden.  
Es besteht aus einem Backend mit Node.js, Express, Prisma und einer SQLite-Datenbank sowie einem React-Frontend mit React Router und Apollo Client.

---

## Features

- Backend mit REST-API und GraphQL-API (beide mit Prisma und SQLite)  
- React-Frontend mit Navigation zwischen REST- und GraphQL-Seiten  
- Anzeige der Benutzer-Daten aus beiden APIs  
- Ladezeitenmessung der API-Requests  
- Einfaches Styling mit CSS, schwarzer Hintergrund und zentrierter Container  

---

## Tech Stack

- **Backend:** Node.js, Express, Prisma, SQLite, GraphQL (Apollo Server)  
- **Frontend:** React, React Router, Apollo Client  
- **Tools:** npm, tsx  

---

## Installation & Setup

1. Repository klonen, Backend und Frontend installieren und starten:

```bash
git clone <dein-repo-url>
cd RESTvsGRAPHQL
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
cd ../frontend
npm install
npm run dev
```

2. Öffne Im Browser
- React App:  http://localhost:5173
- Backend REST API: http://localhost:4000/api/users
- Backend GraphQL API: http://localhost:4000/graphql

## Projektstruktur
```
/backend
  ├─ prisma/
  │    └─ schema.prisma
  ├─ src/
  │    ├─ rest/
  │    ├─ graphql/
  │    └─ server.ts
  └─ package.json

/frontend
  ├─ src/
  │    ├─ pages/
  │    ├─ App.jsx
  │    └─ main.jsx
  └─ package.json
```
## Wichtige Hinweise
- Stelle sicher, dass der Backend-Server läuft, bevor du das Frontend startest.
- API URLs im Frontend sind auf localhost:4000 konfiguriert, passe sie ggf. an.
- Die Datenbank wird mit SQLite betrieben und befindet sich im Backend-Ordner.
- Um die DB zu befüllen, kannst du Prisma Migrations und Seed-Scripts verwenden oder manuell via Prisma Studio (npx prisma studio).



