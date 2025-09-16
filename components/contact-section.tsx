"use client"

import React, { useRef, useState } from "react"
import emailjs from "emailjs-com"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Users, Send } from "lucide-react"

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    if (!formRef.current) return

    emailjs
      .sendForm(
        "service_fal7o9m",   // <-- replace with your EmailJS service ID
        "template_60bik2e",  // <-- replace with your EmailJS template ID
        formRef.current,
        "l8lMtrXHxm8Qvjb2Y"  // <-- replace with your EmailJS public key
      )
      .then(
        () => {
          formRef.current?.reset()
          setIsSubmitting(false)
          alert("Message sent!")
        },
        (error) => {
          setIsSubmitting(false)
          alert("Failed to send message. Please try again.")
          console.log(error.text)
        }
      )
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Interested in collaborating or learning more about our research? We'd love to hear from you and explore
            potential partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-accent/20 hover:border-accent/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
              <p className="text-muted-foreground">We will respond as soon as possible</p>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <input type="hidden" name="contact_number" />
                <Input
                  name="from_name"
                  placeholder="Name"
                  required
                  className="border-border focus:border-accent transition-colors w-full"
                />
                <Input
                  name="from_email"
                  type="email"
                  placeholder="Email"
                  required
                  className="border-border focus:border-accent transition-colors w-full"
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  required
                  className="border-border focus:border-accent transition-colors w-full"
                />
                <Textarea
                  name="html_message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="border-border focus:border-accent resize-none transition-colors w-full"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 transition-all duration-300 hover:scale-102"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">snapsgemstone@gmail.com</p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      Primary Contact
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground">Gemstone Program</p>
                    <p className="text-muted-foreground">University of Maryland</p>
                    <p className="text-muted-foreground">College Park, MD 20742</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Support Our Mission</h3>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Collaborate with us to accelerate progress</li>
                      <li>• Contributions directly power ongoing experiments</li>
                      <li>• Support opportunities for undergraduate research</li>
                      <li>• Bring awareness to brain health and neuroscience</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
