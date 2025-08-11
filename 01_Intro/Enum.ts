
// Enums are useful when you want the values to be from a particular group only.
// Like in the belwo example, seta choice in an airplane can be only of 4 different types 
// SO we just create an enum, whose syntax is like a class declaration.

enum SeatChoice {
  AISLE = 'aisle',
  MIDDLE = 'middle',
  WINDOW = 'window',
  FOURTH = 'international'
}

const mnSeat = SeatChoice.AISLE;

