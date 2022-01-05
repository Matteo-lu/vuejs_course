let DirectiveOn = {
    template: `<div>
                    <h1 v-text="title"></h1>
                    <p v-html="message"></p>

                    <p v-text="pelicula"></p>
                    <button @click="comprarEntrada">Comparar entrada</button>
                </div>
                `,
    data () {
        return {
            title: 'Directivas de Vue.js',
            message: '<b>Hola desde directive V-on</b>',
            welcome_text: 'Bienvenido desde la data',
            pelicula: 'Spiderman',
            entradas: 5,
        }
    },
    methods: {
        decirHola() {
            alert(this.welcome_text)
        },
        comprarEntrada () {
            if(this.entradas > 0){
                this.entradas--
                return alert(`Entrada para ${this.pelicula} comprada`)
            }
            return alert('Ya no hay entradas')
        }
    }
}
