import ScrollToTop from "react-scroll-to-top";

export default function App() {
  return (
    <div className="App">
      <ScrollToTop smooth color="#6f00ff" />
      <h1>Hello!</h1>
      <h2>Scroll down for the button to appear</h2>
      <p style={{ marginTop: "150vh" }}>bottom</p>
    </div>
  );
}
