import { Show } from "@styled-icons/boxicons-regular";
import axios from "axios";


export const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  timeout: 1000, 
  // params: {
  //   channelType: 'any',
  // }
});

