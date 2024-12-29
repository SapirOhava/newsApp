import { query } from "../../lib/apolloClient";
import { gql } from "@apollo/client";
import ArticleHorizontalCard from "./ArticleHorizontalCard";

// Define the GraphQL query
const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      _id
      title
      content
    }
  }
`;

export default async function ArticleList() {
  // Fetch articles data on the server
  const { data } = await query({ query: GET_ARTICLES });

  return (
    <div className="d-flex flex-column align-items-center py-5">
      {data.articles.map((article) => (
        <ArticleHorizontalCard key={article._id} article={article} />
      ))}
    </div>
  );
}
