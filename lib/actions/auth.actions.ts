"use server";

import { headers } from "next/headers";
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

export const signOut = async () => {
  try {
    const response = await auth.api.signOut({ headers: await headers() });
    return { success: true, response }
  } catch (e) {
    console.log("Sign out failed", e);
    return { success: false, error: "Sign out failed" }
  }
}

export const signInWithEmail = async (data: SignInFormData) => {
  try {
    const response = await auth.api.signInEmail({ body: { email: data.email, password: data.password }})

    return { success: true, data: response }
  } catch (e) {
    console.log("Sign in failed", e);
    return { success: false, error: "Sign in failed" }
  }
}