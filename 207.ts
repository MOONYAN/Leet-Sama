// https://leetcode.com/problems/course-schedule/
function canFinish(numCourses: number, prerequisites: number[][]): boolean {

    let graph: number[][] = Array(numCourses);

    let inDegree: number[] = Array(numCourses);

    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
        inDegree[i] = 0;
    }

    prerequisites.forEach(([a, b]) => {
        // b depend on a
        graph[b].push(a);
        inDegree[a]++;
    })

    let q: number[] = [];

    inDegree.forEach((degree, idx) => {
        if (degree === 0) {
            q.push(idx);
        }
    })

    for (let i = 0; i < q.length; i++) {
        const course = q[i];
        graph[course].forEach(e => {
            inDegree[e]--;
            if (inDegree[e] == 0) {
                q.push(e);
            }
        });
    }

    return q.length === numCourses;
}