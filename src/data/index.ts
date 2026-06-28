// ── Creator Types ─────────────────────────────────────────────────────────────
export const creatorTypes = [
  { emoji: '🎬', title: 'Filmmakers', desc: 'Directors, DPs, ADs looking for crew and projects' },
  { emoji: '🎭', title: 'Actors', desc: 'Talent seeking roles in shorts, web series, and indie films' },
  { emoji: '📷', title: 'Photographers', desc: 'Visual artists building their portfolio and client base' },
  { emoji: '🎨', title: 'Designers', desc: 'Graphic, motion, and UI creators finding briefs and collabs' },
  { emoji: '✍️', title: 'Writers', desc: 'Screenwriters, poets, and content creators finding voice' },
  { emoji: '🎵', title: 'Musicians', desc: 'Composers and producers scoring for film and video' },
  { emoji: '✂️', title: 'Editors', desc: 'Post-production artists cutting and coloring stories' },
  { emoji: '📖', title: 'Storytellers', desc: 'Anyone with a story to tell and the will to tell it' },
] as const

// ── Ticker Items ──────────────────────────────────────────────────────────────
export const tickerItems = [
  'Filmmakers',
  'Actors',
  'Photographers',
  'Designers',
  'Writers',
  'Musicians',
  'Editors',
  'Storytellers',
] as const

// ── Membership Tiers ──────────────────────────────────────────────────────────
export interface MembershipTier {
  name: string
  badge: string
  earn: string
  perks: string[]
  highlighted: boolean
  label: string | null
}

export const membershipTiers: MembershipTier[] = [
  {
    name: 'Spark',
    badge: '🔥',
    earn: 'Join the community',
    perks: ['Access to WhatsApp Community', 'Collab board', 'Free group meetups'],
    highlighted: false,
    label: null,
  },
  {
    name: 'Flame',
    badge: '🔥🔥',
    earn: 'Complete 1 collab or challenge',
    perks: ['Member showcase feature', 'Priority event access', 'Collab board highlight'],
    highlighted: false,
    label: null,
  },
  {
    name: 'Blaze',
    badge: '🔥🔥🔥',
    earn: '3+ collabs or 6 months active',
    perks: ['Mentor members', 'FRK verified badge', 'First access to brand opportunities'],
    highlighted: true,
    label: 'Most Earned',
  },
  {
    name: 'Founder Circle',
    badge: '⭐',
    earn: 'Invited by Farhan',
    perks: ['Co-create FRK strategy', 'City chapter lead role', 'Direct mentorship'],
    highlighted: false,
    label: null,
  },
]

// ── City Chapters ─────────────────────────────────────────────────────────────
export interface City {
  name: string
  active: boolean
  status: string
  lead: string | null
  time: string | null
}

export const cities: City[] = [
  { name: 'Jamshedpur', active: true, status: 'Chapter HQ. Events already running.', lead: null, time: 'Open · Apply as Ambassador' },
  { name: 'Pune', active: true, status: 'Events already running.', lead: null, time: 'Open · Apply as Ambassador' },
  { name: 'Bangalore', active: false, status: 'Launching Soon', lead: null, time: 'Open · Apply as Ambassador' },
  { name: 'Mumbai', active: false, status: 'Launching Soon', lead: null, time: 'Open · Apply as Ambassador' },
  { name: 'Delhi / NCR', active: false, status: 'Launching Soon', lead: null, time: 'Open · Apply as Ambassador' },
  { name: 'Hyderabad', active: false, status: 'Launching Soon', lead: null, time: 'Open · Apply as Ambassador' },
]

// ── Testimonials ──────────────────────────────────────────────────────────────
export interface Testimonial {
  quote: string
  name: string
  role: string
  emoji: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'I posted my short film project and had a DP, actor, and editor within 48 hours. FRK Productions changed how I create.',
    name: 'Aarav S.',
    role: 'Director',
    emoji: '🎬',
  },
  {
    quote: "As a self-taught photographer, I never thought I'd find my community. Now I have 3 collabs under my belt.",
    name: 'Priya M.',
    role: 'Photographer',
    emoji: '📷',
  },
  {
    quote: 'I scored my first indie film through a connection I made in the FRK WhatsApp Community. This is the real deal.',
    name: 'Kabir R.',
    role: 'Music Producer, Online',
    emoji: '🎵',
  },
  {
    quote: 'The creative challenges pushed me to shoot things I never would have on my own. My portfolio is 3x better now.',
    name: 'Rohit D.',
    role: 'Actor & Filmmaker',
    emoji: '🎭',
  },
]

// ── FAQs ──────────────────────────────────────────────────────────────────────
export interface FAQ {
  q: string
  a: string
}

export const faqs: FAQ[] = [
  {
    q: 'Is FRK Productions free?',
    a: 'Membership is free, group meetups are free, and the collab board is free. We will never paywall your ability to create with others.',
  },
  {
    q: 'Who can join?',
    a: 'Any creator, anywhere in India. Filmmakers, actors, photographers, designers, writers, musicians, editors, if you create, you belong here.',
  },
  {
    q: 'How do I level up from Spark to Flame?',
    a: "Complete one collaboration or creative challenge. It's that simple. Ship something with a fellow FRK member.",
  },
  {
    q: 'Are there offline events?',
    a: 'Yes! Regional chapter events are already running. As new chapters launch, offline meetups, portfolio reviews, and shoots will follow.',
  },
  {
    q: 'Can I become a City Ambassador?',
    a: "Absolutely. Reach out to Farhan directly through WhatsApp if you want to bring FRK Productions to your city. We're actively looking for City Ambassadors.",
  },
]

// ── Nav Links ─────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Community', href: '#why-join' },
  { label: 'Membership', href: '#membership' },
  { label: 'Chapters', href: '#chapters' },
] as const
