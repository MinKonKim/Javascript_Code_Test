#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> citations) {

	int answer = 0;
	sort(citations.begin(), citations.end()); //오름차순 정렬

	for (int i = 0; i < citations.size(); i++)
	{
		int H_idx = citations.size() - i; // 5 4 3 2 1
		if (H_idx <= citations[i])return H_idx;
	}

	return answer;
}

