import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { store } from "./store";
import Header from "./components/Header";
import Filters from "./components/Filters";
import FoodGrid from "./components/FoodGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider attribute={"class"} defaultTheme="light">
      <Provider store={store}>
        <div className="min-h-screen bg-background  text-foreground">
          <Header />
          <main>
            <Filters />
            <FoodGrid />
          </main>
          <Footer />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
