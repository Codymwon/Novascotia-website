import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Send, MapPin, Phone, Mail, MessageSquare, Clock } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await contactMutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Location",
      content: "Tower 2, Office 57, Barwa Towers\nAl Sadd, Doha, Qatar",
      bgColor: "bg-accent",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      content: "+974 77743831",
      bgColor: "bg-accent",
      links: ["tel:+97477743831"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      content: "sales@ns-me.com",
      bgColor: "bg-accent",
      links: ["mailto:sales@ns-me.com"],
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      content: "+974 77743831",
      bgColor: "bg-green-500",
      links: ["https://wa.me/97477743831"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      content: "Sunday - Thursday: 7:00 AM - 6:00 PM\nFriday: 7:00 AM - 12:00 PM\nSaturday: Closed",
      bgColor: "bg-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a consultation and customized quote for your construction needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-gray-50 rounded-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-semibold text-secondary">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      placeholder="Enter your first name"
                      className="mt-2"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-semibold text-secondary">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      placeholder="Enter your last name"
                      className="mt-2"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-secondary">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    className="mt-2"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-semibold text-secondary">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="+974 xxxx xxxx"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-semibold text-secondary">
                    Service Needed
                  </Label>
                  <Select onValueChange={(value) => setValue("service", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="materials">Construction Materials</SelectItem>
                      <SelectItem value="industrial">Industrial Services</SelectItem>
                      <SelectItem value="workforce">Skilled Workforce</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-secondary">
                    Project Details
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    className="mt-2"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className={`${info.bgColor} text-white p-3 rounded-lg mr-4 mt-1`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                    <div className="text-secondary whitespace-pre-line">
                      {info.links ? (
                        info.links.map((link, linkIndex) => {
                          const lines = info.content.split('\n');
                          return (
                            <div key={linkIndex}>
                              <a
                                href={link}
                                className="hover:text-accent transition-colors"
                                target={link.startsWith('https') ? '_blank' : undefined}
                                rel={link.startsWith('https') ? 'noopener noreferrer' : undefined}
                              >
                                {lines[linkIndex]}
                              </a>
                            </div>
                          );
                        })
                      ) : (
                        info.content
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white px-6 py-4 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <a href="tel:+97477743831">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <a href="https://wa.me/97477743831" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
