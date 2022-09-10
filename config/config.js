import profile from "./profile.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

export const navigation = {
	name: "Hanzla Tauqeer",
	links: [],
};
export const intro = {
	title: "Hey, I'm Hanzla",
	description:
		"Full Stack Django, React.js Developer & Blockchain Developer.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing",
			isPrimary: false,
		},
	],
};

export const about = {
	title: "Who I am",
	description: [
		"I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js, DevOps Tools, Cloud Technologies and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
	],
};

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Web Development",
			description:
				"I create full stack SPAs, PWAs & SSR websites using Django & React.js.",
			icons: null,
		},
		{
			title: "API Development",
			description:
				"I create RESTful APIs using Django & Django REST Framework.",
			icons: null,
		},
		{
			title: "GitOps",
			description:
				"I create CI/CD pipelines using Github Actions for testing & deployments.",
			icons: null,
		},
		{
			title: "Cloud Infra-Architecture",
			description:
				"I configure Cloud Servers like AWS etc. and deploy applications on them.",
			icons: null,
		},
		{
			title: "Blockchain Development",
			description:
				"I create Smart Contracts & Dapps using Solidity, React.js & Python.",
			icons: null,
		},
	],
};

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Developer Portfolio",
			description:
				"Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/1hanzla100/developer-portfolio",
				},
			],
		},
		{
			title: "NFT Minter",
			description:
				"NFT Minter based on Avalanche Blockchain built with React.js, TypeScript & Pinata.",
			icons: [
				{
					icon: faGlobe,
					link: "https://ipfs.fleek.co/ipfs/QmRtDqNNjFoixAoEs8qXgzk6TTQJY3WxYRkB1Jtcpfi4yB/",
				},
			],
		},
		{
			title: "Technota",
			description:
				"Technota is a Forum built for developers to ask questions and community can answer their questions.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/1hanzla100/django-react-forum",
				},
			],
		},
		{
			title: "Shopaza",
			description:
				"Shopaza is Ecommerce website built with django. Now your reach to all your favorite items is just one touch apart.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/1hanzla100/django-react-forum",
				},
			],
		},
		{
			title: "Atlas Mart",
			description:
				"Atlas Mart is a OLX like Marketplace built with Python, Django, React.js & Integrated Mapbox.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/1hanzla100/django-react-forum",
				},
			],
		},
	],
};

export const contact = {
	title: "Reach Out to me!",
	description:
		"DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL",
	icons: [
		{
			icon: faLinkedin,
			link: "https://www.linkedin.com/in/1hanzla100/",
		},
		{
			icon: faGithub,
			link: "https://github.com/1hanzla100",
		},
		{
			icon: faEnvelope,
			link: "mailto:hanzla.tauqeer123@gmail.com",
		},
	],
};
// SEARCH ENGINE
export const SEO = {
	title: "Hanzla Tauqeer",
	description:
		"A passionate Full Stack Web Developer and Blockchain Developer.",
	author: "Hanzla Tauqeer",
	image: profile.src,
	url: "https://1hanzla100.github.io",
	keywords: [
		"Hanzla",
		"Hanzla Tauqeer",
		"@1hanzla100",
		"1hanzla100",
		"Portfolio",
		"Hanzla Portfolio ",
		"Hanzla Tauqeer Portfolio",
	],
};