import img1 from "./house1.jpg";
import img2 from "./house2.jpg";
import img3 from "./house3.jpg";
import img4 from "./house4.jpg";
import img5 from "./house5.jpg";
import img6 from "./house6.jpg";
import img7 from "./house7_1.jpg";
import img8 from "./house_8.jpg";
import img9 from "./house9.jpg";
import img10 from "./house10.jpg";
import img11 from "./house11.jpg";
import img12 from "./house12.png";

import heroBg1 from "./heroBg1.jpg"
import heroBg2 from "./heroBg2.jpg"
import heroBg3 from "./heroBg3.jpg"
import heroBg4 from "./heroBg4.jpg"

import apartImg1 from "./studioPlanImg.jpg"
import apartImg2 from "./oneBedRoomImg.jpg"
import apartImg3 from "./twoBedRoomImg.jpg"
import apartImg4 from "./3bedRoomImg.jpg"
import apartImg5 from "./duplexImg.jpg"
import apartImg6 from "./penthouseImg.jpg"


export const plans = [

  {
    id: "starter",
    title:"Stater",
    name: "6 Months Access",
    price: "GHS250",
    description: "Full access to the platform for 6 months.",
    features: [
      "Add unlimited properties",
      "Manage property listings",
      "Receive and view inquiries",
      "Track payments",
      "Agent dashboard access",
      "Profile management",
      "Property analytics",
      "6 months subscription period",
    ],
  },
  {
    id: "growth",
    title:"Growth",
    name: "12 Months Access",
    price: "GHS500",
    description: "Full access to the platform for 12 months.",
    features: [
      "Add unlimited properties",
      "Manage property listings",
      "Receive and view inquiries",
      "Track payments",
      "Agent dashboard access",
      "Profile management",
      "Property analytics",
      "12 months subscription period",
    ],
  },
];

export const heroContent = [
  {
    title: "Discover Stays That Feel Like Home",
    description:
      "Explore beautiful rooms, apartments, and homes tailored to your comfort, lifestyle, and budget all in one place.",
    image: heroBg1,
  },
  {
    title: "Your Perfect Stay Starts Here",
    description:
      "From cozy rooms to luxury spaces, find verified properties designed to make every stay comfortable and stress-free.",
    image: heroBg2,
  },
  {
    title: "Find, Book, and Move In with Ease",
    description:
      "Search top listings, compare prices, and secure your next room or apartment in just a few simple steps.",
    image: heroBg3,
  },
  {
    title: "Better Spaces. Smarter Booking.",
    description:
      "Experience a modern way to rent and book properties with trusted listings, real-time availability, and seamless booking.",
    image: heroBg4,
  },
];

export const apartmentPlans = [
  {
    title: "Studio Apartment",
    description: "A compact and efficient open-plan layout that combines the bedroom, living area, and kitchen into one space. Ideal for singles, students, or young professionals who want a simple and affordable living option.",
    features: ["Open space", "1 bathroom", "Kitchenette"],
    size: "25–45 sqm",
    image: apartImg1
  },
  {
    title: "1-Bedroom Apartment",
    description: "A comfortable layout with a separate bedroom and living area, offering more privacy and better space organization. Perfect for individuals or couples looking for a balance between affordability and comfort.",
    features: ["1 bedroom", "Living room", "Kitchen", "1 bathroom"],
    size: "45–70 sqm",
    image: apartImg2
  },
  {
    title: "2-Bedroom Apartment",
    description: "A practical choice for small families or shared living, featuring two bedrooms and a spacious living area. It provides enough room for comfort while still being easy to maintain.",
    features: ["2 bedrooms", "Living & dining", "1–2 bathrooms", "Kitchen"],
    size: "70–100 sqm",
    image: apartImg3
  },
  {
    title: "3-Bedroom Apartment",
    description: "A spacious and family-friendly layout designed for comfort and convenience. It includes multiple bedrooms, a larger living space, and often a master ensuite for added privacy.",
    features: ["3 bedrooms", "Master ensuite", "Dining area", "2–3 bathrooms"],
    size: "100–150 sqm",
    image: apartImg4
  },
  {
    title: "Duplex Apartment",
    description: "A modern two-level apartment that separates living and sleeping areas across floors. It offers a house-like feel with more space, privacy, and a stylish layout.",
    features: ["2 floors", "Multiple bedrooms", "Living room", "Balcony"],
    size: "120–180 sqm",
    image: apartImg5
  },
  {
    title: "Penthouse Apartment",
    description: "A luxury top-floor apartment designed for premium living, featuring large spaces, high-end finishes, and often a private terrace with great views.",
    features: ["3–5 bedrooms", "Terrace", "Modern kitchen", "Multiple bathrooms"],
    size: "150+ sqm",
    image: apartImg6
  }
];

