import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { client, getInfo } from '@/app/api/utils/common'
import { NextApiRequest, NextApiResponse } from 'next'
import { API_KEY } from '@/config'



export async function PATCH(request: NextRequest, { params }: {
  params: { conversationId: string }
}) {
   const body = await request.json()
  const {
    auto_generate,
    name,
  } = body
  const { conversationId } = params
  const { user } = getInfo(request)

  // auto generate name
  const { data } = await client.renameConversation(conversationId, name, user, auto_generate)
  return NextResponse.json(data)
}