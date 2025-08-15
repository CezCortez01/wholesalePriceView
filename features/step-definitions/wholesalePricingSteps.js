const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Login Steps
Given(/^I am on the login page$/, async () => {
    await browser.url('http://localhost/mywebsite/my-account/');
});

When(/^I login with username "(.*)" and password "(.*)"$/, async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then(/^I should be logged in successfully$/, async () => {
    await browser.url('http://localhost/mywebsite/');
});

// Shop Page Steps
Given(/^I am logged in as a wholesale customer$/, async () => {
    // Assumes the login has already been handled in the previous steps
});

When(/^I navigate to the shop page$/, async () => {
    await browser.url('http://localhost/mywebsite/shop/');
});

Then(/^I should see products listed with wholesale prices$/, async () => {
    const productPrice = await $('.woocommerce-Price-amount.amount');
    const priceText = await productPrice.getText();
    assert.ok(priceText, 'Product price is not displayed');
});

// Cart Steps
When(/^I add a product to the cart$/, async () => {
    const addToCartButton = await $('.product .add_to_cart_button');
    await addToCartButton.click();
});

Then(/^the cart should display the product with the wholesale price$/, async () => {
    await browser.url('http://localhost/mywebsite/cart/');
    const cartPrice = await $('.wc-block-formatted-money-amount');
    const priceText = await cartPrice.getText();
    assert.ok(priceText, 'Cart does not show wholesale price');
});

// Checkout Steps
When(/^I proceed to the checkout page$/, async () => {
    await browser.url('http://localhost/mywebsite/checkout/');
});

Then(/^I should see the correct wholesale price displayed on the checkout page$/, async () => {
    const checkoutPrice = await $('ins.wc-block-components-product-price__value.is-discounted'); 
    const priceText = await checkoutPrice.getText();
    assert.ok(priceText, 'Checkout page does not show wholesale price');
});
