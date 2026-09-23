export const SITE = {
  name: "Otamurod Safarov",
  role: "Middle Android Engineer",
  secondaryRole: "Kotlin Multiplatform Developer",
  location: "Tashkent, Uzbekistan",
  yearsOfExperience: "4+",
  description:
    "Middle Android Engineer specializing in Kotlin, Jetpack Compose, and Kotlin Multiplatform. I build production apps with Clean Architecture, modular design, and shared Android/iOS business logic.",
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
    period: "Mar 2025 — Jun 2026",
    role: "Android Developer",
    company: "Confidential Client (NDA)",
    href: undefined,
    location: "Tashkent, Uzbekistan",
    type: "Full-time Contract",
    promotion: undefined,
    highlights: [
      "Delivered a native Android app for a smart electricity and gas metering platform, integrating two IoT meter hardware revisions over WiFi.",
      "Advanced from XML-to-Compose migration work to full ownership of assigned sprint tickets — unit testing, code review, crash investigation, and architecture refactoring.",
      "Stabilized release cycles while migrating legacy screens to Jetpack Compose within a multi-module Clean Architecture + MVVM codebase.",
      "Partnered daily with UI/UX, QA, backend, iOS, and product teams in an Agile/Scrum environment.",
    ],
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Clean Architecture",
      "MVVM",
      "Coroutines",
      "Retrofit",
    ],
  },
  {
    period: "Nov 2024 — Mar 2025",
    role: "Middle Android Developer",
    company: "Softonic Global (formerly Softonic Uzbekistan)",
    href: "https://www.linkedin.com/company/softonic-uzbekistan/",
    location: "Tashkent, Uzbekistan",
    type: "Full-time",
    promotion: undefined,
    highlights: [
      "Continued development of the ELD telematics platform(s) after Softonic directly engaged the delivery engineering team following the Green Light ELD handoff.",
      "Resolved critical cross-platform defects on Android and iOS, contributing to a 20% improvement in app stability and user satisfaction.",
      "Refactored core shared modules, reducing code complexity by 25% and reinforcing long-term maintainability.",
      "Designed responsive UI components and integrated mapping/navigation features, including real-time location tracking.",
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
    period: "Sep 2024 — Oct 2024",
    role: "Android / Kotlin Multiplatform Engineer",
    company: "Green Light ELD",
    href: "https://www.linkedin.com/company/green-light-eld/",
    location: "Tashkent, Uzbekistan",
    type: "Full-time Contract",
    promotion: undefined,
    highlights: [
      "Joined an ELD telematics initiative through the Green Light ELD delivery team, contributing to mobile development and IoT device integrations for commercial trucking and logistics.",
      "Implemented low-level SDK integrations for IoT/ELD hardware, including Bluetooth device communication and data-synchronization layers.",
      "Published and managed releases across the App Store and Google Play, coordinating release activities under a compressed delivery timeline.",
      "Following a successful delivery, the client engaged the engineering team directly, continuing the project under Softonic Uzbekistan.",
    ],
    stack: [
      "Kotlin Multiplatform",
      "Bluetooth / BLE",
      "Android",
      "iOS",
    ],
  },
  {
    period: "Jun 2023 — Nov 2023",
    role: "Android Developer",
    company: "TaffHub",
    href: undefined,
    location: "Remote · Russia",
    type: "Full-time",
    promotion: undefined,
    highlights: [
      "Built production Android applications that improved user engagement and retention.",
      "Collaborated closely with product, design, and backend teams to deliver production-ready features.",
      "Improved application responsiveness through profiling, testing, debugging, and code optimization.",
      "Delivered projects ahead of schedule, earning consistently positive client feedback.",
    ],
    stack: [
      "Kotlin",
      "Android SDK",
      "MVVM",
      "XML",
    ],
  },
] as const;

