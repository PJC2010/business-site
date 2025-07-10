import { Resend } from 'resend';

// Instantiate Resend with the API key from your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Parse the request body to get the form data
    const { name, email, subject, message } = await request.json();

    // Use Resend to send the email
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // A default address from Resend
      to: ['castillop92@gmail.com'], // The email address where you want to receive messages
      subject: `New Message from ${name}: ${subject}`,
      react: ( // You can use JSX to format the email
        <>
          <h1>New message from your portfolio site!</h1>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>{message}</p>
        </>
      ),
    });

    // Return a success response
    return Response.json(data);
  } catch (error) {
    // Return an error response
    return Response.json({ error });
  }
}