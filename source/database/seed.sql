-- ============================================================
-- PROG2002 Web Development II - Charity Events website
-- A2 project: C / A2-1  (Swift Aid - emergency response theme)
-- Sample data for charityevents_db
--
-- Run schema.sql first, then this file.
--   mysql -u root -p < source/database/seed.sql
--
-- Contents: 4 categories, 3 charity organisations, 8 events.
-- ============================================================

USE charityevents_db;

SET NAMES utf8mb4;

-- Cleared child-first so the foreign keys stay valid on a re-import.
DELETE FROM events;
DELETE FROM categories;
DELETE FROM charities;

-- ------------------------------------------------------------
-- categories
-- ------------------------------------------------------------
INSERT INTO categories (id, name, description) VALUES
  (1, 'Preparedness', 'Drills and readiness training that help communities act fast in the first hour.'),
  (2, 'Relief', 'Shelter, supplies and family essentials for households hit by an emergency.'),
  (3, 'Rescue', 'Coordinated search, medical support and safe evacuation for people at risk.'),
  (4, 'Rebuild', 'Staged recovery support that helps neighbourhoods repair and reopen.');

-- ------------------------------------------------------------
-- charities
-- ------------------------------------------------------------
INSERT INTO charities (id, name, slug, focus, email, city) VALUES
  (1, 'Swift Aid Response Alliance', 'swift-aid-response-alliance', 'Emergency preparedness', 'response@swift-aid.org', 'North District'),
  (2, 'Swift Aid Relief Corps', 'swift-aid-relief-corps', 'Relief distribution', 'relief@swift-aid.org', 'Swift Aid Warehouse'),
  (3, 'Swift Aid Community Rebuild', 'swift-aid-community-rebuild', 'Rebuild support', 'rebuild@swift-aid.org', 'East District');

-- ------------------------------------------------------------
-- events
-- category_id references categories.id, charity_id references charities.id
-- ------------------------------------------------------------
INSERT INTO events
  (id, title, category_id, charity_id, event_date, location, status, image, description, purpose, price, service_type)
VALUES
  (1, 'Emergency Command Briefing', 3, 1, '2026-10-12', 'Swift Aid Operations Centre', 'upcoming', 'r-01-emergency-command.jpg',
   'Observe how response teams assess incidents, assign roles and coordinate the first hour.',
   'Show residents how a coordinated command room turns an alert into fast, safe action.',
   'Free entry', NULL),
  (2, 'Public Alert Drill', 1, 1, '2026-10-19', 'North District', 'upcoming', 'r-02-emergency-broadcast.jpg',
   'Practice clear emergency messages and learn how residents receive local alerts.',
   'Make sure every household recognises an official alert and knows the next step.',
   'Free entry', NULL),
  (3, 'Relief Pack Dispatch', 2, 2, '2026-11-02', 'Swift Aid Warehouse', 'upcoming', 'r-05-relief-supplies.jpg',
   'Sort and dispatch essential relief packs for communities affected by severe weather.',
   'Get water, food and hygiene essentials into affected homes within the first day.',
   'Free · donations welcome', NULL),
  (4, 'Responder Readiness Walkthrough', 1, 1, '2026-11-09', 'East Campus', 'upcoming', 'r-08-rescue-worker-portrait.jpg',
   'Walk through equipment checks, access routes and responder wellbeing protocols.',
   'Keep volunteer responders fit, equipped and confident before the next call-out.',
   'Free entry', NULL),
  (5, 'Community Drill Coordination', 1, 1, '2026-11-16', 'West District', 'upcoming', 'r-04-community-drill.jpg',
   'Coordinate a neighbourhood drill covering alarm signals, muster points and household checklists.',
   'Build everyday readiness so residents know exactly what to do when an alert sounds.',
   'Free entry', NULL),
  (6, 'Accessible Evacuation Drill', 3, 1, '2026-11-23', 'South Campus', 'upcoming', 'r-06-accessible-evacuation-drill.jpg',
   'Rehearse assisted evacuation routes with mobility aids, sighted guides and clear signage.',
   'Ensure no resident is left behind when a community must evacuate quickly.',
   'Free · donations welcome', NULL),
  (7, 'Shelter Quiet Zone Handover', 2, 2, '2026-12-07', 'North Community Hall', 'suspended', 'r-03-shelter-quiet-zone.jpg',
   'Hand over calm, low-stimulation shelter zones with privacy screens and quiet lighting.',
   'Protect the wellbeing of children and distressed residents inside busy relief shelters.',
   'Suggested donation 50', NULL),
  (8, 'Rebuild Volunteer Induction', 4, 3, '2026-12-14', 'Swift Aid Community Hub', 'upcoming', 'r-07-rebuild-volunteers.jpg',
   'Induct volunteers into safe repair tasks, tool handling and resident-led recovery planning.',
   'Give displaced neighbourhoods the skilled hands needed to repair homes and reopen services.',
   'Free entry', NULL);
