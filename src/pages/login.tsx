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
import { supabase } from "@/supabase";
import { redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export async function loader() {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) return redirect('/dashboard')
  return null
}

const errorMessagesI18nMap: Record<string, string> = {
  'Invalid login credentials': 'Credenciais Inválidas',
}

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setError('')
    setStatus('loading')
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (!error) return navigate('/dashboard')
    setStatus('error')
    setError(errorMessagesI18nMap[error.message] ?? 'Algo inesperado aconteceu. Tente novamente')
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
    <div className="flex flex-grow items-center justify-center p-12">
      <div className="w-full max-w-md">
        <Card className="h-fit">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-extrabold text-verdeclaro">
              Login
            </CardTitle>
            <CardDescription className="text-laranja font-extralight">
              I4pro Priority
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit} noValidate>
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
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-verdeclaro">
                    Senha
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-laranja hover:bg-verdeclaro"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? <Spinner /> : 'Entrar'}
                </Button>
                {error && <div className="text-sm text-red-500 text-center w-full">{error}</div>}
              </div>
              <div className="mt-4 text-center text-sm">
                  Não possui uma conta?{" "}
                  <a
                    href="/register"
                    className="underline text-verdeclaro hover:text-laranja"
                  >
                    Inscreva-se
                  </a>
                </div>
            </CardContent>
          </form>
        </Card>
      </div>
    </div>
    {/* Imagem somente visível em telas lg e maiores */}
    <div className="hidden lg:flex lg:flex-1 bg-muted">
      <img
        src="/assets/about.jpeg"
        alt="Image"
        className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
);
}