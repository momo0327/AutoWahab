import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const TO = 'kassem@autowahab.se';
const FROM = { email: 'noreply@autowahab.se', name: 'Kund från autowahab.se' };

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type } = body;

    let msg;

    if (type === 'buy') {
      const { name, companyName, email, phone, truckType, message } = body;
      msg = {
        to: TO,
        from: FROM,
        subject: `Köpförfrågan från ${name}`,
        html: `
          <h2>Ny köpförfrågan</h2>
          <p><strong>Namn:</strong> ${name}</p>
          <p><strong>Företagsnamn:</strong> ${companyName}</p>
          <p><strong>E-post:</strong> ${email}</p>
          <p><strong>Telefonnummer:</strong> ${phone}</p>
          <p><strong>Typ av lastbil:</strong> ${truckType}</p>
          ${message ? `<p><strong>Övrigt:</strong> ${message}</p>` : ''}
        `,
      };
    } else if (type === 'sell') {
      const { name, companyName, regNumber, truckType, phone, email } = body;
      msg = {
        to: TO,
        from: FROM,
        subject: `Säljförfrågan från ${name}`,
        html: `
          <h2>Ny säljförfrågan</h2>
          <p><strong>Namn:</strong> ${name}</p>
          <p><strong>Företagsnamn:</strong> ${companyName}</p>
          <p><strong>Registreringsnummer:</strong> ${regNumber}</p>
          <p><strong>Typ av lastbil:</strong> ${truckType}</p>
          <p><strong>Telefonnummer:</strong> ${phone}</p>
          <p><strong>E-post:</strong> ${email}</p>
        `,
      };
    } else {
      // Contact form
      const { name, companyName, email, phone, message } = body;
      msg = {
        to: TO,
        from: FROM,
        subject: `Kontaktförfrågan från ${name}`,
        html: `
          <h2>Nytt kontaktmeddelande</h2>
          <p><strong>Namn:</strong> ${name}</p>
          <p><strong>Företagsnamn:</strong> ${companyName}</p>
          <p><strong>E-post:</strong> ${email}</p>
          <p><strong>Telefonnummer:</strong> ${phone}</p>
          <p><strong>Meddelande:</strong></p>
          <p>${message}</p>
        `,
      };
    }

    await sgMail.send(msg);

    return NextResponse.json({ message: 'E-post skickades framgångsrikt' }, { status: 200 });
  } catch (error: any) {
    console.error('SendGrid error:', error?.response?.body || error.message);
    return NextResponse.json(
      { error: 'Ett fel uppstod vid skickandet av e-post', details: error.message },
      { status: 500 }
    );
  }
}