export const FEATURED_PROJECT = {
  name: "Nurul Quran",
  tagline: "The Light of the Qur'an",
  category: "Personal · Google Play",
  sourceCode: "https://github.com/otamurod/TheHolyQuranKMP",
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

export const PROJECTS = [
  {
    name: "TrackPro ELD",
    tagline: "FMCSA-compliant ELD & fleet tracking",
    category: "Professional · iOS + Android",
    description:
      "A production ELD and fleet-tracking platform built for commercial trucking, combining Hours of Service compliance, real-time vehicle visibility, and communication with in-cab hardware. I contributed across both mobile platforms and the shared KMP layer.",
    highlights: [
      "Developed and maintained Android and iOS clients while sharing core business logic through Kotlin Multiplatform.",
      "Integrated mobile clients with Bluetooth-connected ELD hardware and worked on reliable data synchronization between devices and the backend.",
      "Diagnosed production issues across the mobile stack, improving stability in a hardware-dependent environment.",
      "Supported Google Play and App Store releases, from release preparation through production delivery.",
    ],
    stack: [
      "Kotlin",
      "Kotlin Multiplatform",
      "Android",
      "iOS",
      "Bluetooth / BLE",
      "IoT",
    ],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=uz.softonic.trackpro.eld.android",
        platform: "android",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/ru/app/trackpro-eld/id6480591761",
        platform: "ios",
      },
    ],
  },

  {
    name: "Level ELD",
    tagline: "ELD, HOS & fleet management",
    category: "Professional · iOS + Android",
    description:
      "A cross-platform fleet management solution designed around driver compliance, vehicle activity, and real-time location tracking. My work covered Android and iOS development, shared KMP business logic, hardware communication, and production issue resolution.",
    highlights: [
      "Built and refined cross-platform mobile features with Kotlin Multiplatform across Android and iOS.",
      "Implemented and maintained communication with Bluetooth/IoT ELD hardware used in real-world trucking workflows.",
      "Investigated production issues and delivered UI improvements across driver and fleet-management flows.",
      "Worked alongside the team on coordinated Android and iOS releases and cross-platform feature delivery.",
    ],
    stack: [
      "Kotlin",
      "Kotlin Multiplatform",
      "Android",
      "iOS",
      "Bluetooth / BLE",
      "Maps",
    ],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=uz.udt.american.eld.android",
        platform: "android",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/level-eld/id6737808577",
        platform: "ios",
      },
    ],
  },

  {
    name: "UTruckin ELD",
    tagline: "ELD compliance & real-time fleet tracking",
    category: "Professional · Android",
    description:
      "An Android ELD solution focused on everyday trucking operations, from HOS compliance and live tracking to driver messaging and violation alerts. I worked on production fixes, navigation and location features, and shared modules supporting the broader ELD product line.",
		highlights: [
      "Developed Android features for HOS compliance, live fleet tracking, driver communication, and navigation workflows.",
      "Tracked down production bugs and improved reliability across location-based and driver-facing functionality.",
      "Worked with real-time location and navigation features used by commercial drivers in day-to-day operations.",
      "Maintained shared mobile modules supporting functionality across the broader ELD product family.",
    ],
    stack: [
      "Kotlin",
      "Android",
      "Kotlin Multiplatform",
      "Maps",
      "Navigation",
      "Coroutines",
    ],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=uz.softonic.utruckin.android",
        platform: "android",
      },
    ],
  },

  {
    name: "GreenLight ELD",
    tagline: "Now published as Quantum Logbook",
    category: "Professional · Android",
    description:
      "An ELD telematics application providing automated HOS tracking, DVIR workflows, IFTA reporting, and GPS-based fleet visibility. I contributed as an Android/KMP engineer, working with Bluetooth-connected hardware and the synchronization layers behind the mobile experience.",
    highlights: [
      "Contributed to the Android/KMP mobile application connecting commercial drivers with an ELD telematics ecosystem.",
      "Worked with Bluetooth communication to exchange data with in-cab ELD hardware.",
      "Implemented and maintained synchronization layers responsible for keeping device and application data consistent.",
      "Contributed to the mobile product during its transition into continued development under the engineering team.",
    ],
    stack: [
      "Kotlin",
      "Kotlin Multiplatform",
      "Android",
      "Bluetooth / BLE",
      "IoT",
      "GPS",
    ],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=uz.udt.greenlight.eld.android",
        platform: "android",
      },
    ],
  },
] as const;

export const CONTACT = {
  email: "otamurod.safarov.jobs@gmail.com",
  github: "https://github.com/otamurod",
  linkedin: "https://www.linkedin.com/in/otamurod-safarov/",
  play: "https://play.google.com/store/apps/dev?id=6808076315340974036",
  resume: "/otamurod-safarov-cv.pdf",
};