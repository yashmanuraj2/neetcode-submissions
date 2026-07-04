class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
    
const graph = new Map();

  
  for (let [from, to] of tickets) {
    if (!graph.has(from)) graph.set(from, []);
    graph.get(from).push(to);
  }

  console.log("graph",graph)
  for (let [from, destinations] of graph.entries()) {
    destinations.sort().reverse();
  }

  const itinerary = [];

  function dfs(airport) {
    const dests = graph.get(airport) || [];
    while (dests.length > 0) {
      dfs(dests.pop()); 
    }
    itinerary.push(airport);
  }

  dfs("JFK");
  return itinerary.reverse();









}
}