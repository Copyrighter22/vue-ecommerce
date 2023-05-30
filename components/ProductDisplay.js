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
                        <p>{{ details }}</p>
                        <p> Gastos de envío: {{ shipping }} </p>
                        
                        

                        <div v-for="(variant, index) in variants" 
                        :key="variant.id" @mouseover="updateVariant(index)" 
                        class="color-circle" :style="{ background: variant.color}">
                        </div>

                        <button class="button" :class="{disabledButton: !inStock}":disabled="!inStock" 
                        @click="addToCart">Add to Cart</button>

                    </div>
            </div>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>
        </div>`,
        data() {
            return {
                product: 'balls',
                selectedVariant: 0,
                variants: [
                  { id: 1, name:"Poke", color: 'red' , image: './assets/images/pokeball.png', buy: 200,quantity: 50 ,description: 'Es una Ball comú sense ninguna qualitat especial.'},
                  { id: 2, name:"Super", color: 'blue' , image: './assets/images/superball.png', buy: 600 ,quantity: 25 ,description: 'La Superball és més efectiva que la Pokeball.'},
                  { id: 3, name:"Turno",color: 'withe' , image: './assets/images/turnoball.png', buy: 1000 ,quantity: 20 ,description: 'La Turnoball és més efectiva contra més temps dura el enfrentament.'},
                  { id: 4, name:"Lujo",color: 'black' , image: './assets/images/lujoball.png', buy: 1000 ,quantity: 10, description: 'La Lujoball és més efectiva per a la comoditat del nostre company, millorant així més ràpidament el vostre vincle.'},
                  { id: 5, name:"Veloz",color: 'yellow' , image: './assets/images/velozball.png', buy: 1000 ,quantity: 5, description: 'La Velozball és més efectiva contra Pokémon que poden escapar-se ràpidament.'},
                  { id: 6, name:"Master",color: 'purple' , image: './assets/images/masterball.png',buy: 9999, quantity: 0, description: 'La Masterball és la més efectiva de totes, ja que sempre captura el Pokémon.'}
                ],
                reviews: [],
                
    
            }
        },
        methods: {
            addToCart() {
                this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
            },
    
            updateVariant(index) {
                this.selectedVariant = index
            },

            addReview(review) {
                this.reviews.push(review)
            }
        },
        computed: {
            title() {
                return this.variants[this.selectedVariant].name + this.product
            },
            image() {
                return this.variants[this.selectedVariant].image
            },
            inStock() {
                return this.variants[this.selectedVariant].quantity
            },
            details() {
                if (this.inStock > 0) {
                    return this.variants[this.selectedVariant].buy + '€' + ' | ' + this.variants[this.selectedVariant].description
                }
                return ''
            },
            shipping() {
                if (this.premium) {
                    return 'Gratis'
                }
                return 2.99 + '€'
            }
        
        }

        
})