import { AppSidebar } from "@/components/customs/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./home.css";
import AppNavBar from "@/components/customs/app-navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="home">
        <AppNavBar />
        {children}
      </div>
    </SidebarProvider>
  );
}
