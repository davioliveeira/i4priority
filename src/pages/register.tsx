import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterPage() {
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <Card className="mx-auto max-w-sm">
              <CardHeader>
                <CardTitle className="text-xl text-verdeclaro">
                  Registre-se
                </CardTitle>
                <CardDescription className="text-laranja">
                  Insira suas informações para criar uma conta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label
                        htmlFor="first-name"
                        className="text-xs text-verdeclaro"
                      >
                        Nome
                      </Label>
                      <Input id="first-name" placeholder="Rafael" required />
                    </div>
                    <div className="grid gap-2">
                      <Label
                        htmlFor="last-name"
                        className="text-xs text-verdeclaro"
                      >
                        Sobrenome
                      </Label>
                      <Input id="last-name" placeholder="Inácio" required />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-xs text-verdeclaro">
                      Email Corporativo
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seuemail@i4pro.com.br"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="password"
                      className="text-xs text-verdeclaro"
                    >
                      Senha
                    </Label>
                    <Input id="password" type="password" />
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="password"
                      className="text-xs text-verdeclaro"
                    >
                      Confirmar Senha
                    </Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-laranja hover:bg-verdeclaro"
                  >
                    Criar Conta
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Já possui uma conta?{" "}
                  <a
                    href="#"
                    className="underline text-verdeclaro hover:text-laranja"
                  >
                    Entrar
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src="./src/assets/about.jpeg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
}
