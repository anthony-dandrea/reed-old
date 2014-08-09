var RapidCartDefaults = {

	version: "3",
	
	styleFont: "1.2em",
	styleWidth: "900px",
	stylePosition: "top",
	styleAlign: "center",
	styleImage: 64,
	styleColumn: "20%",
	styleDuration: 250,
	stylePreview: 5,
	
	colorCart: "222222",
	colorBorder: "333333",
	colorButton: "000000",
	colorText: "ffffff",
	colorImage: "000000",
	
	iconCartEmpty: "iconCartEmpty.png",
	iconCartFull: "iconCartFull.png",
	iconTotal: "iconTotal.png",
	iconDecrease0: "iconDecrease0.png",
	iconDecrease1: "iconDecrease1.png",
	iconDelete0: "iconDelete0.png",
	iconDelete1: "iconDelete1.png",
	iconEmpty: "iconEmpty.png",
	iconCheckout: "iconCheckout.png",
	iconHide: "iconHide.png",
	iconIncrease0: "iconIncrease0.png",
	iconIncrease1: "iconIncrease1.png",
	iconBack: "iconBack.png",
	iconAgree: "iconAgree.png",
	iconSend: "iconSend.png",
	iconSearch: "iconSearch.png",
	iconRemove: "iconRemove.png",
	iconLoader: "iconLoader.png",
	
	generalCompatibility: false,
	generalPath: "rc_common",
	generalExpiration: 24,
	generalConfirmation: "RapidCartPaymentOk",
	generalReturnURL: "",
	generalOrderMailer: "orderMailer.php",
	generalCouponChecker: "couponChecker.php",
	generalCookie: "RapidCart",
	generalCurrency: "$",
	generalCurrencyPosition: "left",
	generalCurrencySpace: true,
	generalDecimals: 2,
	generalSeparator: ".",
	generalEffect: true,
	generalShowTaxes: false,
	
	coupons: [],
	
	paymentDisclaimer: false,
	paymentOrder: false,
	paymentPaypal: false,
	paymentGoogle: false,
	paymentEjunkie: false,
	paymentSisow: false,
	paymentCard: false,
	paymentCoupon: false,
	
	paypalAccount: "",
	paypalCurrency: "USD",
	paypalLanguage: "",
	paypalSandbox: false,
	
	googleAccount: "",
	googleCurrency: "USD",
	
	ejunkieAccount: "",
	
	sisowAccount: "",
	sisowSignature: "",
	
	orderAccount: "",
	orderSubject: "Order from website",
	orderText: "This is your order summary.",
	orderRequired: "110010000000000",
	orderEnableUID: false,
	orderPrefix: "",
	orderField1: "Name",
	orderField2: "Surname",
	orderField3: "Company",
	orderField4: "",
	orderField5: "E-mail",
	orderField6: "Phone",
	orderField7: "",
	orderField8: "Address",
	orderField9: "ZIP",
	orderField10: "City",
	orderField11: "Country",
	orderField12: "",
	orderField13: "",
	orderField14: "",
	orderField15: "Notes",
	orderEmailField: 5,
	
	shippingText: "",
	shippingType: "price",
	shippingRules: {
	
		rule0: [0, 0],
		rule1: [0, 0],
		rule2: [0, 0],
		rule3: [0, 0],
		rule4: [0, 0]
	
	},
	
	i18nSubtotal: "Subtotal",
	i18nTotal: "Total",
	i18nClickShow: "Click to show cart",
	i18nClickHide: "Click to hide cart",
	i18nHideCart: "Hide cart",
	i18nEmptyCart: "Empty cart",
	i18nCartItems: "Items in cart",
	i18nBack: "Back",
	i18nDecrease: "Decrease quantity",
	i18nRemove: "Remove item",
	i18nIncrease: "Increase quantity",
	i18nPrice: "Price",
	i18nShipping: "Shipping",
	i18nTaxes: "Taxes",
	i18nProducts: "Products",
	i18nCheckout: "Checkout",
	i18nAgree: "Agree",
	i18nClose: "Close",
	i18nProceed: "Proceed",
	i18nDisclaimer: "Do you want to proceed to checkout?",
	i18nPayment: "Choose your payment method",
	i18nPaypal: "Paypal",
	i18nGoogle: "Google checkout",
	i18nEjunkie: "E-junkie",
	i18nSisow: "iDEAL (SISOW)",
	i18nCard: "Credit card",
	i18nOrder: "Direct order",
	i18nThankYou: "Thank you for your purchase!",
	i18nInfo: "Personal information",
	i18nSend: "Send",
	i18nEnterCoupon: "Enter your coupon code",
	i18nCheckCoupon: "Check",
	i18nCancelCoupon: "Cancel",
	i18nRequired: "Required field",
	i18nOrderYes: "Thank you for your order. You will be contacted for confirmation.",
	i18nOrderNo: "There were problems sending your order. Please contact customers support."
	
}

