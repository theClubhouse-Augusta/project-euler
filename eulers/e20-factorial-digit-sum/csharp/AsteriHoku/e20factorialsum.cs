using System.Numerics;

Console.WriteLine("Hi Mom!");
// TODO: define your number here
// see readme for more info about BigInteger long Int64
BigInteger bigNum = 100;
BigInteger factorial = GetFactorial(bigNum);
int sumOfDigits = SumOfDigits(factorial);
Console.WriteLine($"Sum of digits for {bigNum}! gives answer {sumOfDigits}");

static BigInteger GetFactorial(BigInteger n) {
    if (n == 0 || n == 1)
        return 1;
    return n * GetFactorial(n - 1); // recursion
}

static int SumOfDigits(BigInteger longNum) {
    string numString = longNum.ToString();
    int sum = 0;

    foreach (char digitChar in numString) {
        int digit = int.Parse(digitChar.ToString());
        sum += digit;
    }

    return sum;
}