import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <TooltipProvider>
      <main className="min-h-screen flex flex-col items-center justify-center p-24">
        <h1 className="text-2xl text-red-500 font-bold">Hello World</h1>
      </main>
    </TooltipProvider>
  );
}

export default App;
