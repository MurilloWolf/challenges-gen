import Header from "./components/Header";
import CardList from "./components/CardList";
export default function App() {
  return (
    <div className="container">
      <Header />
      <CardList />
      {/* <ProjectList /> */}
      <p className="footer">
        <code>Made with love by wolf 🐺</code>
      </p>
    </div>
  );
}
