// Keep anchor targets below the header when navigation wraps or fonts resize.
const header = document.querySelector('.site-header');
const updateHeaderHeight = () => {
  document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
};

updateHeaderHeight();
new ResizeObserver(updateHeaderHeight).observe(header);
