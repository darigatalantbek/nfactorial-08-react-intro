import Header from "./components/Header";
import Post from "./components/Post";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#F1F1F1",
        height: "100vh",
      }}
    >
      <Header />
      <Post />
    </div>
  );
}

export default App;
