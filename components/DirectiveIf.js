let DirectiveIf = {
    template: `<div>
                    <h1 v-text="title"></h1>
                    <p v-if="show" v-html="message"></p>
                    <p v-if="user.permission">El usuario tiene persmio de ver esto</p>
                    <p v-else>El usuario no tiene permiso</p>
                    <p v-if="user.permission && user.vip">El usuario tiene permisos y es vip</p>
                    <p v-else-if="user.permission">El usuario tiene permisos</p>
                    <p v-else-if="user.vip">El usuario es vip</p>
                    <p v-else>El usuario no tiene permisos y no es vip</p>
                </div>
                `,
    data () {
        return {
            title: 'Directivas de Vue.js',
            message: '<b>Hola desde directive If</b>',
            show: true,
            user: {
                permission: false,
                vip: true,
            }
        }
    }
}
