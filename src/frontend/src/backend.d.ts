import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    id: bigint;
    featured: boolean;
    name: string;
    description: string;
    specs: string;
    category: Category;
    brand: Brand;
    price: bigint;
}
export enum Brand {
    asus = "asus",
    epson = "epson"
}
export enum Category {
    desktop = "desktop",
    printers = "printers",
    laptop = "laptop",
    allInOne = "allInOne",
    peripherals = "peripherals"
}
export interface backendInterface {
    getAllProducts(): Promise<Array<Product>>;
    getFeaturedProducts(): Promise<Array<Product>>;
    getProductById(id: bigint): Promise<Product>;
    getProductsByCategory(category: Category): Promise<Array<Product>>;
}
