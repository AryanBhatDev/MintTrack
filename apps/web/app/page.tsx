"use client"

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  if (session.status === "unauthenticated"){
    return <div>
      Not signed in
      <button onClick={()=>signIn()}>Signin</button>
    </div>
  }
  return (
    <div >
      {JSON.stringify(session.data?.user)}
      <button onClick={()=>signOut()}>Sign out</button>
    </div>
  );
}
