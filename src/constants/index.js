import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  goal6,
  goal7,
  goal8,
  goal9,
  goal11,
  goal13,
  dtu,
  tihan,
  startupindia,
  dif,
  robot,
  map
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About Us",
    url: "#about",
  },
  {
    id: "1",
    title: "Features",
    url: "#features",
  },
  {
    id: "2",
    title: "Our Mission",
    url: "#mission",
  },
  {
    id: "3",
    title: "Team",
    url: "#team",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  {
    id: "5",
    title: "Contact Us",
    url: "#contact",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [tihan, dtu, startupindia, dif];

export const brainwaveServices = [
  "Advanced panel temperature sensing.",
  "Innovative dust sensing on solar panels.",
  "Efficient cleaning with vacuum technology.",
];

export const brainwaveServicesIcons = [
  goal6,
  goal7,
  goal8,
  goal9,
  goal11,
  goal13,
];

export const roadmap = [
  {
    id: "0",
    title: "IMC 2023 Winner",
    text: "Lorem ipsum dolor sit amet. At blanditiis aperiam non fugit maxime qui excepturi dolores non explicabo illum non ipsa sequi quo provident ipsum. ",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Winner",
    text: "Lorem ipsum dolor sit amet. At blanditiis aperiam non fugit maxime qui excepturi dolores non explicabo illum non ipsa sequi quo provident ipsum. ",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
    colorful: true,
  },
  // {
  //   id: "2",
  //   title: "Chatbot customization",
  //   text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
  //   date: "May 2023",
  //   status: "done",
  //   imageUrl: roadmap3,
  // },
  // {
  //   id: "3",
  //   title: "Integration with APIs",
  //   text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
  //   date: "May 2023",
  //   status: "progress",
  //   imageUrl: roadmap4,
  // },
];

export const collabText =
  "Eythor is devloping a small smart photovoltaic cleaning robot to serve the photovoltaic energy industry.";

export const collabContent = [
  {
    id: "0",
    title: "Efficient and Adaptive",
    text: "At Eythor, we focus on developing innovative sustainable solutions to the world's climate crisis.",
  },
  {
    id: "1",
    title: "Eyto - Our first innovation",
    text: "Enhances the solar power harnessing capacity of solar panels while removing the need for manual power, as well as water consumption in order to clean them.",
  },
  // {
  //   id: "2",
  //   title: "Top-notch Security",
  // },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
    url: "https://discord.com",
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Naveen Kumar",
    description: "Founder, CEO",
    imageUrl: robot,
  },
  {
    id: "1",
    title: "Lucky Rana",
    description: "Co-Founder, CTO",
    imageUrl: robot,
  },
  {
    id: "2",
    title: "Ananya Singh",
    description: "Lead Designer",
    imageUrl: robot,
  },
  {
    id: "3",
    title: "Pratham Singh",
    description: "Product Researcher",
    imageUrl: robot,
  },
  {
    id: "4",
    title: "Anup Kumar",
    description: "Electronics Engineer",
    imageUrl: robot,
  },
  {
    id: "5",
    title: "Esha Yadav",
    description: "Data Analyst",
    imageUrl: robot,
  }
];

export const benefits = [
  {
    id: "0",
    title: "Intelligent control",
    text: "Web app control by mobile, automatic cleaning time and cleaning mode can be set",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Internet of things technology application",
    text: "Independent control, grouping, automatic cleaning",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Solar power system",
    text: "Self-charging-comes with a solar power system, convenient and efficient, can last 8-10 hours",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Strong adaptability",
    text: "Applicable to various arrangement arrays and various power stations",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "1 min disassembly and assembly of brushes",
    text: "Applicable to various arrangement arrays and various power stations.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Adjusting the brush up and down",
    text: "When the brush wears out, the cleaning ability decreases. You can adjust the brush downward to increase the cleaning ability and double the service life of the brush",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Map",
    iconUrl: map,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
