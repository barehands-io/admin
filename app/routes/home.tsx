import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return  <div>
    <h1>React Router</h1>
    <p>
      This is a simple example of a React Router application. It demonstrates
      the use of nested routes and layout routes.
    </p>
    <p>
      To learn more about React Router, check out the{" "}
  
      .
    </p>
  </div>
}
