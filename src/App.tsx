import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import SplashScreen from "./pages/SplashScreen";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <BrowserRouter>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  );
}

export default App;
