function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
}

Phone.prototype.printInfo = function() {
  console.log(
    "The phone brand is " +
      this.brand +
      ", color is " +
      this.color +
      " and the price is " +
      this.price +
      "."
  );
};

var iPhone6S = new Phone("Apple", 2250, "silver");
var SamsungS7 = new Phone("Samsung", 2500, "black");
var Nokia3310 = new Phone("Nokia", 1000000, "deep blue");

iPhone6S.printInfo();
SamsungS7.printInfo();
Nokia3310.printInfo();
