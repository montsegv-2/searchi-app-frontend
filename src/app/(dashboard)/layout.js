import Mapa from "@/components/mapa";
import SideNavBar from "@/components/sideNavBar";

export default function DashboardLayout({ children }) {
  return (
    <main className="flex">
      <SideNavBar />

      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10 gap-4">
        {/* BUSINESS LIST */}
        <div>{children}</div>
        {/* GOOGLE MAP */}
        <div>
          <Mapa />
        </div>
      </div>
    </main>
  );
}
