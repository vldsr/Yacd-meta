export type ClashAPIConfig = {
  alias?: string;
  baseURL: string;
  secret?: string;
};

export type LogsAPIConfig = ClashAPIConfig & { logLevel: string };
