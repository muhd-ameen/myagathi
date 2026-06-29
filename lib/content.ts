/**
 * Single source of truth for all site content.
 * Ported from the original Viator Ventures site (emoji-free for the clean Dolanan look).
 */

export const PHONE_PRIMARY = "8086003344";
export const PHONE_SECONDARY = "8078095740";
export const WHATSAPP = "918086003344";

export function wa(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: "Viator Ventures",
  shortName: "Viator",
  tagline: "Agatti Island, Lakshadweep",
  cin: "U79120LD2024PTC024410",
  phonePrimary: PHONE_PRIMARY,
  phoneSecondary: PHONE_SECONDARY,
  whatsapp: WHATSAPP,
  location: "Agatti Island, Lakshadweep",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Agatti Island, Lakshadweep",
  title: "Your Complete\nAgatti Guide.",
  description:
    "Everything you need to know about Agatti Island. From hidden beaches to local experiences, we guide you through the ultimate island adventure.",
  ctaPrimary: {
    label: "Plan My Trip",
    href: wa(
      "Hi! I'm planning to visit Agatti Island. Can you help me with a complete guide and travel arrangements?",
    ),
  },
  ctaSecondary: { label: "Explore Activities", href: "/activities" },
  badges: ["Beaches", "Culture", "Water Sports"],
  socialProof: "Trusted by travelers across India",
};

/* HOME - "Come here and explore the beautiful places here." (3 featured) */
export const featured = [
  {
    name: "Pristine Beaches",
    blurb: "Lagoon, Andam & Moloka",
    image: "/images/beach.jpg",
    href: "/activities",
  },
  {
    name: "Island Hopping",
    blurb: "Thinnakara & Bangaram",
    image: "/images/thinnakara.jpg",
    href: "/activities",
  },
  {
    name: "Scuba & Snorkeling",
    blurb: "Coral reef adventures",
    image: "/images/scuba.jpg",
    href: "/activities",
  },
];

/* HOME - "Our tailored destinations just for you" (2x2 categories) */
export const categories = [
  {
    name: "Beaches & Lagoons",
    description: "Calm turquoise waters and white sand.",
    image: "/images/beach.jpg",
  },
  {
    name: "Water Sports",
    description: "Snorkeling, scuba, kayaking & more.",
    image: "/images/kayaking.jpg",
  },
  {
    name: "Culture & Heritage",
    description: "Museums, cuisine and island traditions.",
    image: "/images/culture.jpg",
  },
  {
    name: "Island Hopping",
    description: "Speedboat trips to nearby islands.",
    image: "/images/thinnakara.jpg",
  },
];

/* HOME - "Discover our most popular tours!" (4 cards) */
export const popular = [
  {
    title: "Snorkeling & Scuba Diving",
    place: "Agatti Lagoon",
    rating: 4.9,
    meta: "Half day",
    image: "/images/scuba.jpg",
  },
  {
    title: "Glass Bottom Boating",
    place: "Agatti Island",
    rating: 4.8,
    meta: "2 hours",
    image: "/images/kayaking.jpg",
  },
  {
    title: "Island Hopping Tour",
    place: "Thinnakara",
    rating: 4.9,
    meta: "Full day",
    image: "/images/thinnakara.jpg",
  },
  {
    title: "360 Sightseeing Tour",
    place: "Agatti Island",
    rating: 4.7,
    meta: "Half day",
    image: "/images/sight-seeing.jpg",
  },
];

/* HOME - "Ticket ordering process" (how it works) */
export const howItWorks = [
  {
    title: "Find your destination",
    description:
      "Tell us when you want to travel and what you'd love to experience on Agatti.",
  },
  {
    title: "Book your trip",
    description:
      "Reach out on WhatsApp and we'll craft an itinerary that fits your dates and budget.",
  },
  {
    title: "We handle permits",
    description:
      "As a licensed operator we arrange all permits, transfers and accommodation.",
  },
  {
    title: "Explore Agatti",
    description:
      "Arrive and enjoy. Our local guides take care of every detail on the ground.",
  },
];

