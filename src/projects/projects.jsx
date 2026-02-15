import React from 'react';
import { Link } from "react-router-dom";

export function Projects() {
  return (
  <>
    <section className="sectioned">
      <h2 className="section-title">Projects</h2>
      <p className="lead">Here are my greatest accomplishments thus far.</p>
    </section>

    <section className="project-grid">
      <Link className="project-card featured" to="/">
        <h3>Portfolio Website (this one!)</h3>
      <p>
    A three-page portfolio built with HTML and CSS, before being bundled with Vite and routed with React Router.
    Focused on layout consistency, hover effects, and responsive structure.
      </p>
        <p className="meta">Tools: HTML, CSS, React, Vite</p>
      </Link>

      <a className="project-card" href="https://startup.keeptalkingandthestorycontinues.click/">
        <h3>Keep Talking and the Story Continues</h3>
        <p>
          A game I am currently developing as part of my CS260 (Web Development) class. This project is intended to have students develop a fullstack web application using React. Currently in development.
        </p>
        <p className="meta">Tools: HTML, CSS, Vite, React, JavaScript</p>
      </a>

      <a className="project-card" href="https://teamnamesalonwebsite.streamlit.app/">
        <h3>Salon Management Web Application</h3>
        <p>
          A multi-page Streamlit web application intended for salon customer check-in and management. The project implemented a PostgreSQL database hosted on Supabase, where it was then deployed on Streamlit Community Cloud.
        </p>
        <p className="meta">Tools: Streamlit, Supabase, Python</p>
      </a>

      <a className="project-card" href="https://github.com/hamidjae/Dalet-Smatsheet-Comparison-Parser">
        <h3>Dalet Smatsheet Comparison Porter</h3>
        <p>
          The current project I am developing. This is intended to use Python's Tkinter library to create a form that will automatically export into a suitable .csv format. Intended as a proof of concept project. This project's documentation on GitHub will be filled on a later date.
        </p>
        <p className="meta">Tools: Python</p>
      </a>
    </section>
  </>
  );
}