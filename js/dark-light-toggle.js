window.addEventListener('DOMContentLoaded', () => {
  KEEP.utils.modeToggle = {

    localStorageKey: 'MAGIC',
    modeToggleButton_dom: document.querySelector('.mode-toggle'),
    iconDom: document.querySelector('.mode-toggle i'),
    articleContent: document.querySelector('.main-content'),

    setItemUtil(modeClass, prefersColorScheme) {
      document.body.classList.toggle(modeClass);
      const isDark = document.body.className.indexOf(modeClass) === -1;

      if (isDark) {
        this.iconDom.className = 'fa fa-moon-o';
        this.articleContent.classList.remove('night-code-theme');
      } else {
        this.iconDom.className = 'fa fa-lightbulb-o';
        this.articleContent.classList.add('night-code-theme');
      }
      localStorage.setItem(this.localStorageKey, JSON.stringify(
        {
          prefersColorScheme: prefersColorScheme,
          isDark: isDark
        }
      ));
    },

    initModeStatus() {
      this.modeConfig = JSON.parse(localStorage.getItem(this.localStorageKey));
      if (this.modeConfig) {
        if (this.modeConfig.prefersColorScheme === 'dark') {
          if (this.modeConfig.isDark) {
            document.body.classList.remove('light-mode');
            this.articleContent.classList.remove('night-code-theme');
            this.iconDom.className = 'fa fa-lightbulb-o';
          } else {
            document.body.classList.add('light-mode');
            this.articleContent.classList.add('night-code-theme');
            this.iconDom.className = 'fa fa-moon-o';
          }
        } else {

          if (this.modeConfig.isDark) {
            document.body.classList.remove('dark-mode');
            this.articleContent.classList.remove('night-code-theme');
            this.iconDom.className = 'fa fa-moon-o';
          } else {
            document.body.classList.add('dark-mode');
            this.articleContent.classList.add('night-code-theme');
            this.iconDom.className = 'fa fa-lightbulb-o';
          }

        }

      }
    },

    initModeToggleButton() {
     this.modeToggleButton_dom.addEventListener('click', () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.setItemUtil('light-mode', 'dark');
        } else {
          this.setItemUtil('dark-mode', 'light');
        }
      });
    }
  }

  KEEP.utils.modeToggle.initModeStatus();
  KEEP.utils.modeToggle.initModeToggleButton();
});
