import SideNavBar from "@/components/sideNavBar";

export default function DashboardLayout({ children }) {
  return (
    <main>
      <div className="flex flex-col h-screen">
        <div className="h-24">
          <SideNavBar />
        </div>
        <div className="h-[calc(100vh - 6rem)]">{children}</div>
      </div>
    </main>
  );
}
