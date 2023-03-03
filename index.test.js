const { deterministicPartitionKey } = require('./index');

test('test with no event', () => {
  expect(deterministicPartitionKey()).toBe('0');
});

test('test with an event without partitionKey', () => {
  const data = { data: 'data' }
  expect(deterministicPartitionKey(data)).toBe('fb72d0e6112474dce9843c878c284c706a24a9b7dbb5e7d7bde35edcdf54343f9435b027a4b5da140e910820e217c897c45979716bd6832e57a6b31a699cc0ff');
});

describe('test with an event with partitionKey', () => {
  const data = { data: 'data', partitionKey: 'partitionKey' } // string
  test('partitionKey with normal string', () => {
    expect(deterministicPartitionKey(data)).toBe('partitionKey');
  })
  test('partitionKey with number', () => {
    data.partitionKey = 123 // number
    expect(deterministicPartitionKey(data)).toBe('123');
  })
  test('partitionKey with more than 256 chars', () => {
    const longPartitionKey = 'fb72d0e6112474dce9843c878c284c706a24a9b7dbb5e7d7bde35edcdf54343f9435b027a4b5da140e910820e217c897c45979716bd6832e57a6b31a699cc0fffb72d0e6112474dce9843c878c284c706a24a9b7dbb5e7d7bde35edcdf54343f9435b027a4b5da140e910820e217c897c45979716bd6832e57a6b31a699cc0fffb72d0e6112474dce9843c878c284c706a24a9b7dbb5e7d7bde35edcdf54343f9435b027a4b5da140e910820e217c897c45979716bd6832e57a6b31a699cc0ff'
    data.partitionKey = longPartitionKey // long partitionKey with more than 256 chars
    expect(deterministicPartitionKey(data)).toBe('e5799bb6fb1636fc6f14f846d63e5e46593e614cdddcd5ebeb246ce28dbc4829d2f025b03abaab4ed3c0e48c8a76bee6565b4e5e8c7a5521a946b65475090cc1');
  })
});
