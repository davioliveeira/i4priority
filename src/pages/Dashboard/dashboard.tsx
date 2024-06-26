import {
  LineChart,
  Users2,
  Tag,
  Gauge,
  PanelLeft,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { LoaderFunctionArgs, Outlet, redirect, Form } from "react-router-dom";
import { supabase } from "@/supabase";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

//@ts-ignore
export async function loader({ request }: LoaderFunctionArgs) {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", session.user.id);
    console.log(data);
    if (error) throw new Error(error.message);
    const role = data[0].role;
    if (role === "user") return redirect("/dashboard/lista-chamados");
    return null;
  }
  return redirect("/login");
}

export async function handleLogout() {
  console.log("entrou");
  const { error } = await supabase.auth.signOut();
  if (!error) redirect("/login");
  return null;
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <a
            href="/dashboard"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-laranja text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Tag className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">I4pro Inc.</span>
          </a>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="/dashboard/lista-chamados"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">Indicadores</span>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">Indicadores</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="/dashboard/manager-team"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Time</span>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">Time</TooltipContent>
            </Tooltip>
            
          </TooltipProvider>
          
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Form method="post">
                <Button
                variant="outline"
                size="icon"
                className="border-none text-laranja hover:text-verdeclaro"
                onClick={handleLogout}
                >
                  <LogOut/>
                </Button>
                </Form>
              </TooltipTrigger>
              <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-xs">
              
              <nav className="grid gap-6 text-lg font-medium">
                <a
                  href="/dashboard"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-laranja text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Tag className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">I4pro Inc</span>
                </a>
                <a
                  href="/dashboard"
                  className="flex items-center gap-4 px-2.5 text-foreground hover:text-foreground"
                >
                  <Gauge className="h-5 w-5 transition-all group-hover:bg-laranja" />
                  Dashboard
                </a>
                <a
                  href="/dashboard/lista-chamados"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Indicadores
                </a>
                <a
                  href="/dashboard/manager-team"
                  className="flex items-center gap-4 px-2.5 text-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Time
                </a>
              
              </nav>
              <Form method="post">
              <Button
                variant="outline"
                size="lg"
                className=" w-full bg-laranja text-white hover:text-white hover:bg-verdeclaro text-lg align-bottom mt-[650px] "
                onClick={handleLogout}
                >
                  Sair
                </Button>
                </Form>
            </SheetContent>
          </Sheet>
          
        </header>

        <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

{/* <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 justify-end">
          <div>
          <Form method="post">
            <Button
            type="submit"
              size="sm"
              variant="outline"
              className=" text-white bg-laranja hover:bg-verdeclaro hover:text-white"
              onClick={handleLogout}
            >
              Sair
            </Button>
          </Form>
          </div> */}