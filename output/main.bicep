param storageAccountName string

var test = 'Hello, World!'

resource foo 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: storageAccountName
  location: West US
  sku: {
    name: 'Premium_ZRS'
  }
  kind: 'StorageV2'
}
