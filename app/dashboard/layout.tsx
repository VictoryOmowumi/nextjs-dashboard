import SideNav from "../ui/dashboard/sidenav"
import { inter } from "../ui/fonts"
export default function DashboardLayout({ children}: { children: React.ReactNode}) {
    return(
        <div className={`flex h-screen flex-col md:flex-row md:overflow-hidden ${inter.className} antialiased`}>
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="grow p-6 md:overscroll-y-auto md:p-12">
                {children}
            </div>
        </div>
    )
}