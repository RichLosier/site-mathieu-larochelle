// API utility functions

export interface InquiryData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  clientStatus: string;
  budget: string;
  location: string;
  message: string;
}

export interface NewsletterData {
  email: string;
  name?: string;
}

export async function submitInquiry(data: InquiryData): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const response = await fetch('/api/inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    return {
      success: false,
      error: 'Failed to submit inquiry. Please try again.',
    };
  }
}

export async function subscribeNewsletter(data: NewsletterData): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return {
      success: false,
      error: 'Failed to subscribe. Please try again.',
    };
  }
}

