export interface IAddress {
  Name: string;
  AddressLine1: string;
  AddressLine2: string;
  AddressLine3: string;
  City: string;
  County?: string;
  District?: string;
  StateOrRegion?: string;
  PostalCode: string;
  CountryCode: string;
  Phone?: string;
}
