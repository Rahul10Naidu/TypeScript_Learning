

type User =  {
  // READONLY --> Not editable
  readonly _id: string,
  name: string,
  email: string,
  isActive: boolean
  credcardDetails?: number
}

let myUser: User = {
  _id: '12345',
  name: 'h',
  email: 'h@h.com',
  isActive: false,
}


myUser.email = 'h@gmail.com';
// myUser._id = "asa" --> We cannot re-assign/edit "_id" property


// ---------------------------------------------------------------
// Combinig multiple types 

type cardNumber = {
  card_number: string
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}




