 # Student Dashboard

A futuristic, responsive learning dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion. The project demonstrates server-side data fetching, animated Bento Grid layouts, and smooth user interactions inspired by modern educational platforms.

## Live Demo

Vercel Deployment:

https://student-dashboard-chi-jet.vercel.app/

## GitHub Repository

https://github.com/sakshisaxena2506/student-dashboard

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- Framer Motion
- Lucide React

---

## Features

### Dashboard Layout

- Dark-mode futuristic UI
- Bento Grid dashboard layout
- Responsive sidebar navigation
- Mobile bottom navigation
- Hero section with learning streak
- Dynamic course cards
- Weekly activity graph

### Supabase Integration

- Course data stored in Supabase PostgreSQL
- Server-side data fetching using Next.js Server Components
- Environment variable configuration
- Graceful error handling for failed database requests

### Animations

- Framer Motion staggered page animations
- Spring-based hover interactions
- Animated course progress bars
- Sidebar active-state transitions using `layoutId`
- Smooth hardware-accelerated animations
- No layout shifts during animations

### Responsive Design

- Desktop: Full Bento Grid layout with sidebar
- Tablet: Compact sidebar with icon-focused navigation
- Mobile: Bottom navigation bar and stacked layout

---

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
├── AnimatedCourses.tsx
├── BentoCard.tsx

lib/
├── supabase.ts
```

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

An example file is included:

```text
.env.example
```

---

## Database Schema

Table: `courses`

| Column | Type |
|---------|---------|
| id | uuid |
| title | text |
| progress | integer |
| icon_name | text |
| created_at | timestamp |

### Sample Data

| title | progress | icon_name |
|---------|---------|---------|
| Advanced React Patterns | 75 | BookOpen |
| Machine Learning Basics | 60 | Brain |
| Database Systems | 90 | Database |

---

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Architectural Decisions

### Server Components

The dashboard fetches course data using Next.js Server Components. This keeps database queries on the server, reduces client-side JavaScript, and improves performance.

### Client Components

Interactive components such as:

- Sidebar
- Course Cards
- Activity Graph
- Animations

are implemented as Client Components because they require state management and Framer Motion interactions.

### Component Modularity

The UI is broken into reusable components:

- Sidebar
- HeroCard
- CourseCard
- ActivityCard
- BentoCard
- AnimatedCourses

This makes the project easier to maintain and scale.

### Animation Strategy

Framer Motion is used throughout the application for:

- Staggered loading animations
- Spring physics interactions
- Hover elevation effects
- Active navigation transitions

Animations rely primarily on transforms and opacity to avoid layout shifts and ensure smooth rendering.

---

## Challenges Faced

- Implementing staggered animations without affecting layout stability.
- Dynamically rendering Lucide icons from values stored in Supabase.
- Maintaining a responsive Bento Grid layout across multiple screen sizes.
- Separating server-side data fetching from client-side animations.
- Designing a futuristic interface while keeping the component structure modular and reusable.

---

## Assignment Requirements Covered

✅ Next.js App Router

✅ Supabase PostgreSQL Integration

✅ Server Components

✅ Framer Motion Animations

✅ Bento Grid Layout

✅ Dynamic Course Cards

✅ Animated Progress Bars

✅ Loading Skeletons

✅ Error Handling

✅ Responsive Design

✅ Mobile Navigation

✅ Dynamic Icon Rendering

✅ Spring Physics Interactions

✅ Dark Mode UI

✅ Reusable Component Architecture

---

## Author

Sakshi Saxena

Frontend Intern Challenge Submission