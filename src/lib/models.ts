export interface Experience {
    company: string;
    title: string;
    start: string;
    end: string;
    img_reference: string;
    url: string;
    tags: string[];
    summary: string;
    experience_content: string[];
}

export interface Link {
    description: string;
    link: string;
}

export interface Contact {
    description: string;
    link: string;
    img_ref: string;
}

export interface ElementDimension {
    width: number;
    height: number;
}

export interface ContactInfo {
    first_name: string;
    middle_name: string;
    last_name: string;
    contact: Contact[];
    phone_number: string;
}
