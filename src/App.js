import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import thumbnail from './images/thumbnail.png';
import avatar from './images/brendo.png';


function App() {
  return (
    <div className="App">
			
			<header>
				<nav className="nav-desktop">
					<a href="#">About</a>
					<a href="#">Skills</a>
					<a href="#">Projects</a>
					<a href="#">Contact</a>
				</nav>
				<nav className="nav-mobile"></nav>
			</header>

			<div className="about-container">
				<div className="container">
					<div className="about-col">
						<div className="about-avatar">
							<img src={avatar} />
						</div>
						<div className="about-hi">
							<span>Hi, I'm <strong>Brendon</strong></span>
						</div>
					</div>
					<div className="about-col">
						<span>a <strong>Front End Developer</strong> by trade,</span>
					</div>
					<div className="about-col">
						<span>and an <strong>illustrator</strong>, <strong>animator</strong>, and <strong>designer</strong> by passion.</span>
					</div>
				</div>
			</div>



			<div className="skills-container">
				<div className="container">
					<div className="page-title">So, what can I do?</div>
					<div className="skills-col">
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;I have 4 years experience working as a Front End and an Email/Marketing Developer for Eat24, Yelp, and Grubhub.
						</p><p>
							&nbsp;&nbsp;&nbsp;&nbsp;Outside of work, I’ve spent the last few years adding to an illustration portfolio,  studying ui/ux design, and wrote, voiced, and animated some dark comedy cartoons.
						</p>
					</div>
					<div className="skills-col skills-list">
						<div className="container-left">
							<span><strong>Front End Development</strong></span>
							<ul className="skills-list">
							<li>Javascript (ES6)</li>
							<li>Node</li>
							<li>React</li>
							<li>PHP</li>
							<li>HTML/CSS</li>
							<li>Email Development</li>
							<li>Git</li>
							<li>JIRA</li>

							</ul>
						</div>
						<div className="container-right">
							<span><strong>Design</strong></span>
							<ul className="skills-list">
								<li>Photoshop</li>
								<li>Illustrator</li>
								<li>After Effects</li>
								<li>Unity</li>
								<li>Figma</li>
								<li>Procreate</li>

							</ul>
						</div>
					</div>
				</div>

			</div>

			<div className="project-container">
				<div className="page-title">Projects</div>
				<div className="project-card"></div>
				<div className="project-card"></div>
				<div className="project-card"></div>
			</div>

			<div className="contact-container">
				<div className="container">
					<div className="page-title">Contact</div>
					<div className="contact-form">
						<span>Email:</span><br />
						<input type="text" maxLength="100" />
						<br />
						<span>Message:</span><br />
						<textarea maxLength="2000" />
						<br />
						<button>Send</button>
					</div>
				</div>
			</div>

    </div>
  );
}

export default App;
