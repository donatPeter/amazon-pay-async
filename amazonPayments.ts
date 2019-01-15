import { Config, IConfiguration } from './lib/config';
import { Amazon } from './lib/amazon';
import { Sandbox, SandboxEU, Production, ProductionEU } from './lib/environment';

export function connect(opts: IConfiguration) {
  return new Amazon(new Config(opts));
}

export const Environtment = {
  Sandbox,
  SandboxEU,
  Production,
  ProductionEU
}