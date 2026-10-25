import type { Express, Request, Response } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      service: "Matthabbey Solutions Services API",
    });
  });

  app.post("/api/enquiries", async (req: Request, res: Response) => {
    try {
      const result = insertEnquirySchema.safeParse(req.body);
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({
          success: false,
          message: validationError.message,
        });
      }

      const enquiry = await storage.createEnquiry(result.data);
      return res.status(201).json({
        success: true,
        message: "Enquiry submitted successfully. We will contact you within 24 hours.",
        enquiry,
      });
    } catch (error) {
      console.error("Error creating enquiry:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to process enquiry. Please try again or reach out directly via WhatsApp.",
      });
    }
  });

  // Note: enquiries are only stored in memory and there is intentionally no
  // public listing route; add authentication before exposing them.

  return httpServer;
}
