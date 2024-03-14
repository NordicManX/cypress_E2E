/// <reference types="cypress" />

describe('Teste de inclusão na agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir um contato na agenda', () => {
        cy.get('[type="text"]').type('Nelson Carvalho')
        cy.get('[type="email"]').type('nelsonacf@yahoo.com')
        cy.get('[type="tel"]').type('(41)98537-9513')
        cy.get('.adicionar').click()
        
    })

   it('Deve verificar se o contato foi adicionado com sucesso', () => {
        cy.contains('Nelson Carvalho').should('exist');
        cy.contains('nelsonacf@yahoo.com').should('exist');
       cy.contains('(41)98537-9513').should('exist');
       
   })
    
   it('Deve editar um contato na agenda', () => {
       cy.get('.edit').first().contains('Editar').click()
       cy.get('[type="text"]').clear().type('Gian da EBAC')
       cy.contains('Salvar').click()
       cy.contains('Gian da EBAC').should('exist')
})
  
    it('Deve remover um contato existente', () => {
        cy.get('.sc-iAEyYk > :nth-child(2)').first().contains('Deletar').click()
    })
})

