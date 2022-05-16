const app = Vue.createApp({
  data() {
    return{
      showBooks: true,
      title: 'The Witcher',
      author: 'Andrzej Sapkowski',
      age: 70
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
    }
  })

app.mount('#app')

//console.log(app)

