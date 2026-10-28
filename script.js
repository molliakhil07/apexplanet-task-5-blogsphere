
"use strict";

// ========================================
// BlogSphere — Article data
// ========================================

const articles = [
  {
    id: 1,
    title: "Getting Started with Modern Web Development",
    category: "Web Development",
    author: "Alex Morgan",
    date: "2026-10-20",
    readTime: 6,
    symbol: "</>",
    description:
      "Explore the foundations of modern web development and learn how HTML, CSS, and JavaScript work together to create engaging websites.",
    content: [
      {
        heading: "Start with the foundations",
        text: "Every website begins with a structure, a visual design, and behavior. HTML defines the content, CSS controls presentation, and JavaScript adds interactivity."
      },
      {
        heading: "Build through practice",
        text: "Start with small projects, experiment with layouts, and gradually introduce more complex functionality. Consistent practice helps turn concepts into real skills."
      },
      {
        heading: "Keep learning",
        text: "Explore browser developer tools, accessibility, responsive design, and performance optimization as your projects grow."
      }
    ]
  },
  {
    id: 2,
    title: "JavaScript Concepts Every Beginner Should Know",
    category: "JavaScript",
    author: "Jamie Lee",
    date: "2026-10-19",
    readTime: 8,
    symbol: "{ }",
    description:
      "Understand variables, functions, arrays, objects, and events through practical concepts that make interactive websites possible.",
    content: [
      {
        heading: "Understand the building blocks",
        text: "Variables store values, functions organize reusable logic, and arrays and objects help you work with collections of information."
      },
      {
        heading: "Make pages interactive",
        text: "JavaScript can respond to button clicks, validate forms, update page content, and react to user input through browser events."
      },
      {
        heading: "Practice with small projects",
        text: "Try a counter, a to-do list, or an interactive quiz. These projects help you understand how JavaScript connects to the page."
      }
    ]
  },
  {
    id: 3,
    title: "How Artificial Intelligence Is Changing Everyday Work",
    category: "Artificial Intelligence",
    author: "Taylor Reed",
    date: "2026-10-18",
    readTime: 7,
    symbol: "AI",
    description:
      "Discover how AI tools can support research, creative work, and everyday problem-solving while keeping human judgment in the loop.",
    content: [
      {
        heading: "AI as a practical tool",
        text: "AI-powered tools can assist with drafting, summarizing, brainstorming, and analyzing information. Their usefulness depends on the task and the quality of the input."
      },
      {
        heading: "Keep human judgment involved",
        text: "AI output can contain mistakes or incomplete information. Review important results and verify claims before relying on them."
      },
      {
        heading: "Learn responsibly",
        text: "Understand the limitations of the tools you use, protect private information, and choose AI assistance that suits your actual needs."
      }
    ]
  },
  {
    id: 4,
    title: "Building Your First Responsive Website",
    category: "Web Development",
    author: "Jordan Blake",
    date: "2026-10-17",
    readTime: 5,
    symbol: "RWD",
    description:
      "Learn how flexible layouts, CSS Grid, Flexbox, and media queries help websites adapt to phones, tablets, and desktop screens.",
    content: [
      {
        heading: "Think about different screens",
        text: "A responsive website adapts its layout to the available space rather than assuming every visitor has the same screen size."
      },
      {
        heading: "Use modern CSS layouts",
        text: "Flexbox is useful for arranging items in a row or column. CSS Grid helps create layouts with rows and columns."
      },
      {
        heading: "Test at multiple widths",
        text: "Use browser developer tools to inspect layouts at mobile, tablet, and desktop widths. Check text, navigation, and touch targets."
      }
    ]
  },
  {
    id: 5,
    title: "A Practical Guide to Your First Tech Internship",
    category: "Career",
    author: "Morgan Ellis",
    date: "2026-10-16",
    readTime: 6,
    symbol: "DEV",
    description:
      "Learn how to make the most of an internship by documenting your work, building projects, asking questions, and sharing progress.",
    content: [
      {
        heading: "Focus on learning",
        text: "Treat each task as an opportunity to understand a new concept. Break complex requirements into smaller, testable steps."
      },
      {
        heading: "Document your projects",
        text: "A clear README, meaningful commit messages, and a short demonstration video help others understand what you built and how it works."
      },
      {
        heading: "Reflect on progress",
        text: "Record challenges, explain how you solved them, and identify the next skill you want to improve."
      }
    ]
  },
  {
    id: 6,
    title: "Making JavaScript Projects More Maintainable",
    category: "JavaScript",
    author: "Casey Brooks",
    date: "2026-10-15",
    readTime: 9,
    symbol: "JS",
    description:
      "Discover simple techniques for organizing code, using descriptive names, separating responsibilities, and debugging problems efficiently.",
    content: [
      {
        heading: "Write readable code",
        text: "Choose descriptive variable and function names, keep functions focused, and use consistent formatting so your code is easier to understand."
      },
      {
        heading: "Separate responsibilities",
        text: "Keep data, rendering, and event handling organized into clear sections. This makes it easier to locate and fix problems."
      },
      {
        heading: "Test as you build",
        text: "Test one feature at a time, inspect the browser console, and check important interactions after making changes."
      }
    ]
  },
  {
    id: 7,
    title: "Understanding APIs Through Real Examples",
    category: "Web Development",
    author: "Riley Chen",
    date: "2026-10-14",
    readTime: 7,
    symbol: "API",
    description:
      "Learn how APIs let applications exchange information and how frontend code can use responses to display useful data.",
    content: [
      {
        heading: "What is an API?",
        text: "An API defines a way for software components to communicate. Web applications often use HTTP requests to access information from a server."
      },
      {
        heading: "Work with responses",
        text: "JavaScript can request data, convert a JSON response into usable objects, and render the results in the interface."
      },
      {
        heading: "Handle errors",
        text: "Network requests can fail. Provide loading feedback, check responses, and show a helpful message when data cannot be retrieved."
      }
    ]
  },
  {
    id: 8,
    title: "Small Habits That Help Developers Grow",
    category: "Career",
    author: "Sam Parker",
    date: "2026-10-13",
    readTime: 4,
    symbol: "GROW",
    description:
      "Build a sustainable learning routine with focused practice, useful notes, project reviews, and regular reflection on your progress.",
    content: [
      {
        heading: "Practice consistently",
        text: "Short, focused practice sessions can help you maintain momentum. Set a specific goal for each session."
      },
      {
        heading: "Learn by building",
        text: "Use projects to apply concepts, encounter real problems, and develop the confidence to debug your own code."
      },
      {
        heading: "Share what you learn",
        text: "Writing project notes and explaining your decisions can reinforce your understanding and help you communicate your skills."
      }
    ]
  }
];


 
 // ========================================
 // DOM references
 // ========================================

