# A2 Emergency Response — Page Layout

> Area of Focus: Emergency Response
> Port: 3205
> Homepage positioning: mission/response-first
> Database: charityevents_c (read-only GET)

## Directional Guidelines

The primary objective of A2-1 is to help users understand Swift Aid's mission and how its emergency response efforts extend to every community. The homepage prioritizes the mission and response commitment, supplemented by event discovery, while emphasizing the narrative of "proactive preparation and rapid response."

A2-1 shall not be responsible for authentic registration; that is the responsibility of A3.

## Page Index (4 pages)

### 1. index.html — Home（mission/response-first）

**Positioning**: Brand mission homepage; prioritizing fulfillment of commitments.

**Page Layout (Top to Bottom):**

| # | Block | Component | Data Source |
|---|------|------|----------|
| 1 | Navbar | G-1 Navbar | Static |
| 2 | Hero | H1 HeroSection | Static (Emotional Copy + Responsive Commitment) |
| 3 | Response Promise | AP-1 Promise Clause | Static |
| 4 | Impact Stats | H2 ImpactStats | API GET /api/events (aggregated) |
| 5 | Upcoming Events | H3 EventGrid (4 items) | API GET /api/events |
| 6 | Relief Stories | BS-1 Story Section | Static |
| 7 | Mission | H4 MissionSection | Static |
| 8 | Footer | G-2 Footer | Static |

#### H1 · Hero

-Full-width background image R-01 (Emergency supplies distribution area / rescue command post), gradient mask
-Main headline: Help arrives when it matters most.
-Subtitle: One Sentence Mission
-Two buttons: the primary button "Browse Events" (redirects to search.html) and the secondary button "See an activity" (redirects to event.html?id=1)
-Hero copy conveys its message independently of color.

#### AP-1 · Response Promise

-A horizontal card listing four response commitments:
-Rapid deployment
-Distribution of relief supplies
-Temporary shelter (temporary resettlement support)
-Rebuild Support
-Each item includes an icon, a title, and one line of description; `aria-label` complete

#### H3 · Upcoming Events

-The links "Upcoming Response Events" and "See all" point to search.html
-4-column responsive grid (desktop: 4 / tablet: 2 / mobile: 1)
-Fetch GET /api/events?status=Active and render the EventCard
-Loading skeleton screen, failure error indicator
-Each card includes an emergency support badge

#### BS-1 · Relief Stories

-2–3 community story cards (rounded illustration + quotation + author's name)
-Static content that emphasizes resilience and mutual support rather than sentimentality

---

### 2. search.html — Search

**Purpose**: Filter emergency activities based on specified criteria.

**Page Structure**:

| # | Block | Component | Data Source |
|---|------|------|----------|
| 1 | Navbar | G-1 | Static |
| 2 | Filter Form | S1 FilterForm | GET /api/categories |
| 3 | Results Grid | S2 SearchResults | GET /api/events/search |
| 4 | Footer | G-2 | Static |

#### S1 · FilterForm

-Three filters: Date (input type= "date"), Location (text), Category (select, from GET /api/categories)
-Primary button: "Search"; secondary button: "Clear Filters"
-Clear Filters: Reset fields and refresh results
-The date cannot be in the past; system error message
-Form `role= "search" `

#### S2 · SearchResults

-Responsive grid reuse of EventCard
-Empty state with no result (R-05 placeholder + description)
-Red failure indicator bar
"-N events found" appears above the grid.

---

### 3. event.html — Event Details

**Purpose**: Display complete event information + details of rescue and resettlement support + redirect to the registration placeholder page.

**Page Structure**:

| # | Block | Component | Data Source |
|---|------|------|----------|
| 1 | Navbar | G-1 | Static |
| 2 | Event Hero | D1 EventHero | GET /api/events/:id |
| 3 | Relief & Shelter Info | AI-1 | GET /api/events/:id |
| 4 | Ticket Goal Card | D2 TicketGoalCard | GET /api/events/:id |
| 5 | Register CTA | D3 Register Link | Static (Redirect) |
| 6 | Footer | G-2 | Static |

#### D1 · EventHero

-Left large image (R-series cover); right information panel: category badge, title, date, location, and description
-id: read from URL?id=
-No display error state is present.

#### AI-1 · Relief & Shelter Information (Exclusive to A2-1)

-List the relief and resettlement support information for this activity:
-Material Checklist (Drinking Water / Food / Emergency Kit)
-Accommodation capacity (number of people / zone)
-Assembly point and evacuation routes
-On-site Support (Medical Outpost / Power Supply / Communications)
-Contact and Registration Information
-Each item includes a "How to Obtain/Apply" section
-This is the core block that distinguishes A2-1 from A2-2.

#### D3 · Register CTA (A2 Behavior)

-Click the "Request support" button to navigate to `/registration-placeholder.html?id={event_id}`
-Do not use modal frames; A2 does not include a library.

---

### 4. registration-placeholder.html — Registration Placeholder

**Purpose**: A registration placeholder page indicating that complete registration details are provided on A3.

**Page Structure**:

| # | Block | Component | Data Source |
|---|------|------|----------|
| 1 | Navbar | G-1 | Static |
| 2 | Placeholder Hero | P1 | Static |
| 3 | Activity Summary | P2 | GET /api/events/: id (read from URL?id=) |
| 4 | What to Expect | P3 Support Checklist | Static |
| 5 | Next Steps | P4 | Static |
| 6 | Footer | G-2 | Static |

#### P1 · Placeholder Hero

-Title: "Request support first."
-Note that no database entry is required at Stage A2; the complete application process will be provided at Stage A3.

#### P2 · Activity Summary

-Extract the event name, date, and location from the URL?id=
-Display a downgrade message when no ID is present or no activity exists.

#### P3 · What to Expect

-List support measures that can be arranged in advance: distribution of supplies, temporary accommodation, guidance at assembly points, and contact and registration procedures
-Each entry includes a contact link (mailto)

#### P4 · Next Steps

- "Back to the activity" (return to event.html?id=)
- "Browse all activities" (jump to search.html)

## Navigation Flow

```
Home ──┬──▶ Search ──▶ Event Details ──▶ Registration Placeholder
      └──▶ Event Details ──▶ Registration Placeholder
```

## API Usage

| Page | Route |
|------|------|
| Home | GET /api/events?status=Active |
| Search | GET /api/categories、GET /api/events/search |
| Event Details | GET /api/events/:id |
| Registration Placeholder | GET /api/events/:id |

## Boundary Declaration

-A2-1 Do not use POST/PUT/DELETE operations; do not write to the database.
-A2-1: No backend CRUD implementation
-A2-1 does not reference any document from A2-2, A3, or topics A or B.
-All animations comply with `prefers-reduced-motion`; magnetic button effects are disabled on touch-screen devices.
