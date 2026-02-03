"use client";

import { useQuery } from "@tanstack/react-query";

export default function Dashboard() {
  const { data: messages = [] } = useQuery({
    queryKey: ["/api/contact"],
    queryFn: async () => {
      const res = await fetch("/api/contact");
      return res.json();
    },
  });

  const { data: portfolio = [] } = useQuery({
    queryKey: ["/api/portfolio"],
    queryFn: async () => {
      const res = await fetch("/api/portfolio");
      return res.json();
    },
  });

  const { data: testimonials = [] } = useQuery({
    queryKey: ["/api/testimonials"],
    queryFn: async () => {
      const res = await fetch("/api/testimonials");
      return res.json();
    },
  });

  return (
    <div className="min-h-screen bg-dark-bg text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-dark-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Contact Messages</h2>
            <p className="text-2xl font-bold text-gold">{messages.length}</p>
          </div>

          <div className="bg-dark-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Portfolio Items</h2>
            <p className="text-2xl font-bold text-gold">{portfolio.length}</p>
          </div>

          <div className="bg-dark-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Testimonials</h2>
            <p className="text-2xl font-bold text-gold">{testimonials.length}</p>
          </div>
        </div>

        <div className="bg-dark-card p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Contact Messages</h2>
          <div className="space-y-4">
            {messages.slice(0, 5).map((message: any) => (
              <div key={message.id} className="border-b border-gray-700 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{message.name}</p>
                    <p className="text-sm text-gray-400">{message.email}</p>
                    <p className="text-sm mt-2">{message.message}</p>
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(message.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
