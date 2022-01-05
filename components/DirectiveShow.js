let DirectiveShow = {
    template: `<div>
                    <h1 v-text="title"></h1>
                    <p v-show="show" v-html="message"></p>
                    <p v-show="user.permission">El usuario tiene persmio de ver esto</p>
                    <p v-show="!user.permission">El usuario no tiene permiso</p>
                </div>
                `,
    data () {
        return {
            title: 'Directivas de Vue.js',
            message: '<b>Hola desde directive Show</b>',
            show: true,
            user: {
                permission: false,
            }
        }
    }
}
