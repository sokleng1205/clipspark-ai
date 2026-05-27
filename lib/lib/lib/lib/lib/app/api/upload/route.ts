import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const cookieStore = cookies();
    const { data: { user } } = await supabase.auth.getUser(cookieStore);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const formData = await req.formData();
    const file = formData.get("video") as File;
    const fileName = `${user.id}/${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("video-uploads")
      .upload(fileName, file, { cacheControl: "3600", upsert: false });

    if (error) throw error;
    return NextResponse.json({ url: data.path });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
