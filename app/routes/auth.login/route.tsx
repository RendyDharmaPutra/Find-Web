import { ActionFunctionArgs } from "@remix-run/node";
import { AuthPage } from "~/features/auth/components/layout/auth_page";
import { LoginForm } from "~/features/auth/components/login/login_form";

export default function Login() {
  return (
    <AuthPage
      title="Halaman Login"
      route="register"
      question="Belum punya akun"
      text="Daftar di sini"
    >
      <LoginForm />
    </AuthPage>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();

  console.log(body);

  return null;
}
