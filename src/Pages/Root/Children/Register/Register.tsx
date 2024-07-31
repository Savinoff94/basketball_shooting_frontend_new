import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { RootState } from "../../../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from '../../../../state/store';
import { registerAsync } from '../../../../state/authorisation/authorisationSlice'

const schema = z.object({
    login: z.string().min(3).max(30),
    email: z.string().email().max(30),
    password: z.string().min(6).max(30),
})

type RegisterFormFields = z.infer<typeof schema>

const Register = () => {

    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<RegisterFormFields>({resolver: zodResolver(schema)})
    const dispatch = useDispatch<AppDispatch>();
    const { errors:registrationErrors } = useSelector((state: RootState) => state.authorisation);
    const onSubmit: SubmitHandler<RegisterFormFields> = async (data) => {
        dispatch(registerAsync({login: data.login, email: data.email, password: data.password}))
    }
    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('login')} type="text" placeholder="login"/>
            {errors.login && (<div>{errors.login?.message}</div>)}
            {registrationErrors.login && (<div>{registrationErrors.login[0]}</div>)}
            <input {...register('email')} type="text" placeholder="email"/>
            {errors.email && (<div>{errors.email?.message}</div>)}
            {registrationErrors.email && (<div>{registrationErrors.email[0]}</div>)}
            <input {...register('password')} type="text" placeholder="password"/>
            {errors.password && (<div>{errors.password?.message}</div>)}
            {registrationErrors.password && (<div>{registrationErrors.password[0]}</div>)}
            
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Loding...' : 'Submit'}</button>
            <button type="button" disabled={isSubmitting} onClick={() => reset()}>Reset</button>    
            {errors.root && <div>{errors.root.message}</div>}
            {registrationErrors.message && (<div>{registrationErrors.message[0]}</div>)}
        </form>
    )
}

export default Register;