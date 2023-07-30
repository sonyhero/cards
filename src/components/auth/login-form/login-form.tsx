import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { ControlledCheckbox } from '../../ui/controlled/controlled-checkBox'
import { ControlledTextField } from '../../ui/controlled/controlled-textField'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  rememberMe: z.boolean().default(false),
})

type LoginFormSchema = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormSchema) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <ControlledTextField
        errorMessage={errors.email?.message}
        name={'email'}
        label={'Email'}
        control={control}
      />
      <ControlledTextField
        errorMessage={errors.email?.message}
        name={'password'}
        label={'Password'}
        type={'password'}
        control={control}
      />
      <ControlledCheckbox
        variant={'withText'}
        label={'remember me'}
        control={control}
        name={'rememberMe'}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
