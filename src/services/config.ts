import { SpotifyApi } from "@spotify/web-api-ts-sdk";

const configService = {
    apiUrl: 'https://api.spotify.com/v1/'
}
const sdk = SpotifyApi.withClientCredentials("client-id", "secret", ["scope1", "scope2"]);
export default configService