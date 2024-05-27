import SideNavBar from "@/components/sideNavBar";

export default function DashboardLayout({ children }) {
  return (
    <main className="flex">
      <SideNavBar />

      <div className="w-full">
        <div>{children}</div>
      </div>
    </main>
  );
}
