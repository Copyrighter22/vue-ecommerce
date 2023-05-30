app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
                    <div class="product-container">
                        <div class="product-image">
                        <img v-bind:src="image">
                        </div>

                        <div class="product-info">
                        <h1>{{ title }}</h1>
                        <p>{{ sale }}</p>
                        <p> Gastos de envío: {{ shipping }} </p>
                        <ul>
                            <li v-for="detail in details">{{ detail }}</li>
                        </ul>

                        <div v-for="(variant, index) in variants" 
                        :key="variant.id" @mouseover="updateVariant(index)" 
                        class="color-circle" :style="{ background: variant.color}"></div>

                        <button class="button" :class="{disabledButton: !inStock}":disabled="!inStock" 
                        @click="addToCart">Add to Cart</button>

                        </div>
            </div>
        </div>`,
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
    
            }
        },
        methods: {
            addToCart() {
                this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
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
            },
            shipping() {
                if (this.premium) {
                    return 'Gratis'
                }
                return 2.99
            }
        
        }

        
})