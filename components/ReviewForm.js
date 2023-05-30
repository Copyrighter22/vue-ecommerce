app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Deixa una ressenya</h3>
        <label for="name">Nom:</label>
        <input id="name" v-model="name">

        <label for="review">Ressenya:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Puntuació:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input class="button" type="submit" value="Enviar">

    </form>`,
    data(){
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        onSubmit() {
            if(this.name === '' || this.review === '' || this.rating === null) {
                alert('Revisa que tots els camps estiguin omplerts')
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
        }

    }
})