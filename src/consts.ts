export const SITE = {
  name: "Otamurod Safarov",
  role: "Senior Android Engineer",
  secondaryRole: "Kotlin Multiplatform Developer",
  location: "Tashkent, Uzbekistan",
  yearsOfExperience: "5+",
  description:
    "Senior Android Engineer specializing in Kotlin, Jetpack Compose, and Kotlin Multiplatform. I build production apps with Clean Architecture, modular design, and shared Android/iOS business logic.",
  shortBio:
    "I build production Android apps with Kotlin, Jetpack Compose, and Clean Architecture — and shared business logic across platforms with Kotlin Multiplatform.",
  url: "https://otamurod.github.io",
} as const;

export const SOCIAL = {
  email: "otamurod.safarov.jobs@gmail.com",
  github: "https://github.com/otamurod",
  linkedin: "https://www.linkedin.com/in/otamurod-safarov/",
  googlePlay: "https://play.google.com/store/apps/dev?id=6808076315340974036",
  resume: "/otamurod-safarov-cv.pdf",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const EXPERIENCE = [
  {
    period: "Aug 2025 — Jun 2026",
    role: "Senior Android Developer",
    company: "Softonic Uzbekistan",
    href: "https://www.linkedin.com/company/softonic-uzbekistan/",
    location: "Tashkent, Uzbekistan",
    type: "Full-time",
    promotion: undefined,
    highlights: [
      "Joined a large-scale Android codebase mid-migration, stabilizing release cycles while progressively converting legacy screens to Jetpack Compose within a Clean Architecture + MVVM, multi-module project.",
      "Drove bug resolution and feature improvements across UI, data, and domain layers on 3 concurrent projects — without disrupting the ongoing migration.",
      "Integrated authenticated REST APIs with robust token refresh, domain-layer abstractions, and resilient error handling.",
    ],
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Clean Architecture",
      "MVVM",
      "Multi-module",
      "REST",
    ],
  },
  {
    period: "Nov 2024 — Jul 2025",
    role: "Middle Kotlin Multiplatform Developer",
    company: "Green Light ELD",
    href: "https://www.linkedin.com/company/green-light-eld/",
    location: "Tashkent, Uzbekistan",
    type: "Full-time",
    promotion: undefined,
    highlights: [
      "Identified and resolved critical bugs on Android and iOS, contributing to a 20% improvement in app stability.",
      "Refactored core shared modules, reducing code complexity by 25% and enhancing long-term scalability.",
      "Integrated advanced mapping and navigation with real-time location tracking.",
    ],
    stack: [
      "Kotlin Multiplatform",
      "Kotlin",
      "Android",
      "iOS",
      "Maps",
      "Coroutines",
    ],
  },
  {
    period: "Jan 2022 — Oct 2024",
    role: "Middle Kotlin Multiplatform Developer",
    company: "TaffHub",
    href: undefined,
    location: "Remote · Russia",
    type: "Full-time",
    promotion: {
      fromRole: "Android Developer",
      fromPeriod: "Jan 2022 — Dec 2023",
      toRole: "Middle KMP Developer",
      toPeriod: "Jan 2024 — Oct 2024",
    },
    highlights: [
      "Started as Android Developer, promoted to Middle KMP Developer after two years of consistently delivering production Android apps with positive client feedback.",
      "Optimized shared code modules and improved cross-platform consistency across Android and iOS, reducing build times and platform-specific defects.",
      "Collaborated with product, design, and backend teams to ship production-ready features and improve app responsiveness through profiling and code optimization.",
    ],
    stack: [
      "Kotlin Multiplatform",
      "Kotlin",
      "Java",
      "Android SDK",
      "MVVM",
      "Coroutines",
      "Retrofit",
    ],
  },
] as const;

export const FEATURED_PROJECT = {
  name: "Nurul Quran",
  tagline: "The Light of the Qur'an",
  category: "Personal · Google Play",
  href: "https://play.google.com/store/apps/details?id=com.otamurod.quronikarim",
  description:
    "A production-ready Islamic companion application serving thousands of users with the Holy Quran, prayer times, Qibla direction, Sahih al-Bukhari, Ramadan tools, Islamic books, and offline-first experiences. Currently being migrated using Kotlin Multiplatform and Compose Multiplatform to deliver a shared Android and iOS codebase.",
  stats: {
    rating: 4.9,
    ratingCount: "50+",
    downloads: "3K+",
    platform: "Android",
    published: 2023,
  },
  status: [
    { label: "Live on Google Play",                  tone: "live"    as const },
    { label: "Kotlin Multiplatform migration",       tone: "primary" as const },
    { label: "iOS build in development",             tone: "muted"   as const },
  ],
  features: [
    "Complete Holy Quran with Modern Mushaf Reader",
    "Multiple translations and word-by-word tafsir",
    "Qibla Finder",
    "Ramadan Calendar",
    "Audio recitation from popular Qaris",
    "Offline reading and cached audio",
    "Material 3 Compose UI with 4 types of themes",
    "Ongoing Kotlin Multiplatform Migration",
  ],
  stack: [
    "Kotlin",
    "Kotlin/Compose Multiplatform",
    "Jetpack Compose",
    "Clean Architecture",
    "MVVM",
    "Room",
    "Coroutines",
    "Koin",
    "Ktor",
    "REST APIs",
    "Multiplatform Preferences",
    "Material 3",
  ],
} as const;

export const CONTACT = {
  email: "otamurod.safarov.jobs@gmail.com",
  github: "https://github.com/otamurod",
  linkedin: "https://www.linkedin.com/in/otamurod-safarov/",
  play: "https://play.google.com/store/apps/dev?id=6808076315340974036",
  resume: "/otamurod-safarov-cv.pdf",
};
