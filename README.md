# ?? All-In-One Discord Bot

Ein multifunktionaler Discord Bot, gebaut mit discord.js, der Moderation, Musik und Utility-Commands vereint.

---

## ?? Betriebskosten-Kalkulation
Damit der Bot durchgehend läuft, wird ein Server benötigt.
| Komponente | Anbieter | Kosten | Zweck |
| :--- | :--- | :--- | :--- |
| **Hosting (24/7)** | Hetzner CX21 oder Contabo VPS | ~4.00 - 5.00 € | Node.js Runtime |
| **Datenbank** | SQLite (Lokal) oder externe DB | 0.00 € | Speicherung von Server-Configs |
| **GESAMT** | | **ca. 5.00 € / Monat** |

---

## ??? Setup & Installation
1. Node.js v18+ installieren.
2. 
pm install ausführen.
3. .env anlegen mit:
   - DISCORD_TOKEN=dein_token_hier
   - CLIENT_ID=deine_bot_id
4. 
ode src/index.js (oder 
pm run start).
5. **Produktion:** Nutze PM2 (pm2 start src/index.js --name "AIO-Bot") oder Docker.

---

## ?? Code-Architektur
- src/commands/: Modulare Slash-Commands aufgeteilt nach Kategorien.
- src/events/: Event-Listener für Discord (z.B. messageCreate, ready).
- src/handlers/: Logik zum dynamischen Laden von Commands und Events beim Start.
