export class UpdatePetDto {
  readonly petName?: string;
  readonly petType?: string;
  readonly adoptionDate?: Date;
  readonly health?: number;
  readonly happiness?: number;
  readonly energy?: number;
}
