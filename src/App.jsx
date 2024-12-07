import { Header } from './components/Header';
import { Post } from './Post';

import './styles.css'

export function App() {

  return (
    <div>
      <Header />
      
      <Post 
        author="Gabriel Pinheiro" 
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, unde distinctio esse vero odio omnis maxime incidunt repellat non ducimus aliquam enim eius quibusdam. Beatae praesentium placeat pariatur voluptate aliquam."
      />
    </div>
  )
}

