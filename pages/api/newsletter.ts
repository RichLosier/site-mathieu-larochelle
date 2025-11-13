import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  message?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;
    
    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address',
      });
    }
    
    // Here you would typically:
    // 1. Save to database (e.g., Supabase, MongoDB)
    // 2. Add to email marketing service (e.g., Mailchimp, SendGrid)
    // 3. Send confirmation email
    
    console.log('Newsletter subscription:', { email, name });
    
    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
    });
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to process subscription',
    });
  }
}

