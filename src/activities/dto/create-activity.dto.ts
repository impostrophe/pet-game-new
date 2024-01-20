export class CreateActivityDto {
  readonly activityName: string;
  readonly effectOnStats: string; // Could be a serialized JSON string or a structured object depending on your needs
}
