const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
});


describe('wrap', () => {
  it('Returns entire string in one line if its length is less than the maxLen', () => {
    expect(wrap("short length", 20)).to.equal("short length");
  });
});

describe('wrap', () => {
  it('Returns string with line breaks', () => {
    expect(wrap("This four type str.", 4)).to.equal("This\nfour\ntype\nstr.");
  });
});

describe('wrap', () => {
  it('Returns string with line breaks with in one line if its length is less than the maxLen', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal("Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.");
  });
});
