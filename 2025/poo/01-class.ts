class MyDate {
  /*
  year: number;
  month: number;
  private day: number;
  

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  */

  constructor(
    public year: number,
    public month: number,
    private day: number,
  ) {}

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: "days" | "months" | "years") {
    if (type === "days") {
      this.day += amount;
    }
    if (type === "months") {
      this.month += amount;
    }
    if (type === "years") {
      this.year += amount;
    }
  }
}

export { MyDate };
