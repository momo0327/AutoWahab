import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, companyName, regNumber, truckType, phone, email } = body;

    const msg = {
      to: 'kassem@autowahab.se',
      from: 'noreply@autowahab.se', // You need to verify this sender in SendGrid
      subject: `Lastbil att säljas rån ${name}`,
      text: `
        Namn: ${name}
        Företagsnamn: ${companyName}
        Registreringsnummer: ${regNumber}
        Typ av lastbil: ${truckType}
        Telefonnummer: ${phone}
        E-post: ${email}
      `,
      html: `
        <h2>Ny lastbilsförfrågan</h2>
        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>Företagsnamn:</strong> ${companyName}</p>
        <p><strong>Registreringsnummer:</strong> ${regNumber}</p>
        <p><strong>Typ av lastbil:</strong> ${truckType}</p>
        <p><strong>Telefonnummer:</strong> ${phone}</p>
        <p><strong>E-post:</strong> ${email}</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'E-post skickades framgångsrikt' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('SendGrid error:', error);
    return NextResponse.json(
      { error: 'Ett fel uppstod vid skickandet av e-post', details: error.message },
      { status: 500 }
    );
  }
}
