import musicService from "./service-music";

const trackService:any = {};
trackService.service = function (q:string,type:string) {
    return musicService.get('seacrch', {params:{q,type}})
    .then(res => res.data)
}
export default trackService