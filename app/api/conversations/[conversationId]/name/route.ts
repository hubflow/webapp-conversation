import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { client, getInfo } from '@/app/api/utils/common'
import { NextApiRequest, NextApiResponse } from 'next'
import { API_KEY } from '@/config'



export async function POST(request: NextRequest, { params }: {
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

export async function DELETE(request: NextRequest, { params }: {
  params: { conversationId: string }
}) {
  const { conversationId } = params
  const { user } = getInfo(request)
  const apiKey = API_KEY 
  console.log({apiKey,user})
  // Prepare the URL by replacing the placeholder with the actual conversation ID
  const url = `https://api.dify.ai/v1/conversations/${conversationId}`

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user // Assuming `user.id` contains the user identifier like "abc-123"
      })
    });

    if (!response.ok) {
      // Handle response errors
      console.error('Failed to delete conversation:', await response.text());
      return new NextResponse('Error deleting conversation', { status: response.status });
    }

    // If the deletion was successful
    return new NextResponse(null, { status: 204 }); // 204 No Content
  } catch (error) {
    console.error('Error deleting conversation:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}