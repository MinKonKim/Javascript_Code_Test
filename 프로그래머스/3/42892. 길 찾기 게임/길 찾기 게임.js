/*
        V노드
V보다 작음    V보다 큼
*/
class TreeNode {
    constructor(x,y,value) {
        this.value = value;
        this.level =y;
        this.x = x;
        this.right =null;
        this.left =null;
    }

    addChild(node) { // 현재 노드에 자식 노드 추가하기
        if(this.x < node.x){
            if(!this.right){
                this.right = node;
            }else{
                this.right.addChild(node);
            }
        }else{
            if(!this.left){
                this.left = node;
            }else{
                this.left.addChild(node); 
            }
        }
    }

   // 전위 순회 (Preorder Traversal)
    preorderTraversal(result = []) {
        result.push(this.value); // 현재 노드 방문
        if (this.left) this.left.preorderTraversal(result); // 왼쪽 자식 방문
        if (this.right) this.right.preorderTraversal(result); // 오른쪽 자식 방문
        return result;
    }

    // 후위 순회 (Postorder Traversal)
    postorderTraversal(result = []) {
        if (this.left) this.left.postorderTraversal(result); // 왼쪽 자식 방문
        if (this.right) this.right.postorderTraversal(result); // 오른쪽 자식 방문
        result.push(this.value); // 현재 노드 방문
        return result;
    }
    
}
function solution(nodeinfo) {
    var answer = [];
    let rootNode;
    
    const withIndexNodeinfo = nodeinfo.map(([x,y],index)=>{
        return [x,y,index+1];
    })
    const sortedNodeinfo = withIndexNodeinfo.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0]; 
        }
        return b[1] - a[1]; 
    });
    sortedNodeinfo.forEach(([x,y,value])=>{
        const node = new TreeNode(x,y,value);
        if(!rootNode){
            rootNode= node;
            return;
        }
        rootNode.addChild(node);         
        
    })
    answer.push(rootNode.preorderTraversal());
    answer.push(rootNode.postorderTraversal());
    return answer;
}