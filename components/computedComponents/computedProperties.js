Vue.component('computed-properties', {
    template:`
        <div>
            <h1>Computed Properties</h1>
            <p>{{ fullName }} tiene {{ userAge }} años</p>
        </div>
    `,
    data () {
        return {
            user: {
                name: 'Jesus',
                last_name: 'Lopez',
                year: '1992'

            }
        }
    },
    computed: {
        fullName () {
            return `${this.user.name} ${this.user.last_name}`
        },
        userAge () {
            let date = new Date()
            let currentYear = date.getFullYear()
            return currentYear - Number(this.user.year)
        }
    }
})
