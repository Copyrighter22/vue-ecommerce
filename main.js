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
              { id: 2234, color: 'green' },
              { id: 2235, color: 'blue' },
            ],
            
            detalls: ['Nom', 'Ratio', 'Compra', 'Venta'],
            stats: [
                { id: 1, name: 'Pokeball', ratio: '1x', buy: '200', sell: '100' },
                { id: 2, name: 'Greatball', ratio: '1.5x', buy: '600', sell: '300' },
                { id: 3, name: 'Ultraball', ratio: '2x', buy: '1200', sell: '600' },
                { id: 4, name: 'Masterball', ratio: '255x', buy: '100000', sell: '50000' }
            ],

        }
    }
})