var RapidCartTemplates = {

	page: '<div id="rcCart" class="{position} {align}">' +
		'<div id="rcBackground"></div>' +
		'<div id="rcContainer">' +
		'<div id="rcHeader"></div>' +
		'<div id="rcContent"></div>' +
		'</div>' +
		'</div>',

	header: '<div id="rcCartTotal"><img src="{iconTotal}" />{i18nTotal}: {total}</div>' +
		'<div id="rcCartItems"><img src="{iconItems}" id="rcCartItemsIcon" />{i18nItems}: {items} <span class="rcComment">{i18nShow}</span></div>',
	
	button: '<div class="rcButton" onclick="{action}"><img src="{icon}" />{text}</div>',
	
	slide: '<div class="rcSlide">{text}<br /><br />{buttons}</div>',
	
	items: '<div class="rcSlide">{items}<br />{coupon}{buttons}</div>',
	
	item: '<div class="rcCartItem">' +
		'<div class="rcCartImage"><img src="{image}" /></div>' +
		'<div class="rcCartPrices">' +
		'{price}' +
		'{taxes}' +
		'{shipping}' +
		'</div>' +
		'<div class="rcCartName">' +
		'{quantity} &times; {name}' +
		'<span class="rcCartTools">' +
		'<img src="{iconDecrease0}" class="rcToolDecrease" onMouseOver="this.src=\'{iconDecrease1}\';" onMouseOut="this.src=\'{iconDecrease0}\';" onclick="rc.setQuantity(\'{id}\', {decreaseQuantity});" title="{i18nDecrease}" />' +
		'<img src="{iconDelete0}" onMouseOver="this.src=\'{iconDelete1}\';" onMouseOut="this.src=\'{iconDelete0}\';" onclick="rc.setQuantity(\'{id}\', 0);" title="{i18nRemove}" />' +
		'<img src="{iconIncrease0}" class="rcToolIncrease" onMouseOver="this.src=\'{iconIncrease1}\';" onMouseOut="this.src=\'{iconIncrease0}\';" onclick="rc.setQuantity(\'{id}\', {increaseQuantity});" title="{i18nIncrease}" />' +
		'</span>' +
		'{options}' +
		'</div>' +
		'</div>',
	
	itemOption: '<div class="rcCartOption rcComment">{name} {value}</div>',
	
	itemPrice: '<div class="rcCartPrice">' +
		'<div class="rcNumber">{price}</div>' +
		'{i18nPrice}' +
		'</div>',
	
	itemTaxes: '<div class="rcCartTaxes rcComment">' +
		'<div class="rcNumber">{taxes}</div>' +
		'{i18nTaxes}' +
		'</div>',
	
	itemShipping: '<div class="rcCartShipping rcComment">' +
		'<div class="rcNumber">{shipping}</div>' +
		'{i18nShipping}' +
		'</div>',
	
	shipping: '<div class="rcCartItem">' +
		'<div class="rcCartPrices">' +
		'<div class="rcNumber">{price}</div>' +
		'{i18nPrice}' +
		'</div>' +
		'<div class="rcCartName">' +
		'{name}' +
		'</div>' +
		'</div>',
		
	couponAdd: '<div id="rcCartCoupon">{text}: <input type="text" id="rcCouponCode" name="code" size="9" />{button}</div><br />',

	couponRemove: '<div id="rcCartCoupon">{text} {button}</div><br />',
	
	checkout: '<div class="rcSlide">{i18nPayment}:<table>{payments}</table><br />{buttons}</div>',
	
	checkoutPayment: '<tr><td class="rcRadio" onclick="this.firstChild.checked=true;"><input type="radio" name="rcPayment" value="{value}" {checked} /> {payment}</td></tr>',
	
	paypal: '<form id="rcCartForm" action="{paypal_url}" method="post">' +
		'<input type="hidden" name="cmd" value="_cart" />' +
		'<input type="hidden" name="upload" value="1" />' +
		'<input type="hidden" name="rm" value="1" />' +
		'<input type="hidden" name="charset" value="utf-8">' +
		'<input type="hidden" name="business" value="{account}" />' +
		'<input type="hidden" name="return" value="{url}{confirmation}" />' +
		'<input type="hidden" name="cancel_return" value="{cancel_url}" />' +
		'<input type="hidden" name="currency_code" value="{currency}" />' +
		'<input type="hidden" name="{language_code}" value="{language}" />' +
		'{items}' +
		'</form>',
	
	paypalItem: '<input type="hidden" name="item_number_{i}" value="{sku}" />' +
		'<input type="hidden" name="item_name_{i}" value="{name}" />' +
		'<input type="hidden" name="quantity_{i}" value="{quantity}" />' +
		'<input type="hidden" name="amount_{i}" value="{price}" />' +
		'<input type="hidden" name="{shipping_1_code}" value="{shipping_1}" />' +
		'<input type="hidden" name="{shipping_2_code}" value="{shipping_2}" />' +
		'<input type="hidden" name="{taxes_code}" value="{taxes}" />' +
		'<input type="hidden" name="handling_{i}" value="0" />' +
		'<input type="hidden" name="weight_{i}" value="{weight}" />' +
		'{options}',
	
	paypalOption: '<input type="hidden" name="on{j}_{i}" value="{name}" />' +
		'<input type="hidden" name="os{j}_{i}" value="{value}" />',
		
	google: '<form id="rcCartForm" action="https://checkout.google.com/api/checkout/v2/checkoutForm/Merchant/{account}" method="post">' +
		'<input name="continue-shopping-url" type="hidden" value="{url}{confirmation}" />' +
		'{items}' +
		'<input type="hidden" name="{i18nShipping_code}" value="{i18nShipping}" />' +
		'<input type="hidden" name="{shipping_code}" value="{shipping}" />' +
		'<input type="hidden" name="{currency_code}" value="{currency}" />' +
		'<input type="hidden" name="{restrictions_code}" value="true" />' +
		'</form>',
	
	googleItem: '<input type="hidden" name="shopping-cart.items.item-{i}.item-name" value="{name}" />' +
		'<input type="hidden" name="shopping-cart.items.item-{i}.merchant-item-id" value="{sku}" />' +
		'<input type="hidden" name="shopping-cart.items.item-{i}.item-description" value="{options}" />' +
		'<input type="hidden" name="shopping-cart.items.item-{i}.quantity" value="{quantity}" />' +
		'<input type="hidden" name="shopping-cart.items.item-{i}.unit-price" value="{price}" />' +
		'<input type="hidden" name="shopping-cart.items.item-{i}.unit-price.currency" value="{currency}" />' +
		'<input type="hidden" name="checkout-flow-support.merchant-checkout-flow-support.tax-tables.default-tax-table.tax-rules.default-tax-rule-{i}.rate" value="{taxes}" />' +
		'<input type="hidden" name="checkout-flow-support.merchant-checkout-flow-support.tax-tables.default-tax-table.tax-rules.default-tax-rule-{i}.tax-area.world-area" value="true" />',
	
	googleOption: '{name} {value}; ',
	
	sisow: '<form id="rcCartForm" action="https://www.sisow.nl/Sisow/iDeal/Verzenden.aspx" method="post">' +
		'<input type="hidden" name="business" value="{account}" />' +
		'<input type="hidden" name="signature" value="{signature}" />' +
		'<input type="hidden" name="return" value="{url}{confirmation}" />' +
		'<input type="hidden" name="cancel_return" value="{cancel_url}" />' +
		'{items}' +
		'</form>',
	
	sisowItem: '<input type="hidden" name="item_number_{i}" value="{sku}" />' +
		'<input type="hidden" name="item_name_{i}" value="{name}" />' +
		'<input type="hidden" name="quantity_{i}" value="{quantity}" />' +
		'<input type="hidden" name="amount_{i}" value="{price}" />' +
		'<input type="hidden" name="shipping_{i}" value="{shipping_1}" />' +
		'<input type="hidden" name="shipping2_{i}" value="{shipping_2}" />' +
		'<input type="hidden" name="tax_{i}" value="{taxes}" />' +
		'<input type="hidden" name="options_{i}" value="{options}" />',
	
	sisowOption: '{name} {value}; ',
	
	order: '<div class="rcSlide">{info}<br /><br />' +
		'<div id="rcCartForm">' +
		'<input type="hidden" name="email_field" value="{emailField}" />' +
		'<table>' +
		'<tr>{field1}{field8}</tr>' +
		'<tr>{field2}{field9}</tr>' +
		'<tr>{field3}{field10}</tr>' +
		'<tr>{field4}{field11}</tr>' +
		'<tr>{field5}{field12}</tr>' +
		'<tr>{field6}{field13}</tr>' +
		'<tr>{field7}{field14}</tr>' +
		'{field15}' +
		'<tr>' +
		'<td></td>' +
		'<td colspan="3">* {required}</td></td>' +
		'</tr>' +
		'</table>' +
		'</div>' +
		'<br />{buttons}' +
		'</div>',
		
	orderField: '<td class="rcLabel">{label}</td>' +
		'<td>' +
		'<input type="{type}" name="field{i}" tabindex="{i}" id="rcField{i}" />' +
		'{req}' +
		'</td>',
		
	orderNotes: '<tr>' +
		'<td class="rcLabel">' +
		'<br />{label}' +
		'</td>' +
		'<td colspan="3">' +
		'<br /><textarea name="field15" cols="56" rows="5" tabindex="15" id="rcField15"></textarea>{req}' +
		'</td>' +
		'</tr>'
	
}

