const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns empty array if empty array was provided', () => {
    expect(twoSum([], 10)).to.be.empty;
  });
});

describe('twoSum', () => {
  it('Returns empty array if target is greater than all elements added', () => {
    expect(twoSum([1, 2, 3], 10)).to.be.empty;
  });
});

describe('twoSum', () => {
  it('Does not use the element twice', () => {
    expect(twoSum([1, 2, 2], 4)).to.deep.equal([1, 2]);
  });
});

describe('twoSum', () => {
  it('must return two indexes in array', () => {
    expect(twoSum([3, 1, 2], 3)).to.deep.equal([1, 2]);
  });
});


describe('twoSum', () => {
  it('Returns empty array if all elements are even and target is odd or vice versa', () => {
    expect(twoSum([2, 4, 6], 11)).to.deep.equal([]);
  })
  it('Returns empty array if all elements are even and target is odd or vice versa', () => {
    expect(twoSum([1, 3, 5], 10)).to.deep.equal([]);
  });

});

describe('twoSum', () => {
  it('Returns correct indexes if elements can be summed up to target', () => {
    expect(twoSum([1, 2, 3], 5)).to.deep.equal([1, 2]);
  });
});


describe('twoSum', () => {
  it('Returns first satisying indexes if elements can be summed up to target', () => {
    expect(twoSum([1, 2, 1, 2, 3], 3)).to.deep.equal([0, 1]);
  });
});
