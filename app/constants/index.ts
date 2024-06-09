"use client";

import { changeRole } from "@/redux/slices/roleSlice";
import { useSession, useUser } from "@clerk/nextjs";
import { useDispatch } from 'react-redux';


export async function UserDetails() {
  const dispatch = useDispatch();
  const { user } = useUser();
  const { session } = useSession();

    if (!user || !session) return null;
  dispatch(changeRole(user?.publicMetadata?.role as string));

  return { user, session };
}
