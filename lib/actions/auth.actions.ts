"use server";

import { auth } from "../better-auth/auth";

export const SignUpWithEmail = async (data: SignUpFormData) => {
  try {
    const response = await auth.api.signUpEmail({
      body: { email: data.email, password: data.password, name: data.fullName },
    });

    return { success: true, response };
  } catch (e) {
    console.log("Sign up failed", e);
    return { success: false, error: "Sign up failed" };
  }
};
