Vue.component('vue-directives', {
    template: `<div>
                    <h1 v-text="title"></h1>
                    <p v-text="text"></p>
                    <a v-bind:href="link.href" v-bind:title="link.title" v-text="link.text"></a>
                    <DirectiveHtml />
                    <DirectiveShow />
                    <DirectiveIf />
                    <DirectiveFor />
                    <DirectiveOn />
                    <DirectiveModel />
                    <DirectiveSlot />
                </div>
                `,
    data () {
        return {
            title: 'Directivas de Vue.js',
            text: 'texto de prueba v-text',
            link: {
                text: 'VueJS Home',
                href: 'https://vuejs.org/v2/api/',
                title: 'Documentación Vue JS'
            }
        }
    },
    components: {
        DirectiveHtml,
        DirectiveShow,
        DirectiveIf,
        DirectiveFor,
        DirectiveOn,
        DirectiveModel,
        DirectiveSlot,
    } 
})
