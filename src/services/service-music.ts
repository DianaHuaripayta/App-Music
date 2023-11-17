import axios from "axios";
import {configService} from "./config";

const musicService = axios.create({
    baseURL: configService.apiUrl,
  });
  export default musicService
