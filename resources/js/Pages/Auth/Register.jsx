import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout title="Register">
            <div className="flex h-screen min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Card>
                        <CardHeader>
                            <Link href="/" className="text-4xl font-black leading-relaxed tracking-tighter">
                                Taskara<span className="text-red-500">.</span>
                            </Link>
                            <h2 className="text-left text-lg font-medium leading-9 tracking-tight text-muted-foreground">
                                Create your account
                            </h2>
                        </CardHeader>
                        <CardContent>
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <form className="space-y-6" onSubmit={submit}>
                                    {/* form */}
                                    <div>
                                        <InputLabel htmlFor="name" value="Name" />
                                        <TextInput
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            className={`mt-1 block w-full text-black ${errors.name ? 'border-red-500' : ''}`}
                                            autoComplete="name"
                                            isFocused={true}
                                            onChange={(e) => setData('name', e.target.value)}
                                        />
                                        <InputError message={errors.name} className="mt-2 text-red-500" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="email" value="Email" />
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className={`mt-1 block w-full text-black ${errors.email ? 'border-red-500' : ''}`}
                                            autoComplete="username"
                                            onChange={(e) => setData('email', e.target.value)}
                                        />
                                        <InputError message={errors.email} className="mt-2 text-red-500" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="password" value="Password" />
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

                                    <div>
                                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                                        <TextInput
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className={`mt-1 block w-full text-black ${errors.password_confirmation ? 'border-red-500' : ''}`}
                                            autoComplete="new-password"
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                        />
                                        <InputError
                                            message={errors.password_confirmation}
                                            className="mt-2 text-red-500"
                                        />
                                    </div>

                                    <div>
                                        <Button
                                            type="submit"
                                            className="w-full bg-red-500 hover:bg-red-600"
                                            disabled={processing}
                                        >
                                            Register
                                        </Button>
                                    </div>
                                </form>

                                <p className="mt-10 text-center text-sm text-muted-foreground">
                                    Your member?{' '}
                                    <Link
                                        href={route('login')}
                                        className="font-semibold leading-6 text-red-500 hover:text-red-600"
                                    >
                                        Login
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
