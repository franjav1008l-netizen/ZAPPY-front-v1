import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockDeals, mockContacts } from "@/lib/mockData";
import { DollarSign, TrendingUp } from "lucide-react";

export default function Deals() {
  const totalValue = mockDeals.reduce((sum, deal) => sum + deal.value, 0);
  const avgProbability = mockDeals.reduce((sum, deal) => sum + deal.probability, 0) / mockDeals.length;

  const getStageColor = (stage: typeof mockDeals[0]["stage"]) => {
    switch (stage) {
      case "closed":
        return "bg-success text-success-foreground";
      case "negotiation":
        return "bg-accent text-accent-foreground";
      case "proposal":
        return "bg-primary text-primary-foreground";
      case "qualification":
        return "bg-warning text-warning-foreground";
      case "prospecting":
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="flex-1 space-y-6 p-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Deals</h1>
        <p className="text-muted-foreground">Track your sales pipeline</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pipeline Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(totalValue / 1000).toFixed(0)}K</div>
            <p className="text-xs text-success">Across {mockDeals.length} deals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Win Probability</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgProbability.toFixed(0)}%</div>
            <p className="text-xs text-success">Healthy pipeline</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Deals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockDeals.map((deal) => {
              const contact = mockContacts.find((c) => c.id === deal.contactId);
              return (
                <div
                  key={deal.id}
                  className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{deal.title}</h4>
                      <Badge variant="secondary" className={getStageColor(deal.stage)}>
                        {deal.stage}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{contact?.name} • {contact?.company}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">Close date: {deal.closeDate}</span>
                      <span className="text-muted-foreground">Probability: {deal.probability}%</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">${(deal.value / 1000).toFixed(0)}K</p>
                    <p className="text-sm text-muted-foreground">Deal value</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
