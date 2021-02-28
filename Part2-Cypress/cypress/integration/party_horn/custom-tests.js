describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  //Test if the image and sound sources change when you select the party 
  //horn radio button

  it('test img and sound sources when party horn is selected', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('test img and sound sources when air horn is selected', () => {
    cy.get('#radio-air-horn').click();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/air-horn.svg');
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/air-horn.mp3');
    });
  });

  it('test img and sound sources when car horn is selected', () => {
    cy.get('#radio-car-horn').click();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/car.svg');
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/car-horn.mp3');
    });
  });

  //Test if the volume image changes when increasing volumes
  //(you must test for all 3 cases)

  it('test if volume image changes when going from 66 to 67', () => {
    cy.get('#volume-slider')
      .invoke('val', 66)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-slider')
      .invoke('val', 67)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('test if volume image changes when going from 33 to 34', () => {
    cy.get('#volume-slider')
      .invoke('val', 33)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-slider')
      .invoke('val', 34)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('test if volume image changes when going from 0 to 1', () => {
    cy.get('#volume-slider')
      .invoke('val', 0)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
    cy.get('#volume-slider')
      .invoke('val', 1)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  //Test if the honk button is disabled when the textbox 
  //input is a empty or a non-number

  it('test if honk is disabled when muted', () => {
    cy.get('#volume-number')
      .invoke('val', 0)
      .trigger('input');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    });
    cy.get('#volume-number')
      .clear
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    });
    cy.get('#volume-number')
      .invoke('val', "Z")
      .trigger('input');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    });
    cy.get('#volume-number')
      .invoke('val', "")
      .trigger('input');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
  });
  });

  //Test if an error is shown when you type 
  //a number outside of the given range for the volume textbox input
  it('test if volume input out of range', () => {
    cy.get('#volume-number')
      .invoke('val', 101)
      .trigger('input');
    cy.get('input:invalid')
      .should('have.length', 1);
    cy.get('#volume-number')
      .then(($input) => {
        expect($input[0].validationMessage).to.eq('Value must be less than or equal to 100.')
      })
  });
    
});



