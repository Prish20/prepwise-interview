"use server"

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7;

export async function signUp(params: SignUpParams) {
    const { email, name, uid } = params;

    try {
        const userRecord = await db.collection("users").doc(uid).get();
        if (userRecord.exists) {
            return {
                success: false,
                message: "User already exists. Please sign in."
            };
        }

        await db.collection("users").doc(uid).set({
            email,
            name,
        });
        return {
            success: true,
            message: "Account created successfully. Please sign in.",
        }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        console.log("Error signing up:", e);

        if (e.code === "auth/email-already-exists") {
            return {
                success: false,
                message: "This email is already in use.",

            }

        }
        return {
            success: false,
            message: "An error occurred while signing up. Please try again later.",
        }
    }
};

export async function signIn(params: SignInParams) {
    const { email, idToken } = params;
    try {
        const userRecord = await auth.getUserByEmail(email);
        if (!userRecord) {
            return {
                success: false,
                message: "User not found. Please sign up.",
            };
        }

        await setSessionCookie(idToken);
        return {
            success: true,
            message: "Signed in successfully.",
        };

    } catch (e) {
        console.log(e)
        return {
            success: false,
            message: "An error occurred while signing in. Please try again later.",
        }
    }
}

export async function setSessionCookie(idToken: string) {
    const cookieStore = await cookies();
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn: ONE_WEEK * 1000 });
    cookieStore.set("session", sessionCookie, {
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax",
    });
};

export async function getCurrentUser() : Promise<User | null> {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session")?.value || null;
    if (!sessionCookie) return null;

    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
        const userRecord = await db.collection("users").doc(decodedClaims.uid).get();
        if (!userRecord.exists) return null;
        return {
            ...userRecord.data(),
            id: userRecord.id,
        } as User;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function isAuthenticated() {
    const user = await getCurrentUser();
    return !!user;
}