export const properties = [
  // ================= FOR SALE (6) =================
  {
    id: "prop-001",
    title: "The Coral Cubist",
    description: "A bold architectural statement in the heart of Spintex, this functionalist two-story home commands attention with its striking coral-red exterior. The design philosophy centers on clean geometric forms, abundant natural light, and efficient space utilization. Step inside to discover an open-concept living area where floor-to-ceiling windows blur the boundary between indoors and out. The kitchen features sleek cabinetry and premium finishes, while three generously sized bedrooms offer comfort and privacy. The master suite includes a spa-inspired ensuite and private balcony overlooking the compact yet beautifully landscaped yard. Perfect for modern families seeking style without sacrificing functionality, this home delivers low-maintenance luxury in a quiet, gated community.",
    pricing: { amount: 250000, currency: "GHS" },
    location: {
      name: "Spintex",
      city: "Accra",
      region: "Greater Accra",
      address: "19 Coral Way",
    },
    property: {
      type: "Townhouse",
      status: "Sale",
      bedrooms: 3,
      bathrooms: 2.5,
      size: { value: 210, unit: "sqm" },
    },
    features: ["Modern Design", "Gated Access", "Compact Yard"],
     images: [img1] ,
    agent: {
      id: "agent-001",
      name: "Sarah Boateng",
      phone: "+233 24 000 0002",
      email: "sarah@luxuryghana.com",
    },
    meta: { isFeatured: false, rating: 4.2, views: 320 },
  },

  {
    id: "prop-002",
    title: "The Lumina Cantilever",
    description: "A masterpiece of contemporary architecture, this ultra-modern luxury villa redefines high-end living with its dramatic cantilevered roof that appears to float above the structure. The exterior showcases a sophisticated interplay of glass, steel, and natural stone, while the interior unfolds across multiple levels connected by a stunning floating staircase. The open-plan living area features a double-height ceiling and seamlessly extends to an infinity pool that merges with the horizon. A state-of-the-art smart home system controls lighting, climate, security, and entertainment throughout. Five spacious ensuite bedrooms include a palatial master suite with a private terrace, walk-in closet, and spa bathroom featuring a soaking tub and rainfall shower. The property also boasts a gourmet kitchen with premium appliances, a home theater, gym, wine cellar, and expansive rooftop lounge perfect for entertaining. Every detail has been curated for those who demand the extraordinary.",
    pricing: { amount: 850000, currency: "GHS" },
    location: {
      name: "East Legon",
      city: "Accra",
      region: "Greater Accra",
      address: "42 Modernist Way",
    },
    property: {
      type: "Luxury-Villa",
      status: "Sale",
      bedrooms: 5,
      bathrooms: 5.5,
      size: { value: 450, unit: "sqm" },
    },
    features: ["Smart Home", "Infinity Pool", "LED Accents"],
     images: [img2],
    agent: {
      id: "agent-002",
      name: "Alex Mensah",
      phone: "+233 24 000 0001",
      email: "alex@modernliving.com",
    },
    meta: { isFeatured: true, rating: 4.9, views: 1240 },
  },

  {
    id: "prop-003",
    title: "The Obsidian Pavilion",
    description: "Sleek, mysterious, and undeniably luxurious, this modern villa embraces a bold dark aesthetic that sets it apart from conventional homes. Floor-to-ceiling glass panels create a seamless connection to the outdoors while flooding the interior with natural light. The open-plan layout flows effortlessly from the gourmet kitchen with waterfall island to the spacious dining area and sunken living room with a striking feature fireplace. Four ensuite bedrooms offer private sanctuaries, each with unique views of the landscaped grounds. Outside, an infinity-edge pool takes center stage, complemented by a fully equipped outdoor kitchen and covered lounge area perfect for al fresco entertaining. The property also features a secure garage for two vehicles, a dedicated office space, and smart home integration for lighting and security. This is contemporary living at its finest, designed for discerning buyers who appreciate architectural excellence and sophisticated style.",
    pricing: { amount: 790000, currency: "GHS" },
    location: {
      name: "East Legon",
      city: "Accra",
      region: "Greater Accra",
      address: "12 Shadow Park",
    },
    property: {
      type: "Villa",
      status: "Sale",
      bedrooms: 4,
      bathrooms: 4.5,
      size: { value: 420, unit: "sqm" },
    },
    features: ["Pool", "Outdoor Kitchen", "Garage"],
     images: [img3],
    agent: {
      id: "agent-003",
      name: "Kofi Adjei",
      phone: "+233 24 000 0003",
      email: "kofi@primeestates.com",
    },
    meta: { isFeatured: false, rating: 4.9, views: 1560 },
  },

  {
    id: "prop-004",
    title: "The Glass Atrium",
    description: "Light takes center stage in this remarkable contemporary home, where a soaring two-story glass atrium serves as the architectural heart. Morning sun streams through the transparent walls, casting ever-changing patterns across polished concrete floors and illuminating every corner of the open-concept living space. The thoughtfully designed layout includes four spacious bedrooms, each with ensuite bathrooms featuring modern fixtures and premium finishes. The chef's kitchen boasts quartz countertops, a large island with breakfast bar, and high-end appliances perfect for culinary enthusiasts. A private courtyard offers an outdoor retreat, while the secure property includes perimeter fencing, automated gates, and a comprehensive security system. Located in the prestigious Cantonments area, this home offers the perfect balance of architectural innovation and everyday comfort, ideal for families who appreciate design-forward living in a prime Accra location.",
    pricing: { amount: 720000, currency: "GHS" },
    location: {
      name: "Cantonments",
      city: "Accra",
      region: "Greater Accra",
      address: "15 Atrium Close",
    },
    property: {
      type: "Single",
      status: "Sale",
      bedrooms: 4,
      bathrooms: 4,
      size: { value: 380, unit: "sqm" },
    },
    features: ["Glass Walls", "Modern Kitchen", "Security"],
     images: [img4],
    agent: {
      id: "agent-001",
      name: "Sarah Boateng",
      phone: "+233 24 000 0002",
      email: "sarah@luxuryghana.com",
    },
    meta: { isFeatured: true, rating: 4.8, views: 980 },
  },

  {
    id: "prop-005",
    title: "The Wrap-Around Terrace",
    description: "Welcome to a tropical paradise where indoor-outdoor living reaches new heights. This magnificent manor is defined by its expansive wrap-around terrace, offering 360-degree views of lush gardens and providing endless opportunities for entertaining or quiet relaxation. The grand living room features high ceilings, elegant finishes, and French doors that open onto the terrace, creating a seamless flow for hosting gatherings of any size. Four generously proportioned bedrooms include a master suite with private terrace access and a spa-inspired bathroom. The property sits on a beautifully landscaped plot with mature trees, flowering plants, and a dedicated garden area for those with a green thumb. A long driveway provides ample parking, while the location in Kumasi's prestigious Hill View neighborhood offers tranquility without sacrificing convenience. This is a rare opportunity to own a piece of paradise perfect for families seeking space, comfort, and the quintessential Ghanaian indoor-outdoor lifestyle.",
    pricing: { amount: 450000, currency: "GHS" },
    location: {
      name: "Kumasi",
      city: "Kumasi",
      region: "Ashanti Region",
      address: "Plot 10, Hill View",
    },
    property: {
      type: "Manor",
      status: "Sale",
      bedrooms: 4,
      bathrooms: 4,
      size: { value: 480, unit: "sqm" },
    },
    features: ["Porch", "Driveway", "Garden"],
     images: [img5],
    agent: {
      id: "agent-002",
      name: "Alex Mensah",
      phone: "+233 24 000 0001",
      email: "alex@modernliving.com",
    },
    meta: { isFeatured: false, rating: 4.6, views: 720 },
  },

  {
    id: "prop-006",
    title: "The Terraced Stone Villa",
    description: "Nestled in the heart of Tema Community 25, this charming bungalow-style villa combines timeless craftsmanship with modern comfort. The exterior showcases beautiful stonework that gives the home a sense of permanence and character, while the covered porch invites you to sit back and enjoy the gentle evening breeze. Inside, an open floor plan connects the living, dining, and kitchen areas, creating a warm and welcoming atmosphere. Three well-appointed bedrooms include a master suite with ensuite bathroom, while two additional bedrooms share a tastefully designed second bathroom. The kitchen features modern appliances, ample storage, and a breakfast bar for casual dining. The property includes a manageable yard with low-maintenance landscaping, perfect for those seeking the ease of single-level living without compromising on style or quality. Ideal for first-time homeowners, retirees, or anyone looking for a cozy retreat in a well-established community.",
    pricing: { amount: 320000, currency: "GHS" },
    location: {
      name: "Tema",
      city: "Tema",
      region: "Greater Accra",
      address: "Community 25, Plot 4",
    },
    property: {
      type: "Bungalow",
      status: "Sale",
      bedrooms: 3,
      bathrooms: 3,
      size: { value: 240, unit: "sqm" },
    },
    features: ["Stone Finish", "Porch"],
     images: [img6],
    agent: {
      id: "agent-002",
      name: "Alex Mensah",
      phone: "+233 24 000 0001",
      email: "alex@modernliving.com",
    },
    meta: { isFeatured: false, rating: 4.4, views: 890 },
  },

  // ================= FOR RENT (6) =================

  // HOTEL STYLE (perNight)
  {
    id: "prop-007",
    title: "The Golden Sand Estate",
    description: "Escape to the serene hills of Aburi and experience resort-style living at this exquisite villa designed for those seeking peace, privacy, and panoramic mountain views. The property captures the essence of a luxury retreat with its open-plan layout, high ceilings, and large windows that frame the breathtaking landscape. Four spacious bedrooms, each with ensuite bathrooms, offer comfortable accommodations for families or groups. The heart of the home is the expansive living area that flows onto a covered terrace perfect for alfresco dining while watching the sun set over the valley. The fully equipped kitchen allows for effortless meal preparation, while the landscaped grounds provide ample space for relaxation or recreation. Whether you're planning a weekend getaway, an extended stay, or hosting a special event, this villa delivers a truly memorable experience. Wake up to the sounds of nature, breathe in the fresh mountain air, and let the stresses of city life melt away in this tranquil haven.",
    pricing: { perNight: 1200, currency: "GHS" },
    location: {
      name: "Aburi",
      city: "Aburi",
      region: "Eastern Region",
      address: "12 Mountain View Drive",
    },
    property: {
      type: "Villa",
      status: "Rent",
      bedrooms: 4,
      bathrooms: 4,
      size: { value: 320, unit: "sqm" },
    },
    features: ["Mountain View", "Balcony"],
     images: [img7],
    agent: {
      id: "agent-003",
      name: "Kofi Adjei",
      phone: "+233 24 000 0003",
      email: "kofi@primeestates.com",
    },
    meta: { isFeatured: false, rating: 4.5, views: 540 },
  },

  {
    id: "prop-008",
    title: "The Azure Tiled Boutique",
    description: "Positioned in the heart of Airport City, this premium multi-unit property redefines hotel-style accommodation with its blend of luxury, convenience, and exceptional service. The building features 12 elegantly appointed units, each designed with discerning travelers in mind. From spacious studios to expansive suites, every unit showcases contemporary design, premium furnishings, and thoughtful amenities including fully equipped kitchenettes, high-speed internet, and smart TVs. The property boasts a grand reception area with 24/7 concierge service, secure underground parking, and state-of-the-art security systems. Ideal for business travelers, corporate lodging, or extended stays, this boutique property offers the privacy of a residence with the services of a luxury hotel. Its prime location puts guests minutes from Kotoka International Airport, major corporate offices, and Accra's finest dining and shopping destinations. An exceptional investment opportunity or turnkey operation for hospitality entrepreneurs.",
    pricing: { perNight: 2500, currency: "GHS" },
    location: {
      name: "Airport City",
      city: "Accra",
      region: "Greater Accra",
      address: "5 Blue Tile Boulevard",
    },
    property: {
      type: "Hotel-Apartment",
      status: "Rent",
      bedrooms: 12,
      bathrooms: 14,
      size: { value: 1200, unit: "sqm" },
    },
    features: ["Reception", "Parking"],
     images: [img8],
    agent: {
      id: "agent-003",
      name: "Kofi Adjei",
      phone: "+233 24 000 0003",
      email: "kofi@primeestates.com",
    },
    meta: { isFeatured: false, rating: 4.3, views: 3100 },
  },

  // NORMAL RENT (perMonth)
  {
    id: "prop-009",
    title: "The Balcony Block",
    description: "Discover urban living at its finest in this stylish apartment located in the sought-after Dzorwulu neighborhood. Designed for modern professionals and small families, this residence combines efficient space planning with contemporary comfort. The two-bedroom layout features an open-concept living and dining area that extends to a private balcony—perfect for morning coffee or evening relaxation. Both bedrooms are generously sized with built-in wardrobes, while the two bathrooms include a master ensuite. The kitchen is equipped with modern appliances, sleek cabinetry, and ample counter space for home cooking. Residents enjoy the convenience of an elevator, 24/7 security, and dedicated parking. Located within minutes of shopping centers, restaurants, and major transport routes, this apartment offers the ideal balance of convenience and tranquility. A perfect choice for those seeking a low-maintenance lifestyle in one of Accra's most accessible neighborhoods.",
    pricing: { perMonth: 1500, currency: "GHS" },
    location: {
      name: "Dzorwulu",
      city: "Accra",
      region: "Greater Accra",
      address: "8 Apartment Way",
    },
    property: {
      type: "Apartment",
      status: "Rent",
      bedrooms: 2,
      bathrooms: 2,
      size: { value: 110, unit: "sqm" },
    },
    features: ["Elevator", "Security"],
     images: [img9],
    agent: {
      id: "agent-001",
      name: "Sarah Boateng",
      phone: "+233 24 000 0002",
      email: "sarah@luxuryghana.com",
    },
    meta: { isFeatured: false, rating: 4.0, views: 1850 },
  },

  {
    id: "prop-010",
    title: "The Geometric Mono-Block",
    description: "Make a statement with this architectural gem in the vibrant Osu neighborhood, where clean lines, geometric precision, and minimalist design converge. This modern home is a testament to the beauty of simplicity, featuring a striking facade, thoughtfully proportioned spaces, and an abundance of natural light. The open floor plan connects the living, dining, and kitchen areas into a cohesive space ideal for entertaining or unwinding after a busy day. Three bedrooms include a master suite with walk-in closet and ensuite bathroom featuring contemporary fixtures. Floor-to-ceiling windows in the living area open to a private balcony overlooking the neighborhood, while additional windows throughout ensure every room feels bright and airy. The home is finished with high-quality materials, from polished concrete floors to sleek cabinetry and premium appliances. Located in the heart of Osu, you're steps away from Accra's best restaurants, cafes, nightlife, and cultural attractions. Perfect for professionals and creatives who appreciate design-forward living in a prime location.",
    pricing: { perMonth: 3000, currency: "GHS" },
    location: {
      name: "Osu",
      city: "Accra",
      region: "Greater Accra",
      address: "33 Geometry Lane",
    },
    property: {
      type: "Modern-Home",
      status: "Rent",
      bedrooms: 3,
      bathrooms: 3,
      size: { value: 280, unit: "sqm" },
    },
    features: ["Balcony", "Modern Interior"],
     images: [img10],
    agent: {
      id: "agent-001",
      name: "Sarah Boateng",
      phone: "+233 24 000 0002",
      email: "sarah@luxuryghana.com",
    },
    meta: { isFeatured: true, rating: 4.5, views: 430 },
  },

  {
    id: "prop-011",
    title: "The Veranda Crest",
    description: "Experience gracious family living in this stunning manor located in the desirable Adjiringanor community. The home's crowning feature is its expansive veranda—a sprawling outdoor living space that wraps around the property, offering countless opportunities for relaxation, entertaining, and family gatherings. Inside, the floor plan unfolds with five generously proportioned bedrooms, including a palatial master suite with a private sitting area, walk-in closet, and spa-inspired bathroom. The living areas are designed for both formal entertaining and comfortable daily living, with a grand living room, separate family room, formal dining area, and a chef's kitchen equipped with premium appliances, a large island, and butler's pantry. The professionally landscaped grounds feature mature trees, flowering gardens, and a lush lawn perfect for children to play or for hosting garden parties. A secure perimeter fence and gated entry ensure privacy and peace of mind. This is a rare opportunity to rent a true family estate in one of Accra's most sought-after residential areas.",
    pricing: { perMonth: 4000, currency: "GHS" },
    location: {
      name: "Adjiringanor",
      city: "Accra",
      region: "Greater Accra",
      address: "7 Crest Avenue",
    },
    property: {
      type: "Manor",
      status: "Rent",
      bedrooms: 5,
      bathrooms: 4.5,
      size: { value: 500, unit: "sqm" },
    },
    features: ["Garden", "Fence"],
     images: [img11],
    agent: {
      id: "agent-002",
      name: "Alex Mensah",
      phone: "+233 24 000 0001",
      email: "alex@modernliving.com",
    },
    meta: { isFeatured: false, rating: 4.6, views: 2100 },
  },

  {
    id: "prop-012",
    title: "The Slate & Ochre Duplex",
    description: "Uncompromising luxury meets practical elegance in this expansive duplex located in the prestigious Airport Residential Area. The striking exterior combines slate gray and warm ochre tones, creating a sophisticated presence that hints at the exceptional spaces within. Six generously sized bedrooms, each with its own ensuite bathroom, provide ample accommodation for large families, visiting guests, or live-in staff. The main living level features a grand foyer, formal living and dining rooms, a family room, and a gourmet kitchen with premium appliances, a large island, and a walk-in pantry. The lower level includes a self-contained staff quarters with separate entrance, perfect for live-in help or extended family. Outside, the property features a manicured lawn, mature landscaping, and ample space for outdoor activities. The location is unparalleled—situated in one of Accra's most coveted neighborhoods, you're minutes from international schools, embassies, shopping centers, and Kotoka International Airport. This is luxury living at its most refined, offering the space, privacy, and prestige that discerning renters demand.",
    pricing: { perMonth: 5000, currency: "GHS" },
    location: {
      name: "Airport Residential",
      city: "Accra",
      region: "Greater Accra",
      address: "88 Ochre Street",
    },
    property: {
      type: "Duplex",
      status: "Rent",
      bedrooms: 6,
      bathrooms: 6,
      size: { value: 550, unit: "sqm" },
    },
    features: ["Staff Quarters", "Lawn"],
     images: [img12],
    agent: {
      id: "agent-003",
      name: "Kofi Adjei",
      phone: "+233 24 000 0003",
      email: "kofi@primeestates.com",
    },
    meta: { isFeatured: false, rating: 4.7, views: 650 },
  },
];