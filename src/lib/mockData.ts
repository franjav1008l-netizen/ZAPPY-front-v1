export interface Contact {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  status: "lead" | "customer" | "partner";
  value: number;
  lastContact: string;
  avatar?: string;
}

export interface Deal {
  id: string;
  title: string;
  contactId: string;
  value: number;
  stage: "prospecting" | "qualification" | "proposal" | "negotiation" | "closed";
  probability: number;
  closeDate: string;
}

export interface Activity {
  id: string;
  contactId: string;
  type: "email" | "call" | "meeting" | "note";
  title: string;
  description: string;
  date: string;
}

export const mockContacts: Contact[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@techcorp.com",
    company: "TechCorp Inc",
    phone: "+1 (555) 123-4567",
    status: "customer",
    value: 125000,
    lastContact: "2024-01-15",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@innovate.io",
    company: "Innovate Solutions",
    phone: "+1 (555) 234-5678",
    status: "lead",
    value: 75000,
    lastContact: "2024-01-14",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.r@growthco.com",
    company: "GrowthCo",
    phone: "+1 (555) 345-6789",
    status: "customer",
    value: 250000,
    lastContact: "2024-01-13",
  },
  {
    id: "4",
    name: "David Park",
    email: "dpark@venture.net",
    company: "Venture Networks",
    phone: "+1 (555) 456-7890",
    status: "partner",
    value: 500000,
    lastContact: "2024-01-12",
  },
  {
    id: "5",
    name: "Lisa Thompson",
    email: "l.thompson@startup.io",
    company: "Startup Labs",
    phone: "+1 (555) 567-8901",
    status: "lead",
    value: 45000,
    lastContact: "2024-01-11",
  },
];

export const mockDeals: Deal[] = [
  {
    id: "1",
    title: "Enterprise Software License",
    contactId: "1",
    value: 125000,
    stage: "negotiation",
    probability: 80,
    closeDate: "2024-02-28",
  },
  {
    id: "2",
    title: "Consulting Services",
    contactId: "2",
    value: 75000,
    stage: "qualification",
    probability: 50,
    closeDate: "2024-03-15",
  },
  {
    id: "3",
    title: "Annual Support Contract",
    contactId: "3",
    value: 250000,
    stage: "closed",
    probability: 100,
    closeDate: "2024-01-01",
  },
];

export const mockActivities: Activity[] = [
  {
    id: "1",
    contactId: "1",
    type: "meeting",
    title: "Product Demo",
    description: "Demonstrated new features and discussed pricing",
    date: "2024-01-15",
  },
  {
    id: "2",
    contactId: "2",
    type: "email",
    title: "Follow-up Email",
    description: "Sent proposal and pricing information",
    date: "2024-01-14",
  },
  {
    id: "3",
    contactId: "3",
    type: "call",
    title: "Check-in Call",
    description: "Discussed upcoming renewal and expansion opportunities",
    date: "2024-01-13",
  },
];
