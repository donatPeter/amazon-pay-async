import { DestinationType } from '../enums/destination.type.enum';
import { IAddress } from './address.type';

export interface IDestination {
  DestinationType: DestinationType;
  PhysicalDestination: IAddress;
}
