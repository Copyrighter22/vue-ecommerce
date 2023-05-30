const app = Vue.createApp({
    data() {
        return {
            product: 'Pokeballs',
            description: 'Gotta catch em all!',
            details: ['50% cotton', '30% wool', '20% polyester'],
            selectedVariant: 0,
            variants: [
              { id: 2234, color: 'red' , image: './assets/images/pokeball.png', quantity: 50},
              { id: 2235, color: 'purple' , image: './assets/images/masterball.webp', quantity: 0},
            ],
            cart: 0,

        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },

        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.product + ' ' + this.description
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            if (this.inStock > 0) {
                return this.product + ' ' + this.description + ' en venta!'
            }
            return ''
        }
    
    }
})
