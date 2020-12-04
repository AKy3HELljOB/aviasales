import {getRequestId, getTickets} from './ticket.jsx'

beforeEach(() => {
    fetch.resetMocks();
  });
  
it("get request id", async () => {
    const responce = {searchId:"4niyd"};
    fetch.mockResponseOnce(JSON.stringify(responce));
    const res = await getRequestId((res) => expect(res).toEqual(responce));
  });
  
it("get tickets", async () => {
    const responce = {tickets: [], stop: false};
    fetch.mockResponseOnce(JSON.stringify(responce));
    const res = await getTickets((res) => expect(res).toEqual(responce));
  });
