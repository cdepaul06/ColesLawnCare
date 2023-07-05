import { lawn1, lawn2, lawn3, lawn4, lawn5, lawn6, lawn7webp } from "../assets";

// You can add additional links to the navigation bar here.
const navLinks = [
  {
    id: "services",
    title: "Services",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// You can add additional content to the About section here.
const aboutContent = {
  id: "about-content",
  name: "Cole's Lawn Care",
  description:
    "We care about the work we do and we care about our customers. We will make your lawn look nice. You tell how us how you want it done and we will do it.",
};

const lawnImages = [
  {
    id: "lawn1-1",
    src: lawn1,
    alt: "lawn1",
  },
  {
    id: "lawn2-2",
    src: lawn2,
    alt: "lawn2",
  },
  {
    id: "lawn3-3",
    src: lawn3,
    alt: "lawn3",
  },
  {
    id: "lawn4-4",
    src: lawn4,
    alt: "lawn4",
  },
  {
    id: "lawn5-5",
    src: lawn5,
    alt: "lawn5",
  },
  {
    id: "lawn6-6",
    src: lawn6,
    alt: "lawn6",
  },
];

const aboutImage = {
  id: "about-image",
  src: lawn7webp,
  alt: "lawn7webp",
};

const servicesContent = [
  {
    id: "service-1",
    title: "Grass Mowing",
    description: "We will mow your grass and make it look nice.",
    image: lawn5,
    details: [
      "We will mow your grass and make it look nice.",
      "We will mow your grass and make it look nice.",
    ],
  },
  {
    id: "service-2",
    title: "Landscaping",
    description: "We will landscape your yard and make it look nice.",
    image: lawn1,
    details: ["Mulching", "Trimming", "Other things"],
  },
  {
    id: "service-3",
    title: "Whatever you want",
    description:
      "We will remove snow from your driveway and make it look nice.",
    image: "lawn3",
    details: ["Whatever you want.", "Whatever you want.", "Whatever you want."],
  },
];

export { navLinks, aboutContent, lawnImages, servicesContent, aboutImage };
