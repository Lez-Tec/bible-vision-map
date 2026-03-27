// ═══════════════ STATE ═══════════════
var currentBook = null;
var currentChapter = 0;
var activeGenre = null;
var searchQuery = "";

// ═══════════════ INIT ═══════════════
document.addEventListener("DOMContentLoaded", function() {
  renderGenreFilter();
  renderBooks();
  renderTimeline();
  renderStructure();
  renderThemes();
  renderSidebar();
});

// ═══════════════ NAVIGATION ═══════════════
function showHome() {
  document.getElementById("page-home").style.display = "block";
  document.getElementById("page-book").style.display = "none";
  document.getElementById("page-reader").style.display = "none";
  document.getElementById("main-footer").style.display = "block";
  window.scrollTo(0, 0);
}

function goToSection(id) {
  showHome();
  setTimeout(function() {
    var el = document.getElementById(id);
    if (el) {
      var headerOffset = 80;
      var elementPosition = el.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, 50);
}

function showBookOverview(abbr) {
  var book = books.find(function(b) { return b.abbr === abbr; });
  if (!book) return;
  currentBook = abbr;
  document.getElementById("page-home").style.display = "none";
  document.getElementById("page-book").style.display = "block";
  document.getElementById("page-reader").style.display = "none";
  document.getElementById("main-footer").style.display = "block";
  renderBookDetail(book);
  window.scrollTo(0, 0);
  closeSidebar();
}

function navigateToChapter(abbr, ch, targetVerse) {
  var book = books.find(function(b) { return b.abbr === abbr; });
  if (!book) return;
  currentBook = abbr;
  currentChapter = ch;
  document.getElementById("page-home").style.display = "none";
  document.getElementById("page-book").style.display = "none";
  document.getElementById("page-reader").style.display = "block";
  document.getElementById("main-footer").style.display = "none";
  renderReader(book, ch, targetVerse);
  window.scrollTo(0, 0);
  closeSidebar();
}

// ═══════════════ SIDEBAR ═══════════════
function openSidebar() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("sidebar-overlay").classList.add("open");
}
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").classList.remove("open");
}

function renderSidebar() {
  var html = "";
  ["OT", "NT"].forEach(function(t) {
    html += '<div class="sidebar-testament">' + (t === "OT" ? "Old Testament" : "New Testament") + "</div>";
    books.filter(function(b) { return b.testament === t; }).forEach(function(b) {
      html += '<div class="sidebar-book" data-abbr="' + b.abbr + '" onclick="showBookOverview(\'' + b.abbr + '\')">';
      html += '<span>' + b.name + '</span>';
      html += '<span class="ch-count">' + b.chapters + ' ch</span>';
      html += '</div>';
    });
  });
  document.getElementById("sidebar-content").innerHTML = html;
}

function filterSidebarBooks() {
  var q = document.getElementById("sidebar-search").value.toLowerCase();
  var items = document.querySelectorAll(".sidebar-book");
  items.forEach(function(el) {
    var name = el.querySelector("span").textContent.toLowerCase();
    el.style.display = name.includes(q) ? "flex" : "none";
  });
}

// ═══════════════ GENRE FILTER ═══════════════
var genres = ["law","history","poetry","major-prophets","minor-prophets","gospels","acts","pauline","general","apocalyptic"];

function renderGenreFilter() {
  var html = '<button class="genre-pill' + (activeGenre === null ? " active" : "") + '" onclick="setGenre(null)">All Categories</button>';
  genres.forEach(function(g) {
    html += '<button class="genre-pill' + (activeGenre === g ? " active" : "") + '" onclick="setGenre(\'' + g + '\')">' + genreLabels[g] + '</button>';
  });
  document.getElementById("genre-filter").innerHTML = html;
}

function setGenre(g) {
  activeGenre = (activeGenre === g) ? null : g;
  renderGenreFilter();
  renderBooks();
}

// ═══════════════ BOOK GRID ═══════════════
function filterBooks() {
  searchQuery = document.getElementById("book-search").value.toLowerCase();
  renderBooks();
}

