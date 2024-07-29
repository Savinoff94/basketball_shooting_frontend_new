import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    login: z.string().min(3).max(30),
    email: z.string().email().max(30),
    password: z.string().min(6).max(30),
})

type RegisterFormFields = z.infer<typeof schema>

const Register = () => {

    const {register, handleSubmit, reset, setError, formState: {errors, isSubmitting}} = useForm<RegisterFormFields>({resolver: zodResolver(schema)})

    const onSubmit: SubmitHandler<RegisterFormFields> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(data);
        } catch (error) {
            setError("root", {
              message: "This email is already taken",
            });
        }
    }
    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('login')} type="text" placeholder="login"/>
            {
                errors.login && (<div>{errors.login?.message}</div>)
            }
            <input {...register('email')} type="text" placeholder="email"/>
            {
                errors.email && (<div>{errors.email?.message}</div>)
            }
            <input {...register('password')} type="text" placeholder="password"/>
            {
                errors.password && (<div>{errors.password?.message}</div>)
            }
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Loding...' : 'Submit'}</button>
            <button type="button" disabled={isSubmitting} onClick={() => reset()}>Reset</button>
            {
                errors.root && <div>{errors.root.message}</div>
            }
        </form>
    )
}

export default Register;