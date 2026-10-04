# Swift Aid — Emergency Response Charity Events

A dynamic charity-event website built for **PROG2002 Assignment 2**. Swift Aid connects the community with
emergency-response and relief events — from preparedness drills and supply dispatches to shelter and rebuild
support. The site lets visitors browse upcoming events, filter them by date / location / category, and view
the full details of a single event.

> This is a read-only project (Assignment 2). Event registration is intentionally left as a placeholder;
> create / update / delete features will be added in Assignment 3.

## Features

- **Homepage** — charity mission & intro, live event list fetched from the API (suspended events are hidden),
  events automatically labelled by their status.
- **Search page** — filter events by **date, location and category**, with a "Clear filters" reset button,
  loading / empty / error states, and links to each event detail page.
- **Event detail page** — full information for one event (title, date, location, category, description, purpose,
  ticket price), pulled by event id from the URL query string.
- **Register button** — shows *"This feature is currently under construction."*
- Persistent navigation menu on every page.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML, CSS, vanilla JavaScript + DOM, `fetch()` (Promises) |
| Backend | Node.js, Express |
| Database | MySQL (via `mysql2`) |

No front-end framework (e.g. AngularJS) is used, as required by the brief.

## Project Structure

```
source/
├── api/          # Express server (server.js) + MySQL connection (event_db.js)
├── client/       # Frontend pages (index / search / event / registration-placeholder), CSS, JS
├── database/     # schema.sql + seed.sql + setup notes
└── assets/       # logo, favicon, og image, event photos
```

## Database

Database name: **`charityevents_db`**

Three tables:

| Table | Purpose | Key relationships |
|-------|---------|-------------------|
| `charities` | charity organisations | one → many events |
| `categories` | event categories (Preparedness, Relief, Rescue, Rebuild) | one → many events |
| `events` | the charity events | `category_id` → `categories.id`, `charity_id` → `charities.id` |

Sample data: 3 charities, 4 categories, 8 events.

## REST API

All endpoints are **read-only (GET)**, per the Assignment 2 requirement.

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/categories` | all category names (search dropdown) |
| GET | `/api/events` | all events (optional `category`) |
| GET | `/api/events/featured` | active events for the homepage |
| GET | `/api/events/search` | filter by `keyword`, `date`, `location`, `category`, `serviceType` |
| GET | `/api/events/:id` | full details of one event |
| GET | `/api/organisations` | all charities |
| GET | `/api/organisations/:id` | one charity + its events |

## Getting Started

1. **Install MySQL** and create the database:
   ```bash
   mysql -u root -p < source/database/schema.sql
   mysql -u root -p < source/database/seed.sql
   ```
2. **Configure the connection** — copy `.env.example` to `.env` and fill in your MySQL credentials:
   ```
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=charityevents_db
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the server:**
   ```bash
   npm start
   ```
   Then open `http://localhost:3205`.

## License

This project is a student assessment for PROG2002 Web Development II — for academic use only.

---

Author: Li Haoran · h.li.81@student.scu.edu.au
