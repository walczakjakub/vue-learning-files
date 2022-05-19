const app = Vue.createApp({
  data() {
    return{
      url: 'http://twitch.tv/zerkaa',
      showBooks: true,
      books: [
        {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.png', isFav: true},
        {title: 'great expectations', author: 'charles dickens', img: 'assets/2.png', isFav: false},
        {title: 'factotum', author: 'charles bukowski', img: 'assets/3.png', isFav: true}        
      ]
    }
  },
  methods: {
      toggleShowBooks() {
        this.showBooks = !this.showBooks
      },
      toggleFav(book) {
        book.isFav = !book.isFav
      }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
})
app.mount('#app')

//console.log(app)

