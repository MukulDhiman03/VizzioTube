const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
console.log("API_KEY:", API_KEY);

export const YT_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=in&key=" +
  API_KEY;
