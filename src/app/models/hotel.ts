export class Hotel{

	// Definimos las propiedades en el constructor
	constructor(
		public _id:String,
		public name:String,
		public stars:String,
		public price: String,
		public image: String,
		public amenities: String[]
	){}
}