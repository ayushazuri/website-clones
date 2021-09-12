const clones = [
	{
		name: "Amazon Clone",
		githubLink: "https://github.com/ayushazuri/Amazon-Clone",
		image: require("./assets/Images/Amazon.png").default,
		technologies: [
			"ReactJS",
			"Javascript",
			"SASS",
			"Node.js",
			"Express.js",
			"Firebase",
		],
		websiteLink: "https://clone-d2903.web.app",
		description:
			"Amazon Website Cloned using ReactJS and Firebase. Authentication, Database, and Deployement has been done with the help of Firebase. Functionalities like, Logging in via your account, Adding you desired items to the cart and buying it, etc are added in this cloned version of Amazon.",
		timeline: "April 2021",
	},
	{
		name: "Whatsapp Clone",
		githubLink: "https://github.com/ayushazuri/whatsapp-clone",
		image: require("./assets/Images/whatsapp.png").default,
		technologies: [
			"ReactJs",
			"NodeJs",
			"ExpressJs",
			"MongoDB",
			"SCSS	",
			"Material UI",
		],
		websiteLink: "",
		description:
			"A Fullstack project of whatsapp clone built with ReactJs for Frontend and ExpressJs/NodeJs/MongoDB for Backend. When messages are sent, they are stored in the mongoDB database and they are displayed in real-time with the help of Pusher.",
		timeline: "Arpil 2021",
	},
	{
		name: "Netflix Clone",
		githubLink: "https://github.com/ayushazuri/Netflix-Clone",
		image: require("./assets/Images/Netflix.png").default,
		technologies: [
			"ReactJS",
			"Javascript",
			"CSS",
			"Node.js",
			"Firebase",
			"TMDB-API",
		],
		websiteLink: "https://netflix-clone-25d79.web.app/",
		description:
			"Cloned Netflix Website using ReactJS and CSS, and used TMDB API for movie database, then deployed the website on Firebase. Movie trailer can be also viewed if you click on the video card.",
		timeline: "March 2021",
	},
	{
		name: "Zoom Clone",
		githubLink: "https://github.com/ayushazuri/Zoom-Clone",
		image: require("./assets/Images/zoom.png").default,
		technologies: [
			"Node.js",
			"Express.js",
			"Javascript",
			"SASS",
			"Socket.io",
			"PeerJS",
			"EJS",
		],
		websiteLink: "",
		description:
			"A Node.js project built with the help of backend technologie such as ExpressJs, Socket.io, PeerJs. Exact Clone of Zoom, with which you can have a video conference with anyone. Video/Audio On-Off feature available as well.",
		timeline: "Arpil 2021",
	},
];

module.exports = { clones };
