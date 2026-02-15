import React from 'react';

export function Home() {
  return (
  <main>
    <section class="banner">
      <img class="banner-img" src="/meanddad.jpg" alt="Picture of me and my father" />
      <div class="banner-text">
        <span class="banner-sticker">Incheon Airport</span>
        <h2>That's me!</h2>
        <p>That's a picture of me and my father, right before I left for America. I am a Pakistani-Korean international student currently studying at Brigham Young University.</p>
        <p>It's great to meet you!</p>
      </div>
    </section>
    <section class="sectioned">
      <h2 class="section-title">About Me</h2>

      <article class="card">
        <h3>Current Work</h3>
        <p>
            I'm currently working with Brigham Young University Broadcasting on a proof-of-concept project regarding some of their internal systems, where I am extensively using Python, specifically the Tkinter library.
        </p>
      </article>

      <article class="card">
        <h3>Goals</h3>
        <p>
            I am continuing to improve daily by building projects that I love, and preparing for internship opportunities to expand my knowledge.
        </p>
      </article>

      <article class="card">
        <h3>Hobbies</h3>
        <p>
            I love everything gaming. My favorite games are vast and varied, from RPGs such as <em>Warhammer 40,000: Rogue Trader</em> and <em>Baldur's Gate 3</em>, to action games such as the <em>Devil May Cry</em> series. If you can name it, I've probably played it!    
        </p>
      </article>
    </section>
  </main>
  );
}