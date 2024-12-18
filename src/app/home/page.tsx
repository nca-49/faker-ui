import { AppInput } from "@/components/customs/app-input";
import { Button } from "@/components/ui/button";
import { SidebarInset } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarInset>
      <div className="wrapper flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50 p-6">
            <h2 className="m-2 mb-2">Custom Data</h2>
            <hr className="mb-4" />
            <AppInput dataClass="person" dataType="firstName" length={8} />
            <AppInput dataClass="person" dataType="lastName" />
            <AppInput dataClass="person" dataType="middleName" />
            <AppInput dataClass="person" dataType="fullName" />
            <AppInput dataClass="person" dataType="sex" />
            <hr className="mb-4" />
            <Button>Reset All</Button>
          </div>
          <div className="aspect-video rounded-xl bg-muted/50 p-6">
            <h2 className="m-2 mb-2">Person</h2>
            <hr className="mb-4" />
            <AppInput />
            <AppInput />
            <AppInput />
            <AppInput />
            <AppInput />
            <hr className="mb-4" />
            <Button>Reset All</Button>
          </div>
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
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </SidebarInset>
  );
}
