window.addEventListener('DOMContentLoaded', () => {
  KEEP.utils.headerShrink = {

    pageTemplateDom: document.querySelector('.page-main-content'),
    sidebarToolsDom: document.querySelector('.sidebar-tools'),
    headerDom: document.querySelector('.header-wrapper'),
    menuBarDom: document.querySelector('.menu-bar'),
    windowMaskDom: document.querySelector('.window-mask'),

    isHeaderShrink: false,

    init() {
      this.headerHeight = this.headerDom.getBoundingClientRect().height;
    },

    headerShrink() {

      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

      if (!this.isHeaderShrink && scrollTop > this.headerHeight) {
        this.isHeaderShrink = true;
        this.headerDom.classList.add('header-wrapper-shrink');
        this.pageTemplateDom.classList.add('page-main-content-top-shrink');
        this.sidebarToolsDom.classList.add('sidebar-tools-shrink');

      } else if (this.isHeaderShrink && scrollTop <= this.headerHeight) {
        this.isHeaderShrink = false;
        this.headerDom.classList.remove('header-wrapper-shrink');
        this.pageTemplateDom.classList.remove('page-main-content-top-shrink');
        this.sidebarToolsDom.classList.remove('sidebar-tools-shrink');
      }

    },

    initMenuBarButton() {
      let isShowHeaderDrawer = false;
      this.menuBarDom.addEventListener('click', () => {
        isShowHeaderDrawer = !isShowHeaderDrawer;
        document.body.style.overflow = isShowHeaderDrawer ? 'hidden' : 'auto';
        this.headerDom.classList.toggle('header-drawer-show');
      });
    },

    initWindowMask() {
      this.windowMaskDom.addEventListener('click', () => {
        this.headerDom.classList.toggle('header-drawer-show');
      });
    },
  }
  KEEP.utils.headerShrink.init();
  KEEP.utils.headerShrink.initMenuBarButton();
  KEEP.utils.headerShrink.initWindowMask();
});
