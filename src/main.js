import './style.css';
// import javascriptLogo from './javascript.svg'; // Can remove or keep

document.querySelector('#app').innerHTML = `
  <div class="bg-glow"></div>
  
  <nav>
    <div class="logo">Nebula.</div>
    <div class="nav-links">
      <button onclick="window.location.href='#'">Login</button>
    </div>
  </nav>

  <section class="hero">
    <h1>Deploy to the <br><span>Infinite Cloud</span></h1>
    <p class="subtitle">
      Experience the next generation of serverless deployment. Simple, fast, and built for modern developers.
    </p>
    <button class="cta-button" id="deployBtn">Start Deploying</button>
  </section>

  <section class="features">
    <div class="feature-card">
      <span class="feature-icon">🚀</span>
      <h3>Instant Deployments</h3>
      <p>Push to git and go live in seconds. No complex configuration required.</p>
    </div>
    <div class="feature-card">
      <span class="feature-icon">🛡️</span>
      <h3>Enterprise Security</h3>
      <p>Bank-grade encryption and DDoS protection out of the box.</p>
    </div>
    <div class="feature-card">
      <span class="feature-icon">⚡</span>
      <h3>Global Edge</h3>
      <p>Your content delivered from 300+ edge locations worldwide.</p>
    </div>
  </section>

  <footer>
    <p>© 2026 Nebula Cloud Inc. All rights reserved.</p>
  </footer>
`;

document.querySelector('#deployBtn').addEventListener('click', () => {
  alert('Initiating Deployment Sequence...');
});