const articleDialog = document.getElementById("article-dialog");
const articleReader = document.getElementById("article-reader");
const closeArticleButton = document.getElementById("close-article");
const themeToggle = document.getElementById("theme-toggle");
const articlesGrid = document.getElementById("articles-grid");
const totalArticles = document.getElementById("total-articles");
const resultsMessage = document.getElementById("results-message");
const categoryList = document.getElementById("category-list");
const searchInput = document.getElementById("article-search");
const sortSelect = document.getElementById("article-sort");
const emptyState = document.getElementById("empty-state");
const clearFiltersButton = document.getElementById("clear-filters");
const bookmarksToggle = document.getElementById("bookmarks-toggle");
const bookmarkCount = document.getElementById("bookmark-count");
const articlesHeading = document.getElementById("articles-heading");
const toast = document.getElementById("toast");

let activeCategory = "All";
let searchQuery = "";
let showingBookmarks = false;

const BOOKMARKS_STORAGE_KEY = "blogsphere-bookmarks";

// ========================================
// Bookmark storage
// ========================================

function loadBookmarks() {
  try {
    const stored = localStorage.getItem(BOOKMARKS_STORAGE_KEY);

    if (!stored) {
      return new Set();
    }

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return new Set();
    }

    const validIds = new Set(articles.map((article) => article.id));

    return new Set(
      parsed.filter(
        (id) => Number.isInteger(id) && validIds.has(id)
      )
    );
  } catch (error) {
    console.warn("BlogSphere: Could not load bookmarks.", error);
    return new Set();
  }
}

let bookmarkedIds = loadBookmarks();

