
export const comparePrice = (a, b) => a.price - b.price;

export const compareDuration = (a, b) => {
  const compareFirst = a.segments[0].duration - b.segments[0].duration;
  const compareSecond = a.segments[1].duration - b.segments[1].duration;
  if (compareFirst + compareSecond === 0)
    return compareFirst;
  return compareFirst + compareSecond;
}

export const filterTickets = (ticket, filterState) => {
  if (filterState.all)
    return true;

  const stopsCount = ticket.segments[0].stops.length + ticket.segments[1].stops.length;
  switch (stopsCount) {
    case 0:
      return filterState.none;
    case 1:
      return filterState.one;
    case 2:
      return filterState.two;
    case 3:
      return filterState.three;
    default:
      return false;
  }
}
