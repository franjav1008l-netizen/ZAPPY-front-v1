import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, Building2, Calendar, DollarSign } from "lucide-react";
import { mockContacts, mockDeals, mockActivities } from "@/lib/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ContactDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = mockContacts.find((c) => c.id === id);
  const contactDeals = mockDeals.filter((d) => d.contactId === id);
  const contactActivities = mockActivities.filter((a) => a.contactId === id);

  if (!contact) {
    return <div className="p-8">Contact not found</div>;
  }

  const getStatusColor = (status: typeof contact.status) => {
    switch (status) {
      case "customer":
        return "bg-success text-success-foreground";
      case "lead":
        return "bg-warning text-warning-foreground";
      case "partner":
        return "bg-accent text-accent-foreground";
    }
  };

  const getActivityIcon = (type: typeof contactActivities[0]["type"]) => {
    switch (type) {
      case "email":
        return <Mail className="h-4 w-4" />;
      case "call":
        return <Phone className="h-4 w-4" />;
      case "meeting":
        return <Calendar className="h-4 w-4" />;
      case "note":
        return <Building2 className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/contacts")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">{contact.name}</h1>
          <p className="text-muted-foreground">{contact.company}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-4xl font-bold text-primary-foreground">
              {contact.name.charAt(0)}
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className={getStatusColor(contact.status)}>
                  {contact.status}
                </Badge>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Mail className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium">{contact.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Phone className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <p className="font-medium">{contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Building2 className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">Company</p>
                  <p className="font-medium">{contact.company}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <DollarSign className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">Total Value</p>
                  <p className="font-medium">${(contact.value / 1000).toFixed(0)}K</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="pt-6">
            <Tabs defaultValue="deals">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="deals">Deals</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              <TabsContent value="deals" className="space-y-4">
                {contactDeals.length > 0 ? (
                  contactDeals.map((deal) => (
                    <div key={deal.id} className="rounded-lg border border-border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{deal.title}</h4>
                          <p className="text-sm text-muted-foreground capitalize">{deal.stage}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">${(deal.value / 1000).toFixed(0)}K</p>
                          <p className="text-sm text-muted-foreground">{deal.probability}% probability</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-8">No deals yet</p>
                )}
              </TabsContent>
              <TabsContent value="activity" className="space-y-4">
                {contactActivities.length > 0 ? (
                  <div className="space-y-4">
                    {contactActivities.map((activity) => (
                      <div key={activity.id} className="flex gap-4 rounded-lg border border-border p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">{activity.title}</h4>
                            <span className="text-sm text-muted-foreground">{activity.date}</span>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">{activity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">No activity yet</p>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
