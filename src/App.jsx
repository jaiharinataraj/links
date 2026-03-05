import LinksPage from "./pages/LinksPage";
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
      <Analytics />
      <LinksPage />
    </>
  );
}

export default App;