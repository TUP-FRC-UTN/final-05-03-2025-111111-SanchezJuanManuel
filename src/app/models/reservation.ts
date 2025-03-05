export interface Reservation {

    id: string;
    document: number;
    firstName: string;
    lastName: string;
    service: number;
    reservationCode: string;
    passengers: Passager[];

}

export interface Passager {
    document: string;
    firstName: string;
    lastName: string;
}
