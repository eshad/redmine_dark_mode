/**
 * Redmine Dark Mode Plugin
 * JavaScript for dark mode toggle functionality
 */

(function() {
  'use strict';

  var STORAGE_KEY = 'redmine_dark_mode';
  var DARK_CLASS = 'dark-mode';

  function isDarkMode() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      return stored === 'true';
    }
    // Check system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function setDarkMode(enabled) {
    localStorage.setItem(STORAGE_KEY, enabled);
    if (enabled) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
    updateToggleButton(enabled);
  }

  function updateToggleButton(isDark) {
    var btn = document.getElementById('dark-mode-toggle');
    if (btn) {
      btn.innerHTML = isDark ?
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>' :
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      btn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
  }

  function createToggleButton() {
    var topMenu = document.getElementById('top-menu');
    if (!topMenu) return;

    // Find the ul menu in top-menu
    var menuList = topMenu.querySelector('ul');
    if (!menuList) return;

    // Create list item with toggle button
    var li = document.createElement('li');
    var btn = document.createElement('a');
    btn.id = 'dark-mode-toggle';
    btn.href = '#';
    btn.style.cssText = 'cursor:pointer;';
    btn.onclick = function(e) {
      e.preventDefault();
      setDarkMode(!document.documentElement.classList.contains(DARK_CLASS));
    };

    li.appendChild(btn);
    // Insert at the beginning of the menu list (before Home)
    menuList.insertBefore(li, menuList.firstChild);
    updateToggleButton(isDarkMode());
  }

  function init() {
    // Apply dark mode immediately if enabled
    if (isDarkMode()) {
      document.documentElement.classList.add(DARK_CLASS);
    }

    // Create toggle button when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createToggleButton);
    } else {
      createToggleButton();
    }

    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (localStorage.getItem(STORAGE_KEY) === null) {
          setDarkMode(e.matches);
        }
      });
    }
  }

  init();
})();
