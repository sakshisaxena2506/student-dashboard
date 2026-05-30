 # Student Dashboard

A futuristic learning dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

## Live Demo

Vercel Deployment: https://student-dashboard-chi-jet.vercel.app/

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React

## Features

### Dashboard Layout

* Dark-mode Bento Grid interface
* Responsive sidebar navigation
* Mobile bottom navigation
* Hero section with learning streak
* Dynamic course cards
* Activity contribution graph

### Supabase Integration

* Courses fetched from Supabase PostgreSQL
* Server-side data fetching using Next.js Server Components
* Error handling for database failures

### Animations

* Framer Motion card animations
* Staggered entrance effects
* Spring-based hover interactions
* Animated progress bars
* Sidebar active-state transitions

### Responsive Design

* Desktop: Full sidebar + Bento grid
* Tablet: Compact sidebar
* Mobile: Bottom navigation

## Project Structure

```text
app/
├── page.tsx
├── loading.tsx

components/
├── Sidebar.tsx
├── HeroCard.tsx
├── CourseCard.tsx
├── ActivityCard.tsx
├── BentoTile.tsx

lib/
├── supabase.ts
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Database Schema

Table: `courses`

| Column     | Type      |
| ---------- | --------- |
| id         | uuid      |
| title      | text      |
| progress   | integer   |
| icon_name  | text      |
| created_at | timestamp |

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Architectural Decisions

* Server Components are used for Supabase data fetching to improve performance and reduce client-side requests.
* Client Components are used for animations and interactive UI elements.
* Reusable BentoTile components provide a consistent layout system.
* Framer Motion is used to ensure smooth hardware-accelerated animations without layout shifts.

```
```
