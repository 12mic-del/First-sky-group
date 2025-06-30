<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project - First Sky Group</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>
<body>
  <!-- Navigation (Same as index.html) -->
  <header class="header">
    <nav class="navbar">
      <div class="logo">
        <img src="images/logo.png" alt="First Sky Group Logo" class="logo-img">
      </div>
      <div class="hamburger" id="hamburger">
        <i class="fas fa-bars hamburger-icon"></i>
        <i class="fas fa-times cross-icon hidden"></i>
      </div>
      <ul class="menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="subsidiaries.html">Subsidiaries</a></li>
        <li><a href="projects.html" class="active">Project</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Project Section -->
  <section class="projects">
    <div class="container">
      <h2>Our Project</h2>
      <div class="project-filters">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="construction">Construction</button>
        <button class="filter-btn" data-filter="hospitality">Hospitality</button>
        <button class="filter-btn" data-filter="insurance">Insurance</button>
      </div>
      <div class="project-grid">
        <div class="project-card" data-category="construction">
          <img src="images/project1.jpg" alt="Construction Project">
          <h3>Road Construction</h3>
          <p>Completed a 50km highway in Ghana, improving regional connectivity.</p>
        </div>
        <div class="project-card" data-category="hospitality">
          <img src="images/project2.jpg" alt="Hospitality Project">
          <h3>Volta Serene Hotel</h3>
          <p>Luxury hotel with eco-friendly design in the Volta Region.</p>
        </div>
        <!-- Add more project as needed -->
      </div>
    </div>
  </section>

  <!-- Footer (Same as index.html) -->
  <footer class="footer">
    <p>&copy; 2025 First Sky Group of Companies. All Rights Reserved.</p>
    <div class="social-links">
      <a href="#"><i class="fab fa-linkedin"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-facebook"></i></a>
    </div>
  </footer>

  <script src="js/script.js"></script>
</body>
</html>