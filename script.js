Vue.component('star-rating', {
    template: '#star-rating',
    props: ['max', 'current'],
    computed: {
        getRating: function () {
            return (this.current / this.max) * 100
        }
    }
})

new Vue({
    el: '#app',
    data: {
        value: 4
    },
    methods: {
        randomNumberStars: function () {
            this.value = (Math.random() * 4 + 1).toFixed(1)
        }
    }
})