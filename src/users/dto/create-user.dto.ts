export class CreateUserDto {
  readonly username: string;
  readonly email?: string; // Optional field
  readonly accountCreationDate: Date;
}
