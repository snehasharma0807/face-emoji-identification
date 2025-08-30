import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Check if environment variables are properly configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || 
        process.env.NEXT_PUBLIC_SUPABASE_URL === 'your_supabase_project_url') {
      return NextResponse.json({ 
        message: 'Supabase not configured - please set environment variables',
        status: 'unconfigured',
        timestamp: new Date().toISOString()
      })
    }

    // Example: Fetch data from a table
    // const supabase = createServerClient()
    // const { data, error } = await supabase
    //   .from('your_table')
    //   .select('*')
    //   .limit(10)
    
    // For now, just return a success message
    return NextResponse.json({ 
      message: 'Supabase connection successful',
      status: 'connected',
      timestamp: new Date().toISOString()
    })
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