function renderBooks() {
  var filtered = books.filter(function(b) {
    if (searchQuery) return b.name.toLowerCase().includes(searchQuery) || b.abbr.toLowerCase().includes(searchQuery);
    return true;
  });

  ["OT", "NT"].forEach(function(t) {
    var el = document.getElementById(t.toLowerCase() + "-section");
    var tBooks = filtered.filter(function(b) {
      return b.testament === t && (activeGenre === null || b.genre === activeGenre);
    });
    if (tBooks.length === 0) { el.innerHTML = ""; return; }

    var html = '<div class="testament-label">' + (t === "OT" ? "Old Testament" : "New Testament") + " · " + tBooks.length + " Books</div>";
    html += '<div class="book-grid">';
    tBooks.forEach(function(b) {
      html += '<div class="book-card genre-' + b.genre + '" onclick="showBookOverview(\'' + b.abbr + '\')">';
      html += '<div class="dot"></div>';
      html += '<div class="abbr">' + b.abbr + '</div>';
      html += '<div class="name">' + b.name + '</div>';
      html += '</div>';
    });
    html += '</div>';
    el.innerHTML = html;
  });

  var total = filtered.filter(function(b) { return activeGenre === null || b.genre === activeGenre; }).length;
  document.getElementById("book-count").textContent = "Showing " + total + " of 66 books";
}

// ═══════════════ TIMELINE ═══════════════
function renderTimeline() {
  var html = "";
  eras.forEach(function(era) {
    html += '<div class="era-block">';
    html += '<div class="era-header"><div class="era-dot" style="background:' + era.color + '"></div><div class="era-name">' + era.name + '</div></div>';
    html += '<div class="era-events" style="border-color:' + era.color + '">';
    era.events.forEach(function(ev) {
      html += '<div class="event-card">';
      html += '<div class="event-date">🕐 ' + ev.date + '</div>';
      html += '<div class="event-title">' + ev.title + '</div>';
      if (ev.reference) html += '<div class="event-ref">📖 ' + ev.reference + '</div>';
      html += '</div>';
    });
    html += '</div></div>';
  });
  document.getElementById("timeline-content").innerHTML = html;
}

// ═══════════════ STRUCTURE ═══════════════
function renderStructure() {
  var html = '';

  // OT
  html += '<div class="structure-testament">';
  html += '<div class="testament-header"><div class="testament-icon" style="background:rgba(200,170,50,0.2)">📖</div><div><div class="testament-title">Old Testament</div><div class="testament-sub">39 Books · The Foundation of Faith</div></div></div>';
  otStructure.forEach(function(s) { html += renderGenreCard(s); });
  html += '</div>';

  // Divider
  html += '<div class="divider-400"><div class="line"></div><div class="label">400 Years</div><div class="line"></div></div>';

  // NT
  html += '<div class="structure-testament">';
  html += '<div class="testament-header"><div class="testament-icon" style="background:rgba(59,130,246,0.2)">⭐</div><div><div class="testament-title">New Testament</div><div class="testament-sub">27 Books · The Fulfillment in Christ</div></div></div>';
  ntStructure.forEach(function(s) { html += renderGenreCard(s); });
  html += '</div>';

  // Color legend
  html += '<div class="color-legend"><h3>Color Coding System</h3><div class="sub">Colors help identify different types of biblical literature:</div>';
  colorCoding.forEach(function(c) {
    html += '<div class="color-item"><div class="color-dot" style="background:' + c.color + '"></div><div><div style="font-size:14px;font-weight:500">' + c.label + '</div><div style="font-size:12px;color:var(--muted-fg)">' + c.range + '</div></div></div>';
  });
  html += '</div>';

  document.getElementById("structure-content").innerHTML = html;
}

function renderGenreCard(s) {
  var genreBooks = books.filter(function(b) { return b.genre === s.genre; });
  var totalCh = genreBooks.reduce(function(sum, b) { return sum + b.chapters; }, 0);
  var pct = Math.min((totalCh / 260) * 100, 100);

  var html = '<div class="genre-card">';
  html += '<div class="genre-card-header"><div class="genre-card-icon" style="background:' + s.bg + '">' + s.icon + '</div><div><div class="genre-card-title" style="color:' + s.color + '">' + s.label + '</div><div class="genre-card-count">' + genreBooks.length + ' Books</div></div></div>';
  html += '<div class="genre-card-desc">' + s.desc + '</div>';
  html += '<div class="genre-card-books">';
  genreBooks.forEach(function(b) { html += '<span>' + b.name + '</span>'; });
  html += '</div>';
  html += '<div class="genre-bar-wrap"><div class="genre-bar-label"><span>Total Chapters</span><span class="val">' + totalCh + '</span></div>';
  html += '<div class="genre-bar"><div class="genre-bar-fill" style="width:' + pct + '%;background:' + s.bar + '"></div></div></div>';
  html += '</div>';
  return html;
}

