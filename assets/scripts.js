//Dropdown-Menü
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    
    // schließe alle Dropdowns, die nicht aktiv sind
    dropdowns.forEach(dropdown => {
        if (!dropdown.parentElement.classList.contains('active')) {
            dropdown.parentElement.querySelector('.dropdown-menu').style.display = 'none';
        }
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (e.clientX > this.getBoundingClientRect().right - 20) {
                e.preventDefault();
                
                // schließe alle anderen Dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== this) {
                        otherDropdown.parentElement.classList.remove('active');
                        otherDropdown.parentElement.querySelector('.dropdown-menu').style.display = 'none';
                    }
                });
                
                // toggle dropdown
                this.parentElement.classList.toggle('active');
                const menu = this.parentElement.querySelector('.dropdown-menu');
                menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});