import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
   SidebarMenuButton,
  SidebarMenuItem,
    SidebarHeader,
    SidebarMenuAction,
} from "@/components/ui/sidebar"
import { File, Home, PenTool, Plus } from "lucide-react"

import Link from "next/link"
const basicMenuItems = [
    {
        title: "Blogs", icon: File, URL: "/blogs"
    },
    {
        title: "Draft", icon: PenTool, URL: "/drafts"
    }
]
export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup >
                    {/* {basicMenuItems.map((item) => (
            <Link key={item.title} href={item.URL}>
              <div className="flex items-center gap-2 p-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <item.icon className="size-4" />
                <span>{item.title}</span>
              </div>
            </Link>
          ))} */}
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="#">
                                <Home />
                                <span>Home</span>
                            </a>
                            </SidebarMenuButton>
                            <SidebarMenuButton asChild>
                            <a href="#">
                                <File />
                                <span>Blogs</span>
                            </a>
                            </SidebarMenuButton>
                
                        <SidebarMenuAction>
                            <Plus /> <span className="sr-only">Add Project</span>
                        </SidebarMenuAction>
                    </SidebarMenuItem>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}