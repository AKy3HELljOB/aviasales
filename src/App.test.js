import React from 'react';
import { render } from '@testing-library/react';
import App, { compareDuration, comparePrice } from './App';

test('App shouldn`t crashed', () => {
  render(<App />);
});

test('sorting by price', () => {
  let tickets = [
    { price: 101},
    { price: 100}];

  let expectation = [
    { price: 100},
    { price: 101}];

  ;
  ;
  expect(tickets.sort(comparePrice)).toEqual(expectation);
})

test('sorting by dyration', () => {
  let tickets = [
    { segments: [{ duration: 1 }, { duration: 2 }]},
    { segments: [{ duration: 1 }, { duration: 1 }]}];

  let expectation = [
    { segments: [{ duration: 1 }, { duration: 1 }]},
    { segments: [{ duration: 1 }, { duration: 2 }]}];

  ;
  expect(tickets.sort(compareDuration)).toEqual(expectation);
})

test('sorting by dyration', () => {
  let tickets = [
    { segments: [{ duration: 1009 }, { duration: 1302 }]},
    { segments: [{ duration: 1008 }, { duration: 1308 }]}];

  let expectation = [
    { segments: [{ duration: 1009 }, { duration: 1302 }]},
    { segments: [{ duration: 1008 }, { duration: 1308 }]}];

  ;
  expect(tickets.sort(compareDuration)).toEqual(expectation);
})

test('sorting by dyration2', () => {
  let tickets = [
    { segments: [{ duration: 1009 }, { duration: 1309 }]},
    { segments: [{ duration: 1008 }, { duration: 1308 }]}];

  let expectation = [
    { segments: [{ duration: 1008 }, { duration: 1308 }]},
    { segments: [{ duration: 1009 }, { duration: 1309 }]}];

  ;
  expect(tickets.sort(compareDuration)).toEqual(expectation);
})
