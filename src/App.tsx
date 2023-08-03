import ChallengesProvider from "./context/ChallengesContext";
import PagesRoutes from "./pages/routes";

export default function App() {
  return (
    <div className="container">
      <ChallengesProvider>
        <PagesRoutes />
      </ChallengesProvider>
    </div>
  );
}
