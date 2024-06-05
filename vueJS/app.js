new Vue({
    el: '#app',
    data: {
        menuOpen: false
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        }
    }
});