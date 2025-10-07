-- Create sales_points table
CREATE TABLE public.sales_points (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT,
  hours TEXT,
  type TEXT NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.sales_points ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access to sales points"
ON public.sales_points
FOR SELECT
USING (true);

-- Insert the 4 existing sales points
INSERT INTO public.sales_points (name, address, phone, hours, type, latitude, longitude) VALUES
('Fitness Park République', '45 Boulevard du Temple, 75003 Paris', '01 42 74 17 11', 'Lun-Dim: 6h-23h', 'Salle de sport', 48.8647, 2.3641),
('Bio c'' Bon Marais', '23 Rue des Rosiers, 75004 Paris', '01 44 54 93 85', 'Lun-Sam: 8h30-20h, Dim: 9h-19h', 'Magasin bio', 48.8571, 2.3614),
('Naturalia Châtelet', '8 Rue de Rivoli, 75004 Paris', '01 40 26 03 91', 'Lun-Sam: 8h-21h, Dim: 9h-20h', 'Magasin bio', 48.8566, 2.3485),
('L''Orange Bleue Bastille', '12 Rue de la Roquette, 75011 Paris', '01 47 00 47 28', 'Lun-Ven: 6h-23h, Sam-Dim: 8h-20h', 'Salle de sport', 48.8532, 2.3723);