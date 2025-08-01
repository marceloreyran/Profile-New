import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { sendEmail, createContactEmailHtml } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification to Marcelo
      const emailSent = await sendEmail({
        to: "marcelo.reyran@gmail.com",
        from: "marcelo.reyran@gmail.com", // Using your verified email as sender
        subject: `Nuevo mensaje de contacto de ${validatedData.name}`,
        html: createContactEmailHtml(validatedData.name, validatedData.email, validatedData.message),
        text: `Nuevo mensaje de: ${validatedData.name} (${validatedData.email})\n\nMensaje: ${validatedData.message}`
      });
      
      console.log("New contact message:", message);
      console.log("Email sent:", emailSent);
      
      res.json({ 
        success: true, 
        message: emailSent 
          ? "¡Gracias por tu mensaje! Te responderé pronto." 
          : "Tu mensaje fue guardado. Te contactaré pronto." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Por favor verifica los datos y intenta de nuevo." 
      });
    }
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
