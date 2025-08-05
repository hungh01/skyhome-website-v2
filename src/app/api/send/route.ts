// app/api/send/route.ts
import { EmailTemplate } from '@/components/email-template';
import { EmailTemplateAdmin } from '@/components/email-template-admin';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, phone, service, content } = body;
    try {

        const dataadmin = await resend.emails.send({
            from: `Phản hồi từ <onboarding@resend.dev>`,
            to: ['duyhung1632002@gmail.com'],
            subject: 'Phản hồi của khách hàng đã được ghi nhận',
            react: EmailTemplateAdmin({ value: { name, email, phone, service, content } }),
        });
        const data = await resend.emails.send({
            from: `Phản hồi từ <onboarding@resend.dev>`,
            to: [`${email}`],
            subject: 'Phản hồi của khách hàng từ Website SkyHome',
            react: EmailTemplate({ value: { name, email, phone, service, content } }),
        });

        if (data && dataadmin) {
            return NextResponse.json(data);
        }
    } catch (error) {
        return NextResponse.json({ error });
    }
}
