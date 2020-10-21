export interface Country {
    name: string;
    url: string;
}

export interface CountryResponse {
    httpStatusMessage: string;
    data: Country[];
}