var RapidCartBuilder = {

	page: function (compatibility) {
	
		switch (RapidCartPreferences.stylePosition) {
		
			case "top":
			
				var position = "rcTop";
				
			break;
		
			case "bottom":
			
				var position = "rcBottom";
				
			break;
		
		}
	
		switch (RapidCartPreferences.styleAlign) {
		
			case "left":
			
				var align = "rcLeft";
				
			break;
		
			case "center":
			
				var align = "rcCenter";
				
			break;
		
			case "right":
			
				var align = "rcRight";
				
			break;
		
		}
		
		var layout = new Elements([
		
			new Element("div", {
			
				"id": "rcCart",
				"class": position + " " + align
				
			}).adopt(new Elements([
			
				new Element("div", {
				
					"class": "rcBackground"
				
				}),
				new Element("div", {
				
					"id": "rcContainer"
				
				}).adopt(new Elements([
				
					new Element("div", {
					
						"id": "rcHeader",
						"events": {
						
							"click": function () {
							
								rc.toggleContent();
								
							}
						}
					
					}),
					new Element("div", {
					
						"id": "rcContent"
					
					})
				
				]))
			
			]))
			
		]);
		
		if (compatibility) {
		
			layout.push(new Element("div", {
		
				"id": "rcPage"
		
			}));
			
		}
		
		return layout;
		
	},

	cart: function () {
	
		return RapidCartTemplates.cart.substitute({
		
			position: RapidCartPreferences.stylePosition,
			align: RapidCartPreferences.styleAlign
		
		});
	
	},
	
	header: function (items, total) {
	
		return RapidCartTemplates.header.substitute({
		
			iconItems: RapidCartPreferences.generalPath + "/theme/" + ((items > 0) ? RapidCartPreferences.iconCartFull : RapidCartPreferences.iconCartEmpty),
			i18nItems: RapidCartPreferences.i18nCartItems,
			items: items,
			i18nShow: (items > 0) ? (($("rcContent").innerHTML == "") ? RapidCartPreferences.i18nClickShow : RapidCartPreferences.i18nClickHide) : "",
			iconTotal: RapidCartPreferences.generalPath + "/theme/" + RapidCartPreferences.iconTotal,
			i18nTotal: RapidCartPreferences.i18nTotal,
			total: RapidCartUtilities.numberFormat(total, false)
		
		});
	
	},
		
	items: function (items, total) {
	
		var itemHTML = "";
		
		for (var i in items) {
		
			var item = RapidCartUtilities.getDiscount(items[i]);
		
			var optionsHTML = "";
		
			if (item.options.length > 0) {
			
				item.options.each(function (option) {
			
					optionsHTML += RapidCartTemplates.itemOption.substitute({
		
						name: option.name,
						value: option.value
		
					})
				
				});
				
			}
			
			var priceHTML = RapidCartTemplates.itemPrice.substitute({
		
				price: RapidCartUtilities.numberFormat(item.price * item.quantity, false),
				i18nPrice: RapidCartPreferences.i18nPrice
		
			});
			
			var taxesHTML = "";
			
			if (item.taxes > 0) {
			
				taxesHTML = RapidCartTemplates.itemTaxes.substitute({
		
					taxes: RapidCartUtilities.numberFormat(item.taxes * item.quantity, false),
					i18nTaxes: RapidCartPreferences.i18nTaxes
		
				});
				
			}
			
			var shippingHTML = "";
			
			if (item.shipping_1 > 0 || item.shipping_2 > 0) {
			
				shippingHTML = RapidCartTemplates.itemShipping.substitute({
		
					shipping: RapidCartUtilities.numberFormat(item.shipping_1 + item.shipping_2 * (item.quantity - 1), false),
					i18nShipping: RapidCartPreferences.i18nShipping
		
				});
				
			}
		
			itemHTML += RapidCartTemplates.item.substitute({
		
				image: item.image,
				id: item.id,
				quantity: item.quantity,
				name: item.name,
				i18nDecrease: RapidCartPreferences.i18nDecrease,
				iconDecrease0: RapidCartPreferences.generalPath + "/theme/" + RapidCartPreferences.iconDecrease0,
				iconDecrease1: RapidCartPreferences.generalPath + "/theme/" + RapidCartPreferences.iconDecrease1,
				decreaseQuantity: item.quantity - 1,
				i18nRemove: RapidCartPreferences.i18nRemove,
				iconDelete0: RapidCartPreferences.generalPath + "/theme/" + RapidCartPreferences.iconDelete0,
				iconDelete1: RapidCartPreferences.generalPath + "/theme/" + RapidCartPreferences.iconDelete1,
				i18nIncrease: RapidCartPreferences.i18nIncrease,
				iconIncrease0: RapidCartPreferences.generalPath + "/theme/" + RapidCartPreferences.iconIncrease0,
				iconIncrease1: RapidCartPreferences.generalPath + "/theme/" + RapidCartPreferences.iconIncrease1,
				increaseQuantity: item.quantity + 1,
				price: priceHTML,
				taxes: taxesHTML,
				shipping: shippingHTML,
				options: optionsHTML
		
			});
			
		}
		
		if (total.shipping != 0) {
		
			itemHTML += RapidCartTemplates.shipping.substitute({
		
				name: RapidCartPreferences.shippingText,
				price: RapidCartUtilities.numberFormat(total.shipping, false),
				i18nPrice: RapidCartPreferences.i18nPrice
		
			});
		
		}
		
		var coupon = "";
		
		if (RapidCartPreferences.paymentCoupon) {
		
			if (RapidCartPreferences.coupons.length == 0) {

				coupon = RapidCartBuilder.couponAdd();
				
			}
			
			else {
			
				coupon = RapidCartBuilder.couponRemove(total.discount);
			
			}
		
		}
		
		return RapidCartTemplates.items.substitute({

			items: itemHTML,
			coupon: coupon,
			buttons: RapidCartBuilder.button(RapidCartPreferences.iconCheckout, RapidCartPreferences.i18nCheckout, (RapidCartPreferences.paymentDisclaimer ? "rc.showDisclaimer();" : "rc.showCheckout(this);")) +
				RapidCartBuilder.button(RapidCartPreferences.iconHide, RapidCartPreferences.i18nHideCart, "rc.hideContent();") +
				RapidCartBuilder.button(RapidCartPreferences.iconEmpty, RapidCartPreferences.i18nEmptyCart, "rc.emptyCart();")

		});
	
	},
	
	couponAdd: function () {
	
		return RapidCartTemplates.couponAdd.substitute({
		
			text: RapidCartPreferences.i18nEnterCoupon,
			button: RapidCartBuilder.button(RapidCartPreferences.iconSearch, RapidCartPreferences.i18nCheckCoupon, "rc.checkCoupon(this);")
		
		});
	
	},
	
	couponRemove: function (discount) {
	
		return RapidCartTemplates.couponRemove.substitute({
		
			text: "(" + RapidCartPreferences.coupons[0].code + ") - " + RapidCartUtilities.numberFormat(discount, false),
			button: RapidCartBuilder.button(RapidCartPreferences.iconRemove, RapidCartPreferences.i18nCancelCoupon, "rc.removeCoupons();")
		
		});
	
	},
	
	disclaimer: function () {
	
		return RapidCartTemplates.slide.substitute({

			text: RapidCartPreferences.i18nDisclaimer,
			buttons: RapidCartBuilder.button(RapidCartPreferences.iconAgree, RapidCartPreferences.i18nAgree, "rc.showCheckout(this);") +
				RapidCartBuilder.button(RapidCartPreferences.iconBack, RapidCartPreferences.i18nBack, "rc.showItems();")

		});
	
	},
	
	order: function () {
	
		return RapidCartTemplates.order.substitute({

			info: RapidCartPreferences.i18nInfo,
			required: RapidCartPreferences.i18nRequired,
			buttons: RapidCartBuilder.button(RapidCartPreferences.iconSend, RapidCartPreferences.i18nSend, "rc.sendOrder(this);") +
				RapidCartBuilder.button(RapidCartPreferences.iconBack, RapidCartPreferences.i18nBack, "rc.showItems();"),
			emailField: RapidCartPreferences.orderEmailField,
			field1: this.orderField(1),
			field2: this.orderField(2),
			field3: this.orderField(3),
			field4: this.orderField(4),
			field5: this.orderField(5),
			field6: this.orderField(6),
			field7: this.orderField(7),
			field8: this.orderField(8),
			field9: this.orderField(9),
			field10: this.orderField(10),
			field11: this.orderField(11),
			field12: this.orderField(12),
			field13: this.orderField(13),
			field14: this.orderField(14),
			field15: this.orderNotes()

		});
		
	},
	
	orderField: function (i) {
	
		return RapidCartTemplates.orderField.substitute({
		
			i: i,
			label: RapidCartPreferences['orderField' + i],
			type: (RapidCartPreferences['orderField' + i] != "") ? "text" : "hidden",
			req: (RapidCartPreferences.orderRequired.charAt(i - 1) == 1) ? " *" : ""
		
		});
	
	},
	
	orderNotes: function () {
	
		if (RapidCartPreferences.orderField15 != "") {
		
			return RapidCartTemplates.orderNotes.substitute({
		
				label: RapidCartPreferences.orderField15,
				req: (RapidCartPreferences.orderRequired.charAt(14) == 1) ? " *" : ""
			
			});
		
		}
		
		return "";
	
	},
	
	thankYou: function () {
	
		return RapidCartTemplates.slide.substitute({

			text: RapidCartPreferences.i18nThankYou,
			buttons: RapidCartBuilder.button(RapidCartPreferences.iconHide, RapidCartPreferences.i18nClose, "rc.emptyCart();")

		});
	
	},
	
	checkout: function () {
	
		var paymentsHTML = "";
		var checked = true;
		
		if (RapidCartPreferences.paymentPaypal) {
		
			paymentsHTML += RapidCartTemplates.checkoutPayment.substitute({

				payment: RapidCartPreferences.i18nPaypal,
				value: "paypal",
				checked: checked ? "checked" : ""

			});
			
			checked = false;
		
		}
		
		if (RapidCartPreferences.paymentGoogle) {
		
			paymentsHTML += RapidCartTemplates.checkoutPayment.substitute({

				payment: RapidCartPreferences.i18nGoogle,
				value: "google",
				checked: checked ? "checked" : ""

			});
			
			checked = false;
		
		}
		
		if (RapidCartPreferences.paymentEjunkie) {
		
			paymentsHTML += RapidCartTemplates.checkoutPayment.substitute({

				payment: RapidCartPreferences.i18nEjunkie,
				value: "ejunkie",
				checked: checked ? "checked" : ""

			});
			
			checked = false;
		
		}
		
		if (RapidCartPreferences.paymentSisow) {
		
			paymentsHTML += RapidCartTemplates.checkoutPayment.substitute({

				payment: RapidCartPreferences.i18nSisow,
				value: "sisow",
				checked: checked ? "checked" : ""

			});
			
			checked = false;
		
		}
		
		if (RapidCartPreferences.paymentCard) {
		
			paymentsHTML += RapidCartTemplates.checkoutPayment.substitute({

				payment: RapidCartPreferences.i18nCard,
				value: "card",
				checked: checked ? "checked" : ""

			});
			
			checked = false;
		
		}
		
		if (RapidCartPreferences.paymentOrder) {
		
			paymentsHTML += RapidCartTemplates.checkoutPayment.substitute({

				payment: RapidCartPreferences.i18nOrder,
				value: "order",
				checked: checked ? "checked" : ""

			});
			
			checked = false;
		
		}
	
		return RapidCartTemplates.checkout.substitute({

			i18nPayment: RapidCartPreferences.i18nPayment,
			payments: paymentsHTML,
			buttons: RapidCartBuilder.button(RapidCartPreferences.iconTotal, RapidCartPreferences.i18nProceed, "rc.evalCheckout(this);") +
				RapidCartBuilder.button(RapidCartPreferences.iconBack, RapidCartPreferences.i18nBack, "rc.showItems();")

		});
	
	},
	
	button: function (icon, text, action) {
	
		return RapidCartTemplates.button.substitute({

			action: action,
			icon: RapidCartPreferences.generalPath + "/theme/" + icon,
			text: text

		});
	
	},
	
	paypal: function (items, shipping) {
	
		var i = 1;
		
		var itemsHTML = "";
		
		for (var k in items) {
		
			var item = RapidCartUtilities.getDiscount(items[k]);
		
			var optionsHTML = "";
			
			if (item.options.length > 0) {
		
				var j = 1;
			
				item.options.each(function (option) {
				
					optionsHTML += RapidCartTemplates.paypalOption.substitute({

						j: j,
						i: i,
						name: option.name.replace(/"/g, "&quot;"),
						value: option.value.replace(/"/g, "&quot;")

					});
				
					j++;
				
				});
			
			}
			
			itemsHTML += RapidCartTemplates.paypalItem.substitute({

				i: i,
				sku: item.sku.replace(/"/g, "&quot;"),
				name: item.name.replace(/"/g, "&quot;"),
				quantity: item.quantity,
				//price: item.price,
				price: item.price.toFixed(RapidCartPreferences.generalDecimals),
				shipping_1_code: (item.shipping_1 > 0) ? ("shipping_" + i) : "",
				shipping_1: (item.shipping_1 > 0) ? item.shipping_1 : "",
				shipping_2_code: (item.shipping_2 > 0) ? ("shipping2_" + i) : "",
				shipping_2: (item.shipping_2 > 0) ? item.shipping_2 : "",
				taxes_code: (item.taxes > 0) ? ("tax_" + i) : "",
				//taxes: (item.taxes > 0) ? item.taxes : "",
				taxes: (item.taxes > 0) ? item.taxes.toFixed(RapidCartPreferences.generalDecimals) : "",
				weight: item.weight,
				options: optionsHTML

			});
			
			i++;
			
		};
		
		if (shipping != 0) {
		
			itemsHTML += RapidCartTemplates.paypalItem.substitute({

				i: i,
				sku: "",
				name: RapidCartPreferences.shippingText,
				quantity: 1,
				price: shipping.toFixed(RapidCartPreferences.generalDecimals),
				shipping_1_code: "",
				shipping_1: "",
				shipping_2_code: "",
				shipping_2: "",
				taxes_code: "",
				taxes: "",
				weight: 0,
				options: ""

			});
		
		}
		
		var url = (RapidCartPreferences.generalReturnURL != "") ? RapidCartUtilities.decode64(RapidCartPreferences.generalReturnURL) : document.location.href.replace("?" + RapidCartPreferences.generalConfirmation, "").replace(/"/g, "&quot;");
		var confirmation = (RapidCartPreferences.generalReturnURL != "") ? "" : ("?" + RapidCartPreferences.generalConfirmation.replace(/"/g, "&quot;"));
		
		return RapidCartTemplates.paypal.substitute({

			paypal_url: RapidCartPreferences.paypalSandbox ? "https://www.sandbox.paypal.com/cgi-bin/webscr" : "https://www.paypal.com/cgi-bin/webscr",
			url: url,
			confirmation: confirmation,
			cancel_url: document.location.href.replace("?" + RapidCartPreferences.generalConfirmation, "").replace(/"/g, "&quot;"),
			account: RapidCartUtilities.decode64(RapidCartPreferences.paypalAccount).replace(/"/g, "&quot;"),
			currency: RapidCartPreferences.paypalCurrency,
			language_code: (RapidCartPreferences.paypalLanguage != "") ? "lc" : "",
			language: RapidCartPreferences.paypalLanguage,
			items: itemsHTML

		});
		
	},
	
	google: function (items, shippings) {
	
		var i = 1;
		var shipping = 0;
		var itemsHTML = "";
		
		for (var k in items) {
		
			var item = RapidCartUtilities.getDiscount(items[k]);
		
			var optionsHTML = "";
			
			if (item.options.length > 0) {
			
				item.options.each(function (option) {
				
					optionsHTML += RapidCartTemplates.googleOption.substitute({

						name: option.name.replace(/"/g, "&quot;"),
						value: option.value.replace(/"/g, "&quot;")

					});
				
				});
			
			}
			
			itemsHTML += RapidCartTemplates.googleItem.substitute({

				i: i,
				sku: item.sku.replace(/"/g, "&quot;"),
				name: item.name.replace(/"/g, "&quot;"),
				quantity: item.quantity,
				price: item.price,
				taxes: item.taxes / item.price,
				options: optionsHTML,
				currency: RapidCartPreferences.googleCurrency

			});
			
			shipping += item.shipping_1 + item.shipping_2 * (item.quantity - 1);
			i++;
			
		};
		
		if (shippings > 0) {
		
			itemsHTML += RapidCartTemplates.googleItem.substitute({

				i: i,
				sku: "",
				name: RapidCartPreferences.shippingText,
				quantity: 1,
				price: shippings,
				taxes: 0,
				options: "",
				currency: RapidCartPreferences.googleCurrency

			});
		
		}
		
		var url = (RapidCartPreferences.generalReturnURL != "") ? RapidCartUtilities.decode64(RapidCartPreferences.generalReturnURL) : document.location.href.replace("?" + RapidCartPreferences.generalConfirmation, "").replace(/"/g, "&quot;");
		var confirmation = (RapidCartPreferences.generalReturnURL != "") ? "" : ("?" + RapidCartPreferences.generalConfirmation.replace(/"/g, "&quot;"));
		
		return RapidCartTemplates.google.substitute({

			url: url,
			confirmation: confirmation,
			account: RapidCartUtilities.decode64(RapidCartPreferences.googleAccount).replace(/"/g, "&quot;"),
			items: itemsHTML,
			i18nShipping_code: (shipping != 0) ? "checkout-flow-support.merchant-checkout-flow-support.shipping-methods.flat-rate-shipping-1.name" : "",
			i18nShipping: RapidCartPreferences.i18nShipping,
			shipping_code: (shipping != 0) ? "checkout-flow-support.merchant-checkout-flow-support.shipping-methods.flat-rate-shipping-1.price" : "",
			shipping: shipping,
			currency_code: (shipping != 0) ? "checkout-flow-support.merchant-checkout-flow-support.shipping-methods.flat-rate-shipping-1.price.currency" : "",
			currency: RapidCartPreferences.googleCurrency,
			restrictions_code: (shipping != 0) ? "checkout-flow-support.merchant-checkout-flow-support.shipping-methods.flat-rate-shipping-1.shipping-restrictions.allowed-areas.world-area-1" : ""

		});
	
	},
	
	sisow: function (items, shipping) {
	
		var i = 1;
		
		var itemsHTML = "";
		
		for (var k in items) {
		
			var item = RapidCartUtilities.getDiscount(items[k]);
		
			var optionsHTML = "";
			
			if (item.options.length > 0) {
		
				var j = 1;
			
				item.options.each(function (option) {
				
					optionsHTML += RapidCartTemplates.sisowOption.substitute({

						j: j,
						i: i,
						name: option.name.replace(/"/g, "&quot;"),
						value: option.value.replace(/"/g, "&quot;")

					});
				
					j++;
				
				});
			
			}
			
			itemsHTML += RapidCartTemplates.sisowItem.substitute({

				i: i,
				sku: item.sku.replace(/"/g, "&quot;"),
				name: item.name.replace(/"/g, "&quot;"),
				quantity: item.quantity,
				price: item.price,
				shipping_1: (item.shipping_1 > 0) ? item.shipping_1 : "",
				shipping_2: (item.shipping_2 > 0) ? item.shipping_2 : "",
				taxes: (item.taxes > 0) ? item.taxes : "",
				options: optionsHTML

			});
			
			i++;
			
		};
		
		if (shipping != 0) {
		
			itemsHTML += RapidCartTemplates.sisowItem.substitute({

				i: i,
				sku: "",
				name: RapidCartPreferences.shippingText,
				quantity: 1,
				price: shipping,
				shipping_1: "",
				shipping_2: "",
				taxes: "",
				options: ""

			});
		
		}
		
		var url = (RapidCartPreferences.generalReturnURL != "") ? RapidCartUtilities.decode64(RapidCartPreferences.generalReturnURL) : document.location.href.replace("?" + RapidCartPreferences.generalConfirmation, "").replace(/"/g, "&quot;");
		var confirmation = (RapidCartPreferences.generalReturnURL != "") ? "" : ("?" + RapidCartPreferences.generalConfirmation.replace(/"/g, "&quot;"));
		
		return RapidCartTemplates.sisow.substitute({

			url: url,
			confirmation: confirmation,
			cancel_url: document.location.href.replace("?" + RapidCartPreferences.generalConfirmation, "").replace(/"/g, "&quot;"),
			account: RapidCartUtilities.decode64(RapidCartPreferences.sisowAccount).replace(/"/g, "&quot;"),
			signature: RapidCartUtilities.decode64(RapidCartPreferences.sisowSignature).replace(/"/g, "&quot;"),
			currency: RapidCartPreferences.paypalCurrency,
			items: itemsHTML

		});
		
	},
	
	orderYes: function () {
	
		return RapidCartTemplates.slide.substitute({

			text: RapidCartPreferences.i18nOrderYes,
			buttons: RapidCartBuilder.button(RapidCartPreferences.iconHide, RapidCartPreferences.i18nClose, "rc.emptyCart();")

		});
	
	},
	
	orderNo: function (error) {
	
		return RapidCartTemplates.slide.substitute({

			text: RapidCartPreferences.i18nOrderNo + "<br />(" + error + ")",
			buttons: RapidCartBuilder.button(RapidCartPreferences.iconBack, RapidCartPreferences.i18nBack, "rc.showOrder();")

		});
	
	},
	
	orderMail: function (text, customer) {
	
		return text.substitute({
		
			field1: customer.field1,
			field2: customer.field2,
			field3: customer.field3,
			field4: customer.field4,
			field5: customer.field5,
			field6: customer.field6,
			field7: customer.field7,
			field8: customer.field8,
			field9: customer.field9,
			field10: customer.field10,
			field11: customer.field11,
			field12: customer.field12,
			field13: customer.field13,
			field14: customer.field14,
			field15: customer.field15
		
		});
	
	}
	
}

var RapidCartUtilities = {

	numberFormat: function (number, plus) {
	
		var sign = (number < 0) ? "- " : ((plus) ? "+ " : "");
		
		number = Math.abs(number).toFixed(RapidCartPreferences.generalDecimals);
		
		while (number.match(/^(.*\d)(\d{3}(\.|,|$).*$)/)) {
		
			number = number.replace(/^(.*\d)(\d{3}(\.|,|$).*$)/, "$1,$2");
			
		}
		
		if (RapidCartPreferences.generalSeparator != ".") {
		
			number = number.replace(".", "#").replace(",", ".").replace("#", ",");
		
		}
	
		if (RapidCartPreferences.generalCurrencyPosition == "left") {
		
			return sign + RapidCartPreferences.generalCurrency + (RapidCartPreferences.generalCurrencySpace ? " " : "") + number;
			
		}
		
		else {
		
			return sign + number + (RapidCartPreferences.generalCurrencySpace ? " " : "") + RapidCartPreferences.generalCurrency;
			
		}
	
	},
	
	getDiscount: function (item) {
	
		item = $extend({}, item);
		
		var discounted = new Array();
	
		for (var i = 0; i < RapidCartPreferences.coupons.length; i++) {
		
			if (RapidCartPreferences.coupons[i].code != "" && item.sku == RapidCartPreferences.coupons[i].apply && discounted.indexOf(item.sku) == -1) {
			
				discounted.push(item.sku);
			
				switch (RapidCartPreferences.coupons[i].type) {
			
					case "%":
						
						item.price -= item.price * RapidCartPreferences.coupons[i].value / 100;
						item.taxes -= item.taxes * RapidCartPreferences.coupons[i].value / 100;
						
					break;
		
					case "$":
					
						var price = item.price * RapidCartPreferences.coupons[i].value / (item.price + item.taxes);
						var taxes = item.taxes * RapidCartPreferences.coupons[i].value / (item.price + item.taxes);
						
						item.price -= price;
						item.taxes -= taxes;
					
					break;
				
				}
						
				item.name += " (" + RapidCartPreferences.coupons[i].text + ")";
				
			}
		
		}
		
		//item.price = item.price.toFixed(2);
		//item.taxes = item.taxes.toFixed(2);
		
		return item;
	
	},
	
	showLoader: function (button) {
		
		button.firstChild.setAttribute("title", button.firstChild.src);
		button.firstChild.src = RapidCartPreferences.generalPath + "/theme/" + RapidCartPreferences.iconLoader;
	
	},
	
	hideLoader: function (button) {
		
		button.firstChild.src = button.firstChild.getAttribute("title");
	
	},
	
	loadForm: function (button, form) {
	
		this.showLoader(button);
		
		new Element("div", {

			"html": form,
			"style": "display: none"

		}).inject(document.body);
		
		setTimeout(function () {
		
			if (RapidCartPreferences.generalReturnURL != "") {
			
				rc.emptyCart();
			
			}
			
			$("rcCartForm").submit();
			$("rcCartForm").dispose();
		
		}, 500);
	
	},
	
	getStylesheet: function () {
	
		for (var i = document.styleSheets.length - 1; i >= 0; i--) {
		
			var media = document.styleSheets[i].media
		
			if(typeof (media) == "string") {
				
				if (document.styleSheets[i].media == "all") {
				
					return document.styleSheets[i];
				
				}
			
			}
			
			else {
				
				for (var j = 0; j < media.length; j++) {
				
					if (media.item(j) == "all") {
					
						return document.styleSheets[i];
					
					}
			
				}
			
			}
		
		}
		
		return document.styleSheets[0];
	
	},
	
	setStyle: function (sheet, selector, style) {
	
		if (sheet.insertRule) {
		
			sheet.insertRule(selector + " { " + style + "; }", sheet.cssRules.length);
			
		}
		
		else {
		
			sheet.addRule(selector, style);
			
		}
		
	},
	
	decode64: function (string) {
	
		var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		
		
		string = string.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		
		do {
		
			enc1 = key.indexOf(string.charAt(i++));
			enc2 = key.indexOf(string.charAt(i++));
			enc3 = key.indexOf(string.charAt(i++));
			enc4 = key.indexOf(string.charAt(i++));
			
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
			
			output += String.fromCharCode(chr1);
			
			if (enc3 != 64) {
			
				output += String.fromCharCode(chr2);
				
			}
			
			if (enc4 != 64) {
			
				output += String.fromCharCode(chr3);
				
			}
			
		} while (i < string.length);
		
		return output;
		
	},
	
	cloneElement: function (element) {
	
		var position = element.getPosition();
		var size = element.getSize();
	
		return element.clone().setStyles({
		
			position: "absolute",
			left: position.x + "px",
			top: position.y + "px",
			width: size.x + "px",
			height: size.y + "px",
			zIndex: $("rcCart").getStyle("z-index") + 1
		
		}).inject($(document.body));
	
	},
	
	getId: function (options) {
	
		var string = "";
		
		options.each(function (option) {
		
			string += "-" + option.id;
		
		});
		
		return string;
	
	},
	
	getPrice: function (id) {
	
		var price = 0;
		var taxes = 0;
		var weight = 0;
	
		$("rcItem" + id).getElements("option").each(function (option) {
		
			if (option.selected) {
			
				price += option.getAttribute("price").toFloat();
				taxes += option.getAttribute("taxes").toFloat();
				weight += option.getAttribute("weight").toFloat();
			
			}
		
		});
	
		return {
			price: price,
			taxes: taxes,
			weight: weight
		};
	
	},
	
	shrinkCart: function (cart) {
	
		/*
		{
			"347805248Small": {
				k	"sku": "T-SHIRT_1",
				n	"name": "T-Shirt 1",
				p	"price": 15,
				t	"taxes": 0,
				s1	"shipping_1": 0,
				s2	"shipping_2": 0,
				l	"limit": 0,
				w	"weight: 3,
				q	"quantity": 1,
				i	"image": "http://localhost:8888/rapidcart26/files/347805248_thumb.png",
					"id": "347805248Small",
				o	"options": [
					{
						n	"name": "New Product Option",
						v	"value": "Small"
					}
				]
			}
		}
		*/
	
		for (var i in cart) {
		
			// id
			delete cart[i].id;
		
			// sku
			cart[i].k = cart[i].sku;
			delete cart[i].sku;
		
			// name
			cart[i].n = cart[i].name;
			delete cart[i].name;
			
			// price
			cart[i].p = cart[i].price;
			delete cart[i].price;
			
			// taxes
			if (cart[i].taxes != 0) {
			
				cart[i].t = cart[i].taxes;
			
			}
			delete cart[i].taxes;
			
			// shipping_1
			if (cart[i].shipping_1 != 0) {
			
				cart[i].s1 = cart[i].shipping_1;
			
			}
			delete cart[i].shipping_1;
			
			// shipping_2
			if (cart[i].shipping_2 != 0) {
			
				cart[i].s2 = cart[i].shipping_2;
			
			}
			delete cart[i].shipping_2;
			
			// limit
			if (cart[i].limit != 0) {
			
				cart[i].l = cart[i].limit;
			
			}
			delete cart[i].limit;
			
			// weight
			if (cart[i].weight != 0) {
			
				cart[i].w = cart[i].weight;
			
			}
			delete cart[i].weight;
			
			// quantity
			cart[i].q = cart[i].quantity;
			delete cart[i].quantity;
			
			// options
			if (cart[i].options) {
			
				cart[i].o = new Array();
				cart[i].options.each(function (option) {
				
					cart[i].o.push({
					
						n: option.name,
						v: option.value
					
					});
				
				});
				delete cart[i].options;
				
			}
			
			// image
			var location = new URI(cart[i].image);
			var replace = "";
			
			if (location.get("scheme") != "file") {

				replace = location.get("scheme") + "://" + location.get("host");
				
				if (location.get("port") != 80) {
				
					replace += ":" + location.get("port");
				
				}
				
			}
			
			cart[i].i = cart[i].image.replace(replace, "");
			delete cart[i].image;
		
		}
		
		return cart;
	
	},
	
	unshrinkCart: function (cart) {
	
		try {
		
			for (var i in cart) {
		
				// id
				cart[i].id = i;
			
				// sku
				cart[i].sku = cart[i].k;
				delete cart[i].k;
			
				// name
				cart[i].name = cart[i].n;
				delete cart[i].n;
				
				// price
				cart[i].price = cart[i].p;
				delete cart[i].p;
				
				// taxes
				cart[i].taxes = cart[i].t || 0;
				delete cart[i].t;
				
				// shipping_1
				cart[i].shipping_1 = cart[i].s1 || 0;
				delete cart[i].s1;
				
				// shipping_2
				cart[i].shipping_2 = cart[i].s2 || 0;
				delete cart[i].s2;
				
				// limit
				cart[i].limit = cart[i].l || 0;
				delete cart[i].l;
				
				// limit
				cart[i].weight = cart[i].w || 0;
				delete cart[i].w;
				
				// quantity
				cart[i].quantity = cart[i].q;
				delete cart[i].q;
				
				// options
				if (cart[i].o) {
				
					cart[i].options = new Array();
					cart[i].o.each(function (option) {
					
						cart[i].options.push({
						
							name: option.n,
							value: option.v
						
						});
					
					});
					delete cart[i].o;
					
				}
				
				// image
				var location = new URI(document.location);
				var replace = "";
				
				if (location.get("scheme") != "file") {
				
					replace = location.get("scheme") + "://" + location.get("host");
					
					if (location.get("port") != 80) {
					
						replace += ":" + location.get("port");
					
					}
					
				}
				
				cart[i].image = replace + cart[i].i;
				delete cart[i].i;
			
			}
			
			return cart;
			
		}
		
		catch (e) {
		
			return {};
		
		}
	
	},
	
	updatePrice: function (id) {
	
		var item = $("rcItem" + id).toQueryString().parseQueryString();
		var price = item.price.toFloat() + (RapidCartPreferences.generalShowTaxes ? item.taxes.toFloat() : 0);
		
		$$("#rcItem" + id + " select").each(function (option) {
		
			price += option.getSelected()[0].getAttribute("price").toFloat() + (RapidCartPreferences.generalShowTaxes ? option.getSelected()[0].getAttribute("taxes").toFloat() : 0);
		
		});
	
		$$("#rcItem" + id + " .rcItemPrice")[0].innerHTML = RapidCartUtilities.numberFormat(price, false);
	
	},
	
	updateOptions: function (option) {
	
		var variation = option.getSelected()[0].getAttribute("price").toFloat() + (RapidCartPreferences.generalShowTaxes ? option.getSelected()[0].getAttribute("taxes").toFloat() : 0);
	
		$A(option.options).each(function (opt) {
		
			var shift = opt.getAttribute("price").toFloat() + (RapidCartPreferences.generalShowTaxes ? opt.getAttribute("taxes").toFloat() : 0);
		
			if (opt.selected) {
			
				opt.innerHTML = opt.value;
			
			}
			
			else {
			
				opt.innerHTML = opt.value + ((shift - variation != 0) ? " [ " + RapidCartUtilities.numberFormat(shift - variation, true) + " ]" : "");
			
			}
		
		});
	},
	
	paymentsList: function () {
	
		var payments = new Array();
	
		if (RapidCartPreferences.paymentOrder) {
		
			payments.push("order");
		
		}
	
		if (RapidCartPreferences.paymentPaypal) {
		
			payments.push("paypal");
		
		}
	
		if (RapidCartPreferences.paymentGoogle) {
		
			payments.push("google");
		
		}
	
		if (RapidCartPreferences.paymentEjunkie) {
		
			payments.push("ejunkie");
		
		}
	
		if (RapidCartPreferences.paymentSisow) {
		
			payments.push("sisow");
		
		}
	
		if (RapidCartPreferences.paymentCard) {
		
			payments.push("card");
		
		}
		
		return payments;
	
	}

}

var RapidCartCookies = {

	create: function (name, value, hours) {
	
		var date = new Date();
		
		date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
		
		document.cookie = name + "=" + value + "; expires=" + date.toGMTString() + "; path=/";
	
	},

	load: function () {
	
		var i = 0;
		var cart = "";
	
		while (Cookie.read(RapidCartPreferences.generalCookie + i)) {
		
			cart += Cookie.read(RapidCartPreferences.generalCookie + i);
			
			i++;
		
		}
		
		try {
		
			return JSON.decode(unescape(cart)) || {};
			
		}
		
		catch (e) {
		
			return {};
		
		}
	
	},
	
	save: function (cart) {
	
		cart = encodeURI(JSON.encode(cart));
		
		cart = cart.replace(/%7B/g, "{");
		cart = cart.replace(/%7D/g, "}");
		cart = cart.replace(/%22/g, "\"");
		
		// fix for semicolon char
		cart = cart.replace(";", "%3B");
		
		var size = 4000;
		var i = 0;
	
		while (Cookie.read(RapidCartPreferences.generalCookie + i)) {
		
			Cookie.dispose(RapidCartPreferences.generalCookie + i, {
			
				path: "/"
			
			});
			
			i++;
		
		}
		
		for (var i = 0; i < cart.length / size; i++) {
		
			RapidCartCookies.create(RapidCartPreferences.generalCookie + i, cart.substr(i * size, size), RapidCartPreferences.generalExpiration);
		
		}
	
	}

}

var RapidCartEffects = {
	
	showCart: function () {
	
		new Fx.Reveal($("rcCart"), {
		
			duration: RapidCartPreferences.styleDuration
		
		}).reveal();
	
	},
	
	showContent: function () {
	
		var fx;
	
		if ($(window).getScroll().y != 0) {
		
			fx = new Fx.Scroll($(document.body), {
			
				duration: RapidCartPreferences.styleDuration
			
			}).toTop();
			
			fx.addEvent("complete", function () {
			
				$("rcCart").setStyle("position", "absolute");
			
			});
		
		}
		
		else {
		
			$("rcCart").setStyle("position", "absolute");
		
		}
		
		fx = new Fx.Reveal($("rcContent"), {
		
			duration: RapidCartPreferences.styleDuration
			
		}).reveal();
		
		fx.addEvent("complete", function () {
		
			rc.updateHeader();
			
			RapidCartPreferences.generalEffect = true;
		
		});
	
	},
	
	hideContent: function () {
	
		var fx = new Fx.Reveal($("rcContent"), {
		
			duration: RapidCartPreferences.styleDuration
			
		}).dissolve();
		
		fx.addEvent("complete", function () {
		
			$("rcContent").innerHTML = "";
			
			rc.updateHeader();
			
			RapidCartPreferences.generalEffect = true;
			
			fx = new Fx.Morph($("rcCart"), {
		
				duration: RapidCartPreferences.styleDuration
				
			});
			
			fx.start({
			
				"top": $(window).getScroll().y
			
			});
			
			fx.addEvent("complete", function () {
			
				$("rcCart").setStyle("top", "0px");
				$("rcCart").setStyle("position", "fixed");
			
			});
		
		});
	
	},
	
	replaceContent: function (content) {
	
		var fx;
		
		new Fx.Scroll($(document.body), {
		
			duration: RapidCartPreferences.styleDuration
		
		}).toTop();
	
		if ($("rcContent").innerHTML != "") {
		
			fx = new Fx.Morph($("rcContent").getChildren()[0], {
			
				duration: RapidCartPreferences.styleDuration
			
			});
			
			fx.start({
			
				"opacity": 0
			
			});
			
			fx.addEvent("complete", function () {
			
				$("rcContent").innerHTML = content;
				
				$("rcContent").getChildren()[0].show();
			
			});
			
		}
		
		else {
				
			$("rcContent").innerHTML = content;
		
		}
	
	},
	
	emptyCart: function () {
		
		var element = RapidCartUtilities.cloneElement($("rcCartItemsIcon"));
		
		$("rcCartItemsIcon").src = RapidCartPreferences.generalPath + "/theme/" + RapidCartPreferences.iconCartEmpty;
		
		this.hideContent();
		
		var fx = new Fx.Morph(element, {
		
			duration: RapidCartPreferences.styleDuration
			
		});
		
		var size = element.getSize();
		var position = element.getPosition();
		
		fx.start({
		
			"width": size.x * 3,
			"height": size.y * 3,
			"top": position.y - size.y,
			"left": position.x - size.x,
			"opacity": 0
		
		});
		
		fx.addEvent("complete", function () {
		
			element.dispose();
		
		});
		
	},
	
	addItem: function (item, button) {
	
		var element = RapidCartUtilities.cloneElement($("rcThumb" + item));
		
		var fx = new Fx.Morph(element, {
		
			duration: RapidCartPreferences.styleDuration
			
		});
		
		var position = $("rcCartItemsIcon").getPosition();
		var size = $("rcCartItemsIcon").getSize();
		
		fx.start({
		
			"top": position.y,
			"left": position.x,
			"width": size.x,
			"height": size.y
		
		});
		
		fx.addEvent("complete", function () {
		
			rc.updateHeader();
			
			if ($("rcContent").innerHTML != "") {
				
				rc.updateItems();
				
			}
		
			fx = new Fx.Morph(element, {
		
				duration: RapidCartPreferences.styleDuration
			
			});
			
			var position = $("rcCartItemsIcon").getPosition();
			var size = $("rcCartItemsIcon").getSize();
			
			fx.start({
			
				"top": position.y + size.y / 2,
				"left": position.x + size.x / 2,
				"width": 0,
				"height": 0
				
			});
			
			fx.addEvent("complete", function () {
			
				element.dispose();
				button.disabled = false;
			
			});
		
		});
	
	},
	
	requiredField: function (element) {
		
		if (RapidCartPreferences.generalEffect) {
	
			RapidCartPreferences.generalEffect = false;
	
			var fx = new Fx.Tween(element, {
				
				duration: RapidCartPreferences.styleDuration / 2,
				link: "chain"
				
			});
			
			fx.addEvent("chainComplete", function () {
			
				RapidCartPreferences.generalEffect = true;
			
			});
			
			var color = element.getStyle("background-color");
				
			fx.start("background-color", color, "#ff0000");
			fx.start("background-color", "#ff0000", color);
			fx.start("background-color", color, "#ff0000");
			fx.start("background-color", "#ff0000", color);
			
			element.focus();
		
		}
		
	}

}

var RapidCart = new Class({

	initialize: function () {
	
		this.setPreferences();
		
		this.cart = RapidCartUtilities.unshrinkCart(RapidCartCookies.load());
	
		this.buildPage();
		this.updateHeader();
		this.setStyles();
		
		RapidCartEffects.showCart();
	
		this.checkPayment();
	
	},
	
	setPreferences: function () {
	
		RapidCartPreferences = $extend(RapidCartDefaults, RapidCartPreferences);
		
		if (RapidCartPreferences.generalCookie == "") {
		
			RapidCartPreferences.generalCookie = "RapidCart";
		
		}
	
	},
	
	buildPage: function () {
		
		var page = RapidCartBuilder.page(RapidCartPreferences.generalCompatibility);
	
		if (RapidCartPreferences.generalCompatibility) {
		
			page.adopt($(document.body).getChildren());
		
			$(document.body).empty();
			$(document.body).adopt(page);
		
		}
		
		else {
	
			page.inject($(document.body).getChildren()[0], "before");
		
		}
	
	},
	
	setStyles: function () {
	
		var sheet = RapidCartUtilities.getStylesheet();
		
		RapidCartUtilities.setStyle(sheet, ".rcCartImage img", "width: " + RapidCartPreferences.styleImage + "px");
		RapidCartUtilities.setStyle(sheet, ".rcCartImage img", "background-color: #" + RapidCartPreferences.colorImage);
		RapidCartUtilities.setStyle(sheet, ".rcCartTools img", "background-color: #" + RapidCartPreferences.colorImage);
		RapidCartUtilities.setStyle(sheet, ".rcCartName", "margin-left: " + RapidCartPreferences.styleImage + "px");
		RapidCartUtilities.setStyle(sheet, ".rcCartName", "margin-right: " + RapidCartPreferences.styleColumn);
		RapidCartUtilities.setStyle(sheet, ".rcCartPrices", "width: " + RapidCartPreferences.styleColumn);
		RapidCartUtilities.setStyle(sheet, ".rcButton", "background-color: #" + RapidCartPreferences.colorButton);
		RapidCartUtilities.setStyle(sheet, ".rcBackground", "background-color: #" + RapidCartPreferences.colorCart);
	
		$("rcContainer").setStyle("width", RapidCartPreferences.styleWidth);
		
		$("rcCart").setStyle("fontSize", RapidCartPreferences.styleFont);
		$("rcCart").setStyle("color", "#" + RapidCartPreferences.colorText);
		$("rcCart").setStyle("border-color", "#" + RapidCartPreferences.colorBorder);
		
		if (RapidCartPreferences.generalCompatibility) {
		
			$("rcPage").setStyle("padding", $(document.body).getStyle("padding"));
			$("rcPage").setStyle("margin", $(document.body).getStyle("margin"));
			
		}
		
		$(document.body).setStyle("padding", $("rcCart").getDimensions().y + "px 0px 0px 0px");
		$(document.body).setStyle("margin", "0px");
		
		if ($(document.body).getStyle("backgroundPosition")) {
		
			var left = $(document.body).getStyle("backgroundPosition").substr(0, $(document.body).getStyle("backgroundPosition").search(" "));
			var top = $(document.body).getStyle("backgroundPosition").substr($(document.body).getStyle("backgroundPosition").search(" ") + 1);
			
			if (top.search("px") != -1 || top == "0%" || top == "top") {
			
				top = (top.toInt() + $("rcCart").getDimensions().y) + "px";
			
			}
			
			$(document.body).setStyle("backgroundPosition", left + " " + top);
			
		}
	
	},
	
	updateHeader: function () {
		
		this.cart = RapidCartUtilities.shrinkCart(this.cart);
		
		RapidCartCookies.save(this.cart);
		
		this.cart = RapidCartUtilities.unshrinkCart(this.cart);
	
		var cart = this.getTotal();
		
		$("rcHeader").innerHTML = RapidCartBuilder.header(cart.items, cart.total - cart.discount);
	
	},
	
	updateItems: function () {
	
		var cart = this.getTotal();
		
		if (cart.items > 0) {
	
			$("rcContent").innerHTML = RapidCartBuilder.items(this.cart, cart);
			
		}
		
		else {
		
			RapidCartEffects.emptyCart();
			this.hideContent();
		
		}
		
	},
	
	toggleContent: function () {
	
		if (!this.isCartEmpty() && RapidCartPreferences.generalEffect) {
		
			RapidCartPreferences.generalEffect = false;
	
			if ($("rcContent").innerHTML == "") {
	
				this.showContent();
	
			}
	
			else {
			
				this.hideContent();
				
			}
			
		}
	
	},
	
	showContent: function () {
	
		this.showItems();
		
		RapidCartEffects.showContent();
	
	},
	
	hideContent: function () {
	
		RapidCartEffects.hideContent();
	
	},
	
	showItems: function () {
	
		var total = this.getTotal();
	
		RapidCartEffects.replaceContent(RapidCartBuilder.items(this.cart, total));
		
	},
	
	showCheckout: function (button) {
	
		var payments = RapidCartUtilities.paymentsList();
		
		if (payments.length == 1) {
		
			this.evalCheckout(button);
		
		}
		
		else {
	
			RapidCartEffects.replaceContent(RapidCartBuilder.checkout(this.cart));
		
		}
	
	},
	
	showDisclaimer: function () {
	
		RapidCartEffects.replaceContent(RapidCartBuilder.disclaimer());
		
	},
	
	showOrder: function () {
	
		RapidCartEffects.replaceContent(RapidCartBuilder.order());
		
	},
	
	showOrderYes: function () {
	
		this.cart = {};
		this.updateHeader();
			
		if (RapidCartPreferences.generalReturnURL != "")  {
				
			document.location.href = RapidCartUtilities.decode64(RapidCartPreferences.generalReturnURL);
			
		}
		
		else {
		
			RapidCartEffects.replaceContent(RapidCartBuilder.orderYes());
			
		}
		
	},
	
	showOrderNo: function (error) {
	
		RapidCartEffects.replaceContent(RapidCartBuilder.orderNo(error));
		
	},
	
	showThankYou: function () {
	
		$("rcContent").innerHTML = RapidCartBuilder.thankYou();
		
		RapidCartEffects.showContent();
		
	},
	
	isCartEmpty: function () {
	
		for (var i in this.cart) {
	
			return false;
	
		}
	
		return true;
	
	},
	
	emptyCart: function () {
		
		this.cart = {};
		
		this.updateItems();
		this.updateHeader();
	
	},
	
	getTotal: function () {
	
		var items = 0;
		var total = 0;
		var weight = 0;
		var shipping = 0;
		var discount = 0;
		
		for (var i in this.cart) {
		
			items += this.cart[i].quantity;
			total += (this.cart[i].price + this.cart[i].taxes) * this.cart[i].quantity + this.cart[i].shipping_1 + this.cart[i].shipping_2 * (this.cart[i].quantity - 1);
			weight += this.cart[i].weight * this.cart[i].quantity;
			
			var item = RapidCartUtilities.getDiscount(this.cart[i]);
			
			discount += (this.cart[i].price + this.cart[i].taxes - item.price - item.taxes) * this.cart[i].quantity;
		
		}
		
		if (items > 0) {
		
			for (var i in RapidCartPreferences.shippingRules) {
				
				if (((RapidCartPreferences.shippingType == "price") ? total : ((RapidCartPreferences.shippingType == "weight") ? weight: items)) <= RapidCartPreferences.shippingRules[i][0] || RapidCartPreferences.shippingRules[i][0] == 0) {
				
					shipping = RapidCartPreferences.shippingRules[i][1];
					break;
				
				}
			
			}
			
		}
		
		return {
		
			items: items,
			shipping: shipping,
			total: total + shipping,
			weight: weight,
			discount: discount
			
		};
	
	},
	
	updateCart: function (id, item) {
		
		var limit = item.limit.toInt();
		
		if (this.cart[id]) {
			
			this.cart[id].quantity += (limit == 0 || this.cart[id].quantity + item.quantity <= limit) ? item.quantity : 0;
		
		}
		
		else {
			
			item.id = id;
			item.quantity = (limit == 0) ? item.quantity : Math.min(item.quantity, limit);
			
			this.cart[id] = item;
			
		}
		
	},
	
	addItem: function (id, button) {
		console.log('id: ' + id);
		console.log('button: ' + button);
		var item = $("rcItem" + id).toQueryString().parseQueryString();
		var variation = RapidCartUtilities.getPrice(id);
		
		item.quantity = (item.quantity || 1).toInt();
		item.price = (item.price || 0).toFloat() + variation.price;
		item.taxes = (item.taxes || 0).toFloat() + variation.taxes;
		item.weight = (item.weight || 0).toFloat() + variation.weight;
		item.shipping_1 = (item.shipping_1 || 0).toFloat();
		item.shipping_2 = (item.shipping_2 || 0).toFloat();
		
		item.options = [];
		
		if (item.quantity > 0) {
		
			button.disabled = true;
		
			delete(item.rcItemOptionName);
			delete(item.rcItemOptionValue);
		
			item.image = $("rcThumb" + id).src;
			
			for (var i = 0; i < $$("#rcItem" + id + " *[name=rcItemOptionName]").length; i++) {
			
				var name = $$("#rcItem" + id + " *[name=rcItemOptionName]")[i].value; 
				var value = $$("#rcItem" + id + " *[name=rcItemOptionValue]")[i].value;
				
				item.options.push({
				
					name: name,
					value: value,
					id: $$("#rcItem" + id + " *[name=rcItemOptionValue]")[i].selectedIndex ? $$("#rcItem" + id + " *[name=rcItemOptionValue]")[i].selectedIndex : value.replace("\"", "*")
					
				});
		
			}
			
			this.updateCart(id + RapidCartUtilities.getId(item.options), item);
			
			RapidCartEffects.addItem(id, button);
		
		}
	
	},
	
	setQuantity: function (item, quantity) {
	
		if (quantity != 0) {
		
			var limit = this.cart[item].limit.toInt();
		
			this.cart[item].quantity = (limit == 0 || quantity <= limit) ? quantity : limit;
		
		}
		
		else {
		
			delete this.cart[item];
		
		}
		
		this.updateItems();
		this.updateHeader();
	
	},
	
	evalCheckout: function (button) {
	
		var total = this.getTotal();
		var payments = RapidCartUtilities.paymentsList();
		
		if (payments.length > 1) {
	
			var payment = "";
			
			$("rcContent").getElements('[name="rcPayment"]').each(function (element) {
			
				if (element.checked) {
				
					payment = element.value;
					return;
				
				}
			
			});
		
		}
		
		else {
		
			payment = payments[0];
		
		}
		
		switch (payment) {
		
			case "paypal":
			
				RapidCartUtilities.loadForm(button, RapidCartBuilder.paypal(this.cart, total.shipping));
				
			break;
			
			case "google":
			
				RapidCartUtilities.loadForm(button, RapidCartBuilder.google(this.cart, total.shipping));
				
			break;
			
			case "ejunkie":
	
				RapidCartUtilities.showLoader(button);
				
				this.ajaxEjunkie();
				
			break;
		
			case "sisow":
			
				RapidCartUtilities.loadForm(button, RapidCartBuilder.sisow(this.cart, total.shipping));
				
			break;
			
			case "order":
			
				this.showOrder();
			
			break;
			
			case "card":
			
			break;
		
		}
	
	},
	
	sendOrder: function (button) {
	
		var email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		
		for (var i = 1; i < 16; i++) {
		
			if (RapidCartPreferences.orderRequired.charAt(i - 1) == 1 && ($("rcField" + i).value == "" || (i == RapidCartPreferences.orderEmailField && !email.test($("rcField" + RapidCartPreferences.orderEmailField).value)))) {
			
				RapidCartEffects.requiredField($("rcField" + i));
				return;
			
			}
		
		}
		
		RapidCartUtilities.showLoader(button);
			
		this.ajaxOrder();
	
	},
	
	ajaxOrder: function () {
	
		var cart = {};
		var total = this.getTotal();
		
		for (var i in this.cart) {
		
			cart[i] = RapidCartUtilities.getDiscount(this.cart[i]);
		
		}
		
		var customer = $("rcCartForm").toQueryString().parseQueryString();
		var order = encodeURIComponent(JSON.encode({
		
			mail: {
		
				to: RapidCartUtilities.decode64(RapidCartPreferences.orderAccount),
				subject: RapidCartBuilder.orderMail(RapidCartPreferences.orderSubject, customer),
				enableuid: RapidCartPreferences.orderEnableUID,
				prefix: RapidCartPreferences.orderPrefix,
				text: RapidCartBuilder.orderMail(RapidCartPreferences.orderText, customer),
				currency: RapidCartPreferences.generalCurrency,
				position: RapidCartPreferences.generalCurrencyPosition,
				space: RapidCartPreferences.generalCurrencySpace,
				decimals: RapidCartPreferences.generalDecimals,
				separator: RapidCartPreferences.generalSeparator,
				info: RapidCartPreferences.i18nInfo,
				products: RapidCartPreferences.i18nProducts,
				field1: RapidCartPreferences.orderField1,
				field2: RapidCartPreferences.orderField2,
				field3: RapidCartPreferences.orderField3,
				field4: RapidCartPreferences.orderField4,
				field5: RapidCartPreferences.orderField5,
				field6: RapidCartPreferences.orderField6,
				field7: RapidCartPreferences.orderField7,
				field8: RapidCartPreferences.orderField8,
				field9: RapidCartPreferences.orderField9,
				field10: RapidCartPreferences.orderField10,
				field11: RapidCartPreferences.orderField11,
				field12: RapidCartPreferences.orderField12,
				field13: RapidCartPreferences.orderField13,
				field14: RapidCartPreferences.orderField14,
				field15: RapidCartPreferences.orderField15,
				products: RapidCartPreferences.i18nProducts,
				price: RapidCartPreferences.i18nPrice,
				taxes: RapidCartPreferences.i18nTaxes,
				shipping: RapidCartPreferences.i18nShipping,
				subtotal: RapidCartPreferences.i18nSubtotal,
				total: RapidCartPreferences.i18nTotal,
				coupon: (RapidCartPreferences.coupons.length > 0) ? RapidCartPreferences.coupons[0].code + " ( - " + RapidCartUtilities.numberFormat(total.discount, false) + " )" : "",
				shippingstext: RapidCartPreferences.shippingText,
				shippingstotal: total.shipping
		
			},
			customer: customer,
			cart: cart
		
		}));
		
		var request = new Request({
		
			url: RapidCartPreferences.generalPath + "/rapidcart/" + RapidCartPreferences.generalOrderMailer
			
		});
		
		request.send("order=" + order);
		
		request.addEvent("success", function (response) {
		
			if (response.clean() == "YES") {
				
				rc.showOrderYes();
			
			}
			
			else {
			
				rc.showOrderNo(response);
				
			}
		
		});
		
		request.addEvent("failure", function () {
		
			rc.showOrderNo("DIRECT ORDER REQUIRES PUBLISHING");
		
		});
	
	},
	
	ajaxEjunkie: function () {
	
		var url = "http://www.e-junkie.com/ecom/gb.php?c=cart&ejc=2&cl=" + RapidCartUtilities.decode64(RapidCartPreferences.ejunkieAccount);
		var items = new Array();
		
		for (var i in this.cart) {
		
			var options = "";
			var l = 0;
			
			this.cart[i].options.each(function (option) {
				
				options += "&on" + l + "=" + option.name + "&os" + l + "=" + option.value;
				l++;
				
			});
		
			items.push(url + "&i=" + this.cart[i].sku + "&quantity=" + this.cart[i].quantity + options)
		
		}
		
		EJEJC_multiAdd(items);
		
		this.emptyCart();
	
	},
	
	checkCoupon: function (button) {
	
		RapidCartUtilities.showLoader(button);
	
		var request = new Request({
		
			url: RapidCartPreferences.generalPath + "/rapidcart/" + RapidCartPreferences.generalCouponChecker
			
		}).send($("rcCartCoupon").toQueryString());
		
		request.addEvent("success", function (response) {
		
			var coupons;
		
			try {
			
				coupons = JSON.decode(response);
				
			}
			
			catch (e) {}
			
			if (coupons != null) {
			
				rc.addCoupons(coupons);
				
			}
			
			else {
			
				RapidCartEffects.requiredField($("rcCouponCode"));
			
			}
		
			/*if (response != "NO") {
				
				rc.addCoupons(JSON.decode(response));
				
			}
			
			else {
			
				RapidCartEffects.requiredField($("rcCouponCode"));
			
			}*/
			
			RapidCartUtilities.hideLoader(button);
		
		});
		
		request.addEvent("failure", function () {
		
			RapidCartUtilities.hideLoader(button);
		
		});
	
	},
	
	addCoupons: function (coupons) {
	
		RapidCartPreferences.coupons = coupons;
		
		this.updateItems();
		this.updateHeader();
	
	},
	
	removeCoupons: function () {
	
		RapidCartPreferences.coupons = [];
		
		this.updateItems();
		this.updateHeader();
	
	},
	
	checkPayment: function () {
	
		var url = document.location.href.split("?");
		
		if (url.length > 1 && url[1].search(RapidCartPreferences.generalConfirmation) != -1) {
		
			this.showThankYou();
		
		}
	
	},
	
	changeOption: function (id, option) {
	
		RapidCartUtilities.updatePrice(id);
		RapidCartUtilities.updateOptions(option);
	
	}

});

document.addEvent("domready", function () {

	if (!$("rcCart")) {
	
		rc = new RapidCart();
		
	}
	
	$$("a[rel=remooz]").each(function (element) {
	
		new ReMooz(element, {
		
			centered: true,
			cutOut: false,
			origin: element.getElement("img"),
			resizeFactor: 0.8,
			opacityResize: 0.5
			
		});
		
	});
	
	$$("select[name=rcItemOptionValue]").each(function (element) {
	
		element.onchange();
	
	});
	
});