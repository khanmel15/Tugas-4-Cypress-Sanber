describe ('checkout', ()=>{
    it ('checkout_barang', ()=>{
        cy.clearCookies()
        cy.clearAllLocalStorage()
        cy.visit ('https://www.saucedemo.com/')


    })
    it ('login', ()=>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

    })
    it ('add_to_cart',()=>{
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('[data-test="shopping-cart-link"]').click()

        //assertion
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist')
        cy.contains('Sauce Labs Backpack').should('be.visible')
    })
    it ('should display item in cart',()=>{
        cy.get('[data-test="checkout"]').click()  
        //assertion
        cy.get('[data-test="firstName"]').should('be.visible')
        cy.get('[data-test="continue"]').should('be.visible')

    })
    it ('checkout_your_information', ()=>{
        cy.get('[data-test="firstName"]').type('123')
        cy.get('[data-test="lastName"]').type('123')
        cy.get('[data-test="postalCode"]').type('123')
        cy.get('[data-test="continue"]').click()
        //assertion
        cy.get('[data-test="finish"]').should('be.visible')
        cy.url().should('include', '/checkout-step-two.html')
    })  
 
    it('checkout_overview',()=>{
        cy.get('[data-test="finish"]').click()
    })
        
})

describe ('Remove add to cart from order detail',()=>{
    it ('remove_barang', ()=>{
        cy.visit ('https://www.saucedemo.com/')
    })

    it ('login', ()=>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })
    it ('add_to_cart',()=>{
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('[data-test="shopping-cart-link"]').click()

        //assertion
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist')
        cy.contains('Sauce Labs Backpack').should('be.visible')
    })
    it('cart',()=>{
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        //assertion
        cy.get('[data-test="continue-shopping"]').should('exist')
        cy.get('[data-test="checkout"]').should('be.visible')
    })
    it ('your_cart',()=>{
        cy.get('[data-test="continue-shopping"]').click()
    })
})  