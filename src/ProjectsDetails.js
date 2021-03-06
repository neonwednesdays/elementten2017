import { CONSTANTS } from './constants';

export default function ProjectsDetails() {
	return [
		/* projects */
		{
			name: 'Betrayal at House on the Hill Helper',
			category: CONSTANTS.CATEGORY.PROJECTS,
			tags: ['semantic-ui', 'js', 'helper'],
			icon: 'betrayalhelper.png',
			description: 'Personal project made using Semantic UI along with JQuery and Javascript to make a web application for the board game Betrayal at House on the Hill because the pieces it came with were not functional enough.',
			linkTo: 'http://www.elementten.com/BetrayalHelper/',
		},
		{
			name: 'MentorWeb',
			category: CONSTANTS.CATEGORY.PROJECTS,
			tags: ['angular-js', 'js', 'css', 'html', 'agile'],
			icon: 'mentorweb.png',
			description: 'Web application made using AngularJS, HTML, CSS. Made to match mentors and mentees for the Georgia Tech BME program. Developed using Agile methodologies and worked heavily with a client to gather requirements and make an awesome application. Check out the video we made for it!',
			linkTo: 'https://www.youtube.com/watch?v=c6vKkqgn3K4',
		},
		{
			name: 'Robocop Dispatch Interface',
			category: CONSTANTS.CATEGORY.PROJECTS,
			tags: ['game', 'flash'],
			icon: 'robocop.png',
			description: "Made using Javascript. Designed as a mockup for a future technology of manipulating lots of real time police information.",
			linkTo: 'http://elementten.com/design/robocop_grid/index.html',
		},
		/* games */
		{
			name: 'Perspective',
			category: CONSTANTS.CATEGORY.GAMES,
			tags: ['game', 'unity'],
			icon: 'perspectivegame.png',
			description: "Made in Unity. I was one of the artists and level designers on a team to make this wonderful puzzle game. It's a platforming game with 2D and 3D perspective swapping as the main mechanics. It was well received and someone even made a walkthrough video for us! Clicking view project will take you to play in on Newgrounds.",
			linkTo: 'http://www.newgrounds.com/portal/view/650719',
		},
		{
			name: 'Tower of Dormin (2013)',
			category: CONSTANTS.CATEGORY.GAMES,
			tags: ['game', 'flash'],
			icon: 'towerofdormin.png',
			description: "Personal project made using Flash and Actionscript 3. A sidescrolling-procedurally-generated-slashing game. Was made with some members of Georgia Tech's VGDev.",
			linkTo: 'http://vgdev.gtorg.gatech.edu/game/tower-of-dormin/',
		},
		{
			name: 'Quietus (2013)',
			category: CONSTANTS.CATEGORY.GAMES,
			tags: ['game', 'unity'],
			icon: 'quietus.png',
			description: "Developed in Unity. A unique art game that was issued as a challenge to my group in an attempt to bring a different subject to games. I was the lead concept artist as well as an assistant 3D modeler.",
			linkTo: 'http://www.elementten.com/unity/QuietusWebBuild.html',
		},
		{
			name: 'Survivor',
			category: CONSTANTS.CATEGORY.GAMES,
			tags: ['game', 'c#'],
			icon: 'survivorgame.png',
			description: "Gameboy Advance game made in C. Meant to be an atmospheric game in an older technology. You will need a Gameboy Advance emulator to play this, alternatively you can try to play it here after downloading the rom. Pressing view project will download the ROM.",
			linkTo: '',
		},
		{
			name: 'Pong Revolutions (2009)',
			category: CONSTANTS.CATEGORY.GAMES,
			tags: ['game', 'flash'],
			icon: 'pongrevolutions.png',
			description: "Developed in Flash. One of the earlist games I conceptualized. The game is essentially pong, except with RPG-esque skills to use to spice up the game.",
			linkTo: 'http://www.kongregate.com/games/Neonaxil/p-revolutions',
		},
		{
			name: 'I\'m Going to Rain in Your Volcano (2010)',
			category: CONSTANTS.CATEGORY.GAMES,
			tags: ['game', 'flash'],
			icon: 'rainvolcano.png',
			description: "Developed in Flash. This game happened when creating a theme around Island. I used the idea of a square island which then became a volcano. Then there was a cloud that was raining in the volcano and the rest is history. Pressing view project will take you to the game on Kongregate.",
			linkTo: 'http://www.kongregate.com/games/Neonaxil/im-going-to-rain-in-your-volcano',
		},
		{
			name: 'Want Everything (2010)',
			category: CONSTANTS.CATEGORY.GAMES,
			tags: ['game', 'flash'],
			icon: 'wanteverything.png',
			description: "Developed in Flash in 48 hours. A game based around the idea of a player's greed. I wanted to challenge a player to decide if they wanted to get more and more, or go for the one goal. Pressing view project will take you to the game on Kongregate.",
			linkTo: 'http://www.kongregate.com/games/Neonaxil/want-everything',
		},
		{
			name: 'Skyfall',
			category: CONSTANTS.CATEGORY.GAMES,
			tags: ['game', 'unity'],
			icon: 'skyfall.png',
			description: "Developed in Unity. Group project done to examine the cinematic aspects of interaction. I was the creative lead and programmer. Pressing view project will take you to the game's website.",
			linkTo: 'http://www.elementten.com/skyfall_web/',
		},

		/* designs */
		{
			name: 'Text Messaging Steps',
			category: CONSTANTS.CATEGORY.PROJECTS,
			tags: ['illustrator'],
			icon: 'textposter.png',
			description: 'A satirical poster on how to send text messages and how easy it is to be lazy. Made in Photoshop. Click the link to see the iterations.',
			linkTo: 'http://imgur.com/a/d0Lhb#0',
		},
		{
			name: 'Work Ready Grad Videos',
			category: CONSTANTS.CATEGORY.PROJECTS,
			tags: ['flash', 'video'],
			icon: 'workreadygrad.png',
			description: 'Done in Flash and AfterEffects. I got the opportunity to work as an intern doing design work for WorkReadyGrad, and one of my jobs was to animate a video to show what WorkReadyGrad was all about. ',
			linkTo: 'https://www.youtube.com/watch?v=sGwX1FF7VuE',
		},
		{
			name: 'Fastshop',
			category: CONSTANTS.CATEGORY.PROJECTS,
			tags: ['flash', 'video'],
			icon: 'fastshop.png',
			description: 'An assignment where the goal was to create a unique ubiquitous computing system. My goal was to speed the process of shopping instead of wandering around a grocery store. I animated a storyboard in Flash and gave narrated it through Audacity.',
			linkTo: 'https://www.youtube.com/watch?v=Seme_Fx0bGA',
		},
	];
}