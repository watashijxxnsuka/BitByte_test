document.addEventListener('DOMContentLoaded', () => {
  const submenu = document.querySelector('.submenu > a');
  const dropdown = document.querySelector('.submenu .dropdown');

  submenu.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
  });
});
