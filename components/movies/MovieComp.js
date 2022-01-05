let MovieComp = {
    template: `
        <div class="card" :class="{'movie-like': like}">
            <img :src="cover | coverURL" class="card-img-top">
            <div class="card-body">
                <h2 class="card-title" v-text="title"></h2>
                <p class="card-text" v-text="synopsis"></p>
                <button class="btn" :class="btnStatus" @click="toggleLike">
                    <span v-text="like ? 'Favorita' : 'Agregar a Favoritas'"></span> 
                    <i class="fa-heart " :class="{
                        'far': !like,
                        'fas': like
                    }"></i>
                </button>
                <router-link :to="{ name: 'pelicula', params: { id: id}}" class="btn btn-primary">Detalle</router-link>
            </div>
        </div>
    `,
    props: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        synopsis: {
            type: String,
            default: 'Este objecto no contiene synopsis',
        },
        cover: {
            type: String,
            required: true,
        },
        like: {
            type: Boolean,
            required: true,
            default () {
                return false
            }
        }
    },
    data () {
        return {
            className: {
                'btn-like': true,
                'btn-ligth': false,
                myClass: true
            },
            className2: 'btn-like2'
        }
    },
    computed: {
        btnStatus () {
            return this.like ? 'btn-like' : 'btn-ligth'
        }
    },
    methods: {
        toggleLike () {

            let movie = this.$parent.movies.find(m => m.id == this.id)
            movie.like = !this.like
            this.$parent.showFav = !this.like
            // this.$emit('toggleLike', data)
        }
    },
}
