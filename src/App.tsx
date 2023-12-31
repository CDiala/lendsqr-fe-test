import "./App.scss";
import { Button } from "./components";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="flex flex-col gap-2 m-1 w-96">
      <Input type={"email"} placeholder={"Email"} size={"small"}></Input>
      <Input type={"password"} placeholder={"Password"} size={"large"}></Input>
      <div></div>
      <Button block size={"lg"} theme={"primary"}>
        Log In
      </Button>
      <Button block size={"sm"} theme={"secondary"}>
        Reset
      </Button>
      <Button block size={"sm"} theme={"danger"}>
        Log In
      </Button>
      <Button block size={"sm"} theme={"primary-outline"}>
        Log In
      </Button>
      <Button size={"sm"} theme={"secondary-outline"}>
        Reset
      </Button>
      <Button size={"sm"} theme={"danger-outline"}>
        BLACKLIST USER
      </Button>
      <Button size={"sm"} theme={"primary-outline"}>
        ACTIVATE USER
      </Button>
    </div>
  );
}

export default App;
