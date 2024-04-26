#include <string>
#include <vector>

using namespace std;

string solution(string s) {
    string answer = "";
    int idx = 0;

	for (int i = 0; i < s.size(); i++)
	{
		if (idx % 2 == 0 && s[i] >=97 && s[i] <123 )
		{
			s[i] -= 32;
		}
		else if(idx%2!=0 && s[i]<=90 && s[i]>64)
		{
			s[i] += 32;
		}
		
		if(s[i] == ' ')
		{
			idx = -1;
		}
		idx++;
		answer.push_back(s[i]);
	}
    return answer;
}