import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export const configService = {
    apiUrl: 'https://api.spotify.com/v1/'
}
export const MyAccessToken = 'f6dddcb47eab4b328b8a5c0c5c8ce9b1'
export const apiCredentials = SpotifyApi.withClientCredentials(
    "f6dddcb47eab4b328b8a5c0c5c8ce9b1",
    "1b5c970df0054f649d0261bea6cedab1"
  );