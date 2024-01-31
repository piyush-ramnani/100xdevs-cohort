import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function someComponent() {
  return (
    <div className="h-full flex flex-col items-center justify-between border  p-10">
      Route declaration via folders in next 😉
      <div>
        <Card>
          <CardHeader>
            <CardTitle>A card by ShadCN</CardTitle>
            <CardDescription>Some random generic description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card content</p>
          </CardContent>
          <CardFooter>
            <p>Card footer</p>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Button variant="destructive">A Button by ShadCN</Button>
      </div>
    </div>
  );
}

export default someComponent;
