import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import thumbnail from './images/thumbnail.png';

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

			<div className="container about-container">
				<div className="about-col">
					<div className="about-logo"></div>
					<span>Hi, I'm <strong>Brendon</strong></span>
				</div>
				<div className="about-col">
					<span>a <strong>Front End Developer</strong> by trade,</span>
				</div>
				<div className="about-col">
					<span>and an <strong>illustrator</strong>, <strong>animator</strong>, and <strong>designer</strong> by passion.</span>
				</div>
			</div>



			<div className="container skills-container">
				<h1>So, what can I do?</h1>
				<div className="skills-col">
					<p>
						I have 4 years experience working as a Front End and an Email/Marketing Developer for Eat24, Ytelp, and Grubhub.<br />
						Outside of work, I’ve spent the last few years adding to an illustration portfolio,  studying ui/ux design, and wrote, voiced, and animated some dark comedy cartoons.
					</p>
				</div>
				<div className="skills-col">
					<div className="col-left">
						<h3><strong>Front End Development</strong></h3>
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
					<div className="col-right">
						<h3><strong>Design</strong></h3>
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

			<div className="container project-container">
				<h3>Projects</h3>
				<div className="project-card"></div>
				<div className="project-card"></div>
				<div className="project-card"></div>
			</div>

			<div className="container contact-container">
				<h3>Contact</h3>
				<input type="text" maxLength="100" />
				<br />
				<textarea maxLength="2000" />
				<br />
				<button>Submit</button>
			</div>

    </div>
  );
}

export default App;