/* ACTIVITIES - full list (was Services) */
export const activities = [
  {
    title: "Lagoon, Andam & Moloka Beaches",
    description:
      "Discover Agatti's most beautiful beaches with crystal-clear lagoons and pristine white sand. Perfect for relaxation and photography.",
    features: [
      "Lagoon Beach - calm waters",
      "Andam Beach - perfect for swimming",
      "Moloka Beach - hidden gem",
      "Instagram-worthy spots",
    ],
    image: "/images/beach.jpg",
  },
  {
    title: "Museum & Cultural Heritage",
    description:
      "Explore Agatti's rich history and culture at the local museum. Learn about the island's traditions, artifacts, and way of life.",
    features: [
      "Local history exhibits",
      "Cultural artifacts",
      "Traditional knowledge",
      "Guided museum tours",
    ],
    image: "/images/museum.jpg",
  },
  {
    title: "Kayaking & Glass Bottom Boating",
    description:
      "Paddle through calm lagoons or explore underwater life without getting wet. Perfect for all ages and skill levels.",
    features: [
      "Kayaking in calm waters",
      "Glass bottom boat tours",
      "Underwater marine life viewing",
      "Safe for non-swimmers",
    ],
    image: "/images/kayaking.jpg",
  },
  {
    title: "Snorkeling & Scuba Diving",
    description:
      "Dive into Agatti's underwater paradise. Explore vibrant coral reefs and swim with tropical fish in crystal-clear waters.",
    features: [
      "Professional snorkeling gear",
      "Coral reef exploration",
      "Scuba diving for certified divers",
      "Underwater photography",
    ],
    image: "/images/scuba.jpg",
  },
  {
    title: "Thinnakara, Bangaram & Kalpetti Islands",
    description:
      "Island hopping adventure to nearby pristine islands. Each offers unique experiences and breathtaking natural beauty.",
    features: [
      "Thinnakara - sandbank paradise",
      "Bangaram - luxury resort island",
      "Kalpetti - untouched beauty",
      "Speedboat transfers included",
    ],
    image: "/images/thinnakara.jpg",
  },
  {
    title: "Fish Hunting & Fishing",
    description:
      "Experience traditional and modern fishing techniques. Learn from local fishermen and try your hand at catching dinner.",
    features: [
      "Traditional fishing methods",
      "Local fish species",
      "Expert fisherman guides",
      "Fresh catch cooking",
    ],
    image: "/images/fishing.jpg",
  },
  {
    title: "Native Food & Local Cuisine",
    description:
      "Savor authentic Agatti flavors. Experience traditional island cuisine with fresh seafood and local ingredients.",
    features: [
      "Fresh seafood specialties",
      "Coconut-based dishes",
      "Traditional spices",
      "Local cooking demonstrations",
    ],
    image: "/images/local-food.jpg",
  },
  {
    title: "360 Sightseeing & Island Tours",
    description:
      "Every corner of Agatti is a treasure waiting to be discovered. From hidden coves to breathtaking viewpoints, every place you visit will feel like paradise.",
    features: [
      "Sunrise & sunset viewpoints",
      "Best photo spots",
      "Complete island tour",
      "Local guide insights",
    ],
    image: "/images/sight-seeing.jpg",
  },
  {
    title: "Native Dweep Culture",
    description:
      "Immerse yourself in authentic Lakshadweep culture. Experience traditional music, dance, crafts, and local customs.",
    features: [
      "Traditional music & dance",
      "Local handicrafts",
      "Cultural interactions",
      "Parijja Mutt, Olakka Mutt & Kolkalli art",
    ],
    image: "/images/culture.jpg",
  },
];

/* PACKAGES */
export const packages = [
  {
    title: "Ultimate Lakshadweep Paradise",
    subtitle: "5 days of pure island magic",
    duration: "5 Days / 4 Nights",
    islands: "Agatti • Kavaratti • Bangaram",
    description:
      "Experience the complete Lakshadweep adventure with our most popular package. From luxury beachfront stays to thrilling water adventures, this is your gateway to paradise.",
    highlights: [
      "Luxury beachfront resort accommodation",
      "Private speedboat island hopping",
      "All meals with local delicacies",
      "Professional snorkeling & diving",
      "Cultural island experiences",
      "All permits & transfers included",
      "Dedicated local guide support",
      "Photography & memories package",
    ],
    image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1000&h=750&fit=crop",
    price: "From ₹16,500",
    originalPrice: "₹18,500",
    discount: "Save ₹2,000",
    popular: true,
    bestseller: true,
  },
  {
    title: "Bangaram Island Escape",
    subtitle: "Perfect day-trip adventure",
    duration: "1 Day",
    islands: "Bangaram • Thinnakara",
    description:
      "Discover the pristine beauty of Bangaram Island in a single day. Perfect for those seeking a quick escape to paradise with maximum adventure.",
    highlights: [
      "Private speedboat transfers",
      "Hidden sandbank exploration",
      "Gourmet beach picnic lunch",
      "Professional snorkeling gear",
      "Underwater photography session",
      "Local guide & safety equipment",
      "Sunset viewing experience",
      "Complimentary refreshments",
    ],
    image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1000&h=750&fit=crop",
    price: "From ₹8,500",
    originalPrice: "₹10,500",
    discount: "Save ₹2,000",
    popular: false,
    bestseller: false,
  },
  {
    title: "Honeymoon Paradise Special",
    subtitle: "Romantic island getaway",
    duration: "4 Days / 3 Nights",
    islands: "Agatti • Bangaram",
    description:
      "Create unforgettable memories with your loved one in our specially curated honeymoon package. Intimate experiences, private beaches, and romantic surprises await.",
    highlights: [
      "Private beachfront villa",
      "Romantic candlelight dinners",
      "Couple spa & wellness sessions",
      "Private island picnics",
      "Sunset cruise experience",
      "Professional photography",
      "Honeymoon surprise gifts",
      "All-inclusive luxury service",
    ],
    image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1000&h=750&fit=crop",
    price: "From ₹38,000",
    originalPrice: "₹40,000",
    discount: "Save ₹2,000",
    popular: true,
    bestseller: false,
  },
];

