import './App.css';
import './main.css';
import Review from "./Review";
import PropTypes from 'prop-types';

function App() {
	const share = ["facebook-f","twitter","instagram","whatsapp","pinterest"];
	const spec = [
					{	"id": 1,
						name : "Color",
						value: "Black"
					},
					{	"id": 2,
						name : "Available",
						value: "in stock"
					},
					{	"id": 3,
						name : "Category",
						value: "Shoes"
					},
					{	"id": 4,
						name : "Shipping Area",
						value: "All over the world"
					},
					{	"id": 5,
						name : "Shipping Fee",
						value: "Free"
					},
				];

  return (
	  <div className="App">
		  <div className="card-wrapper">
			  <div className="card">
				  <ProductImg/>
				  <ProductInfo name="nike shoes" label="visit nike store" share={share} spec={spec} disc={15}/>
				  <Review/>
			</div>
		</div>
    </div>
  );
}

function ProductImg() {
	return (
		<div className="product-imgs">
			<div className="img-display">
				<div className="img-showcase">
					<img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
						alt="shoe" />
					<img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
						alt="shoe" />
					<img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
						alt="shoe" />
					<img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
						alt="shoe" />
				</div>
			</div>
			<div className="img-select">
				<div className="img-item">
					<a href="#" data-id="1">
						<img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
							alt="shoe" />
					</a>
				</div>
				<div className="img-item">
					<a href="#" data-id="2">
						<img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
							alt="shoe" />
					</a>
				</div>
				<div className="img-item">
					<a href="#" data-id="3">
						<img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
							alt="shoe" />
					</a>
				</div>
				<div className="img-item">
					<a href="#" data-id="4">
						<img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
							alt="shoe" />
					</a>
				</div>
			</div>
		</div>
	);
}

function ProductInfo(props) {
	const { name, label, share, spec, disc } = props;
	const listShare = share.map((itemShare) =>
		<a href="#" key={itemShare}>
			<i className={`fab fa-${itemShare}`}></i>
		</a>
	);
	const listSpec = spec.map((itemSpec) =>
		<li key={itemSpec.id}>{itemSpec.name}: <span>{itemSpec.value}</span></li>
	);
	return ( 
		<div className="product-content">
			<h2 className="product-title">{name}</h2>
			<a href='#' className="product-link">{label}</a>
			<div className="product-rating">
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star-half-alt"></i>
				<span>4.7(21)</span>
			</div>

			<div className="product-price">
				<p className="last-price">Old Price: <span>$257.00</span></p>
				<p className="new-price">New Price: <span>$249.00 <CheckDiscount disc={disc}/></span></p>
			</div>

			<div className="product-detail">
				<h2>about this item: </h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur
					placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos,
					labore suscipit. Unde.</p>
				<ul>
					{listSpec}
				</ul>
			</div>

			<div className="purchase-info">
				<input type="number" min="0" defaultValue="1" />
				<button type="button" onClick={(e) => TambahCart(name, e)} className="btn">
					Add to Cart <i className="fas fa-shopping-cart"></i>
				</button>
				<button type="button" className="btn">Compare</button>
			</div>

			<div className="social-links">
				<p>Share At: </p>
				{listShare}
			</div>
		</div>
	);
}

function CheckDiscount(props) {
	const { disc } = props;
	if (disc > 0) {
		return (
			<span>({disc} %)</span>
		);
	}
}

function TambahCart(e) {
	return console.log("Membeli Sepatu >" + e);
}

CheckDiscount.propTypes = {
	disc: PropTypes.number.isRequired
};

export default App;
