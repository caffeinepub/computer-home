import Text "mo:core/Text";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  type Product = {
    id : Nat;
    name : Text;
    category : Category;
    brand : Brand;
    price : Nat;
    description : Text;
    specs : Text;
    featured : Bool;
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Nat.compare(product1.id, product2.id);
    };

    public func compareByCategory(product1 : Product, product2 : Product) : Order.Order {
      switch (Category.compare(product1.category, product2.category)) {
        case (#equal) { compare(product1, product2) };
	      case (order) { order };
      };
    };
  };

  type Category = {
    #laptop;
    #desktop;
    #allInOne;
    #peripherals;
    #printers;
  };

  module Category {
    public func compare(category1 : Category, category2 : Category) : Order.Order {
      switch (category1, category2) {
        case (#laptop, #laptop) { #equal };
        case (#laptop, _) { #less };
        case (#desktop, #laptop) { #greater };
        case (#desktop, #desktop) { #equal };
        case (#desktop, _) { #less };
        case (#allInOne, #peripherals) { #less };
        case (#allInOne, #printers) { #less };
        case (#allInOne, #allInOne) { #equal };
        case (#peripherals, #printers) { #less };
        case (#peripherals, #peripherals) { #equal };
        case (#printers, #printers) { #equal };
        case (_) { #greater };
      };
    };
  };

  type Brand = {
    #asus;
    #epson;
  };

  let productStore = Map.empty<Nat, Product>();

  func addProduct(product : Product) {
    productStore.add(product.id, product);
  };

  func seedProducts() {
    addProduct({
      id = 0;
      name = "ASUS ROG Zephyrus G14";
      category = #laptop;
      brand = #asus;
      price = 15000000;
      description = "The ASUS ROG Zephyrus G14 is a powerful 14-inch gaming laptop, featuring AMD Ryzen processors and NVIDIA GeForce RTX graphics for smooth gameplay.";
      specs = "AMD Ryzen 7 5800HS, NVIDIA RTX 3060, 16GB RAM, 1TB SSD, 14\" WQHD 120Hz";
      featured = true;
    });

    addProduct({
      id = 1;
      name = "ASUS VivoBook 16X";
      category = #laptop;
      brand = #asus;
      price = 3360530;
      description = "The ASUS VivoBook 16X is a stylish and lightweight laptop, equipped with Intel Core i5 processors and a long-lasting battery for productivity on the go.";
      specs = "Intel Core i5-1135G7, 8GB RAM, 512GB SSD, 16\" FHD";
      featured = false;
    });

    addProduct({
      id = 2;
      name = "ASUS Vivobook 15X OLED K3504";
      category = #laptop;
      brand = #asus;
      price = 2278330;
      description = "The ASUS Vivobook 15X OLED offers a stunning OLED display, perfect for creative professionals and everyday users alike.";
      specs = "Intel Core i7-1165G7, 16GB RAM, 1TB SSD, 15.6\" OLED 4K";
      featured = true;
    });

    addProduct({
      id = 3;
      name = "ASUS VivoBook 14 OLED";
      category = #laptop;
      brand = #asus;
      price = 1300000;
      description = "The ASUS VivoBook 14 OLED combines performance and portability, featuring OLED display technology for vibrant visuals.";
      specs = "Intel Core i3-1115G4, 8GB RAM, 256GB SSD, 14\" OLED FHD";
      featured = false;
    });

    addProduct({
      id = 4;
      name = "ASUS TUF GAMING F15 FX506L";
      category = #laptop;
      brand = #asus;
      price = 2526235;
      description = "The ASUS TUF GAMING F15 is a durable, military-grade gaming laptop with powerful hardware for serious gaming.";
      specs = "Intel Core i7-11800H, NVIDIA GTX 1650, 8GB RAM, 512GB SSD, 15.6\" FHD 144Hz";
      featured = true;
    });

    addProduct({
      id = 5;
      name = "ASUS S300MDR2";
      category = #desktop;
      brand = #asus;
      price = 1169333;
      description = "The ASUS S300MDR2 is a compact desktop, perfect for home or office use, offering reliable performance in a small form factor.";
      specs = "Intel Core i5-10400, 8GB RAM, 1TB HDD";
      featured = false;
    });

    addProduct({
      id = 6;
      name = "ASUS ExpertCenter D500TC";
      category = #desktop;
      brand = #asus;
      price = 2055437;
      description = "The ASUS ExpertCenter is designed for business professionals, combining power, security, and manageability.";
      specs = "Intel Core i7-11700, 16GB RAM, 512GB SSD, 1TB HDD";
      featured = true;
    });

    addProduct({
      id = 7;
      name = "ASUS S500SC7WA";
      category = #desktop;
      brand = #asus;
      price = 4347930;
      description = "The ASUS S500SC7WA is a high-performance desktop for demanding tasks, featuring the latest Intel processors.";
      specs = "Intel Core i9-11900K, 32GB RAM, 2TB SSD, NVIDIA RTX 3070";
      featured = false;
    });

    addProduct({
      id = 8;
      name = "ASUS A3402 All-in-One PC";
      category = #allInOne;
      brand = #asus;
      price = 4092428;
      description = "ASUS A3402 is a sleek all-in-one PC, combining a powerful processor, stunning display, and seamless connectivity in one device.";
      specs = "Intel Core i5-1135G7, 8GB RAM, 512GB SSD, 12\" FHD IPS";
      featured = true;
    });

    addProduct({
      id = 9;
      name = "Logitech MX Master 3 Mouse";
      category = #peripherals;
      brand = #asus;
      price = 785436;
      description = "The Logitech MX Master 3 is a premium wireless mouse, designed for precision and comfort during long hours of use.";
      specs = "Ergonomic design, USB-C charging, 2.4GHz wireless + Bluetooth";
      featured = false;
    });

    addProduct({
      id = 10;
      name = "Dell U2720Q UltraSharp 27\" Monitor";
      category = #peripherals;
      brand = #asus;
      price = 5214703;
      description = "The Dell U2720Q is a 27-inch 4K UHD monitor, perfect for professionals who demand color accuracy and clarity.";
      specs = "27\" 4K UHD IPS, USB-C, HDMI, DisplayPort";
      featured = true;
    });

    addProduct({
      id = 11;
      name = "Epson EcoTank L3250 Wi-Fi AIO";
      category = #printers;
      brand = #epson;
      price = 335685;
      description = "The Epson EcoTank L3250 is a versatile all-in-one printer, scanner, and copier, featuring refillable ink tanks and wireless connectivity.";
      specs = "Print, Scan, Copy, Wi-Fi Direct, EcoTank System";
      featured = false;
    });

    addProduct({
      id = 12;
      name = "Epson Perfection V39 Scanner";
      category = #printers;
      brand = #epson;
      price = 292624;
      description = "The Epson Perfection V39 is a compact flatbed scanner, ideal for digitizing documents and photos with high resolution.";
      specs = "4800 x 4800 dpi, USB powered, Compact design";
      featured = true;
    });

    addProduct({
      id = 13;
      name = "Epson L1800 Inkjet Printer";
      category = #printers;
      brand = #epson;
      price = 1226153;
      description = "The Epson L1800 is a high-capacity inkjet printer, perfect for printing vibrant photos and documents.";
      specs = "A3+ borderless printing, 6-color system, Ultra-high yields";
      featured = false;
    });

    addProduct({
      id = 14;
      name = "Lifelong Blender Juicer 500 Watt Juice Blender with 2 Jars, High-Speed Function, and Overload Safety Protection";
      category = #peripherals;
      brand = #asus;
      price = 3499000;
      description = "The Lifelong Blender Juicer is a powerful kitchen companion, featuring a 500-watt motor, stainless steel blades, and multiple jars for all blending and juicing needs.";
      specs = "500-watt motor, 2 jars, Overload protection, High-speed function";
      featured = false;
    });
  };

  seedProducts();

  public query ({ caller }) func getAllProducts() : async [Product] {
    productStore.values().toArray().sort();
  };

  public query ({ caller }) func getFeaturedProducts() : async [Product] {
    productStore.values().toArray().filter(func(p) { p.featured }).sort();
  };

  public query ({ caller }) func getProductsByCategory(category : Category) : async [Product] {
    productStore.values().toArray().filter(func(p) { p.category == category }).sort(Product.compareByCategory);
  };

  public query ({ caller }) func getProductById(id : Nat) : async Product {
    switch (productStore.get(id)) {
      case (null) { Runtime.trap("Product not found!") };
      case (?product) { product };
    };
  };
};
