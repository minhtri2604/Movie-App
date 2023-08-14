

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=ef31f585d0f3facd7853190e4ada418c&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=ef31f585d0f3facd7853190e4ada418c&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=ef31f585d0f3facd7853190e4ada418c&language=en-US&page=2  `,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=ef31f585d0f3facd7853190e4ada418c&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=ef31f585d0f3facd7853190e4ada418c&language=en-US&page=1 `,
    requestCast : `http://api.themoviedb.org/3/movie/297762/casts?api_key=e9e9d8da18ae29fc430845952232787c`,
    requestSmilar: `https://api.themoviedb.org/3/movie/297762/similar?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`,
    requestGende:`https://api.themoviedb.org/3/genre/movie/list?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US`,
    requestRecomment:`https://api.themoviedb.org/3/movie/297762/recommendations?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`
  };

  export default requests