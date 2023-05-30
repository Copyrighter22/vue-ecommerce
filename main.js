const app = Vue.createApp({
    data() {
        return {
            product: 'Pokeballs',
            image: './assets/images/pokeball.png',
            inventory: 100,
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
              { id: 2234, color: 'red' , image: './assets/images/pokeball.png'},
              { id: 2235, color: 'purple' , image: './assets/images/masterball.webp'},
            ],
            cart: 0,

        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },

        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
