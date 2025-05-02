"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const session = useSession();
  const router = useRouter()

  if (session.status === "unauthenticated"){
    return <div>
      Not signed in
      <button onClick={()=>signIn()}>Signin</button>
    </div>
  }
  // if (session.status==="authenticated"){
  //   return router.push("/dashboard")
  // }
  return (
    <div >
      {JSON.stringify(session.data?.user)}
      <button onClick={()=>signOut()}>Sign out</button>
    </div>
  );
}
