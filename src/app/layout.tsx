import ThemeProvider from "@/theme/theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

            <SidebarProvider>
              <AppSidebar />
              <main className="grid grid-cols-12 pr-3 gap-4 w-full  h-screen">
                <SidebarTrigger  />

                {/* <section className="col-span-8  bg-amber-500 px-2 max-w-[1524px] mx-auto  md:w-full lg:-mx-[70px] rounded-md shadow"> */}
                <section className="col-span-8 px-2 md:w-full bg-amber-500 rounded-md shadow">
                {children}
                 </section>

                {/* Ad Section */}
                <aside className="col-span-3 hidden md:block p-4 border-2 border-dotted border-b-black dark:border-b-gray-400 shadow-md dark:shadow-md">
                  <h2 className="text-lg font-bold">Ads</h2>
                  <p>Sponsored content</p>
                </aside>
              </main>
            </SidebarProvider>

        </ThemeProvider>
      </body>
    </html>
  );
}