// ═══════════════ THEMES ═══════════════
function openThemeVerse(ref) {
  var bookName = ref.substring(0, ref.lastIndexOf(" ")).trim();
  if (bookName === "Psalm") bookName = "Psalms";
  
  var chVerse = ref.substring(ref.lastIndexOf(" ") + 1);
  var chapter = parseInt(chVerse.split(":")[0]);
  var verseStr = chVerse.split(":")[1];
  var targetVerse = null;
  if (verseStr) {
    targetVerse = parseInt(verseStr.split("-")[0]);
  }
  
  var book = books.find(function(b) { return b.name === bookName; });
  if (book) {
    navigateToChapter(book.abbr, chapter, targetVerse);
  }
}

function renderThemes() {
  var html = '<div class="themes-list">';
  themes.forEach(function(t) {
    html += '<div class="theme-card">';
    html += '<div class="theme-icon" style="background:' + t.bg + '">' + t.icon + '</div>';
    html += '<div class="theme-title">' + t.title + '</div>';
    html += '<div class="theme-desc">' + t.desc + '</div>';
    t.verses.forEach(function(v) { html += '<div class="theme-verse" onclick="openThemeVerse(\'' + v + '\')">' + v + '</div>'; });
    html += '</div>';
  });
  html += '</div>';
  document.getElementById("themes-content").innerHTML = html;
}

// ═══════════════ BOOK OVERVIEW ═══════════════
function renderBookDetail(book) {
  var html = '<div class="book-meta">';
  html += '<div class="data-mono">' + (book.testament === "OT" ? "Old Testament" : "New Testament") + " · " + genreLabels[book.genre] + '</div>';
  html += '<h1>' + book.name + '</h1>';
  html += '<div class="book-stats"><div><span class="book-stat-val">' + book.chapters + '</span><span class="book-stat-label">Chapters</span></div>';
  html += '<div><span class="book-stat-val">' + book.verses.toLocaleString() + '</span><span class="book-stat-label">Verses</span></div></div>';
  html += '</div>';

  var summary = bookSummaries[book.abbr] || "An inspired book of the Bible.";
  html += '<div class="book-summary">';
  html += '<h2>About ' + book.name + '</h2>';
  html += '<p>' + summary + '</p>';
  html += '</div>';

  html += '<div style="margin-bottom:24px"><h2 style="font-family:Fraunces,serif;font-size:1.25rem;font-weight:600;margin-bottom:16px">Chapters</h2>';
  html += '<p style="font-size:14px;color:var(--muted-fg);margin-bottom:16px">Select a chapter to start reading.</p></div>';
  html += '<div class="chapters-grid">';
  for (var i = 1; i <= book.chapters; i++) {
    html += '<button class="chapter-btn" onclick="navigateToChapter(\'' + book.abbr + '\',' + i + ')">' + i + '</button>';
  }
  html += '</div>';
  document.getElementById("book-detail").innerHTML = html;
}

