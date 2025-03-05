import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Form verilerini Discord veya Telegram webhook'una gönderebilirsiniz
    // Veya burada başka bir iletişim yöntemi kullanabilirsiniz
    // Örnek: Telegram bot ile mesaj gönderme

    // Şimdilik verileri console'a yazdıralım
    console.log('İletişim Formu Verileri:', {
      name,
      email,
      phone: phone || 'Belirtilmemiş',
      message
    })

    // Başarılı yanıt döndür
    return NextResponse.json({ 
      success: true,
      message: 'Form verileri alındı'
    })

  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Form işlenirken bir hata oluştu'
      },
      { status: 500 }
    )
  }
}