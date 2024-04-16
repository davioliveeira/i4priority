import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold font-gelion  text-verdeclaro">Login</h1>
            <p className="text-balance text-muted-foreground font-semibold  text-laranja">
              I4Pro Priority
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-verdeclaro">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seuemail@i4pro.com.br"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-verdeclaro">Senha</Label>
                {/* <a
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Esqueceu sua senha?
                </a> */}
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full bg-laranja">
              Entrar
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Não possui uma conta?{" "}
            <a href="#" className="underline text-verdeclaro">
              Inscreva-se
            </a>
          </div>
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