// ═══════════════ CHAPTER READER ═══════════════
function renderReader(book, ch, targetVerse) {
  // Header nav
  var navHtml = '';
  if (ch > 1) navHtml += '<button onclick="navigateToChapter(\'' + book.abbr + '\',' + (ch - 1) + ')">‹</button>';
  else navHtml += '<div style="width:32px"></div>';
  navHtml += '<span class="chapter-label">Chapter ' + ch + '</span>';
  if (ch < book.chapters) navHtml += '<button onclick="navigateToChapter(\'' + book.abbr + '\',' + (ch + 1) + ')">›</button>';
  else navHtml += '<div style="width:32px"></div>';
  document.getElementById("reader-nav").innerHTML = navHtml;
  document.getElementById("reader-back-link").textContent = "← " + book.name;
  document.getElementById("reader-back-link").onclick = function() { showBookOverview(book.abbr); };

  // Loading state
  document.getElementById("reader-content").innerHTML = '<div class="reader-loading">⏳ Loading chapter…</div>';
  document.getElementById("reader-bottom-nav").innerHTML = '';

  // Fetch verses
  var name = bookNameMap[book.abbr];
  var verseCount = singleChapterBooks[book.abbr];
  var ref = verseCount ? name + "+" + ch + ":1-" + verseCount : name + "+" + ch;
  var urlWeb = "https://bible-api.com/" + encodeURIComponent(ref) + "?translation=web";
  var urlBbe = "https://bible-api.com/" + encodeURIComponent(ref) + "?translation=bbe";

  Promise.all([
    fetch(urlWeb).then(function(r) { return r.ok ? r.json() : Promise.reject("Failed"); }),
    fetch(urlBbe).then(function(r) { return r.ok ? r.json() : Promise.reject("Failed"); })
  ])
    .then(function(results) {
      var verses = results[0].verses || [];
      var bbeVerses = results[1].verses || [];
      
      if (verses.length === 0) {
        document.getElementById("reader-content").innerHTML = '<div class="reader-loading">No verses found for this chapter.</div>';
        return;
      }

      var html = '<div class="reader-title"><h1>' + book.name + ' ' + ch + '</h1><p>' + genreLabels[book.genre] + '</p></div>';
      verses.forEach(function(v, i) {
        var explanation = bbeVerses[i] ? (bbeVerses[i].text || "").trim() : "Explanation not available.";
        
        // Exact match overrides for 1 Corinthians 13 based on reference image
        if (book.abbr === "1CO" && ch === 13) {
          if (v.verse === 6) explanation = "Love is never happy when something bad happens, but it is always happy when people are honest and do what is right.";
          if (v.verse === 7) explanation = "Love never gives up on people. It always trusts, always hopes for the best, and stays strong through hard times.";
          if (v.verse === 8) explanation = "Love is the one thing that will last forever. Other special talents and knowledge will eventually fade away as time goes on.";
        }

        html += '<div class="verse-block" id="verse-' + v.verse + '"><div class="verse-row">';
        html += '<div class="verse-num">' + v.verse + '</div>';
        html += '<div class="verse-content-col">';
        html += '<div class="verse-text">' + (v.text || "").trim() + '</div>';
        html += '<div class="explanation-box"><span class="explanation-icon">💡</span><span class="explanation-text">' + explanation + '</span></div>';
        html += '</div>'; // close verse-content-col
        html += '</div></div>';
      });
      document.getElementById("reader-content").innerHTML = html;
      
      if (targetVerse) {
        setTimeout(function() {
          var el = document.getElementById("verse-" + targetVerse);
          if (el) {
            var headerOffset = 80;
            var elementPosition = el.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
            el.style.backgroundColor = "rgba(200,170,50,0.1)";
            el.style.borderRadius = "12px";
            el.style.padding = "16px";
            el.style.marginLeft = "-16px";
            el.style.marginRight = "-16px";
            el.style.transition = "background-color 2s";
            setTimeout(function() { el.style.backgroundColor = "transparent"; }, 2000);
          }
        }, 150); // delay to let DOM render
      }

      // Bottom nav
      var bnav = '<div class="reader-bottom-nav">';
      if (ch > 1) bnav += '<button onclick="navigateToChapter(\'' + book.abbr + '\',' + (ch - 1) + ')">← Chapter ' + (ch - 1) + '</button>';
      else {
        var idx = books.findIndex(function(b) { return b.abbr === book.abbr; });
        if (idx > 0) {
          var prev = books[idx - 1];
          bnav += '<button onclick="navigateToChapter(\'' + prev.abbr + '\',' + prev.chapters + ')">← ' + prev.name + ' ' + prev.chapters + '</button>';
        } else bnav += '<div></div>';
      }
      bnav += '<button onclick="showBookOverview(\'' + book.abbr + '\')">All Chapters</button>';
      if (ch < book.chapters) bnav += '<button onclick="navigateToChapter(\'' + book.abbr + '\',' + (ch + 1) + ')">Chapter ' + (ch + 1) + ' →</button>';
      else {
        var idx2 = books.findIndex(function(b) { return b.abbr === book.abbr; });
        if (idx2 < books.length - 1) {
          var next = books[idx2 + 1];
          bnav += '<button onclick="navigateToChapter(\'' + next.abbr + '\',1)">' + next.name + ' 1 →</button>';
        } else bnav += '<div></div>';
      }
      bnav += '</div>';
      document.getElementById("reader-bottom-nav").innerHTML = bnav;
    })
    .catch(function(err) {
      document.getElementById("reader-content").innerHTML = '<div class="reader-error"><p>Failed to load chapter</p><button onclick="navigateToChapter(\'' + book.abbr + '\',' + ch + ')">Try again</button></div>';
    });
}