function saveBookmarks() {
  try {
    localStorage.setItem(
      BOOKMARKS_STORAGE_KEY,
      JSON.stringify([...bookmarkedIds])
    );
    return true;
  } catch (error) {
    console.error("BlogSphere: Could not save bookmarks.", error);
    showToast("Bookmarks could not be saved in this browser.");
    return false;
  }
}

function updateBookmarkCount() {
  if (bookmarkCount) {
    bookmarkCount.textContent = String(bookmarkedIds.size);
  }

  if (bookmarksToggle) {
    bookmarksToggle.setAttribute(
      "aria-pressed",
      String(showingBookmarks)
    );

    bookmarksToggle.title = showingBookmarks
      ? "Show all articles"
      : "Show bookmarked articles";

    bookmarksToggle.setAttribute(
      "aria-label",
      showingBookmarks
        ? "Show all articles"
        : "Show bookmarked articles"
    );
  }
}


 // ========================================
 // Theme toggle and persistence
 // ========================================

const THEME_STORAGE_KEY = "blogsphere-theme";

function applyTheme(theme) {
  const isLight = theme === "light";

  document.body.classList.toggle("light-theme", isLight);

  if (themeToggle) {
    const icon = themeToggle.querySelector("span");

    if (icon) {
      icon.textContent = isLight ? "☾" : "☀";
    }

    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme"
    );

    themeToggle.title = isLight
      ? "Switch to dark theme"
      : "Switch to light theme";
  }
}

function loadTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "light"
      ? "light"
      : "dark";
  } catch (error) {
    console.warn("BlogSphere: Could not load theme preference.", error);
    return "dark";
  }
}

function toggleTheme() {
  const nextTheme = document.body.classList.contains("light-theme")
    ? "dark"
    : "light";

  applyTheme(nextTheme);

  try {
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  } catch (error) {
    console.warn("BlogSphere: Could not save theme preference.", error);
    showToast("Theme changed, but your preference could not be saved.");
  }
}


// ========================================
// Toast notification
// ========================================

function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("visible");

  // No timer is needed for the core bookmark functionality.
  // The next toast replaces the current message.
}

// ========================================
// Article card creation
// ========================================

function createArticleCard(article) {
  const card = document.createElement("article");
  card.className = "article-card";
  card.dataset.articleId = String(article.id);

  const cover = document.createElement("div");
  cover.className = "article-cover";
  cover.setAttribute("aria-hidden", "true");

  const symbol = document.createElement("span");
  symbol.className = "article-cover-symbol";
  symbol.textContent = article.symbol;
  cover.appendChild(symbol);

  const body = document.createElement("div");
  body.className = "article-card-body";

  const category = document.createElement("span");
  category.className = "article-category";
  category.textContent = article.category;

  const title = document.createElement("h3");
  title.className = "article-title";

  const titleButton = document.createElement("button");
  titleButton.type = "button";
  titleButton.textContent = article.title;
  titleButton.dataset.action = "read";
  titleButton.dataset.articleId = String(article.id);
  titleButton.setAttribute("aria-label", `Read ${article.title}`);

  title.appendChild(titleButton);

  const description = document.createElement("p");
  description.className = "article-description";
  description.textContent = article.description;

  const meta = document.createElement("div");
  meta.className = "article-meta";

  const author = document.createElement("span");
  author.textContent = article.author;

  const separator = document.createElement("span");
  separator.className = "meta-separator";
  separator.setAttribute("aria-hidden", "true");
  separator.textContent = "·";

  const readTime = document.createElement("span");
  readTime.textContent = `${article.readTime} min read`;

  meta.append(author, separator, readTime);

  // Footer containing the read and bookmark buttons.
  const footer = document.createElement("div");
  footer.className = "article-card-footer";

  const readButton = document.createElement("button");
  readButton.type = "button";
  readButton.className = "read-article-button";
  readButton.textContent = "Read article →";
  readButton.dataset.action = "read";
  readButton.dataset.articleId = String(article.id);

  const bookmarkButton = document.createElement("button");
  bookmarkButton.type = "button";
  bookmarkButton.className = "bookmark-button";
  bookmarkButton.dataset.action = "bookmark";
  bookmarkButton.dataset.articleId = String(article.id);

  const isBookmarked = bookmarkedIds.has(article.id);

  bookmarkButton.classList.toggle("is-bookmarked", isBookmarked);
  bookmarkButton.setAttribute("aria-pressed", String(isBookmarked));
  bookmarkButton.setAttribute(
    "aria-label",
    isBookmarked
      ? `Remove bookmark from ${article.title}`
      : `Bookmark ${article.title}`
  );
  bookmarkButton.title = isBookmarked
    ? "Remove bookmark"
    : "Save bookmark";
  bookmarkButton.textContent = isBookmarked ? "♥" : "♡";

  footer.append(readButton, bookmarkButton);
  body.append(category, title, description, meta, footer);
  card.append(cover, body);

  return card;
}

