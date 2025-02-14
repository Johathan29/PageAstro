//import type { APIRoute } from 'astro';
/*
export const GET: APIRoute = async ({ params, request }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  return new Response(await response.arrayBuffer());
};
var data;
var endpoint = await fetch('https://jsonplaceholder.typicode.com/todos/')
  .then((response) => response.json())
  .then((json) => (data = json));
console.log(data);*/
// comienzo de la API Posts
let Posts: any;
const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
Posts = await response.json();
const randomUser = Posts;
// endpoint de fotos
let Photos: any;
const responsePhotos = await fetch(
  'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'
);
Photos = await responsePhotos.json();
let meals: any;
const responsemeals = await fetch('https://dummyjson.com/recipes/');
meals = await responsemeals.json();
export default {
  name: 'Data',
  value: [Posts, Photos, meals],
};