export const customPackagePerks = [
  {
    title: "Honeymoon Specials",
    description: "Romantic getaways with private experiences.",
  },
  {
    title: "Group Tours",
    description: "Perfect for families and friend groups.",
  },
  {
    title: "Corporate Retreats",
    description: "Team building in paradise.",
  },
];

/* ABOUT */
export const aboutIntro = {
  eyebrow: "Discover Agatti Island",
  title: "What is Agatti Island?",
  description:
    "Agatti Island is the gateway to Lakshadweep's paradise. This stunning coral island offers pristine beaches, crystal-clear lagoons, and authentic island experiences. From water sports to cultural immersion, Agatti is your perfect introduction to the untouched beauty of Lakshadweep.",
};

export const aboutMetrics = [
  { value: "36", label: "Islands in Lakshadweep", note: "Only 10 inhabited" },
  { value: "8,000", label: "Population of Agatti", note: "Friendly local community" },
  { value: "459 km²", label: "Total area of Lakshadweep", note: "Across the Arabian Sea" },
  { value: "1.5 hrs", label: "Flight from Kochi", note: "Daily flights available" },
];

export const aboutLocation = [
  "Located in the Arabian Sea, off the coast of Kerala",
  "Part of the Lakshadweep Union Territory",
  "Approximately 459 km west of Kochi",
  "Gateway island to the Lakshadweep archipelago",
];

export const aboutGeography = [
  "Coral atoll with pristine lagoons",
  "Home to Agatti Airport - the only airport in Lakshadweep",
  "Surrounded by crystal-clear turquoise waters",
  "Rich marine biodiversity and coral reefs",
];

export const companyStory = {
  eyebrow: "Your island adventure specialists",
  title: "Born from a love for paradise",
  description:
    "Viator Ventures isn't just a tour company - it's a dream born from our founder's first glimpse of Lakshadweep's crystal-clear waters. What started as a personal passion has become a mission to share this untouched paradise with fellow travelers seeking authentic island experiences.",
};

export const companyValues = [
  {
    title: "Pristine Beaches & Lagoons",
    description:
      "Agatti boasts three stunning beaches - Lagoon, Andam, and Moloka. Each offers unique experiences from calm swimming to hidden gems perfect for photography.",
  },
  {
    title: "World-Class Water Sports",
    description:
      "From snorkeling and scuba diving to kayaking and glass-bottom boating, Agatti's crystal-clear waters offer unforgettable underwater adventures for all skill levels.",
  },
  {
    title: "Rich Cultural Heritage",
    description:
      "Experience authentic Lakshadweep culture through local museums, traditional fishing, native cuisine, and cultural activities that connect you with the island's soul.",
  },
];

export const trustBadges = [
  {
    title: "Government Licensed",
    description: "Fully registered and insured tour operator.",
    highlight: `CIN: ${site.cin}`,
  },
  {
    title: "Agatti Based",
    description: "Local experts with deep island knowledge.",
    highlight: "Born and raised in paradise",
  },
  {
    title: "24/7 Support",
    description: "Always here when you need us.",
    highlight: "Round-the-clock assistance",
  },
];

