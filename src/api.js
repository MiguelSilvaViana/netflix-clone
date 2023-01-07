const API_KEY = import.meta.env.VITE_API_KEY

const fetchCategories = [
  {
    name: "trending",
    title: "Trending",
    path: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    isLarge: true
  },
  {
    name: "netflixOriginals",
    title: "Netflix Originals",
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLarge: false
  },
  {
    name: "topRated",
    title: "Top Rated",
    path: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    isLarge: false
  },
  {
    name: "Comedy",
    title: "Comedy",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    isLarge: false
  },
  {
    name: "Romances",
    title: "Romances",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    isLarge: false
  },
  {
    name: "Documentaries",
    title: "Documentaries",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    isLarge: false
  },
]

export const getMovies = async (path) => {
  try {
    const url = `https://api.themoviedb.org/3/${path}`
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.log("ERROR GETMOVIES ", error)
  }
}

export default fetchCategories

