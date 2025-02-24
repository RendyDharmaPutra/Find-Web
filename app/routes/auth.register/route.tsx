import { ActionFunctionArgs, json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { AuthPage } from "~/features/auth/components/layout/auth_page";
import { RegisterForm } from "~/features/auth/components/register/register_form";
import { getRegisterData } from "~/features/auth/hooks/get_register_data";
import { postAuth } from "~/features/auth/utils/post_auth";
import { RegisterSchema } from "~/features/auth/utils/validation/register_validation";

export default function Register() {
  const errors = useActionData<typeof action>();

  return (
    <AuthPage
      title="Halaman Registrasi"
      route="login"
      question="Sudah punya akun"
      text="Login di sini"
    >
      <RegisterForm errors={errors} />
    </AuthPage>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();

  const data = getRegisterData(body);

  const validate = RegisterSchema.safeParse(data);

  if (!validate.success) {
    return json(validate.error.flatten().fieldErrors, { status: 400 });
  }

  const response = await postAuth("register", data);

  console.log(response);

  return null;
}
