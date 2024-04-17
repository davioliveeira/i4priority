import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function LoginPage() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <Card className="mx-auto max-w-sm w-96 h-fit">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-extrabold font-gelion text-verdeclaro">
                Login
              </CardTitle>
              <CardDescription className="text-laranja font-extralight font-gelion">
                I4pro Priority
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-verdeclaro">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seuemail@i4pro.com.br"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password" className="text-verdeclaro">
                      Senha
                    </Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-laranja hover:bg-verdeclaro"
                >
                  Entrar
                </Button>
                <Button variant="outline" className="w-full hover:border-verdeclaro hover:text-verdeclaro text-laranja font-sans border-laranja">
                  Login com Google
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Não possui uma conta?{" "}
                <a href="/register" className="underline text-verdeclaro hover:text-laranja">
                  Inscreva-se
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
  );
}

