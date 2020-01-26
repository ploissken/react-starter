const transactionOperations = [
  { type: 'debit', description: 'Padaria Delícias' },
  { type: 'debit', description: 'Supermercado da Esquina' },
  { type: 'debit', description: 'Confraria da Arte' },
  { type: 'debit', description: 'Restaurante Marromenos' },
  { type: 'debit', description: 'Uber "do Brasil"' },
  { type: 'debit', description: 'Bar BarIdade' },
  { type: 'debit', description: 'Café Zen' },
  { type: 'credit', description: 'Depósito Eletrônico BTC*TRADE' }
]



// defines the oldest randomly generated transaction
const daysFromAccountStart = 90

const populateAmount = 30

const config = {
  daysFromAccountStart,
  transactionOperations,
  populateAmount
}

module.exports = config
