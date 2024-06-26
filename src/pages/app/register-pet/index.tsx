import registerAPetImg from '@/assets/imgs/register-a-pet.webp'
import { ImageWithLoader } from '@/components/ui/image-with-loader'
import { useScrollTop } from '@/hooks/useScrollTop'
import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'

const RegisterPetForm = lazy(() => import('./register-form'))

export function RegisterPet() {
  useScrollTop()

  return (
    <div className="container flex flex-col gap-6 py-16 lg:flex-row lg:items-center lg:gap-24 lg:py-32">
      <Helmet title="Cadastrar Pet" />

      <div className="flex max-w-md flex-col gap-1">
        <h1 className="text-center text-2xl font-semibold text-primary lg:mb-5 lg:text-left lg:text-5xl">
          Cadastre um pet
        </h1>

        <p className="mb-1 text-balance text-center font-light lg:text-left lg:text-xl">
          Registre e Aumente as Possibilidades de Encontrar seu Amigo
        </p>

        <ImageWithLoader
          src={registerAPetImg}
          alt=""
          className="order-first w-full max-w-[440px] lg:order-none"
        />
      </div>

      <Suspense>
        <RegisterPetForm />
      </Suspense>
    </div>
  )
}
