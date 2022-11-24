export const getMoviesApi = async (movie, movieYear) => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=3295fc54&s=${movie?.trim() || 'Hulk'}&y=${movieYear || ''}`)

  const data = await response.json()

  return data
}