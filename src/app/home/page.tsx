import { AppCard } from "@/components/customs/app-card";
import { AppInput } from "@/components/customs/app-input";
import { Button } from "@/components/ui/button";
import { SidebarInset } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarInset>
      <div className="w-full p-2">
        <div className="aspect-video rounded-xl bg-muted/50 p-6">
          <h2 className="m-2 mb-2">String</h2>
          <hr className="mb-4" />
          <AppInput />
          <AppInput />
          <AppInput />
          <AppInput />
          <AppInput />
          <hr className="mb-4" />
          <Button>Reset All</Button>
        </div>
        <AppCard _dataClass="person" _length={1} />
      </div>
    </SidebarInset>
  );
}
