Vue.component('computed-properties-get-set', {
    template:`
        <div>
            <h1>Computed Properties Get y Set</h1>
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
        fullName: {
            get () {
                return `${this.user.name} ${this.user.last_name}`
            },
            set (newValue) {
                let name = newValue.split(' ')
                this.user.name = name[0]
                this.user.last_name = name[1]
            }
        },
        userAge () {
            let date = new Date()
            let currentYear = date.getFullYear()
            return currentYear - Number(this.user.year)
        }
    }
})
