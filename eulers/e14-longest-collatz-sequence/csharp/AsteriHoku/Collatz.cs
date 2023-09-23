int termsMax = 0;
int startingNum = 0;

for (int i = 984623; i > 1; --i) {
    var t = 0L;
    t = i;
    int termsCount = 1;
    while (t != 1) {
        t = GetNextTerm(t);
        termsCount++;
    }
    
    if (termsCount > termsMax) {
        termsMax = termsCount;
        startingNum = i;
    }
}

long GetNextTerm(long term) {
    if (term % 2 == 0) {
        return term / 2;
    }
    return (3 * term) + 1;
}

Console.WriteLine($"StartingNum was {startingNum} with {termsMax} terms");