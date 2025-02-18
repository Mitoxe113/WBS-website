//Dropdown-Menü
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    
    // Close all dropdowns except the active one
    dropdowns.forEach(dropdown => {
        if (!dropdown.parentElement.classList.contains('active')) {
            dropdown.parentElement.querySelector('.dropdown-menu').style.display = 'none';
        }
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            // Only prevent default if clicking the arrow
            if (e.clientX > this.getBoundingClientRect().right - 20) {
                e.preventDefault();
                
                // Close all other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== this) {
                        otherDropdown.parentElement.classList.remove('active');
                        otherDropdown.parentElement.querySelector('.dropdown-menu').style.display = 'none';
                    }
                });
                
                // Toggle current dropdown
                this.parentElement.classList.toggle('active');
                const menu = this.parentElement.querySelector('.dropdown-menu');
                menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});