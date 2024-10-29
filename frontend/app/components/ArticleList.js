import { query } from "../../lib/apolloClient";
import { gql } from "@apollo/client";

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

// Export the ArticleList component
export default async function ArticleList() {
  // Fetch articles data on the server
  const { data } = await query({ query: GET_ARTICLES });

  return (
    <ul>
      {data.articles.map((article) => (
        <li key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </li>
      ))}
    </ul>
  );
}
