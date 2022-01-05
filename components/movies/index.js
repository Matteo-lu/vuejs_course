const MovieApp = Vue.component('movie-app', {
    template:`
        <div class="container">
            <h1>Peliculas App {{ $store.state.counter }}</h1>
            <input type="number" v-model="add"></input>
            <button @click="$store.commit('add', add)" >+</button>
            <SearchComp ref="searchCom" v-model="searchMovie"/>
            <div v-show="! Object.keys(searchMovie).length">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 py-3" v-for="(movie, key) in movies"
                    :key="key">
                        <MovieComp
                        :id="movie.id"
                        :title="movie.title"
                        :synopsis="movie.overview"
                        :cover="movie.poster_path"
                        :like="movie.like"
                        @toggleLike="onToggleLike"
                        />
                    </div>
                </div>

                <div class="row">
                    <button @click="setPage(n)" :href="'?page='+n" class="btn m-1" :class="{
                        'btn-light': n != page,
                        'btn-primary': n == page
                    }" v-for="(n, index) in total_pages" :key="index">
                        {{n}}
                    </button>
                </div>
            </div>
            <div v-show="Object.keys(searchMovie).length">
                <h1>Resultados de búsqueda</h1>
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 py-3" v-for="(movie, key) in searchMovie.results"
                    :key="key" v-if="movie.poster_path">
                        <MovieComp
                        :id="movie.id"
                        :title="movie.title"
                        :synopsis="movie.overview"
                        :cover="movie.poster_path"
                        :like="movie.like"
                        @toggleLike="onToggleLike"
                        />
                    </div>
                </div>
                <div class="row">
                    <button @click="$refs.searchCom.setPage(n)" :href="'?page='+n" class="btn m-1" :class="{
                        'btn-light': n != searchMovie.page,
                        'btn-primary': n == searchMovie.page
                    }" v-for="(n, index) in searchMovie.total_pages" :key="index">
                        {{n}}
                    </button>
                </div>
            </div>
            <MovieFav :show.sync="showFav"/>
        </div>
    `,
    data () {
        return {
            add: 0,
            movies: [
            ],
            searchMovie: {
                
            },
            showFav: false,
            page: 1,
            total_pages: null
        }
    },
    watch: {
        page () {
            this.getPopularMovies()
        }
    },
    components: {
        MovieComp,
        MovieFav,
        SearchComp,
    },
    methods: {
        onToggleLike (data) {
            let movieLike = this.movies.find(movie => movie.id == data.id)
            this.$store.commit('addFavMovie', movieLike)
            movieLike.like = data.like
            // this.showFav = data.like
            // this.showFav = data.like
        },
        getPopularMovies () {
            const URL = `${BASEURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=${this.page}`
            fetch(URL)
            .then(response => response.json())
            .then(({results, page, total_pages}) => {
                console.log(page, total_pages)
                this.total_pages = total_pages
                this.movies = results.map(m => {
                    m.like = false
                    return m
                })
            })
        },
        setPage (page) {
            this.page = page
            this.getPopularMovies()
        }
        // sayHello () {
        //     alert('Hola')
        // }
        // onHideFav (show) {
        //     this.showFav = show 
        // }
    },
    mounted() {
        let locationURL = new URL(window.location.href)
        this.page = locationURL.searchParams.get('page') || 1
        this.getPopularMovies()
    }
})
