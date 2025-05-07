class PageLoader {
    constructor() {
        this.currentPath = window.location.pathname.toLowerCase();
        // Get the repository name from the path for GitHub Pages
        const pathParts = this.currentPath.split('/');
        const repoName = pathParts[1] === 'WBS-website' ? '/WBS-website' : '';
        
        // Calculate relative path depth
        this.depth = this.currentPath.split('/').length - (repoName ? 3 : 2);
        
        // Set base path considering GitHub Pages
        this.basePath = '../'.repeat(this.depth);
        if (this.currentPath.endsWith('index.html') || this.currentPath.endsWith('/')) {
            this.basePath = repoName ? repoName + '/' : '';
        }
    }

    async loadNavigation() {
        try {
            const response = await fetch(this.basePath + 'assets/navigation.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.renderNavigation(data.menu);
            this.attachEventListeners();
        } catch (error) {
            console.error('Navigation konnte nicht geladen werden:', error);
        }
    }

    renderNavigation(menu) {
        const sidebar = document.querySelector('.sidebar ul');
        if (!sidebar) return;

        sidebar.innerHTML = menu.map(item => {
            const isActive = this.currentPath.includes(item.link.toLowerCase());
            const itemPath = this.basePath + item.link;
            
            return `
                <li class="dropdown ${isActive ? 'active' : ''}">
                    <a href="${itemPath}" class="menu-title">${item.title}</a>
                    <ul class="dropdown-menu">
                        ${item.items.map(subItem => {
                            const subItemPath = this.basePath + subItem.link;
                            return `<li><a href="${subItemPath}">${subItem.title}</a></li>`;
                        }).join('')}
                    </ul>
                </li>
            `;
        }).join('');
    }

    attachEventListeners() {
        document.querySelectorAll('.menu-title').forEach(title => {
            title.addEventListener('click', (e) => {
                const rect = title.getBoundingClientRect();
                const clickPosition = e.clientX - rect.left;
                
                // If clicking in the right 20% of the element
                if (clickPosition > rect.width * 0.8) {
                    e.preventDefault();
                    const dropdown = title.closest('.dropdown');
                    const wasActive = dropdown.classList.contains('active');

                    // Close all dropdowns
                    document.querySelectorAll('.dropdown').forEach(item => {
                        item.classList.remove('active');
                    });

                    // Toggle current dropdown
                    if (!wasActive) {
                        dropdown.classList.add('active');
                    }
                }
                // If clicking elsewhere, allow normal navigation
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loader = new PageLoader();
    loader.loadNavigation();
});