import {
  ChevronLeft,
  ChevronRight,
  Copy,
  File,
  ListFilter,
  MoreVertical,
  SquareKanban
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardMainPage(){
  return(
    <>
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
                  <TabsTrigger value="day" className="text-white"
                  >
                    Dia
                  </TabsTrigger>
                  <TabsTrigger value="week"  className="text-white"
                  >
                    Semana
                  </TabsTrigger>
                  <TabsTrigger value="month" className="text-white"
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
                        <span className="sr-only sm:not-sr-only text-white">Filtros</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel className="text-verdeclaro">Ordenar por</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem>
                        Responsável
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem checked>
                        Tipo
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Status
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Data Final
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        N˚ Chamado
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 gap-1 text-sm bg-laranja hover:bg-verdeclaro transition-all"
                    >
                    <File className="h-3.5 w-3.5 text-white" />
                    <span className="sr-only sm:not-sr-only text-white">Exportar</span>
                  </Button>
                </div>
                </div>
                <TabsContent value="day">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle className="font-sans text-verdeclaro">Chamados Pendentes - Dia</CardTitle>
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
                          <TableHead className="hidden text-[12px] md:table-cell text-laranja">
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
                <TabsContent value="week">
                  <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="px-7">
                      <CardTitle className="font-sans text-verdeclaro">Chamados Pendentes - Semana</CardTitle>
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
                            <TableHead className="hidden text-[12px] md:table-cell text-laranja">
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
                <TabsContent value="month">
                  <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="px-7">
                      <CardTitle className="font-sans text-verdeclaro">Chamados Pendentes - Mês</CardTitle>
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
                            <TableHead className="hidden text-[12px] md:table-cell text-laranja">
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
            <Card className="overflow-hidden mt-9" x-chunk="dashboard-05-chunk-4">
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
                <div className="ml-auto flex items-center gap-1 ">
                  <Button size="sm" variant="outline" className="h-8 gap-1 border-laranja hover:border-verdeclaro">
                    <SquareKanban className="h-3.5 w-3.5 text-laranja hover:text-verdeclaro" />
                    <span className="hover:text-verdeclaro lg:sr-only xl:not-sr-only xl:whitespace-nowrap text-laranja">
                      Copiar Chamado
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 gap-1 border-laranja hover:border-verdeclaro">
                        <MoreVertical className="h-3.5 w-3.5 text-laranja hover:text-verdeclaro" />
                        <span className="sr-only">Mais</span>
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
                      <Button size="icon" variant="outline" className="h-6 w-6 border-laranja hover:border-verdeclaro">
                        <ChevronLeft className="h-3.5 w-3.5 text-laranja hover:text-verdeclaro" />
                        <span className="sr-only">Previous WEX</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6 border-laranja hover:border-verdeclaro">
                        <ChevronRight className="h-3.5 w-3.5 text-laranja hover:text-verdeclaro" />
                        <span className="sr-only">Next WEX</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
          </div>
          </>
  )
}

