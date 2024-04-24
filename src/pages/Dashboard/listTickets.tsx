import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/supabase";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

//@ts-expect-error
export async function loader({ request }: LoaderFunctionArgs) {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", session.user.id);
    if (error) throw new Error(error.message);
    return data;
  }
  return null;
}

const data: Ticket[] = [
  {
    id: "1",
    ticketNumber: 198453,
    status: "Em Andamento",
    responsible: "Matheus Nogueira",
    type: "Projeto",
    initialDate: "01/02/2024",
    finalDate: "01/03/2024",
  },
  {
    id: "2",
    ticketNumber: 198453,
    status: "Em Andamento",
    responsible: "Yago Nahas",
    type: "Suporte",
    initialDate: "01/02/2024",
    finalDate: "22/02/2024",
  },
  {
    id: "3",
    ticketNumber: 198453,
    status: "Concluído",
    responsible: "Hélio Alves",
    type: "Suporte",
    initialDate: "01/04/2024",
    finalDate: "14/04/2024",
  },
  {
    id: "4",
    ticketNumber: 198453,
    status: "Concluído",
    responsible: "Amanda de Azevedo",
    type: "Homologação",
    initialDate: "10/04/2024",
    finalDate: "16/04/2024",
  },
  {
    id: "4",
    ticketNumber: 198453,
    status: "Concluído",
    responsible: "Paulo Rossi",
    type: "Suporte",
    initialDate: "11/04/2024",
    finalDate: "22/04/2024",
  },
  {
    id: "5",
    ticketNumber: 198453,
    status: "Concluído",
    responsible: "Thaís Souza",
    type: "Suporte",
    initialDate: "11/04/2024",
    finalDate: "22/04/2024",
  },
];

const columns: (ColumnDef<Ticket> & { headerText?: string })[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    headerText: "Select All", // Texto adicional para usar no Select
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "status",
    accessorKey: "status",
    header: () => <div className="text-verdeclaro">Status</div>,
    headerText: "Status", // Texto adicional para usar no Select
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    id: "responsible",
    accessorKey: "responsible",
    header: () => <div className="text-verdeclaro">Responsável</div>,
    headerText: "Responsável", // Texto adicional para usar no Select
    cell: ({ row }) => <div>{row.getValue("responsible")}</div>,
  },
  {
    id: "type",
    accessorKey: "type",
    header: () => <div className="text-verdeclaro">Tipo</div>,
    headerText: "Tipo", // Texto adicional para usar no Select
    cell: ({ row }) => <div>{row.getValue("type")}</div>,
  },
  {
    id: "initialDate",
    accessorKey: "initialDate",
    header: () => <div className="text-verdeclaro">Data Inicial</div>,
    headerText: "Data Inicial", // Texto adicional para usar no Select
    cell: ({ row }) => <div>{row.getValue("initialDate")}</div>,
  },
  {
    id: "finalDate",
    accessorKey: "finalDate",
    header: () => <div className="text-verdeclaro">Data Final</div>,
    headerText: "Data Final", // Texto adicional para usar no Select
    cell: ({ row }) => <div>{row.getValue("finalDate")}</div>,
  },
  {
    id: "ticketNumber",
    accessorKey: "ticketNumber",
    header: () => <div className="text-verdeclaro">Nº do Chamado</div>,
    headerText: "Nº do Chamado", // Texto adicional para usar no Select
    cell: ({ row }) => <div>{row.getValue("ticketNumber")}</div>,
  },
  {
    id: "actions",
    header: () => <div className="text-verdeclaro">Ações</div>,
    headerText: "Ações", // Texto adicional para usar no Select
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];

export type Ticket = {
  id: string;
  ticketNumber: number;
  status: "Em Andamento" | "Concluído";
  responsible: string;
  type: "Projeto" | "Suporte" | "Homologação" | "Melhorias";
  initialDate: string;
  finalDate: string;
};

export default function ListTicketPage() {
  const info = useLoaderData() as any;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [selectedColumn, setSelectedColumn] = useState<string>("status"); // Iniciar com uma coluna válida
  const [selectedColumnHeaderText, setSelectedColumnHeaderText] = useState("Status");
  const [filterValue, setFilterValue] = useState<string>("");
  const [rowSelection, setRowSelection] = useState({}); // Adicione esta linha
  useEffect(() => {
    console.log("Selected column updated to:", selectedColumn);
    // Aplica o filtro com o novo valor de coluna selecionada
    setColumnFilters([{ id: selectedColumn.trim(), value: filterValue }]);
  }, [selectedColumn]);

  const handleSelectChange = (columnId: string) => {
    console.log("Attempting to change column to:", columnId);
    setSelectedColumn(prev => {
      if (prev === columnId) {
        console.log("Same column selected, forcing update");
        return columnId + ' '; // pequena alteração para forçar a re-renderização
      }
      return columnId;
    });
  
    // Encontrar o texto do cabeçalho para o ID da coluna selecionada
    const column = columns.find(c => c.id === columnId);
    if (column) {
      setSelectedColumnHeaderText(column.headerText || "Unnamed Column");
    } else {
      setSelectedColumnHeaderText("Select a column"); // Se não encontrar, usar um placeholder genérico
    }
  };

  const handleFilterChange = (value: string) => {
    console.log("Filtering by:", selectedColumn, "with value:", value);
    setFilterValue(value);
    setColumnFilters([{ id: selectedColumn, value }]);
  };

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  
        
  return (
    <div className="w-full">
      <Card className="w-full justify-center">
        <CardHeader className="px-7">
          <CardTitle className="text-verdeclaro">
            Minha Lista de Prioridade
          </CardTitle>
          <CardDescription>
            Olá
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <div className="flex items-center py-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-laranja text-laranja hover:text-verdeclaro hover:border-verdeclaro"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {columns.map((column) => (
                    <DropdownMenuItem
                      key={column.id}
                      onSelect={() => handleSelectChange(column.id || "")}
                    >
                      {column.headerText || "Unnamed Column"}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Input
                placeholder={`Filtrando por ${selectedColumnHeaderText}...`}
                value={filterValue}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="max-w-sm ml-4 border-laranja focus:border-verdeclaro focus:placeholder:text-verdeclaro text-verdeclaro placeholder:text-laranja"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="ml-auto border-laranja text-laranja hover:text-verdeclaro hover:border-verdeclaro"
                  >
                    Filtro de Coluna <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                           {column.id}
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="rounded-md border border-verdeclaro">
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
              <div className="flex-1 text-sm text-muted-foreground text-verdeclaro">
                {table.getFilteredSelectedRowModel().rows.length} de{" "}
                {table.getFilteredRowModel().rows.length} linha(s)
                selecionada(s).
              </div>
              <div className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className="text-laranja border-laranja hover:text-verdeclaro hover:border-verdeclaro"
                >
                  Anterior
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className="text-laranja border-laranja hover:text-verdeclaro hover:border-verdeclaro"
                >
                  Próximo
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
