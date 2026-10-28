# BlogSphere — Modern Blog Web App

BlogSphere is a responsive, modern blog web application built with HTML, CSS, and vanilla JavaScript. It provides a clean reading experience with article search, category filtering, bookmarks, sorting, and a persistent light/dark theme.

## Features

- **Article browsing:** Explore a collection of articles across web development, JavaScript, artificial intelligence, and career topics.
- **Search:** Find articles by title, description, author, category, or symbol.
- **Category filtering:** Filter articles by topic.
- **Sorting:** Sort articles by latest, oldest, or title.
- **Bookmarks:** Save favorite articles and access them in a dedicated bookmarks view.
- **Persistent preferences:** Save bookmarks and theme preference using browser localStorage.
- **Article reader:** Read full article content in a modal dialog.
- **Theme toggle:** Switch between dark and light themes.
- **Responsive design:** Layout adapts to desktop, tablet, and mobile screens.
- **Accessible interactions:** Semantic HTML, accessible labels, and keyboard-friendly dialog controls.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Browser localStorage

No frontend framework or backend server is required.

## Project Structure

```text
apexplanet-task-5-blogsphere/
├── index.html
├── style.css
├── style.min.css
├── script.js
├── script.min.js
└── README.md
```

## Getting Started

### Option 1: VS Code Live Server

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Install the Live Server extension if it is not already installed.
4. Open `index.html`.
5. Right-click the editor and select **Open with Live Server**.

### Option 2: Local HTTP server

If Node.js is installed, open a terminal in the project directory and run:

```bash
npx --yes http-server . -p 8080
```

Open `http://localhost:8080` in your browser.

## Production Assets

The project includes minified CSS and JavaScript files:

- `style.min.css`
- `script.min.js`

The HTML page references these files for loading the optimized versions. The original `style.css` and `script.js` files are retained for easier maintenance.

To regenerate the minified assets using esbuild:

```bash
npx --yes esbuild style.css --minify --outfile=style.min.css
npx --yes esbuild script.js --minify --outfile=script.min.js
```

## Data and Storage

BlogSphere uses a local JavaScript article collection. Bookmarks and theme preferences are stored in the browser's localStorage.

- No backend or database is configured.
- Saved preferences are specific to the browser and origin.
- Clearing browser storage may remove saved bookmarks and preferences.

## Testing

The project has been manually tested for:

- Article rendering, search, filtering, and sorting
- Bookmark creation, removal, and persistence
- Article reader modal interactions
- Theme switching and preference persistence
- Empty states and user feedback
- Responsive layout
- Chrome and Microsoft Edge compatibility

A mobile Lighthouse audit recorded:

| Category | Score |
|---|---:|
| Performance | 97/100 |
| Accessibility | 100/100 |
| Best Practices | 100/100 |
| SEO | 100/100 |

Scores may vary between devices and audit runs.

## Future Improvements

- Add real article images and optimized image loading.
- Introduce an API or backend for dynamic articles.
- Add user accounts and synchronized bookmarks.
- Add article publishing and content management.

## Author

Developed as a capstone project for the ApexPlanet Web Development Internship.

## License

No license has been specified yet. Add a license if you intend to permit reuse or redistribution.
