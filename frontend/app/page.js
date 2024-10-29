import ArticleList from "./components/ArticleList";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to the News App</h1>
        <ArticleList />
      </main>
    </div>
  );
}
