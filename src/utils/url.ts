
// let url:String ="http://localhost:3000/api";
let url:String|any = process.env.REACT_APP_BASE_URL || 'localhost:3000';
console.log(process.env);
console.log(process.env.REACT_APP_BASE_URL);
// let url="https://netease-cloud-music-api-umber-gamma.vercel.app/api";

export default url;