export interface Project {
  id: number;
  title: string;
  subtitle: string;
  img : string[];
  description: string;
}

export interface About {
  title: string;
  lines: string[];
}

export interface Contact {
  platform: string;
  link: string; 
}

export interface Technology {
  name: string;
}

export interface Footer {
  name: string;

}

export interface Header {
  name: string;
  role: string;
  motto: string;
}

export interface Content {
  about: About;
  contact: Contact;
  footer: Footer;
  header: Header;
}