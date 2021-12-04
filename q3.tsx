import { Posts } from "../lib/posts"
import axios from "axios"
import { useEffect } from 'react';

export async function getStaticProps() {
  const postClass = new Posts();
  // Here we fetch data
  const res = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  const obj = await res.data;
  // const obj = await JSON.parse(JSON.stringify(res.data));
  // Here we check route request
  const ob = JSON.stringify(await postClass.q3(obj));
  
  // ob = JSON.parse(postClass.q2(obj));
  // ob = JSON.parse(postClass.q3(obj));

  return {
    props: { ob }
  }
}

export default function Q3({ ob }) {
    useEffect(() => {

    }, [ob]);
    return <div>{ JSON.stringify(ob) }</div>
}