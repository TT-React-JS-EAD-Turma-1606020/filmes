import { api } from './'

// https://www.omdbapi.com/?s=Hulk&apikey=3295fc54
// baseURL + parâmetro da função (url) + & + parâmetro da instancia 

export const getMoviesApi = async (movie, movieYear) => {
  const response = await api.get(`?s=${movie?.trim() || 'Hulk'}&y=${movieYear || ''}`)

  return response.data
}

export const getMovieDetailsApi = async (movieId) => {
  const response = await api.get(`?plot=full&i=${movieId}`)

  return response.data
}