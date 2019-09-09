class Car {
  constructor(owner = 'Unknown Owner', name = 'Unknown Name') {
    this.owner = owner
    this.name = name
  }

  drive() {
    console.log(`The ${this.name} car owner by ${this.owner} drives on the road`)
  }

  getOwner() {
    return this.owner
  }

  getCarName() {
    return this.name
  }
}

const myCar = new Car('Elon', 'Tesla model s')
console.log(myCar)
console.log(myCar.getOwner())
console.log(myCar.getCarName())
myCar.drive()

class SportCar extends Car {
  constructor({owner, name, color, price, engine}) {
    super(owner, name)
    this.color = color
    this.price = price
    this.engine = engine
  }

  getColor() {
    return this.color
  }

  getPrice(){
    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(this.price)

    return formattedPrice
  }

  getEngine(){
    return this.engine
  }
}

const coolCar = new SportCar({
  owner: 'Startman',
  name: 'Tesla Roadster',
  color: 'Red',
  price: '200000',
  engine: 'Electric'
})

console.log(coolCar)
coolCar.drive()
console.log(coolCar.getColor())
console.log(coolCar.getPrice())
