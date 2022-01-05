let DirectiveModel = {
    template: `<div>
                    <h1 v-text="title"></h1>
                    <p v-html="message"></p>
                    <input type="text" v-model="inputText">

                    <h2>Tipo checkBox</h2>
                    <label>
                        <input type="checkbox" v-model="checked">
                        Activado
                    </label>

                    <h2>Peliculas</h2>
                    <label v-for="(movie, key) in movies" :key="key">
                        <input :value="movie" type="checkbox" v-model="favoriteMovies">
                        {{ movie }}
                    </label>
                    <div v-if="favoriteMovies.length != 0">
                        <h2>Peliculas Favoritas</h2>
                        <ul>
                            <li v-for="(movie, key) in favoriteMovies" :key="key">
                                {{ movie }}
                            </li>
                        </ul>
                    </div>
                </div>
                `,
    data () {
        return {
            title: 'Directivas de Vue.js',
            message: '<b>Hola desde directive Model</b>',
            inputText: 'Data del input',
            checked: false,
            favoriteMovies: [],
            movies: ['Buscando a memito', 'Batmanaguer', 'Titanic']
        }
    }
}
