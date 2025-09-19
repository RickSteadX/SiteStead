# Rick Stead - Personal Business Card Website

A technologically advanced personal business card website for Rick Stead, a back-end developer. The website incorporates modern web design elements such as animations, parallax effects, and carousels to make it visually appealing and impressive.

## Features

- Interactive terminal-like animation
- 3D skills visualization using Three.js
- Animated skill bars and progress indicators
- Project showcase carousel
- Parallax scrolling effects
- Dark/Light mode toggle
- Responsive design for all devices
- Custom cursor effects
- Smooth scroll animations
- Contact form with validation

## Tech Stack

- **Frontend**:
  - HTML5, CSS3, JavaScript (ES6+)
  - GSAP (GreenSock Animation Platform)
  - Three.js for 3D elements
  - Swiper.js for carousels
  - Typed.js for terminal typing animation

- **Build Tools**:
  - Vite (Frontend build tool)
  - PostCSS for CSS processing

- **Containerization**:
  - Podman/Docker
  - Nginx as web server
  - Alpine Linux base image

## Prerequisites

- Node.js 18+ and npm
- Podman or Docker

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/RickSteadX/SiteStead.git
   cd SiteStead
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:6060`

## Building for Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## Containerization with Podman

### Building the Container

```bash
podman build -t rick-stead-website .
```

### Running the Container

```bash
podman run -d -p 6060:6060 --name rick-stead-website rick-stead-website
```

### Using Docker Compose (with Podman)

```bash
podman-compose up -d
```

## Accessing the Website

Once the container is running, you can access the website at:

```
http://localhost:6060
```

## Project Structure

```
SiteStead/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── reset.css
│   │   │   ├── variables.css
│   │   │   ├── main.css
│   │   │   ├── animations.css
│   │   │   └── responsive.css
│   │   ├── js/
│   │   │   └── main.js
│   │   ├── images/
│   │   └── fonts/
│   └── components/
├── public/
│   └── favicon.svg
├── index.html
├── package.json
├── vite.config.js
├── Dockerfile
├── nginx.conf
├── docker-compose.yml
└── README.md
```

## Design Concept

The website design follows a modern, tech-focused aesthetic with:

- **Color Scheme**: Deep navy blue primary background with teal accents
- **Typography**: 
  - Headings: "Fira Code" (monospace)
  - Body: "Inter" (sans-serif)
  - Code: "JetBrains Mono" (monospace)
- **Visual Elements**:
  - Subtle glassmorphism UI components
  - Animated gradient lines
  - Custom animated SVG icons
  - Terminal-like interfaces

## License

This project is licensed under the MIT License - see the LICENSE file for details.