function solution(n, wires) {
    var answer = Infinity;
    function createGraph (wires){
        let graph = Array.from({ length: n + 1 }, () => []);
        wires.forEach(([w1,w2])=>{
            graph[w1].push(w2);
            graph[w2].push(w1);
        })
        return graph;
    }
    
    function countNode(graph,start,visited){
       visited[start] = true;
       let count =1;
        graph[start].forEach((next)=>{
          if(!visited[next])
                count += countNode(graph, next,visited);
       })
    return count;
    }
    
    
    wires.forEach(([w1,w2])=>{
        const filteredWires = wires.filter(([v1,v2])=>!(v1===w1 && v2===w2));
        const graph = createGraph(filteredWires,n);
        let visited= Array.from({ length: n + 1 }, () => false);
      
        const nodeCount1 = countNode(graph,w1,visited);
        const nodeCount2 = countNode(graph,w2,visited);
        
        const sub = Math.abs(nodeCount1 - nodeCount2);
        answer = sub < answer ? sub : answer;
    })
    
    
    return answer;
}