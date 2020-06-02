import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import thumbnail from './images/thumbnail.png';

function App() {
  return (
    <div className="App">
			
			<header>
				<div className="logo"><strong>Brendon</strong>Mancini</div>
				<nav className="nav-header">
					<ul>
						<li><a href="#">About</a></li>
						<li><a href="#">Skills</a></li>
						<li><a href="#">Work</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</nav>
				<div className="clear"></div>
			</header>

			<div className="container about-container">
				<div className="container-left">
					<h3>Designer</h3>
				</div>
				<div className="container-right">
					<h3>Developer</h3>
				</div>
			</div>



			<div className="container skills-container">
				<h3>Skills</h3>
				<div className="container-left">
					<ul>
						<li>Photoshop</li>
						<li>Photoshop</li>
						<li>Photoshop</li>
						<li>Photoshop</li>
						<li>Photoshop</li>
					</ul>
				</div>
				<div className="container-right">
					<ul>
						<li>React</li>
						<li>React</li>
						<li>React</li>
						<li>React</li>
						<li>React</li>
					</ul>
				</div>
			</div>

			<div className="container project-container">
				<h3>Projects</h3>
				<div className="project-card">
					<div className="container-left">
						<div className="project-thumbnail">
							<img src={thumbnail} width="200" />
						</div>
					</div>
					<div className="container-right">
						<div className="project-title">
							Project Title
						</div>
						<div className="project-description">
							Project description project description project description project description project description project description project description project description project description project description project description project description project description
						</div>
					</div>
				</div>

				<div className="project-card">
					<div className="container-left">
						<div className="project-thumbnail">
							<img src={thumbnail} width="200" />
						</div>
					</div>
					<div className="container-right">
						<div className="project-title">
							Project Title
						</div>
						<div className="project-description">
							Project description project description project description project description project description project description project description project description project description project description project description project description project description
						</div>
					</div>
				</div>
				
			</div>

			<div className="container contact-container">
				<h3>Contact</h3>
				<input type="text" maxLength="100" />
				<textarea maxLength="2000" />
				<button>Submit</button>
			</div>

    </div>
  );
}

export default App;
