
-- Semester records for academic history tracking
CREATE TABLE public.semester_records (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  semester_name TEXT NOT NULL,
  semester_number INT NOT NULL,
  gpa NUMERIC(3,2) NOT NULL CHECK (gpa >= 0 AND gpa <= 4),
  credits INT NOT NULL DEFAULT 0,
  year INT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.semester_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own semester records"
ON public.semester_records FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own semester records"
ON public.semester_records FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own semester records"
ON public.semester_records FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own semester records"
ON public.semester_records FOR DELETE
USING (auth.uid() = user_id);

CREATE TRIGGER update_semester_records_updated_at
BEFORE UPDATE ON public.semester_records
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add academic context fields to profiles
ALTER TABLE public.profiles
ADD COLUMN university TEXT,
ADD COLUMN major TEXT,
ADD COLUMN graduation_year INT,
ADD COLUMN target_gpa NUMERIC(3,2),
ADD COLUMN is_premium BOOLEAN NOT NULL DEFAULT false;
