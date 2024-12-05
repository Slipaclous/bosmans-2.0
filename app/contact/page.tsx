"use client";

import { useLanguage } from "@/lib/context/language-context";
import { translations } from "@/lib/translations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">{t.contact.title}</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">{t.contact.form.title}</h2>
            <form className="space-y-4">
              <div>
                <Input placeholder={t.contact.form.name} />
              </div>
              <div>
                <Input type="email" placeholder={t.contact.form.email} />
              </div>
              <div>
                <Input placeholder={t.contact.form.phone} />
              </div>
              <div>
                <Textarea placeholder={t.contact.form.message} className="h-32" />
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                {t.contact.form.submit}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">{t.contact.address}</h3>
                <p className="text-gray-600">{t.contact.location}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">{t.contact.phone}</h3>
                <p className="text-gray-600">02 396 11 84</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">{t.contact.email}</h3>
                <p className="text-gray-600">bosmans.anne@outlook.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">{t.contact.hours}</h3>
                <p className="text-gray-600">
                  {t.contact.weekdays}<br />
                  {t.contact.saturday}<br />
                  {t.contact.sunday}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden h-96">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.040062207356!2d4.173255215740024!3d50.69604517951674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c1f9b582433b%3A0x4e273875e76f5d74!2sEdingsesteenweg%2067%2C%201540%20Herne%2C%20Belgium!5e0!3m2!1sen!2sus!4v1696364019240!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}