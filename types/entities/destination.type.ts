import { IAddress } from './address.type';
import { DestinationType } from './destination.type.type';

export interface IDestination {
  DestinationType: DestinationType;
  PhysicalDestination: IAddress;
}