// ========================================
// Filter and sort articles
// ========================================

function getVisibleArticles() {
  let visibleArticles = showingBookmarks
    ? articles.filter((article) => bookmarkedIds.has(article.id))
    : [...articles];

  if (activeCategory !== "All") {
    visibleArticles = visibleArticles.filter(
      (article) => article.category === activeCategory
    );
  }

  const normalizedQuery = searchQuery.trim().toLowerCase();

  if (normalizedQuery) {
    visibleArticles = visibleArticles.filter((article) => {
      const searchableText = [
        article.title,
        article.description,
        article.author,
        article.category,
        article.symbol
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }

  const sortMode = sortSelect?.value || "latest";

  if (sortMode === "latest") {
    visibleArticles.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  } else if (sortMode === "oldest") {
    visibleArticles.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  } else if (sortMode === "title") {
    visibleArticles.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return visibleArticles;
}

// ========================================
// Render articles and empty state
// ========================================

function renderArticles(articleList) {
  if (!articlesGrid) {
    console.error('BlogSphere: Could not find "#articles-grid".');
    return;
  }

  const fragment = document.createDocumentFragment();

  articleList.forEach((article) => {
    fragment.appendChild(createArticleCard(article));
  });

  articlesGrid.replaceChildren(fragment);

  if (totalArticles) {
    totalArticles.textContent = String(articles.length);
  }

  if (resultsMessage) {
    const totalAvailable = showingBookmarks
      ? articles.filter((article) => bookmarkedIds.has(article.id)).length
      : articles.length;

    const count = articleList.length;
    const noun = count === 1 ? "article" : "articles";

    resultsMessage.textContent =
      `Showing ${count} of ${totalAvailable} ${noun}`;
  }

  if (articlesHeading) {
    articlesHeading.textContent = showingBookmarks
      ? "Your bookmarks"
      : "Featured articles";
  }

  if (emptyState) {
    emptyState.hidden = articleList.length !== 0;

    const emptyTitle = emptyState.querySelector("h3");
    const emptyDescription = emptyState.querySelector("p");

    if (emptyTitle && emptyDescription) {
      if (showingBookmarks && bookmarkedIds.size === 0) {
        emptyTitle.textContent = "No bookmarks yet";
        emptyDescription.textContent =
          "Use the bookmark button on an article to save it here.";
      } else {
        emptyTitle.textContent = "No articles found";
        emptyDescription.textContent =
          "Try another search term or choose a different category.";
      }
    }
  }

  articlesGrid.hidden = articleList.length === 0;
  updateBookmarkCount();
}

// ========================================
// Refresh the visible articles
// ========================================

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  applyTheme(loadTheme());

function updateArticles() {
  renderArticles(getVisibleArticles());
}

// ========================================
// Add or remove a bookmark
// ========================================

function toggleBookmark(articleId) {
  const article = articles.find((item) => item.id === articleId);

  if (!article) {
    return;
  }

  const wasBookmarked = bookmarkedIds.has(articleId);

  if (wasBookmarked) {
    bookmarkedIds.delete(articleId);
  } else {
    bookmarkedIds.add(articleId);
  }

  // Keep the change only if it can be persisted.
  if (!saveBookmarks()) {
    if (wasBookmarked) {
      bookmarkedIds.add(articleId);
    } else {
      bookmarkedIds.delete(articleId);
    }

    updateArticles();
    return;
  }

  showToast(
    wasBookmarked
      ? "Bookmark removed."
      : "Article bookmarked!"
  );

  updateArticles();
}

// ========================================
// Category filtering
// ========================================

function handleCategoryClick(event) {
  const button = event.target.closest("button[data-category]");

  if (!button || !categoryList.contains(button)) {
    return;
  }

  activeCategory = button.dataset.category || "All";

  categoryList.querySelectorAll("button[data-category]").forEach(
    (categoryButton) => {
      const isActive =
        categoryButton.dataset.category === activeCategory;

      categoryButton.classList.toggle("active", isActive);
      categoryButton.setAttribute("aria-pressed", String(isActive));
    }
  );

  updateArticles();
}

// ========================================
// Search and sorting
// ========================================

function handleSearchInput() {
  searchQuery = searchInput.value;
  updateArticles();
}

function handleSortChange() {
  updateArticles();
}

// ========================================
// All articles / bookmarked articles
// ========================================

function toggleBookmarksView() {
  showingBookmarks = !showingBookmarks;
  updateBookmarkCount();
  updateArticles();
}

// ========================================
// Clear search and category filters
// ========================================

function clearFilters() {
  activeCategory = "All";
  searchQuery = "";

  if (searchInput) {
    searchInput.value = "";
  }

  if (sortSelect) {
    sortSelect.value = "latest";
  }

  if (categoryList) {
    categoryList.querySelectorAll("button[data-category]").forEach(
      (button) => {
        const isActive = button.dataset.category === "All";

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      }
    );
  }

  updateArticles();
}


 // ========================================
 // Article reader modal
 // ========================================

function openArticle(articleId) {
  const article = articles.find((item) => item.id === articleId);

  if (!article || !articleDialog || !articleReader) {
    return;
  }

  // Build the article safely using DOM elements.
  articleReader.replaceChildren();

  const category = document.createElement("span");
  category.className = "article-category reader-category";
  category.textContent = article.category;

  const title = document.createElement("h2");
  title.textContent = article.title;

  const meta = document.createElement("p");
  meta.className = "reader-meta";
  meta.textContent =
    `${article.author} · ${formatArticleDate(article.date)} · ${article.readTime} min read`;

  const content = document.createElement("div");
  content.className = "reader-body";

  article.content.forEach((section) => {
    const heading = document.createElement("h3");
    heading.textContent = section.heading;

    const paragraph = document.createElement("p");
    paragraph.textContent = section.text;

    content.append(heading, paragraph);
  });

  articleReader.append(category, title, meta, content);

  if (!articleDialog.open) {
    articleDialog.showModal();
  }
}

function formatArticleDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}

function closeArticle() {
  if (articleDialog?.open) {
    articleDialog.close();
  }
}

function handleDialogBackdropClick(event) {
  // Close only when the click is outside the dialog's content box.
  if (event.target === articleDialog) {
    const rect = articleDialog.getBoundingClientRect();

    const insideDialog =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!insideDialog) {
      closeArticle();
    }
  }
}


// ========================================
// Event delegation for article buttons
// ========================================


function handleArticleGridClick(event) {
  const button = event.target.closest("button[data-action]");

  if (!button || !articlesGrid.contains(button)) {
    return;
  }

  const articleId = Number(button.dataset.articleId);

  if (!Number.isInteger(articleId)) {
    return;
  }

  if (button.dataset.action === "bookmark") {
    toggleBookmark(articleId);
  } else if (button.dataset.action === "read") {
    openArticle(articleId);
  }
}


// ========================================
// Initialize BlogSphere
// ========================================

function initBlogSphere() {
  if (categoryList) {
    categoryList.addEventListener("click", handleCategoryClick);
  }

  if (searchInput) {
    searchInput.addEventListener("input", handleSearchInput);
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", handleSortChange);
  }

  if (clearFiltersButton) {
    clearFiltersButton.addEventListener("click", clearFilters);
  }

  if (articlesGrid) {
    articlesGrid.addEventListener("click", handleArticleGridClick);
  }

  if (bookmarksToggle) {
    bookmarksToggle.addEventListener("click", toggleBookmarksView);
  }

  const currentYear = document.getElementById("current-year");

  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  
  if (closeArticleButton) {
    closeArticleButton.addEventListener("click", closeArticle);
  }

  if (articleDialog) {
    articleDialog.addEventListener("click", handleDialogBackdropClick);
  }


  updateArticles();
}

initBlogSphere();
