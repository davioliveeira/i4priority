import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <a
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-laranja text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">I4pro Inc.</span>
          </a>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Home className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Início</span>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">Início</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
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
                  href="#"
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
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Configurações</span>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">Configurações</TooltipContent>
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
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-laranja text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">I4pro Inc</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5 transition-all group-hover:bg-laranja" />
                  Início
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Colaborador
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </a>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <a href="#">Início</a>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <a href="#">Filas</a>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Prioridades Recentes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Pesquisar..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img
                  src="src/assets/placeholder-user.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-verdeclaro font-sans">
                    Gestão de Chamados
                  </CardTitle>
                  <CardDescription className="max-w-lg font-sans text-ellipsis text-wrap leading-relaxed w-full">
                    Aqui você encontrará uma interface simplificada e dinâmica,
                    projetada para proporcionar uma visão abrangente e
                    atualizada dos chamados e das atividades da equipe. Este
                    painel é o seu centro de comando para a gestão eficiente das
                    demandas diárias, permitindo um rápido acesso às tarefas que
                    requerem sua atenção imediata.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="bg-laranja hover:bg-verdeclaro transition-opacity">
                    Criar Chamado
                  </Button>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription className="text-verdeclaro font-medium">
                    Nesse Dia
                  </CardDescription>
                  <CardTitle className="text-5xl">10</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=" text-xs text-muted-foreground">
                    +25% desde o último dia.
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="relative w-full h-4 bg-gray-200 rounded">
                    <div
                      className=" absolute h-4 bg-laranja rounded-l-full"
                      style={{ width: `30%` }}
                      aria-label="25% increase"
                    ></div>
                  </div>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                <CardDescription className="text-verdeclaro font-medium">Nessa Semana</CardDescription>
                  <CardTitle className="text-5xl">87</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% na última semana
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="relative w-full h-4 bg-gray-200 rounded">
                    <div
                      className=" absolute h-4 bg-laranja rounded-l-full"
                      style={{ width: `10%` }}
                      aria-label="25% increase"
                    ></div>
                  </div>
                </CardFooter>
              </Card>
            </div>
            <Tabs defaultValue="week">
              <div className="flex items-center">
              <TabsList className="text-verdeclaro">
                  <TabsTrigger className={(props: { selected?: boolean }) => 
                    props.selected ? 'text-laranja' : 'text-verdeclaro'} 
                    value="day"
                  >
                    Dia
                  </TabsTrigger>
                  <TabsTrigger className={(props: { selected?: boolean }) => 
                    props.selected ? 'text-laranja' : 'text-verdeclaro'} 
                    value="week"
                  >
                    Semana
                  </TabsTrigger>
                  <TabsTrigger className={(props: { selected?: boolean }) => 
                    props.selected ? 'bg-laranja' : 'bg-verdeclaro'} 
                    value="month"
                  >
                    Mês
                  </TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 gap-1 text-sm bg-laranja hover:bg-verdeclaro transition-all"
                      >
                        <ListFilter className="h-3.5 w-3.5 text-white" />
                        <span className="sr-only sm:not-sr-only text-white">Filtrar</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Fulfilled
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Declined
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Refunded
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 gap-1 text-sm bg-laranja hover:bg-verdeclaro transition-all"
                    >
                    <File className="h-3.5 w-3.5 text-white" />
                    <span className="sr-only sm:not-sr-only text-white">Export</span>
                  </Button>
                </div>
              </div>
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle className="font-sans text-verdeclaro">Chamados Pendentes</CardTitle>
                    <CardDescription>
                      Lista de chamados recentes ordenados por prioridade.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="hidden sm:table-cell text-laranja">Responsável</TableHead>
                          <TableHead className="hidden sm:table-cell text-laranja">
                            Tipo
                          </TableHead>
                          <TableHead className="hidden sm:table-cell text-laranja">
                            Status
                          </TableHead>
                          <TableHead className="hidden md:table-cell text-laranja">
                            Data Final
                          </TableHead>
                          <TableHead className="hidden text-[13.1px] md:table-cell text-laranja">
                            N˚ Chamado
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Matheus Nogueira</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                            matheus.silva@i4pro.com.br
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Projeto
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-x" variant="outline">
                              Atrasado
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            01/02/2024
                          </TableCell>
                          <TableCell className="text-right">198765</TableCell>
                        </TableRow>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">Yago Nahas</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                            yago.garcez@i4pro.com.br
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Suporte
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <div className="text-xs text-nowrap">Em Andamento</div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            22/02/2024
                          </TableCell>
                          <TableCell className="text-right">133765</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Hélio Alves</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                            helio.filho@i4pro.com.br
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Melhorias
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Concluído
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            22/02/2024
                          </TableCell>
                          <TableCell className="text-right">156783</TableCell>
                        </TableRow>
                        
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Amanda de Azevedo</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              amanda.azevedo@i4pro.com.br
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Homologação
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <div className="text-xs text-nowrap">Em Andamento</div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            22/02/2024
                          </TableCell>
                          <TableCell className="text-right">195749</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Paulo Rossi</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              paulo.frias@i4pro.com.br
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Suporte
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Concluído
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            05/04/2024
                          </TableCell>
                          <TableCell className="text-right">198765</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Thaís Souza</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                            thais.souza@i4pro.com.br
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Suporte
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="outline">
                              Fechado
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            18/09/2024
                          </TableCell>
                          <TableCell className="text-right">176543</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg text-verdeclaro">
                    Chamado 198765
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copiar Número do WEX</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Data: Fevereiro 01, 2024</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <Truck className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Track Order
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Exportar</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold text-verdeclaro">Detalhes do Chamado</div>
                  <div> Melhorias Financeiro - Ajustar meios de pagamento</div>
                  <Separator className="my-2" />
                  <div className="font-semibold text-verdeclaro">Fase Atual</div>
                  <div>Reprova do cliente, verificar resumo</div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold text-verdeclaro">Responsável do Chamado</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Nome</dt>
                      <dd>Matheus Nogueira</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Email</dt>
                      <dd>
                        <a href="mailto:">matheus.silva@i4pro.com.br</a>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Data de Recebimento</dt>
                      <dd>01/02/2024</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Data de Entrega</dt>
                      <dd>01/03/2024</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Atualizado: <time dateTime="2023-11-23">Fevereiro 19, 2024</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous WEX</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next WEX</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
