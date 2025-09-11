import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <h1>Hello Jira</h1>
      <Button variant={"ghost"} size={"sm"}>
        Click Me
      </Button>
      <Button variant={"primary"}>Default</Button>
      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"secondary"}>Default</Button>
      <Button variant={"ghost"}>Default</Button>
      <Button variant={"muted"}>Default</Button>
       <Button variant={"teritary"}>Default</Button>
    </div>
  );
}

export default Home;
