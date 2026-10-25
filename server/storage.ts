import { type User, type InsertUser, type Enquiry, type InsertEnquiry } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
  getEnquiries(): Promise<Enquiry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private enquiries: Map<string, Enquiry>;

  constructor() {
    this.users = new Map();
    this.enquiries = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createEnquiry(insertEnquiry: InsertEnquiry): Promise<Enquiry> {
    const id = randomUUID();
    const enquiry: Enquiry = {
      id,
      name: insertEnquiry.name,
      email: insertEnquiry.email,
      phone: insertEnquiry.phone || null,
      service: insertEnquiry.service,
      budget: insertEnquiry.budget || null,
      timeline: insertEnquiry.timeline || null,
      message: insertEnquiry.message,
      createdAt: new Date().toISOString(),
    };
    this.enquiries.set(id, enquiry);
    return enquiry;
  }

  async getEnquiries(): Promise<Enquiry[]> {
    return Array.from(this.enquiries.values());
  }
}

export const storage = new MemStorage();
