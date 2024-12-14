'use server'
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(code:string) {
  // Verify credentials && get the user
  const user = { code: code };
  console.log("code: ", user)
  if(user.code !== process.env.PASSWORD){
    cookies().set("session", "", { expires: new Date(0) });
    return { success: false, message: 'login unsuccessful' }
  } else {

      // Create the session
      const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const session = await encrypt({ user, expires });
      
      cookies().set("session", session, { expires, httpOnly: true });
      return { success: true, message: 'login successful' }
    }
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
    console.log("update called")
    try {
      const session = request.cookies.get("session")?.value;
      if (!session) return NextResponse.next();
  
      const parsed = await decrypt(session);
      
      // Check if session is expired
      if (new Date(parsed.expires) < new Date() || parsed.user.code !== process.env.PASSWORD ) {
        const res = NextResponse.next();
        res.cookies.set({
          name: "session",
          value: "",
          expires: new Date(0),
        });
        return res;
      }
  
      parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
      const res = NextResponse.next();
      res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'lax',
      });
      return res;
    } catch (error) {
      
      console.log("error: ", error)
      const res = NextResponse.next();
      res.cookies.set({
        name: "session",
        value: "",
        expires: new Date(0),
      });
      return res;
    }
  }