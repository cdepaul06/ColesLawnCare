import { lawn1, lawn2, lawn3, lawn4, lawn5, lawn6 } from "../assets";

// You can add additional links to the navigation bar here.
const navLinks = [
  {
    id: "servicesCard",
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
const aboutContent = [
  {
    id: 1,
    name: "Cole Underwood",
    title: "Owner",
    description:
      "Cole does lawn care, landscaping, and snow removal. He is a hard worker and will get the job done right.",
  },
  {
    id: 2,
    name: "Ryan Underwood",
    title: "Partner",
    description:
      "Ryan does lawn care, landscaping, and snow removal. He is a hard worker and will get the job done right.",
  },
];

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
  //   {
  //     id: "service-3",
  //     title: "Trimming",
  //     description:
  //       "We will remove snow from your driveway and make it look nice.",
  //     image: "lawn3",
  //     details: [
  //       "We will remove snow from your driveway and make it look nice.",
  //       "We will remove snow from your driveway and make it look nice.",
  //       "We will remove snow from your driveway and make it look nice.",
  //     ],
  //   },
];

export { navLinks, aboutContent, lawnImages, servicesContent };
