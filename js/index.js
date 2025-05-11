function toggleSidebar() {
    const sidebarItem = document.querySelector('.nav__mobile-sidebar')

    if (sidebarItem) {
        sidebarItem.classList.toggle('d-block')
    }
}