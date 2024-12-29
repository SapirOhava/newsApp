import ArticleList from "./components/ArticleList";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <ArticleList />
      </main>
    </div>
  );
}
