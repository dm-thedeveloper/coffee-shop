import img1 from "../assets/menu_section/cofees/1.png";
import img2 from "../assets/menu_section/cofees/2.png";
import img3 from "../assets/menu_section/cofees/3.png";
import img4 from "../assets/menu_section/cofees/4.png";
// About Icons Images
import iconImg1 from "../assets/about_iconImages/1.png";
import iconImg2 from "../assets/about_iconImages/2.png";
import iconImg3 from "../assets/about_iconImages/3.png";
import iconImg4 from "../assets/about_iconImages/4.png";

export const NavLinks = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },

  {
    id: 1,
    name: "Menue",
    href: "#menue",
  },
  {
    id: 2,
    name: "Testimonal",
    href: "#testimonal",
  },
  {
    id: 3,
    name: "Contact Us",
    href: "#contact",
  },
];

export const menuCards = [
  {
    id: 0,
    heading: "Cappuccino",
    ingredients: ["Confee 50% |", "Milk 50%"],
    prize: "$8.50",
    img: img1,
  },
  {
    id: 1,
    heading: "Chai latte",
    ingredients: ["Confee 50% |", "Milk 50%"],
    prize: "$9.99",
    img: img2,
  },
  {
    id: 2,
    heading: "Machiato",
    ingredients: ["Confee 50% |", "Milk 50%"],
    prize: "$6.99",
    img: img3,
  },
  {
    id: 3,
    heading: "Expresso",
    ingredients: ["Confee 50% |", "Milk 50%"],
    prize: "$12.0",
    img: img4,
  },
];

export const Features = [
  {
    id: 0,
    heading: "Super Beans",
    description: "Beans that providesgreat taste",
    iconImg: iconImg1,
  },
  {
    id: 1,
    heading: "High Quality",
    description: "We provide thehighest quality",
    iconImg: iconImg2,
  },
  {
    id: 2,
    heading: "Extraordinary",
    description: "Coffee like you havenever tasted",
    iconImg: iconImg3,
  },
  {
    id: 4,
    heading: "Affordable Price",
    description: "Our Coffee prices areeasy to afford",
    iconImg: iconImg4,
  },
];


const generateRandomNumber = (max = 99 )=> Math.floor(Math.random()*max);

export const testimonalData = [

  {
    id: 0,
    name: "Ali Raza",
    city: "Saddar , Karachi",
    avatar: `https://randomuser.me/api/portraits/men/${generateRandomNumber()}.jpg`,
    feedaback: "Bean Seen coffee has completely changed my mornings. The aroma and taste are just perfect!",
  },
  {
    id: 1,
    name: "Hira Khan",
    city: "Defence , Karachi",
    avatar: `https://randomuser.me/api/portraits/women/${generateRandomNumber()}.jpg`,
    feedaback: "I’ve tried many brands, but Bean Seen feels premium and fresh. Highly recommended!",
  },
  {
    id: 2,
    name: "Usman Javed",
    city: "Gulshan-e-Iqbal , Karachi",
    avatar: `https://randomuser.me/api/portraits/men/${generateRandomNumber()}.jpg`,
    feedaback: "Smooth flavor and rich body—Bean Seen is my go-to coffee now!",
  },
  {
    id: 3,
    name: "Fatima Noor",
    city: "Nazimabad , Karachi",
    avatar: `https://randomuser.me/api/portraits/women/${generateRandomNumber()}.jpg`,
    feedaback: "The beans are fresh and perfectly roasted. Great quality for the price.",
  },
  {
    id: 4,
    name: "Zeeshan Ahmed",
    city: "Clifton , Karachi",
    avatar: `https://randomuser.me/api/portraits/men/${generateRandomNumber()}.jpg`,
    feedaback: "Bean Seen is the best local coffee I’ve ever had. Proud to support Pakistani products!",
  },
];
