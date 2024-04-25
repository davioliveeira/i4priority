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
import {
  LoaderFunctionArgs,
  redirect,
  useNavigate,
} from 'react-router-dom'
import { supabase } from '../supabase'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export async function loader({  }: LoaderFunctionArgs) {
  const { data: { session } } = await supabase.auth.getSession();
  return session ? redirect('/') : null;
}

const emailDomain = '@i4pro.com.br';
const registerSchema = z
  .object({
    name: z.string().min(1, 'Nome é obrigatório.'),
    lastName: z.string().min(1, 'Sobrenome é obrigatório.'),
    email: z
      .string()
      .min(1, 'Email é obrigatório.')
      .email('Por favor, preencha um endereço de e-mail válido.')
      .regex(new RegExp(`^[^@\\s]+@i4pro\\.com\\.br$`), `O e-mail deve ser do domínio ${emailDomain}.`),
    password: z.string().min(8, 'Senha deve conter pelo menos 8 caracteres'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas devem ser iguais.',
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
  })
  console.log(errors)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    setStatus('loading')
    const { confirmPassword: _, email, password } = formData
    const { error } = await supabase.auth.signUp({
      email,
      password,
      })
    console.log(error)
    if (error) return setStatus('error')
    navigate(`/login`)
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle className="text-xl text-verdeclaro">
            Registre-se
          </CardTitle>
          <CardDescription className="text-laranja">
            Insira suas informações para criar uma conta
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="md:flex md:space-x-4">
                <div className="flex-1">
                  <Label htmlFor="first-name" className="text-xs text-verdeclaro">
                    Nome
                  </Label>
                  <Input id="first-name" placeholder="Rafael" autoComplete="given-name" {...register('name')} />
                  <span className="text-xs text-red-500">{errors.name?.message}</span>
                </div>
                <div className="flex-1">
                  <Label htmlFor="last-name" className="text-xs text-verdeclaro">
                    Sobrenome
                  </Label>
                  <Input id="last-name" placeholder="Inácio" autoComplete="family-name" {...register('lastName')} />
                  <span className="text-xs text-red-500">{errors.lastName?.message}</span>
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-xs text-verdeclaro">
                  Email Corporativo
                </Label>
                <Input id="email" type="email" placeholder="seuemail@i4pro.com.br" {...register('email')} />
              </div>
              <div>
                <Label htmlFor="password" className="text-xs text-verdeclaro">
                  Senha
                </Label>
                <Input id="password" type="password" placeholder="Senha" {...register('password')} />
                <span className="text-xs text-red-500">{errors.password?.message}</span>
              </div>
              <div>
                <Label htmlFor="confirmPassword" className="text-xs text-verdeclaro">
                  Confirmar Senha
                </Label>
                <Input id="confirmPassword" type="password" placeholder="Confirme Senha" {...register('confirmPassword')} />
                <span className="text-xs text-red-500">{errors.confirmPassword?.message}</span>
              </div>
              <Button type="submit" className="w-full bg-laranja hover:bg-verdeclaro" disabled={status === 'loading'}>
                {status === 'loading' ? <Spinner /> : 'Criar conta'}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
                  Já possui uma conta?{" "}
                  <a
                    href="/login"
                    className="underline text-verdeclaro hover:text-laranja"
                  >
                    Entrar
                  </a>
                </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}