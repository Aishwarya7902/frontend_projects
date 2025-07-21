import axios from 'axios'

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
     headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2M0MjI5MWJlMWMxYWUzZjI2ZTk3YzUyZGJlZjg5ZiIsIm5iZiI6MTc1MzAwOTIzNS4zMTMsInN1YiI6IjY4N2NjYzUzOWYxNGY2OGViMjI0NDNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gKhXURn3M9D9IQgnMv2xDZQddjR98adfqgmJu1VCzNo'
  }
})

export default instance;