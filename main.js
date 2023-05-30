const app = Vue.createApp({
    data() {
        return {
            product: 'Pokeballs',
            image: './assets/images/pokeball.png',
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
              { id: 2234, color: 'green' , image: './assets/images/pokeball.png'},
              { id: 2235, color: 'blue' , image: './assets/images/masterball.webp'},
            ],
            cart: 0,

        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },

        removeToCart() {
            this.cart -= 1
        },

        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
