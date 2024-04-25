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
                      onChange={(event) => setEmail(event.currentTarget.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password" className="text-verdeclaro">
                        Senha
                      </Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Senha"
                      value={password}
                      onChange={(event) => setPassword(event.currentTarget.value)}
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
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="/assets/about.jpeg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
