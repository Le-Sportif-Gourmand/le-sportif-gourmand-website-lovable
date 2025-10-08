-- Enable pg_cron extension for scheduled jobs
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Create a cron job to sync Google reviews every Sunday at 3 AM
SELECT cron.schedule(
  'sync-google-reviews-weekly',
  '0 3 * * 0', -- Every Sunday at 3 AM
  $$
  SELECT
    net.http_post(
        url:='https://xlxirteblcjubgvmjebd.supabase.co/functions/v1/sync-google-reviews',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhseGlydGVibGNqdWJndm1qZWJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NTcxMTMsImV4cCI6MjA3NTMzMzExM30.v6PFjLkIVs0o4fdNMYqf7uTzZ_1yI7t3CO42jKFJxxI"}'::jsonb,
        body:='{}'::jsonb
    ) as request_id;
  $$
);