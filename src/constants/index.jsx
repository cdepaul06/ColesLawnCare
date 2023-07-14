// * You can CTRL + CLICK on the '../assets' to see the files in the folder and add/remove as needed.
// * Obviously you will need to import them here to be used in the app.
import { lawn1, lawn2, lawn3, lawn4, lawn5, lawn6, lawn7webp } from "../assets";

// * You can add additional links to the navigation bar here.
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

// * You can add additional content to the About section here.
const aboutContent = {
  id: "about-content",
  name: "Cole's Lawn Care",
  description:
    "This is a wall of text. This is a wall of text. This is a wall of text. " +
    "This is a wall of text. This is a wall of text. This is a wall of text. " +
    "This is a wall of text. This is a wall of text. This is a wall of text. " +
    "This is a wall of text. This is a wall of text. This is a wall of text. " +
    "This is a wall of text. This is a wall of text. This is a wall of text. " +
    "This is a wall of text. This is a wall of text. This is a wall of text. " +
    "This is a wall of text. This is a wall of text. This is a wall of text. " +
    "This is a wall of text. This is a wall of text. This is a wall of text. ",
};

// * Use the imports from above as the src for the images.
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

// * This is where you can add/remove any of the services you want listed on the website.
// * Each one must have a unique ID. Easiest to just do service-1, service-2, etc.
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
  // * You can uncomment this if you want to add additional services, if you offer more than 3 you can just
  // * copy and paste the above service and change the ID and content.
  // {
  //   id: "service-3",
  //   title: "Whatever you want",
  //   description:
  //     "We will remove snow from your driveway and make it look nice.",
  //   image: "lawn3",
  //   details: ["Whatever you want.", "Whatever you want.", "Whatever you want."],
  // },
];

// If for whatever reason you add more constants to the global index you need to export them here.
export { navLinks, aboutContent, lawnImages, servicesContent, aboutImage };
