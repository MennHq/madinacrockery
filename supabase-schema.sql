CREATE TABLE public.inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT,
  phone TEXT,
  message TEXT,
  type TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new inquiries (needed for the contact form)
CREATE POLICY "Allow anonymous inserts" ON public.inquiries
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow reading inquiries (needed for the admin dashboard)
CREATE POLICY "Allow public select" ON public.inquiries
  FOR SELECT
  TO public
  USING (true);

-- Allow updating inquiries (needed to change status in admin)
CREATE POLICY "Allow public update" ON public.inquiries
  FOR UPDATE
  TO public
  USING (true);

-- Allow deleting inquiries (needed for admin)
CREATE POLICY "Allow public delete" ON public.inquiries
  FOR DELETE
  TO public
  USING (true);