/* CONTACT */
export const contactMethods = [
  {
    title: "Call Us Directly",
    description: "Speak with our local experts.",
    action: "Call Now",
    href: `tel:${PHONE_PRIMARY}`,
    available: "24/7 Support",
    primary: true,
  },
  {
    title: "WhatsApp Chat",
    description: "Quick responses & instant quotes.",
    action: "Start Chat",
    href: wa("Hi! I have questions about your Lakshadweep tours. Can you help me?"),
    available: "Instant Response",
    primary: true,
  },
  {
    title: "WhatsApp Quote",
    description: "Detailed inquiries & custom packages.",
    action: "Get Quote",
    href: wa(
      "Hi! I need a detailed quote for my Lakshadweep trip. Can you provide pricing and package details?",
    ),
    available: "Instant Response",
    primary: false,
  },
  {
    title: "Book Consultation",
    description: "Free 30-min planning session.",
    action: "WhatsApp",
    href: wa(
      "Hi! I'd like to book a free consultation for my Lakshadweep trip planning. When can we schedule this?",
    ),
    available: "Free Consultation",
    primary: false,
  },
];

/* FAQ */
export const faqs = [
  {
    question: "Do you handle all permits and paperwork?",
    answer:
      "Absolutely! We take care of all entry permits, heritage fees, and necessary documentation. As a government-licensed tour operator, we ensure all paperwork is properly handled before your arrival. This includes Lakshadweep entry permits, accommodation permits, and any special activity permissions.",
    category: "Planning",
  },
  {
    question: "What's included in your tour packages?",
    answer:
      "Our packages include accommodation in handpicked beachfront properties, all meals featuring local delicacies, private speedboat transfers between islands, professional guides, water sports equipment, and all permits. We also provide 24/7 local support throughout your stay.",
    category: "Packages",
  },
  {
    question: "Are flights to Lakshadweep included?",
    answer:
      "Flights are not included in our packages as they need to be booked separately. You'll need to fly to Agatti Airport from Kochi (Kochi-Agatti flights are available daily). We handle all transfers from the airport to your accommodation and between islands.",
    category: "Travel",
  },
  {
    question: "What water activities can I enjoy?",
    answer:
      "Lakshadweep offers incredible water activities including snorkeling in pristine coral reefs, glass-bottom boat tours, kayaking through lagoons, and optional scuba diving. We provide professional equipment and certified instructors for all activities. The crystal-clear waters offer visibility up to 30 meters!",
    category: "Activities",
  },
  {
    question: "When is the best time to visit Lakshadweep?",
    answer:
      "The best time to visit is from October to March when the weather is perfect with calm seas, clear skies, and comfortable temperatures (25-32°C). The monsoon season (June-September) is not recommended due to rough seas and limited activities.",
    category: "Planning",
  },
  {
    question: "How do I reach Agatti Island?",
    answer:
      "Agatti is accessible by daily flights from Kochi (Kochi International Airport). The flight takes about 1.5 hours and offers stunning aerial views of the islands. We provide seamless airport transfers and can help you coordinate your flight bookings.",
    category: "Travel",
  },
  {
    question: "What should I pack for my Lakshadweep trip?",
    answer:
      "Pack light, breathable clothing, swimwear, sunscreen (reef-safe), sunglasses, a hat, and comfortable sandals. Don't forget your camera for underwater photography! We provide most water sports equipment, but you can bring your own snorkeling gear if preferred.",
    category: "Planning",
  },
  {
    question: "Is Lakshadweep safe for families with children?",
    answer:
      "Absolutely! Lakshadweep is very family-friendly with calm lagoons perfect for children. We offer family packages with shallow water activities, beach games, and child-safe accommodations. Our experienced guides ensure safety for all age groups.",
    category: "Safety",
  },
  {
    question: "Can I customize my itinerary?",
    answer:
      "Yes! We specialize in creating custom experiences. Whether you want a romantic honeymoon, family adventure, or group tour, we'll design the perfect itinerary. Just let us know your preferences, budget, and interests, and we'll craft your dream vacation.",
    category: "Customization",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "We offer flexible cancellation policies. Full refund for cancellations 30+ days before travel, 75% refund for 15-30 days, and 50% refund for 7-15 days. We also provide travel insurance options to protect your investment.",
    category: "Booking",
  },
];

export const experienceCta = {
  eyebrow: "Experience",
  title: "Explore your favorite places and book your tickets now",
  description: "Start planning your trip to Agatti Island today.",
  cta: {
    label: "Craft my trip",
    href: wa(
      "Hi! I'm ready to plan my Agatti Island trip. Can you help me craft the perfect itinerary?",
    ),
  },
};
