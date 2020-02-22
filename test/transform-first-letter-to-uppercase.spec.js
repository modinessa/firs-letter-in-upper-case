const transformFirstLetterToUppercase = require('../src/transform-first-letter-to-uppercase');

describe('transformEveryWordsFirstLetterToUpperCase function', () => {
  it('should return "Passed argument is not a string" when type of passed argumnent is not a "string"', () => {
    expect(transformFirstLetterToUppercase(null)).to.equal(
      'Passed argument is not a string',
    );
  });

  it('should return "Hello" when argument of function "hello"', () => {
    expect(transformFirstLetterToUppercase('hello')).to.equal('Hello');
  });

  it('should return "Text Text Text" when argument of function "text text text"', () => {
    expect(transformFirstLetterToUppercase('text text text')).to.equal(
      'Text Text Text',
    );
  });

  it('should return "The First Task" when argument of function "the first task"', () => {
    expect(transformFirstLetterToUppercase('the first task')).to.equal(
      'The First Task',
    );
  });

  it('should return "This Task Is The First" when argument of function "this task is the first"', () => {
    expect(transformFirstLetterToUppercase('this task is the first')).to.equal(
      'This Task Is The First',
    );
  });

  it('should return "Cucumber Cucumber Cucumber" when argument of function "cucumber cucumber cucumber"', () => {
    expect(
      transformFirstLetterToUppercase('cucumber cucumber cucumber'),
    ).to.equal('Cucumber Cucumber Cucumber');
  });
});
