using System.Numerics;
// see readme for more info about BigInteger long Int64

// TODO: define your number here (any code should function for a wide range of inputs)
// thus this number should be able to be changed to any number or as many as possible without memory issues
BigInteger bigNum = 100; //this number
BigInteger factorial = GetFactorial(bigNum);
int sumOfDigits = SumOfDigits(factorial);

Console.WriteLine($"SOLUTION: Sum of digits for {bigNum}! gives answer {sumOfDigits}");

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