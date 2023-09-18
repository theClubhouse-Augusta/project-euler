
int triHead = 10; //track the largest factor for each triangle number to compute next triangle number
int triNum = 55; //starting at the next triangle number than given in the problem
var divisors = 2; // 1 and the number itself will always be factors

while (divisors <= 500) //each loop is to compute divisors for a triangle number, starting at 55
{
    divisors = 2; //reset to 2
    triHead++;
    triNum += triHead;
    int max = triNum / 2; //shrink the search area - starting by dividing in half

    for (int i = 2; i <= max; ++i) {
        if (triNum % i == 0) {
            divisors += 2;
            max = triNum / i; //set max to the factor pair
        }
        if (divisors == 501) {
            break; //solved
        }
    }
}