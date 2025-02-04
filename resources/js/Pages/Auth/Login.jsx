import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout title='Login'>
            <div className="h-screen flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Card>
                        <CardHeader>
                            <Link href="/" className="text-4xl font-black leading-relaxed tracking-tighter">
                                Taskara<span className="text-red-500">.</span>
                            </Link>
                            <h2 className="text-lg font-medium leading-relaxed tracking-tight text-left text-muted-foreground">
                                Sign in to your account
                            </h2>
                        </CardHeader>
                        <CardContent>

                            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                                {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}
                                <form className="space-y-6" onSubmit={submit}>
                                    {/* form */}
                                    <div>
                                        <InputLabel htmlFor="email" value="Email" />
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className={`mt-1 block w-full text-black ${errors.email ? 'border-red-500' : ''}`}
                                            autoComplete="email"
                                            isFocused={true}
                                            onChange={(e) => setData('email', e.target.value)}
                                        />
                                        <InputError message={errors.email} className="mt-2 text-red-500" />
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <InputLabel htmlFor="password" value="Password" />

                                            {canResetPassword && (
                                                <Link
                                                    href={route('password.request')}
                                                    className="text-sm text-red-500 hover:text-red-600"
                                                >
                                                    Forgot your password?
                                                </Link>
                                            )}
                                        </div>

                                        <TextInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className={`mt-1 block w-full text-black ${errors.password ? 'border-red-500' : ''}`}
                                            autoComplete="new-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                        />
                                        <InputError message={errors.password} className="mt-2 text-red-500" />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Checkbox
                                                id="remember_me"
                                                name="remember_me"
                                                checked={data.remember}
                                                onChange={(e) => setData('remember', e.target.checked)}
                                            />
                                            <label
                                                htmlFor="remember_me"
                                                className="ml-2 block text-sm text-gray-900"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <Button
                                            type="submit"
                                            className="w-full bg-red-500 hover:bg-red-600"
                                            disabled={processing}
                                        >
                                            Log in
                                        </Button>
                                    </div>
                                </form>

                                <p className="mt-10 text-sm text-center text-muted-foreground">
                                    Not a member?{' '}
                                    <Link
                                        href={route('register')}
                                        className="font-semibold leading-6 text-red-500 hover:text-red-600"
                                    >
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </GuestLayout>
    );
}
