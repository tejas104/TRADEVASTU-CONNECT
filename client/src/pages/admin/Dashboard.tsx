import { useQuery } from "@tanstack/react-query";

queryKey: ["/api/contact"]
    queryFn: async () => {
      const res = await fetch("/api/contact");
      return res.json()
    }
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
=======
  const { data: messages = [] } = useQuery({
    queryKey: ["/api/contact"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`);
      return res.json();
    },
  });

  const { data: portfolio = [] } = useQuery({
    queryKey: ["/api/portfolio"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/portfolio`);
      return res.json();
    },
  });

  const { data: testimonials = [] } = useQuery({
    queryKey: ["/api/testimonials"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/testimonials`);
      return res.json();
    },
  });
