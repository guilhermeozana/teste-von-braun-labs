import { Parameter } from "./parameter";

export class Command {
  constructor(
    public command: string,
    public parameters: Parameter[]
  ) {}
}
