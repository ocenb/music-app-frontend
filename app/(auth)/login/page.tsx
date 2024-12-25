import Login from './Login';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Login'
};

export default function LoginPage() {
	return <Login></Login>;
}
